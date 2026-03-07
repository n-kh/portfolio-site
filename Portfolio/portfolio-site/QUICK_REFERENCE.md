# Portfolio Content Quick Reference

## 📂 Where to Edit

| Content Type | File | Line |
|-------------|------|------|
| Case Studies | `data/case-studies.ts` | ~30 |
| Experience | `data/experience.ts` | ~20 |
| Skills | `data/skills.ts` | ~15 |
| Metrics | `data/metrics.ts` | ~12 |
| Navigation | `components/Navigation.tsx` | ~9 |

---

## 🚀 Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Open in browser
open http://localhost:3000
```

---

## 📝 Add Case Study Template

```typescript
{
  id: 'cs-X',
  slug: "project-name",
  title: "Project Title",
  subtitle: "One-line description",
  category: "AI/ML",
  tags: ["Tag1", "Tag2"],
  heroImage: "/images/case-studies/project-hero.jpg",
  thumbnail: "/images/case-studies/project-thumb.jpg",
  problem: `Problem description...`,
  approach: `Your approach with **markdown**...`,
  solution: `Solution with **markdown**...`,
  impact: [
    { metric: "Metric Name", value: "+50%", description: "Context" }
  ],
  learnings: ["Learning 1", "Learning 2"],
  timeline: "6 months",
  role: "Lead PM",
  teamSize: 10,
  technologies: ["Tech1", "Tech2"]
}
```

---

## 💼 Add Experience Template

```typescript
{
  id: 'exp-X',
  company: "Company Name",
  role: "Role Title",
  period: "Month YYYY - Present",
  location: "City, State",
  description: "Role overview...",
  achievements: [
    "Achievement 1 with metrics",
    "Achievement 2 with impact"
  ],
  technologies: ["Tech1", "Tech2"],
  impact: [
    { metric: "Metric", value: "+30%" }
  ]
}
```

---

## 🛠️ Add Skill Category Template

```typescript
{
  category: "Category Name",
  icon: "🎯",
  skills: [
    {
      name: "Skill Name",
      description: "What you can do",
      level: "Expert"  // Expert | Advanced | Intermediate
    }
  ]
}
```

---

## 📊 Add Metric Template

```typescript
{
  label: "Metric Name",
  value: "10M+",
  description: "Context about this metric",
  icon: "👥"
}
```

---

## 🖼️ Image Guidelines

| Type | Dimensions | Location |
|------|-----------|----------|
| Hero | 1200x600px | `public/images/case-studies/` |
| Thumbnail | 600x400px | `public/images/case-studies/` |
| Format | JPG/PNG | < 500KB per file |

**Naming:** `project-slug-hero.jpg`, `project-slug-thumb.jpg`

**Reference:** `/images/case-studies/project-slug-hero.jpg`

---

## ✅ Pre-Deployment Checklist

- [ ] All data files saved
- [ ] No TypeScript errors
- [ ] Tested with `npm run dev`
- [ ] All pages render correctly
- [ ] All images load
- [ ] Mobile view tested
- [ ] Content proofread
- [ ] Metrics updated

---

## 🐛 Common Issues

| Problem | Solution |
|---------|----------|
| Changes not showing | Save file, refresh browser |
| TypeScript error | Check commas, brackets, quotes |
| Image not loading | Check path starts with `/images/` |
| Build fails | Run `npm run build` to see errors |

---

## 💡 Tips

1. **Always copy existing structure** when adding new content
2. **Use markdown** in problem/approach/solution for formatting
3. **Quantify everything** - add numbers to achievements and impact
4. **Keep slugs unique** - they become URLs
5. **Test locally** before deploying
6. **Update quarterly** - keep content fresh

---

## 📞 Need Help?

- Full guide: See `CONTENT_GUIDE.md`
- Next.js docs: https://nextjs.org/docs
- TypeScript help: https://www.typescriptlang.org/docs/

---

**Remember:** Edit data files only. Don't touch components!
