# 👋 Welcome to My Portfolio

Hey there! This is my personal portfolio where I showcase the projects I've been working on and the skills I've picked up along the way. Built it from scratch with React, TypeScript, and Tailwind CSS – learned a ton while making it look good!

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🎯 What's Inside?

Pretty standard portfolio stuff, but I tried to make it interesting:

- **Hero section** with typing animations (took way longer than it should've, but worth it!)
- **Skills grid** showcasing all the tech I actually use
- **Projects showcase** you can swipe through
- **Contact form** that actually works (powered by EmailJS)
- **Fully responsive** – tested it on my phone a million times

Built with React 19 + TypeScript because I like knowing when I mess up, styled with Tailwind because writing CSS files is exhausting, and animated with Framer Motion to make it less boring.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional UI with warm cream background and orange accents
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- 🎭 **Smooth Animations**: Powered by Framer Motion for engaging user experience
- 🖱️ **Interactive Elements**: Cursor-responsive floating tech icons, drag-to-navigate project cards
- 🧭 **Smart Navigation**: Fixed navbar with active section detection and smooth scrolling
- 🎯 **SEO Optimized**: Includes sitemap.xml and robots.txt for better search engine visibility
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and optimized builds

## 🛠️ Tech Stack

**Frontend:**
- **React 19.2.0** - Modern UI library with hooks and concurrent features
- **TypeScript 5.9.3** - Type-safe JavaScript for catching errors early
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **Framer Motion 12.23.24** - Production-ready animation library
- **GSAP 3.13.0** - Professional-grade animation library
- **EmailJS 3.2.0** - Email service integration for the contact form

**Development Tools:**
- **Vite 7.1.12** - Next-generation frontend tooling (super fast!)
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS transformations

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/shubhamrajput27/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser** and visit `http://localhost:5174`

That's it! You should see the portfolio running locally.

### Environment Variables (Optional)

If you want the contact form to work, you'll need EmailJS credentials. Create a `.env` file in the root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Sign up at [EmailJS](https://www.emailjs.com/) to get these for free. Don't worry, it's quick!

## 📦 Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder. Want to test it locally first?

```bash
npm run preview
```

## 🌐 Deployment

I use Vercel – it's the easiest way to deploy:

1. Visit [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project" → Import your repository
3. Click "Deploy" – that's it!

Your site will be live in about 2 minutes. Every time you push to `main`, it auto-deploys.

**Need to add environment variables?**
Go to Project Settings → Environment Variables in Vercel and add your EmailJS credentials.

## 📁 Project Structure

```
Portfolio/
├── public/              # Static files (favicon, resume, etc.)
├── src/
│   ├── components/      # All React components
│   ├── data/            # Portfolio content (Data.ts)
│   ├── hooks/           # Custom hooks
│   └── lib/             # Utility functions
├── index.html
└── package.json
```

## 🎨 Customization

Want to make this portfolio your own? Here's where to look:

### Theme Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#ff6f10',    // Orange accent (change this!)
  cream: '#fff7f0',      // Background
  peach: '#ffd8c5',      // Secondary
  muted: '#3a3a3a',      // Text
}
```

### Content
- **Projects**: Update `src/components/Projects/Projects.tsx`
- **Skills**: Modify `src/components/Skills/SkillsGrid.tsx`
- **About Me**: Edit `src/data/Data.ts` and `src/components/About/`
- **Experience**: Change `src/components/Experience/Experience.tsx`

Most content is pretty self-explanatory if you open the files. Just update the text and you're good to go!

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Sign up at [EmailJS](https://www.emailjs.com/) (it's free)
2. Create an email service and template
3. Get your Service ID, Template ID, and Public Key
4. Add them to your `.env` file or hosting platform's environment variables

**Important:** Don't commit your `.env` file – it's already in `.gitignore`!

## 🤝 Contributing

Contributions are welcome! Fork the repo, make your changes, and open a pull request.

## 🐛 Troubleshooting

### Common Issues:

**Build fails with TypeScript errors?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Vite dev server won't start?**
```bash
# Port 5174 might be in use
# Kill the process or change port in vite.config.ts
```

**EmailJS not working?**
- Double-check your API credentials
- Verify environment variables are set correctly
- Make sure your EmailJS service is active
- Check browser console for errors

**Something else broken?**
- Try `npm run build` to see if it's a build issue
- Check the browser console for errors
- Open an issue on GitHub if you're stuck!

## 👨‍💻 About Me

I'm **Shubham Singh**, a developer who loves building things for the web. When I'm not coding, I'm probably debugging something that worked perfectly yesterday 😅

**Let's Connect:**
- 🐙 GitHub: [@shubhamrajput27](https://github.com/shubhamrajput27)
- 💼 LinkedIn: [Shubham Singh](https://www.linkedin.com/in/shubham-singh-a96623290/)
- 📸 Instagram: [@shubh_rajput.27](https://www.instagram.com/shubh_rajput.27)
- 📧 Email: shubhamrajput2702@gmail.com

## 📝 License

This project is open source and available under the [MIT License](LICENSE). 

**TL;DR:** Do whatever you want with it! Just don't blame me if something breaks 😄

## 🌟 Like What You See?

If you found this helpful or just think it looks cool:
- ⭐ **Star this repo** – it makes my day and motivates me to build more cool stuff
- 🍴 **Fork it** and make it your own
- 📣 **Share it** with friends who might need a portfolio

## 💬 Final Thoughts

Building this portfolio was a journey. I learned a ton about React, TypeScript, animations, and what it takes to build something polished from scratch. If you're using this as a starting point for your own portfolio, I'd love to see what you create!

Feel free to reach out if you have questions, suggestions, or just want to chat about web development. I'm always happy to help!

---

**Built with React, TypeScript, Tailwind, and way too much coffee ☕**

*Happy coding! 🚀*
