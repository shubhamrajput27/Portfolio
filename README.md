# 🚀 Modern Dynamic Personal Portfolio

A stunning, responsive personal portfolio website built with modern web technologies, featuring smooth animations, dark mode support, and professional design.

## ✨ Features

- **🎨 Modern Design**: Clean, professional layout with smooth animations and transitions
- **🌓 Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **📱 Fully Responsive**: Optimized for all devices - mobile, tablet, and desktop
- **⚡ High Performance**: Built with Next.js 15 and optimized for speed
- **🎯 Interactive Elements**: Hover effects, animations, and dynamic content
- **📧 Contact Form**: Integrated contact form with validation
- **💼 Skills Showcase**: Professional tech stack display with Devicon-standard icons
- **🎭 Project Portfolio**: Showcase of projects with detailed information and live demos

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React features and improvements
- **Next.js 15** - Full-stack React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Icons & Assets
- **Devicon** - Professional development technology icons
- **Custom SVG Icons** - Handcrafted icon components
- **Responsive Images** - Optimized image loading

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

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

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your portfolio

### Build for Production

```bash
npm run build
npm run start
```

## 📂 Project Structure

```
├── components/          # Reusable React components
│   ├── icons/          # SVG icon components
│   │   └── tech/       # Technology stack icons
│   ├── Navbar.tsx      # Navigation component
│   ├── Section.tsx     # Section wrapper component
│   └── ...
├── sections/           # Page sections
│   ├── Hero.tsx        # Hero/landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Experience.tsx  # Work experience
│   ├── Education.tsx   # Education background
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer section
├── data/              # Static data and content
├── types.ts           # TypeScript type definitions
├── constants.ts       # App constants
└── ...
```

## 🎨 Customization

### Updating Content
- Edit personal information in `constants.ts`
- Modify skills in the Skills section data
- Update projects in the Projects section
- Customize colors and themes in `tailwind.config.js`

### Adding New Skills
1. Add new icons to `components/icons/tech/`
2. Update the icon mapping in `components/SkillIcon.tsx`
3. Add skill data to your skills array

### Styling
- Colors and themes: `tailwind.config.js`
- Global styles: `app/globals.css`
- Component-specific styles: Use Tailwind classes

## 🌟 Key Sections

- **Hero**: Animated introduction with call-to-action
- **About**: Personal introduction and background
- **Skills**: Interactive tech stack with hover effects and proficiency levels
- **Projects**: Portfolio showcase with live demos and GitHub links
- **Experience**: Professional work history
- **Education**: Academic background
- **Contact**: Contact form and social links

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Upload build folder or connect GitHub
- **GitHub Pages**: Use GitHub Actions for deployment
- **Railway**: Direct deployment from GitHub

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shubhamrajput27/Portfolio/issues).

## 📧 Contact

**Shubham Rajput**
- Portfolio: [Your Portfolio URL]
- GitHub: [@shubhamrajput27](https://github.com/shubhamrajput27)
- LinkedIn: [Your LinkedIn]
- Email: [Your Email]

---

⭐ Don't forget to give the project a star if you found it helpful!
