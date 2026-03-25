# Portfolio Redesign - Pending Steps

## Current Status
✅ **Tasks 1-17 Complete** (55% done - 17/32 tasks)

**Last Completed:** Task 17 - Case Studies Album View on Homepage
**Branch:** `feature/substack-integration`
**Last Commit:** a6beeeb - "refactor: extract album section to client component, remove duplicate"

---

## Foundation Complete ✅
- Design system (colors, typography, animations)
- Progressive disclosure system with context provider
- Layout components (GeometricBackground, About, Hero)
- Data structures (achievements, case studies with 4 full tracks)
- Album view on homepage with case study cards

---

## Remaining Tasks (18-32)

### Phase 6: Individual Case Study Pages

#### Task 18: Loading Quest Component
**Files:** Create `components/LoadingQuest.tsx`

Create loading screen animation that appears when opening a case study:
- Props: `trackNumber: number`, `title: string`
- Fixed full-screen overlay with spinning geometric pattern
- "LOADING QUEST..." text with track number
- Animated progress bar (0% to 100% over 1.5s)
- Uses midnight background, neon-cyan accents
- Framer Motion: initial/animate/exit for fade transitions

**Code snippet in plan:** Lines 1958-2026

---

#### Task 19: Case Study Page Template
**Files:** Modify `app/case-studies/[slug]/page.tsx`

Create the full case study page template:
- Use `'use client'` directive (requires Framer Motion)
- Loading state with LoadingQuest component (1.5s delay)
- Progressive disclosure integration (viewQuest, addAchievement)
- Achievement unlock animation after 2s delay
- Sections:
  - Back button to album
  - Header (track number, difficulty, title, subtitle)
  - Context card (product, company, role, timeline, team)
  - Quest Briefing (problem section)
  - Strategy Phase (approach section)
  - Battle Phase (solution section)
  - Loot & XP (impact metrics in grid)
  - Post-Quest Debrief (learnings + theme connection)
  - Achievement Unlock (animated card with icon, XP)
  - Navigation (Previous/Next track links)
- All content from case studies data structure
- Scroll animations with whileInView

**Code snippet in plan:** Lines 2030-2356

---

### Phase 7: Skills & Experience

#### Task 20: Skills Showcase Component
**Files:** Modify `components/SkillsShowcase.tsx`

Redesign skills section with character sheet theme:
- "YOUR CHARACTER SHEET" heading
- 6 skill categories with levels and mastery stars
  - AI/ML Strategy (Lv 9, 3 stars)
  - UX Design (Lv 8, 2 stars)
  - Marketing DNA (Lv 8, 2 stars)
  - Technical Collaboration (Lv 8, 2 stars)
  - Data Literacy (Lv 7, 2 stars)
  - Product Strategy (Lv 9, 3 stars)
- Each card shows: level, mastery (⚡ stars), skill tags
- Hover effects (y: -4, shadow-glow)
- "View Full Skill Tree" button opens modal
- Grid: 1 col mobile, 2 cols tablet, 3 cols desktop

**Code snippet in plan:** Lines 2362-2503

---

#### Task 21: Skill Tree Modal
**Files:** Create `components/SkillTreeModal.tsx`

Full character sheet modal overlay:
- Props: `isOpen: boolean`, `onClose: () => void`
- Progressive disclosure integration (openSkillTree on open)
- Sections:
  - Core Attributes with progress bars (Intelligence: 85, Empathy: 95, Technical: 80, Leadership: 75, Creativity: 82)
  - Specializations (Primary Class: AI UX Visionary, Subclass: Marketing Strategist, Expertise: Customer-Centric AI)
  - Signature Moves (4 key capabilities)
  - Tools & Tech (Languages, Frameworks, Tools, Platforms)
- Full-screen overlay with backdrop blur
- Slide-in animation from right
- Close button (X) in top-right

**Code snippet in plan:** Lines 2507-2707

---

#### Task 22: Experience Timeline Component
**Files:**
- Modify `data/experience.ts`
- Modify `components/Timeline.tsx`

Update timeline with quest log theme:
- **Data structure changes:**
  - Add: `level`, `mainQuest`, `achievements[]`, `skillsAcquired[]`, `caseStudyLink?`
  - Each experience is a completed quest with level and rewards
- **Timeline component:**
  - "QUEST LOG" heading
  - Vertical timeline with center line (desktop only)
  - Year nodes as circular badges on timeline
  - Quest cards alternate left/right on desktop
  - Each card shows: level, title, company, duration, main quest, achievements (🏆), skills acquired (tags), optional case study link
  - Stagger animations

**Code snippet in plan:** Lines 2710-2919

---

### Phase 8: Navigation & Contact

#### Task 23: Progressive Navigation Component
**Files:** Modify `components/Navigation.tsx`

Navigation that appears on scroll with progress tracking:
- Fixed top navigation (appears after 100px scroll)
- Appears with slide-down animation
- Logo: "NK" in neon-cyan
- Nav items: About, Case Studies, Skills, Experience, Contact
- Progress percentage: "{completionPercent}%" based on quests viewed
- Rotating vinyl icon (rotation based on scroll position)
- Sticky backdrop blur effect
- Desktop only nav links (mobile hamburger could be future enhancement)

**Code snippet in plan:** Lines 2923-3028

---

#### Task 24: Contact Form Component
**Files:** Create `components/ContactForm.tsx`

Modal contact form with Netlify Forms integration:
- Props: `isOpen: boolean`, `onClose: () => void`
- Form fields:
  - Name * (text, required)
  - Email * (email, required)
  - Company (text, optional)
  - Message * (textarea, required)
  - Reason (radio: job, consulting, connect, other)
- Netlify Forms attributes: `name="contact"`, `method="POST"`, `data-netlify="true"`
- Success state: animated celebration with "Message Sent!" and 3s auto-close
- Loading state during submission
- Modal with backdrop blur
- Slide-in animation from right

**Code snippet in plan:** Lines 3032-3277

---

#### Task 25: Contact Page
**Files:** Modify `app/contact/page.tsx`

"Final boss encounter" themed contact page:
- Use `'use client'` directive
- Progressive disclosure: reachContact() on mount
- "FINAL BOSS ENCOUNTER" heading
- Quote: "The best products are built through collaboration..."
- Primary CTAs (2-column grid):
  - Schedule a Call (Calendly link - needs your actual link)
  - Send Message (opens ContactForm modal)
- Secondary options card:
  - LinkedIn link (needs your actual link)
  - Email link (needs your actual email)
  - Download Resume link
- Current status: "🟢 Open to opportunities"
- ContactForm modal integrated

**Code snippet in plan:** Lines 3281-3443

---

#### Task 26: Footer Component
**Files:** Modify `components/Footer.tsx`

Album credits themed footer:
- Server component (no 'use client' needed)
- Album credits section:
  - Decorative border lines (════)
  - Album title: "User<>AI" with current year
  - Producer: Nimit Khurana
  - Recorded at: Salesforce, Previous Companies
  - Special thanks message
- Technical credits:
  - "Built with Next.js, Framer Motion, & music"
  - Copyright notice
- Easter egg link: "🎵 Hidden Track?" → `/the-hidden-track`

**Code snippet in plan:** Lines 3447-3515

---

### Phase 9: Easter Eggs & Polish

#### Task 27: Hidden Track Easter Egg Page
**Files:** Create `app/the-hidden-track/page.tsx`

Secret page accessible from footer:
- Client component with Framer Motion
- Centered layout with spring animation (scale + rotate entry)
- Large musical note emoji (🎵)
- "THE HIDDEN TRACK" heading
- Behind-the-scenes content:
  - Design philosophy (breaking PM portfolio mold)
  - Aesthetic inspiration (Pink Floyd, Porcupine Tree, Dungeon Crawler Carl)
  - Progressive disclosure explanation
  - Case study narrative approach
- Back to Main Album button
- Reward for exploration (fits progressive disclosure theme)

**Code snippet in plan:** Lines 3521-3599

---

### Phase 10: Testing & Deployment

#### Task 28: Create Placeholder Images
**Files:** Create `public/images/case-studies/` directory

Setup image directory structure:
```bash
mkdir -p public/images/case-studies
touch public/images/case-studies/.gitkeep
```

Note: Code already handles missing images gracefully with emoji placeholders. Can add real images later (track-01.jpg through track-04.jpg).

**Code snippet in plan:** Lines 3605-3631

---

#### Task 29: Build & Test Production
**No files modified - testing only**

Comprehensive testing checklist:

**Build Test:**
```bash
npm run build
npm start
```
Visit http://localhost:3000

**Route Testing:**
- Home page: `/`
- Case studies: `/case-studies/what-they-asked-for`, `/case-studies/from-ghost-town-to-gold`, `/case-studies/multi-dimensional`, `/case-studies/every-user-their-own-universe`
- Contact: `/contact`
- Hidden track: `/the-hidden-track`

**Progressive Disclosure Testing:**
- State 0: Initial load
- State 1: Scroll past hero (patterns intensify)
- State 2: Click case study (loading animation)
- State 3: View 2+ case studies (deep engagement)
- State 4: Visit contact (completion)

**Responsive Testing:**
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

**Code snippet in plan:** Lines 3635-3679

---

#### Task 30: Deploy to Netlify
**Files:** Create `netlify.toml`

Deployment configuration:
- Build command: `npm run build`
- Publish directory: `.next`
- Next.js plugin: `@netlify/plugin-nextjs`
- Node version: 18

**Deployment Steps:**
1. Create netlify.toml with config
2. Connect repository to Netlify dashboard
3. Configure build settings (auto-detected)
4. Deploy site
5. Optional: Configure custom domain
6. Verify Netlify Forms are working
7. Test all functionality in production

**Code snippet in plan:** Lines 3682-3739

---

#### Task 31: Final QA Checklist
**No files - testing checklist**

Comprehensive quality assurance:

**Accessibility:**
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] Screen reader testing

**Performance:**
- [ ] Lighthouse audit (90+ all categories)
- [ ] Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Images optimized
- [ ] Bundle size reasonable

**SEO:**
- [ ] Meta tags on all pages
- [ ] OpenGraph images configured
- [ ] Sitemap accessible
- [ ] robots.txt allows indexing

**Functionality:**
- [ ] All internal links work
- [ ] External links open in new tab
- [ ] Contact form submits
- [ ] Progressive disclosure triggers correctly
- [ ] Animations respect prefers-reduced-motion

**Browser Testing:**
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

**Content:**
- [ ] Proofread all case studies
- [ ] Verify metrics are accurate
- [ ] Check achievements unlock
- [ ] Test achievement notifications

**Code snippet in plan:** Lines 3741-3784

---

#### Task 32: Launch & Announce
**No files - launch checklist**

Final launch activities:

**Step 1: Final Commit**
```bash
git add -A
git commit -m "chore: final polish before launch"
git push origin main
```

**Step 2: Verify Production**
- Visit live site
- Test key user journeys
- Confirm everything works

**Step 3: Analytics Setup**
- Add Google Analytics 4 tracking
- Verify events tracking

**Step 4: LinkedIn Announcement**
Draft post highlighting:
- Unique aesthetic (prog-rock/LitRPG)
- "Listening Transforms Everything" theme
- Invitation to explore case studies

**Step 5: Soft Launch**
- Share with 3-5 PM friends for feedback
- Make adjustments based on feedback

**Step 6: Public Launch**
- Post on LinkedIn
- Share in relevant communities
- Update resume with portfolio link

**Code snippet in plan:** Lines 3787-3827

---

## Implementation Summary

**Completed (17/32):**
- Phase 1: Foundation & Design System ✅
- Phase 2: Progressive Disclosure System ✅
- Phase 3: Core Layout Components ✅
- Phase 4: Data Structures ✅
- Phase 5: Homepage Sections ✅ (partial - through Task 17)

**Remaining (15/32):**
- Phase 6: Individual Case Study Pages (Tasks 18-19)
- Phase 7: Skills & Experience (Tasks 20-22)
- Phase 8: Navigation & Contact (Tasks 23-26)
- Phase 9: Easter Eggs & Polish (Task 27)
- Phase 10: Testing & Deployment (Tasks 28-32)

**Estimated Time Remaining:** 2-3 weeks at 10-15 hours/week

**Full Plan Location:**
`docs/superpowers/plans/2026-03-24-portfolio-redesign.md`

---

## How to Resume

1. **Pull latest changes:**
   ```bash
   git pull origin feature/substack-integration
   ```

2. **Start with Task 18:**
   - Read full task details in plan (lines 1953-2026)
   - Create LoadingQuest component
   - Follow TDD approach: implement → test → commit

3. **Use Subagent-Driven Development:**
   - Dispatch implementer subagent per task
   - Spec review → Code quality review
   - Mark tasks complete in sequence

4. **Test incrementally:**
   - Run `npm run dev` after each task
   - Verify functionality before moving to next task
   - Keep commits small and focused

---

## Key Architecture Decisions Made

1. **Progressive Disclosure:** Global context provider tracks user engagement across 5 states (0-4)
2. **Server/Client Split:** Page components stay as server components, interactive sections extracted to client components
3. **Animation Strategy:** Framer Motion for all animations, stagger patterns for lists
4. **Data Structure:** Case studies positioned as album tracks with full narrative content
5. **Design Tokens:** Custom Tailwind colors (electric-indigo, neon-cyan, amber-gold, hot-pink, etc.)
6. **Typography:** Righteous (display), Outfit (body), JetBrains Mono (mono)

---

## Notes for Future Development

- **Images:** Currently using emoji placeholders; add real images to `public/images/case-studies/`
- **Links:** Update placeholder links in Contact page (Calendly, LinkedIn, email)
- **Content:** All 4 case studies have full content; can refine based on feedback
- **Accessibility:** Consider adding keyboard navigation to modals and skip links
- **Performance:** Monitor bundle size as more components are added; consider code splitting if needed

---

**Questions?** Refer to the full implementation plan at:
`docs/superpowers/plans/2026-03-24-portfolio-redesign.md`
