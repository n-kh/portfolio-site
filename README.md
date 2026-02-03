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

## Customization

### 1. Personal Information

Update the following files with your information:

- `data/case-studies.ts` - Your product case studies
- `data/experience.ts` - Your work experience
- `data/skills.ts` - Your skills and expertise
- `data/metrics.ts` - Your impact metrics

### 2. Contact Information

Update contact details in:
- `components/Footer.tsx` - Social links and email
- `app/contact/page.tsx` - Contact form and links

### 3. Resume

Replace `public/resume.pdf` with your actual resume

### 4. Styling

Customize colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#3B82F6', // Your brand color
  accent: '#10B981',  // Your accent color
  // ...
}
```

### 5. Metadata

Update SEO metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - AI Product Manager',
  description: 'Your description',
  // ...
}
```

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
