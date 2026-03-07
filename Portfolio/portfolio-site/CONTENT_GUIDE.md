# Portfolio Site Self-Service Content Guide

## Overview

Your portfolio site is built with **Next.js 14 + TypeScript** and uses a **data-driven architecture**. All content is centralized in TypeScript data files in the `/data` directory. This means you can update content by simply editing these files—no need to touch components or UI code.

**Key Principle:** Content (data files) is completely separated from Presentation (components).

---

## 🎯 Quick Start: Where to Edit

| What You Want to Add | File to Edit |
|---------------------|--------------|
| New case study/project | `data/case-studies.ts` |
| Job experience | `data/experience.ts` |
| Skills & expertise | `data/skills.ts` |
| Career metrics | `data/metrics.ts` |

---

## 📁 1. Adding New Case Studies/Projects

**File:** `data/case-studies.ts`

### Step-by-Step:

1. Open `data/case-studies.ts`
2. Find the `caseStudiesData` array (around line 30)
3. Add a new object to the array following this structure:

```typescript
{
  id: 'cs-4',  // Increment from last ID
  slug: "my-new-project",  // URL-friendly name (lowercase, hyphens)
  title: "My Awesome Project",
  subtitle: "Short one-line description",
  category: "AI/ML",  // or "B2B SaaS", "Consumer Product", etc.

  // Tags for filtering/categorization
  tags: ["AI/ML", "B2B", "Analytics"],

  // Images (place in public/images/case-studies/ first)
  heroImage: "/images/case-studies/project-hero.jpg",
  thumbnail: "/images/case-studies/project-thumb.jpg",

  // Problem statement (plain text)
  problem: `Users were struggling to discover relevant content in a catalog of 100K+ items. Manual curation wasn't scalable, and generic trending lists had low click-through rates (2.3%). Customer surveys showed 68% of users felt overwhelmed by choices, leading to decision paralysis and churn.`,

  // Your approach (plain text with markdown)
  approach: `I led a cross-functional initiative to build a personalized recommendation system:

1. **Data Strategy**: Collaborated with data science to identify key signals (views, clicks, purchases, ratings, session duration)
2. **ML Approach**: Evaluated collaborative filtering vs content-based vs hybrid approaches
3. **User Research**: Conducted 25 interviews to understand discovery patterns and preferences
4. **Experimentation Framework**: Designed A/B tests with clear success metrics (CTR, engagement time, conversion)
5. **Phased Rollout**: Started with 5% traffic, scaled to 100% after validation`,

  // The solution (plain text with markdown)
  solution: `Built a hybrid recommendation system combining collaborative filtering and content-based approaches:

**Phase 1 - MVP (3 months)**
- Implemented collaborative filtering using user-item interactions
- Created "You Might Like" section on homepage
- Built real-time inference API with <100ms latency

**Phase 2 - Enhancement (2 months)**
- Added content-based features (categories, attributes, descriptions)
- Implemented contextual recommendations (time of day, device, location)
- Created personalized email campaigns

**Phase 3 - Optimization (ongoing)**
- A/B tested different model architectures
- Added explanations ("Because you liked X")
- Implemented diversity constraints to avoid filter bubbles`,

  // Impact metrics - array of results
  impact: [
    {
      metric: "Click-Through Rate",
      value: "+187%",
      description: "From 2.3% to 6.6% on recommended items"
    },
    {
      metric: "User Engagement",
      value: "+45%",
      description: "Average session duration increased from 8 to 11.6 minutes"
    },
    {
      metric: "Revenue Impact",
      value: "$12M",
      description: "Incremental annual revenue from personalized recommendations"
    }
  ],

  // Key learnings - array of insights
  learnings: [
    "Cold start problem was harder than expected - invested in hybrid approach combining popularity with content similarity",
    "Explainability matters - adding 'Why this?' increased trust and CTR by 15%",
    "Diversity vs relevance tradeoff required careful tuning - users wanted some serendipity",
    "Real-time vs batch predictions - chose batch with 15-min refresh for cost optimization",
    "Model monitoring essential - set up alerts for CTR drops, coverage issues, and latency spikes"
  ],

  // Project metadata
  timeline: "6 months (MVP to production)",
  role: "Lead Product Manager",
  teamSize: 12,

  // Technologies used
  technologies: ["Python", "TensorFlow", "React", "AWS Sagemaker", "Redis"]
}
```

4. **Save the file**
5. The new case study will automatically appear on:
   - Homepage case studies section
   - `/case-studies` listing page
   - `/case-studies/my-new-project` detail page

### Tips:
- **Slug must be unique** and URL-friendly (lowercase, hyphens only)
- Use markdown formatting in problem/approach/solution for rich text
- Add 2-5 impact metrics (most compelling results)
- Include 3-5 key learnings
- Place images in `public/images/case-studies/` before referencing them
- Copy an existing case study structure as a template

---

## 💼 2. Adding/Updating Work Experience

**File:** `data/experience.ts`

### Step-by-Step:

1. Open `data/experience.ts`
2. Find the `experienceData` array (around line 20)
3. Add a new job entry or modify existing ones:

```typescript
{
  id: 'exp-4',  // Increment from last ID
  company: "Company Name",
  role: "Senior Product Manager",
  period: "Jan 2024 - Present",
  location: "San Francisco, CA",

  // Overview paragraph
  description: "Brief overview of your role and responsibilities. What were you responsible for?",

  // Achievement bullets
  achievements: [
    "Led development of X feature that resulted in Y impact",
    "Managed cross-functional team of Z people",
    "Launched product that achieved X metric",
    "Drove $5M in incremental revenue through product optimization",
    "Established new processes that improved team velocity by 30%"
  ],

  // Tech stack you worked with
  technologies: ["Python", "Salesforce", "Tableau", "Jira", "SQL"],

  // Key metrics for this role
  impact: [
    {
      metric: "Revenue Growth",
      value: "+30%"
    },
    {
      metric: "User Engagement",
      value: "+45%"
    }
  ]
}
```

4. **Save the file**
5. Updates appear on the About page Timeline section

### Tips:
- List jobs in **reverse chronological order** (newest first)
- Keep achievement bullets **action-oriented** (start with verbs: "Led", "Built", "Increased")
- Quantify impact where possible (percentages, user counts, revenue)
- Include 3-5 key achievements per role
- Period format: "Month YYYY - Month YYYY" or "Month YYYY - Present"

---

## 🛠️ 3. Adding/Updating Skills

**File:** `data/skills.ts`

### Two Main Sections to Edit:

#### A. Skills Data (Categorized Expertise)

1. Open `data/skills.ts`
2. Find `skillsData` array (around line 15)
3. Add a new category or modify existing:

```typescript
{
  category: "Your Skill Category",
  icon: "🎯",  // Any emoji that represents this category
  skills: [
    {
      name: "Specific Skill Name",
      description: "Brief description of your proficiency",
      level: "Expert"  // Options: "Expert", "Advanced", "Intermediate"
    },
    {
      name: "Another Skill",
      description: "What you can do with this skill",
      level: "Advanced"
    }
  ]
}
```

#### B. Frameworks (PM Methodologies)

Around line 208, find the `frameworks` array:

```typescript
export const frameworks = [
  "RICE Prioritization",
  "OKRs",
  "Jobs to be Done (JTBD)",
  "Your New Framework"  // Add here
];
```

#### C. Tools (Software & Platforms)

Around line 224, find the `tools` object and add to categories:

```typescript
export const tools = {
  analytics: ["Google Analytics", "Mixpanel", "Your Tool"],
  dataScience: ["Python", "Jupyter", "Your Tool"],
  aiMl: ["TensorFlow", "OpenAI API", "Your Tool"],
  productManagement: ["Jira", "Asana", "Your Tool"],
  collaboration: ["Slack", "Figma", "Your Tool"]
};
```

4. **Save the file**
5. Updates appear on:
   - Homepage Skills Showcase
   - About page

### Tips:
- Use **emojis** that visually represent categories (🤖 for AI, 📊 for analytics, etc.)
- Be honest about skill levels:
  - **Expert**: Deep expertise, can mentor others
  - **Advanced**: Proficient, can work independently
  - **Intermediate**: Working knowledge, can complete tasks with guidance
- Group related skills into logical categories
- Keep skill descriptions concise (1 sentence)

---

## 📊 4. Updating Career Metrics

**File:** `data/metrics.ts`

### Step-by-Step:

1. Open `data/metrics.ts`
2. Find the `metricsData` array (around line 12)
3. Modify values or add new metrics:

```typescript
{
  label: "Users Impacted",
  value: "2M+",  // Keep it concise and impressive
  description: "Across all products and features",
  icon: "👥"  // Emoji representing this metric
}
```

4. **Save the file**
5. Updates appear on Homepage Metrics Dashboard

### Current Metrics (feel free to modify):
- Users Impacted
- Products Launched
- Revenue Impact
- Teams Led
- ML Models Deployed
- Years Experience

### Tips:
- Use **round numbers** for impact (5M+ not 5,234,567)
- Keep metric **labels short** (2-3 words max)
- Add **context** in description
- Choose **relevant emojis** (👥 users, 💰 revenue, 🚀 launches)
- Order metrics by **importance** (most impressive first)
- Aim for 4-6 total metrics (too many dilutes impact)

---

## 🖼️ 5. Adding Images

### For Case Studies:

1. Create subdirectory if it doesn't exist: `public/images/case-studies/`
2. Place images in `public/images/case-studies/`
3. Recommended naming: `project-name-hero.jpg` and `project-name-thumb.jpg`
4. Reference in case study data: `/images/case-studies/project-name-hero.jpg`

### Image Guidelines:
- **Hero images**: 1200x600px (16:9 ratio recommended)
- **Thumbnails**: 600x400px (3:2 ratio recommended)
- **Format**: PNG or JPG (WebP for best performance)
- **Size**: Keep under 500KB per image (compress if needed)
- **Alt text**: Automatically generated from case study title

### Creating the images directory:
```bash
mkdir -p public/images/case-studies
```

---

## 🚀 6. Testing Your Changes

### Development Mode (Live Preview):

1. Open Terminal in the portfolio site directory
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open browser to `http://localhost:3000`
4. Changes auto-refresh as you edit data files

### What to Check:

**Homepage:**
- [ ] Metrics display correctly
- [ ] Skills showcase shows your updates
- [ ] Case study cards appear with correct thumbnails

**Case Studies Page (`/case-studies`):**
- [ ] All case studies listed
- [ ] Thumbnails and titles correct
- [ ] Click through to detail pages

**Case Study Detail Page (`/case-studies/[slug]`):**
- [ ] Problem, Approach, Solution sections render properly
- [ ] Impact metrics display
- [ ] Learnings list appears
- [ ] Hero image loads
- [ ] Markdown formatting looks good

**About Page (`/about`):**
- [ ] Timeline shows all jobs
- [ ] Achievements render as bullets
- [ ] Skills categories display
- [ ] Tools and frameworks appear

**Contact Page (`/contact`):**
- [ ] Still renders correctly (no content changes needed here)

---

## 📋 7. Common Workflows

### Adding a New Project End-to-End:

1. **Gather content**: Write problem, approach, solution, impact metrics
2. **Prepare images**: Create/compress hero and thumbnail images
3. **Add images**: Copy to `public/images/case-studies/`
4. **Edit data**: Add case study object to `data/case-studies.ts`
5. **Choose slug**: Create URL-friendly slug (e.g., "ai-recommendation-engine")
6. **Test locally**: Run `npm run dev` and verify everything looks good
7. **Commit**: Save your changes to git

### Updating Your Experience:

1. **Edit data**: Open `data/experience.ts`
2. **Update role**: Modify existing entry or add new job
3. **Quantify impact**: Add specific metrics to achievements
4. **Test**: Check About page timeline
5. **Update metrics**: If needed, update career metrics in `metrics.ts`

### Quarterly Skill Updates:

1. **Review skills**: Identify new skills learned
2. **Add to categories**: Update `data/skills.ts` with new skills
3. **Update tools**: Add new software/platforms to tools list
4. **Adjust levels**: Promote skills from Intermediate → Advanced → Expert as you grow
5. **Test**: Verify Skills Showcase renders correctly

---

## 🎨 8. Customization Beyond Content

### Changing Colors (Tailwind Config):

**File:** `tailwind.config.ts`

Current theme uses Tailwind's default color palette. To customize:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',  // Blue
      accent: '#10B981',   // Green
      // Add custom colors here
    }
  }
}
```

### Modifying Navigation:

**File:** `components/Navigation.tsx`

Add/remove navigation links around line 9:
```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/your-page', label: 'Your New Page' }  // Add here
];
```

### Adding New Pages:

1. Create folder in `app/`: `app/blog/`
2. Add `page.tsx` inside: `app/blog/page.tsx`
3. Follow existing page structure from other pages
4. Add navigation link in `components/Navigation.tsx`

---

## ⚡ 9. Quick Reference: File Locations

```
portfolio-site/
├── data/
│   ├── case-studies.ts      ← Add projects here
│   ├── experience.ts         ← Update jobs here
│   ├── skills.ts             ← Modify skills here
│   └── metrics.ts            ← Change metrics here
├── public/
│   ├── images/
│   │   └── case-studies/     ← Place project images here
│   └── resume.pdf            ← Your resume file
├── components/
│   └── Navigation.tsx        ← Add nav links here
├── tailwind.config.ts        ← Change colors here
└── app/                      ← Add new pages here
```

---

## 🐛 10. Troubleshooting

### Problem: Changes don't appear on site
- **Solution**: Save file and refresh browser (dev server auto-reloads)
- Check Terminal for TypeScript errors

### Problem: TypeScript errors
- **Solution**: Ensure object structure matches the interface
- Check for missing commas, quotes, or brackets
- Copy from existing working examples

### Problem: Images don't load
- **Solution**: Verify images are in `public/images/case-studies/`
- Check file path starts with `/images/` (not `public/images/`)
- Ensure image file names match exactly (case-sensitive)

### Problem: Markdown not rendering
- **Solution**: Ensure strings use backticks (`) for multiline content
- Check for unescaped special characters
- Review existing case studies for examples

### Problem: New case study not appearing
- **Solution**: Verify slug is unique
- Check object has all required fields
- Restart dev server (`Ctrl+C` then `npm run dev`)

---

## ✅ 11. Pre-Deployment Checklist

Before deploying changes:

- [ ] All data files saved
- [ ] No TypeScript errors in Terminal
- [ ] Tested locally with `npm run dev`
- [ ] All pages render correctly
- [ ] All links work
- [ ] All images load
- [ ] Mobile view looks good (resize browser)
- [ ] Content proofread (typos, grammar)
- [ ] Metrics are up to date
- [ ] Case studies have compelling impact

---

## 🚀 12. Deployment

Your portfolio uses Next.js. When ready to deploy:

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel (recommended)
# 1. Push to GitHub
# 2. Import project on vercel.com
# 3. Auto-deploys on every push to main branch
```

For automated deployment:
- Push changes to GitHub
- Connect repository to Vercel
- Vercel auto-deploys on every push to main branch

---

## 📚 Resources

### Learning Next.js:
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Design Tools:
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

### Image Optimization:
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Image optimization tool

---

## 🎯 Summary

**The key takeaway:** All your portfolio content lives in simple TypeScript files in the `/data` directory. To add or update content:

1. **Identify what to add** (case study, experience, skill, metric)
2. **Open the corresponding data file** (case-studies.ts, experience.ts, etc.)
3. **Add/modify the data** following the existing structure
4. **Save and test** locally with `npm run dev`
5. **Deploy** when satisfied

No need to touch React components, styling, or complex code—just edit the data files like filling out a form!

**Next Steps:**
1. Start with adding one case study to get comfortable
2. Update your experience section with latest role
3. Quarterly: Review and update skills, metrics, and achievements

You've got this! 🎉
