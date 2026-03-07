# Product Manager Portfolio Website

A modern, AI/ML-focused portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎯 **Hero Section** with compelling value proposition
- 📊 **Metrics Dashboard** showcasing quantifiable impact
- 📝 **Case Studies** with Problem-Approach-Solution-Impact framework
- 💼 **Interactive Timeline** of professional experience
- 🛠️ **Skills Showcase** emphasizing AI/ML PM expertise
- 📱 **Fully Responsive** design for all devices
- ⚡ **Performance Optimized** with Next.js 14 App Router
- 🎨 **Smooth Animations** using Framer Motion

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Documentation

This portfolio uses a **data-driven architecture** that separates content from code. You can update your portfolio content by simply editing data files—no need to touch components or UI code!

### Quick Links

- **[📘 Content Guide](CONTENT_GUIDE.md)** - Complete guide to updating your portfolio content
- **[⚡ Quick Reference](QUICK_REFERENCE.md)** - Cheat sheet for common tasks
- **[📝 Examples](EXAMPLES.md)** - Copy-paste templates and examples

### What Can You Update?

| Content Type | File | Documentation |
|-------------|------|---------------|
| Case Studies/Projects | `data/case-studies.ts` | See [Content Guide](CONTENT_GUIDE.md#1-adding-new-case-studiesprojects) |
| Work Experience | `data/experience.ts` | See [Content Guide](CONTENT_GUIDE.md#2-addingupdating-work-experience) |
| Skills & Expertise | `data/skills.ts` | See [Content Guide](CONTENT_GUIDE.md#3-addingupdating-skills) |
| Career Metrics | `data/metrics.ts` | See [Content Guide](CONTENT_GUIDE.md#4-updating-career-metrics) |

### First Time Setup

1. **Update Personal Information** - Edit data files with your content
2. **Add Images** - Place project images in `public/images/case-studies/`
3. **Replace Resume** - Update `public/resume.pdf` with your resume
4. **Update Contact Info** - Edit `components/Footer.tsx` and `app/contact/page.tsx`
5. **Customize Colors** - Modify `tailwind.config.ts` for your brand colors
6. **Update Metadata** - Edit SEO info in `app/layout.tsx`

### Need Help?

- **New to editing?** Start with [Content Guide](CONTENT_GUIDE.md)
- **Want quick answers?** Check [Quick Reference](QUICK_REFERENCE.md)
- **Looking for templates?** Browse [Examples](EXAMPLES.md)

## Project Structure

```
portfolio-site/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Home page
│   ├── case-studies/        # Case studies pages
│   ├── about/               # About page
│   └── contact/             # Contact page
├── components/              # React components
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── CaseStudyCard.tsx
│   ├── Timeline.tsx
│   ├── SkillsShowcase.tsx
│   ├── MetricsDashboard.tsx
│   └── Footer.tsx
├── data/                    # Data files
│   ├── case-studies.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── metrics.ts
├── lib/                     # Utility functions
│   └── utils.ts
└── public/                  # Static assets
    ├── images/
    └── resume.pdf
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Add your custom domain in Vercel settings

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Docker

Build for production:
```bash
npm run build
npm start
```

## Performance

This site is optimized for Core Web Vitals:
- ⚡ Fast page loads with Next.js optimizations
- 🖼️ Optimized images with next/image
- 📦 Code splitting and lazy loading
- 🎯 SEO-friendly with metadata API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have questions or need help customizing the portfolio:
- Open an issue on GitHub
- Contact: nimit.khurana@gmail.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
