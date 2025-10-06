import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import type { ChatMessage } from '../types';
import { userProfile, skillCategories, projects, experiences, education } from '../data/mockData';

import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';

// This is an example of how to use markdown-it in a browser environment.
declare var markdownit: any;

const personalities = {
  friendly: {
    label: 'Friendly',
    instruction: "You are a helpful and friendly AI assistant for Shubham's personal portfolio website. Your goal is to answer questions from visitors based on the following information about Shubham. Be conversational and engaging. Use markdown for formatting like lists, bold text, etc., where appropriate. Do not make up information that is not present in the provided data. If you don't know the answer, say that you don't have that information.",
  },
  formal: {
    label: 'Formal',
    instruction: "You are a professional AI assistant representing Shubham's portfolio. Your purpose is to provide clear and accurate information to visitors based on the provided data. Please maintain a formal tone. Do not make up information. If a query cannot be answered from the provided data, state that the information is unavailable.",
  },
  concise: {
    label: 'Concise',
    instruction: "You are an efficient AI assistant for Shubham's portfolio. Answer questions directly and to the point. Use bullet points for lists. Do not add conversational filler. Base all answers strictly on the provided data. If the information isn't available, say so.",
  },
};
type Personality = keyof typeof personalities;


const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const [selectedPersonality, setSelectedPersonality] = useState<Personality>('friendly');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const md = new markdownit();

  useEffect(() => {
    const initializeChat = () => {
        try {
            if (!process.env.API_KEY) {
                console.warn("API_KEY environment variable not set. Chatbot will be disabled.");
                setChat(null);
                return;
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const portfolioData = {
                userProfile,
                skillCategories,
                projects,
                experiences,
                education
            };

            const personalityInstruction = personalities[selectedPersonality].instruction;
            const systemInstruction = `${personalityInstruction} Here is Shubham's portfolio data in JSON format: \n\n${JSON.stringify(portfolioData, null, 2)}`;
            
            const newChat = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: { systemInstruction },
            });
            setChat(newChat);
            setMessages([{ sender: 'ai', text: `Hello! I'm Shubham's AI assistant. Feel free to ask me anything about his skills, projects, or experience.` }]);

        } catch (error) {
            console.error("Failed to initialize Gemini AI:", error);
            setChat(null);
        }
    };

    initializeChat();
  }, [selectedPersonality]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    setMessages(prev => [...prev, { sender: 'ai', text: '' }]);

    try {
      const responseStream = await chat.sendMessageStream({ message: input });

      for await (const chunk of responseStream) {
        const chunkText = chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.sender === 'ai') {
            lastMessage.text += chunkText;
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
       setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.sender === 'ai') {
            lastMessage.text = 'Sorry, I encountered an error. Please try again.';
          }
          return newMessages;
       });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePersonalityChange = (personality: Personality) => {
    setSelectedPersonality(personality);
  };
  
  if (!chat) {
    return null; 
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-accent dark:bg-dark-accent text-primary dark:text-dark-primary p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 animate-pop-in"
        aria-label="Open AI assistant"
      >
        <ChatIcon className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
          <div className="flex flex-col bg-primary dark:bg-dark-primary rounded-lg shadow-2xl w-full max-w-lg h-full max-h-[700px] m-4">
            <div className="flex justify-between items-center p-4 border-b border-secondary dark:border-dark-secondary">
              <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">AI Assistant</h3>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <label htmlFor="personality-select" className="sr-only">Chat Personality</label>
                  <select
                    id="personality-select"
                    value={selectedPersonality}
                    onChange={(e) => handlePersonalityChange(e.target.value as Personality)}
                    className="bg-secondary dark:bg-dark-secondary text-sm rounded-md py-1 pl-2 pr-7 border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent appearance-none cursor-pointer"
                    aria-label="Select chatbot personality"
                  >
                    {Object.entries(personalities).map(([key, { label }]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary dark:text-dark-text-secondary">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1 rounded-full text-text-secondary dark:text-dark-text-secondary hover:bg-secondary dark:hover:bg-dark-secondary" aria-label="Close chat">
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex-grow p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-sm md:max-w-md p-3 rounded-lg ${
                        msg.sender === 'user'
                          ? 'bg-accent dark:bg-dark-accent text-white'
                          : 'bg-secondary dark:bg-dark-secondary text-text-primary dark:text-dark-text-primary'
                      }`}
                    >
                      {msg.sender === 'ai' && msg.text === '' && isLoading && index === messages.length - 1 ? (
                          <div className="flex items-center justify-center space-x-1 p-1">
                              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></span>
                              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                          </div>
                      ) : (
                        <div
                          className="prose prose-sm dark:prose-invert max-w-none"
                          dangerouslySetInnerHTML={{ __html: md.render(msg.text) }}
                        />
                      )}
                    </div>
                  </div>
                ))}
                 <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t border-secondary dark:border-dark-secondary">
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-grow bg-secondary dark:bg-dark-secondary border border-slate-300 dark:border-slate-600 rounded-md py-2 px-3 text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent"
                  disabled={isLoading}
                  aria-label="Chat input"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-accent dark:bg-dark-accent text-primary dark:text-dark-primary p-2 rounded-full disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <SendIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;