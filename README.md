# 👋 My Portfolio My Portfolio



Hey! This is my personal portfolio where I show off what I've been working on. Built it with React, TypeScript, and Tailwind CSS – basically learned a ton while making it look good.Hey! This is my personal portfolio where I show off what I've been working on. Built it with React, TypeScript, and Tailwind CSS – basically learned a ton while making it look good.



![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## What's in here?![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)



Pretty standard portfolio stuff but I tried to make it interesting:## What's in here?

- Hero section with typing animations (took way longer than it should've)

- My skills in a grid – all the tech I actually usePretty standard portfolio stuff but I tried to make it interesting:

- Projects you can swipe through- Hero section with typing animations (took way longer than it should've)

- Contact form that works (powered by EmailJS)- My skills in a grid – all the tech I actually use

- Everything's responsive, tested it on my phone a million times- Projects you can swipe through

- Contact form that works (powered by EmailJS)

Built with React 19 + TypeScript because I like knowing when I mess up, styled with Tailwind because writing CSS files is exhausting, and animated with Framer Motion to make it less boring.- Everything's responsive, tested it on my phone a million times



## 🚀 Running it locallyBuilt with React 19 + TypeScript because I like knowing when I mess up, styled with Tailwind because writing CSS files is exhausting, and animated with Framer Motion to make it less boring.



```bash### 🖥️ Desktop View

# Grab the code

git clone https://github.com/shubhamrajput27/Portfolio.git## Tech Stack![Desktop Hero Section](./screenshots/desktop-hero.png)

cd Portfolio

*Hero section with animated typing and floating tech icons*

# Install dependencies

npm install**Frontend:**



# Fire it up- React 19 with TypeScript![Desktop Projects](./screenshots/desktop-projects.png)

npm run dev

```- Tailwind CSS for styling*Interactive project cards with drag navigation*



Opens at `http://localhost:5174` – should load pretty quick thanks to Vite.- Framer Motion for animations



## 🛠 What I used- EmailJS for the contact form![Desktop Skills](./screenshots/desktop-skills.png)



**Main stuff:***Skills grid with technology logos*

- React 19 – latest and greatest

- TypeScript – because JavaScript alone scares me**Tools:**

- Tailwind CSS – never writing a CSS file again

- Framer Motion – makes things move smoothly- Vite for fast development

- EmailJS – handles the contact form

- ESLint to keep code clean> **Note**: Add your actual screenshots in a `screenshots` folder at the root of the project

**Dev tools:**

- Vite – crazy fast build tool- Vercel for deployment

- ESLint – keeps my code from looking terrible

## ✨ Features

## 📦 Building for production

## Quick Start

```bash

npm run build- 🎨 **Modern Design**: Clean, professional UI with warm cream background and orange accents

```

Get it running locally:- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop

Creates a `dist` folder with everything optimized. You can test it locally:

- 🎭 **Smooth Animations**: Powered by Framer Motion for engaging user experience

```bash

npm run preview```bash- 🖱️ **Interactive Elements**: Cursor-responsive floating tech icons, drag-to-navigate project cards

```

# Clone it- 🧭 **Smart Navigation**: Fixed navbar with active section detection and smooth scrolling

## 🌐 Deploying

git clone https://github.com/shubhamrajput27/Portfolio.git- 🎯 **SEO Optimized**: Includes sitemap.xml and robots.txt for better search engine visibility

### Vercel (easiest)

cd Portfolio- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and optimized builds

I use Vercel – literally just:

1. Push code to GitHub

2. Import repo on vercel.com

3. Click deploy# Install stuff## 🛠️ Tech Stack

4. Done

npm install

Auto-deploys every time you push to main. Pretty neat.

### Frontend

### Other options

# Run it- **React 19.2.0** - Modern UI library with hooks and concurrent features

Works on Netlify, GitHub Pages, or anywhere that serves static files. Just point them at the `dist` folder after building.

npm run dev- **TypeScript 5.9.3** - Type-safe JavaScript

## 📧 Setting up the contact form

```- **Tailwind CSS 4.1.16** - Utility-first CSS framework

The contact form uses EmailJS (it's free!):

- **Framer Motion 12.23.24** - Production-ready animation library

1. Sign up at [emailjs.com](https://www.emailjs.com/)

2. Add an email service (I use Gmail)Open `http://localhost:5174` and you're good to go.- **GSAP 3.13.0** - Professional-grade animation library

3. Create a template with these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

4. Grab your Service ID, Template ID, and Public Key- **EmailJS 3.2.0** - Email service integration

5. Create a `.env` file:

## Building for Production

```env

VITE_EMAILJS_SERVICE_ID=your_service_id### Development Tools

VITE_EMAILJS_TEMPLATE_ID=your_template_id

VITE_EMAILJS_PUBLIC_KEY=your_public_key```bash- **Vite 7.1.12** - Next-generation frontend tooling

```

npm run build- **ESLint** - Code linting and quality checks

If deploying to Vercel, add these as environment variables in your project settings.

```- **PostCSS** - CSS transformations

## 🎨 Making it yours



Want to customize it?

Creates an optimized build in the `dist` folder. Preview it locally with:### Components Overview

- **Colors**: Edit `tailwind.config.js` – I went with orange (#ff6f10) but pick whatever

- **Projects**: Update `src/components/Projects/Projects.tsx`- **Hero Section**: Dynamic typing animation with floating parallax tech icons

- **Skills**: Change `src/components/Skills/SkillsGrid.tsx`

- **About**: Most content is in `src/data/Data.ts` and component files```bash- **Skills Section**: Grid of 22 tech skills with authentic SVG logos



## 📁 Project structurenpm run preview- **Projects Section**: Sliding stack cards with drag navigation



``````- **About Section**: Profile card with social links

Portfolio/

├── public/              # Favicon, robots.txt, sitemap- **Timeline**: Professional journey visualization

├── src/

│   ├── components/      # All the React components## Deployment- **Contact Form**: EmailJS integration for direct communication

│   ├── hooks/           # Custom hooks I made

│   ├── data/            # Project content

│   └── lib/             # Utility functions

├── index.html### Vercel (easiest way)## 🚀 Getting Started

└── package.json

```



## 🐛 Common issues1. Push your code to GitHub### Prerequisites



**Port already in use?**2. Go to [vercel.com](https://vercel.com) and import your repo- Node.js (v18 or higher)

Kill whatever's on 5174 or change the port in `vite.config.ts`

3. Click deploy - that's it- npm or yarn

**EmailJS not working?**

Double-check your credentials and make sure the service is active



**Build failing?**Vercel auto-deploys when you push to main.### Installation

Try deleting `node_modules` and `package-lock.json`, then `npm install` again



## 📱 Browser support

### Other Options1. Clone the repository

Works on modern browsers – Chrome, Firefox, Safari, Edge. Mobile too (iOS Safari, Chrome Mobile).

```bash

## 👨‍💻 About me

Works with Netlify, GitHub Pages, or any static hosting. Just point it to the `dist` folder after building.git clone https://github.com/shubhamrajput27/Portfolio.git

**Shubham Singh**

cd Portfolio

- GitHub: [@shubhamrajput27](https://github.com/shubhamrajput27)

- LinkedIn: [shubham-singh-a96623290](https://www.linkedin.com/in/shubham-singh-a96623290/)## Environment Variables```

- Instagram: [@shubh_rajput.27](https://www.instagram.com/shubh_rajput.27)



## 📝 License

If you want the contact form to work, you'll need EmailJS credentials:2. Install dependencies

MIT – do whatever you want with it

```bash

---

```envnpm install

Built with React, TypeScript, and way too much coffee ☕

VITE_EMAILJS_SERVICE_ID=your_service_id```

VITE_EMAILJS_TEMPLATE_ID=your_template_id

VITE_EMAILJS_PUBLIC_KEY=your_public_key3. Start the development server

``````bash

npm run dev

Create a `.env` file in the root (it's already in .gitignore). Sign up at [EmailJS](https://www.emailjs.com/) to get these.```



## Project Structure4. Open your browser and visit `http://localhost:5174`



```## 📦 Build for Production

Portfolio/

├── public/              # Static filesBuild the project for production deployment:

├── src/

│   ├── components/      # React components```bash

│   ├── hooks/           # Custom hooksnpm run build

│   ├── data/            # Project data```

│   └── lib/             # Utilities

├── index.htmlThe optimized production build will be created in the `dist` folder with:

└── package.json- ✅ Minified and optimized JavaScript bundles

```- ✅ CSS optimization and purging

- ✅ Asset optimization and compression

## Customization- ✅ Source maps for debugging



Want to make it yours?### Preview Production Build Locally

```bash

- **Colors**: Edit `tailwind.config.js` - change the orange (#ff6f10) to whatever you likenpm run preview

- **Projects**: Update `src/components/Projects/Projects.tsx````

- **Skills**: Modify `src/components/Skills/SkillsGrid.tsx`

- **Content**: Most text is in the component files, easy to find and changeThis will serve your production build locally at `http://localhost:4173` for testing before deployment.



## Contact Form Setup## 🌐 Deployment



1. Go to [EmailJS](https://www.emailjs.com/) and create an accountThis project is configured and ready to deploy on multiple platforms. The repository includes a `vercel.json` configuration file for seamless Vercel deployment.

2. Add an email service (Gmail works fine)

3. Create a template with these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`### 🚀 Deploy to Vercel (Recommended)

4. Copy your service ID, template ID, and public key

5. Add them to your `.env` file#### Method 1: Vercel Dashboard

6. For deployment, add them to Vercel's environment variables1. Visit [vercel.com](https://vercel.com) and sign up with GitHub

2. Click "Add New Project" → Import your GitHub repository

## License3. Vercel will auto-detect the configuration:

   - **Framework**: Vite

MIT - do what you want with it   - **Build Command**: `npm run build`

   - **Output Directory**: `dist`

## Author4. Click "Deploy" and your site will be live in ~2 minutes!

5. Get your live URL: `https://your-portfolio.vercel.app`

**Shubham Singh**

- GitHub: [@shubhamrajput27](https://github.com/shubhamrajput27)#### Method 2: Vercel CLI

- Email: shubhamrajput2702@gmail.com```bash

# Install Vercel CLI globally

---npm install -g vercel



Built with React and caffeine ☕# Login to your Vercel account

vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

#### Automatic Deployments
- ✅ Every push to `main` branch auto-deploys to production
- ✅ Pull requests get preview deployments automatically
- ✅ Environment variables can be set in Project Settings

### 🔷 Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --prod
```

Or use Netlify's dashboard to connect your GitHub repository.

### 📄 Deploy to GitHub Pages
1. Install gh-pages package:
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

### ⚙️ Environment Variables
If you're using EmailJS or other services requiring API keys:
1. In Vercel: Go to Project Settings → Environment Variables
2. Add your variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Redeploy for changes to take effect

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg          # Custom "SS" favicon
│   ├── robots.txt           # Search engine directives
│   └── sitemap.xml          # SEO sitemap
├── src/
│   ├── components/
│   │   ├── About/           # About section components
│   │   ├── Contact/         # Contact form
│   │   ├── Hero/            # Hero section with floating tech
│   │   ├── Navbar/          # Navigation bar
│   │   ├── Projects/        # Projects showcase
│   │   ├── Skills/          # Skills grid with SVG icons
│   │   └── Timeline/        # Timeline component
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.tsx             # App entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#ff6f10',    // Orange accent
  cream: '#fff7f0',      // Background
  peach: '#ffd8c5',      // Secondary
  muted: '#3a3a3a',      // Text
}
```

### Skills Section
Update skills in `src/components/Skills/SkillsGrid.tsx` to add or modify technologies.

### Projects
Modify project data in `src/components/Projects/Projects.tsx` to showcase your work.

## 📧 Contact Form Setup

The portfolio includes a functional contact form powered by EmailJS.

### Setup Instructions:
1. **Create EmailJS Account**
   - Visit [EmailJS](https://www.emailjs.com/) and sign up for free
   - Verify your email address

2. **Create Email Service**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup wizard

3. **Create Email Template**
   - Go to Email Templates → Create New Template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Message subject
     - `{{message}}` - Message content

4. **Get Your Credentials**
   - Service ID from Email Services
   - Template ID from Email Templates
   - Public Key from Account → API Keys

5. **Update Configuration**
   - Add your credentials in `src/components/Contact/ContactForm.tsx`
   - Or use environment variables (recommended for production)

### Environment Variables (Recommended):
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update `ContactForm.tsx`:
```typescript
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

**⚠️ Important**: Add `.env` to `.gitignore` and configure environment variables in your hosting platform (Vercel/Netlify).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues & Troubleshooting

### Common Issues:

**Build Fails with TypeScript Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Vite Dev Server Won't Start**
```bash
# Check if port 5174 is in use
# Kill the process or change port in vite.config.ts
```

**EmailJS Not Working**
- Verify your API credentials are correct
- Check environment variables are set properly
- Ensure EmailJS service is active

## 🚀 Performance

- ⚡ **Lighthouse Score**: 95+ Performance
- 📊 **First Contentful Paint**: < 1.5s
- 🎯 **Time to Interactive**: < 3s
- 📦 **Bundle Size**: Optimized with code splitting

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 👨‍💻 About Me

I'm **Shubham Singh**, a developer who loves building things for the web. When I'm not coding, I'm probably debugging something that worked perfectly yesterday 😅

- 🐙 GitHub: [@shubhamrajput27](https://github.com/shubhamrajput27)
- 💼 LinkedIn: [shubham-singh](https://www.linkedin.com/in/shubham-singh-a96623290/)
- 📸 Instagram: [@shubh_rajput.27](https://www.instagram.com/shubh_rajput.27)
- 📧 Email: shubhamrajput2702@gmail.com

## 📝 License

This project is MIT licensed – basically, do whatever you want with it! Just don't blame me if something breaks 😄

## 🌟 Like What You See?

If you found this helpful or just think it looks cool, drop a ⭐️ on the repo! It makes my day and motivates me to build more cool stuff.

---

**Built with React, TypeScript, and way too much coffee ☕**

*P.S. - If you end up using this as a template for your own portfolio, I'd love to see it! Send me a link, I'm always curious to see what people create.*
