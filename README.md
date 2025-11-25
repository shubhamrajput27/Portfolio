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

The optimized production build will be created in the `dist` folder with:
- ✅ Minified and optimized JavaScript bundles
- ✅ CSS optimization and purging
- ✅ Asset optimization and compression
- ✅ Source maps for debugging

### Preview Production Build

Want to test the production build locally before deploying?

```bash
npm run preview
```

This will serve your production build at `http://localhost:4173`

## 🌐 Deployment

This project is ready to deploy on multiple platforms. I use Vercel, but you've got options!

### 🚀 Deploy to Vercel (Recommended & Easiest)

#### Method 1: Vercel Dashboard (No Code Required)
1. Visit [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project" → Import your GitHub repository
3. Vercel auto-detects everything (Vite, build command, output directory)
4. Click "Deploy" and grab some coffee – you'll be live in ~2 minutes!
5. Get your live URL: `https://your-portfolio.vercel.app`

#### Method 2: Vercel CLI (For the Terminal Fans)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your account
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

**Bonus:** Every push to `main` auto-deploys to production. Pretty neat!

### 🔷 Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --prod
```

Or use Netlify's dashboard to connect your GitHub repo (similar to Vercel).

### 📄 Deploy to GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"homepage": "https://shubhamrajput27.github.io/Portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

### ⚙️ Environment Variables on Hosting Platforms

If you're using EmailJS or other services requiring API keys:

**For Vercel:**
1. Go to Project Settings → Environment Variables
2. Add your variables (`VITE_EMAILJS_SERVICE_ID`, etc.)
3. Redeploy for changes to take effect

**For Netlify:**
1. Go to Site Settings → Build & Deploy → Environment
2. Add your variables
3. Trigger a new deploy

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg          # Custom "SS" favicon
│   ├── robots.txt           # Search engine directives
│   ├── sitemap.xml          # SEO sitemap
│   └── *.pdf, *.jpg         # Resume and certificates
├── src/
│   ├── components/
│   │   ├── About/           # About section components
│   │   ├── Achievement/     # Achievements & certifications
│   │   ├── Contact/         # Contact form with EmailJS
│   │   ├── Education/       # Educational background
│   │   ├── Experience/      # Work experience timeline
│   │   ├── Hero/            # Hero section with floating tech
│   │   ├── Navbar/          # Navigation bar
│   │   ├── Projects/        # Projects showcase
│   │   ├── Skills/          # Skills grid with SVG icons
│   │   ├── Timeline/        # Timeline component
│   │   └── ui/              # Reusable UI components
│   ├── data/
│   │   └── Data.ts          # Portfolio content and data
│   ├── hooks/
│   │   └── useScrollAnimation.ts  # Custom scroll hook
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.tsx             # App entry point
├── index.html
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── vercel.json              # Vercel deployment config
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

The portfolio includes a functional contact form powered by EmailJS. Here's how to set it up:

### Step-by-Step Setup:

1. **Create EmailJS Account**
   - Visit [EmailJS](https://www.emailjs.com/) and sign up (it's free!)
   - Verify your email

2. **Add Email Service**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup wizard (super easy)

3. **Create Email Template**
   - Go to Email Templates → Create New Template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Message subject
     - `{{message}}` - Message content

4. **Get Your Credentials**
   - Copy Service ID from Email Services
   - Copy Template ID from Email Templates
   - Copy Public Key from Account → API Keys

5. **Add to Your Project**
   - Create `.env` file and add your credentials
   - Or update them directly in `src/components/Contact/ContactForm.tsx`
   - For deployment, add them as environment variables in Vercel/Netlify

**⚠️ Important:** Never commit your `.env` file (it's already in `.gitignore`)!

## 🤝 Contributing

Found a bug? Have an idea for improvement? Contributions are welcome!

### How to Contribute:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

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

## 🚀 Performance

The portfolio is optimized for performance:
- ⚡ **Lighthouse Score**: 95+ Performance
- 📊 **First Contentful Paint**: < 1.5s
- 🎯 **Time to Interactive**: < 3s
- 📦 **Bundle Size**: Optimized with code splitting and lazy loading

## 📱 Browser Support

Works great on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

Basically, if it's made in the last 2 years, you're good!

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
