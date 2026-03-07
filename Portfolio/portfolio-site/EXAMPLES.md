# Content Examples & Templates

This file provides complete, copy-paste ready examples for adding content to your portfolio.

---

## 📁 Example 1: Adding a New Case Study

Let's add a case study for a "Mobile App Redesign" project.

### Step 1: Prepare Your Images

Place these files in `public/images/case-studies/`:
- `mobile-redesign-hero.jpg` (1200x600px)
- `mobile-redesign-thumb.jpg` (600x400px)

### Step 2: Add to `data/case-studies.ts`

Open `data/case-studies.ts` and add this object to the `caseStudiesData` array:

```typescript
{
  id: 'cs-4',
  slug: "mobile-app-redesign",
  title: "Mobile App Redesign",
  subtitle: "Increasing user retention by 40% through improved UX",
  category: "Consumer Product",
  tags: ["Mobile", "UX Design", "B2C", "Growth"],
  heroImage: "/images/case-studies/mobile-redesign-hero.jpg",
  thumbnail: "/images/case-studies/mobile-redesign-thumb.jpg",
  problem: `Our mobile app had a 65% day-1 churn rate and users spent an average of only 3 minutes per session. User research revealed confusion with navigation, frustration with slow load times, and difficulty finding core features. App store ratings had dropped to 2.8 stars, with most negative reviews citing poor usability.`,
  approach: `I led a comprehensive redesign initiative:

1. **User Research**: Conducted 50 user interviews and analyzed 10,000+ app sessions
2. **Usability Testing**: Ran moderated tests with 30 users to identify pain points
3. **Competitive Analysis**: Benchmarked against top 10 competitors in the space
4. **Information Architecture**: Restructured navigation based on user mental models
5. **Iterative Design**: Created prototypes, tested with users, refined based on feedback
6. **Phased Rollout**: Released to 10% of users first, measured impact, then scaled`,
  solution: `Shipped a complete redesign with focus on simplicity and speed:

**Navigation Overhaul**
- Reduced main menu from 9 items to 5 core actions
- Implemented bottom navigation for thumb-friendly mobile use
- Added contextual help and onboarding for new users

**Performance Optimization**
- Reduced initial load time from 4.5s to 1.2s
- Implemented lazy loading for images
- Optimized API calls and caching strategy

**Visual Refresh**
- Modern, clean design language
- Improved contrast and accessibility
- Consistent component library`,
  impact: [
    {
      metric: "Day-1 Retention",
      value: "+40%",
      description: "Churn rate decreased from 65% to 39%"
    },
    {
      metric: "Session Duration",
      value: "+115%",
      description: "Average session increased from 3 to 6.5 minutes"
    },
    {
      metric: "App Store Rating",
      value: "4.6 ⭐",
      description: "Improved from 2.8 to 4.6 stars"
    },
    {
      metric: "Feature Discovery",
      value: "+85%",
      description: "Users finding and using core features"
    },
    {
      metric: "User Satisfaction",
      value: "+52%",
      description: "NPS score improved from 18 to 48"
    }
  ],
  learnings: [
    "Users wanted simplicity over features - removed 40% of rarely-used features",
    "Performance matters more than aesthetics - 1 second faster = 10% higher retention",
    "Onboarding is crucial - users who completed tutorial had 3x retention",
    "Accessibility improvements benefited all users, not just those with disabilities",
    "Iterative releases reduced risk - caught issues early in 10% rollout phase"
  ],
  timeline: "4 months (research to launch)",
  role: "Lead Product Manager",
  teamSize: 8,
  technologies: [
    "React Native",
    "Redux",
    "Figma",
    "Hotjar",
    "Firebase",
    "Google Analytics"
  ]
}
```

### Step 3: Test

```bash
npm run dev
# Visit http://localhost:3000/case-studies/mobile-app-redesign
```

---

## 💼 Example 2: Adding a New Job Experience

Let's add experience at "Salesforce" as a "Senior PM - Einstein AI".

### Add to `data/experience.ts`

Open `data/experience.ts` and add this to the `experienceData` array:

```typescript
{
  id: 'exp-4',
  company: "Salesforce",
  role: "Senior Product Manager - Einstein AI",
  period: "Mar 2024 - Present",
  location: "San Francisco, CA",
  description: "Leading AI product strategy for Einstein platform serving 150K+ enterprise customers. Responsible for recommendation engine, predictive analytics, and generative AI features.",
  achievements: [
    "Launched Einstein Recommendations increasing sales conversion by 28% for enterprise customers",
    "Led integration of GPT-4 into Salesforce platform, serving 50K+ daily active users",
    "Built predictive lead scoring model improving sales team efficiency by 35%",
    "Managed cross-functional team of 15 engineers, data scientists, and designers across 3 time zones",
    "Drove $18M in new ARR through AI-powered features in Q1 2024",
    "Established AI ethics review process adopted company-wide"
  ],
  technologies: [
    "Python",
    "Salesforce Platform",
    "AWS Sagemaker",
    "TensorFlow",
    "LangChain",
    "GPT-4",
    "Tableau",
    "SQL",
    "Jira",
    "Confluence"
  ],
  impact: [
    {
      metric: "ARR Growth",
      value: "$18M"
    },
    {
      metric: "User Adoption",
      value: "50K+ DAU"
    },
    {
      metric: "Sales Efficiency",
      value: "+35%"
    }
  ]
}
```

---

## 🛠️ Example 3: Adding New Skills

Let's add a new skill category for "Generative AI".

### Add to `data/skills.ts`

Open `data/skills.ts` and add this to the `skillsData` array:

```typescript
{
  category: "Generative AI Products",
  icon: "🤖",
  skills: [
    {
      name: "LLM Integration",
      description: "Building products with GPT-4, Claude, and other foundation models",
      level: "Advanced"
    },
    {
      name: "Prompt Engineering",
      description: "Designing effective prompts and chains for LLM applications",
      level: "Expert"
    },
    {
      name: "RAG Systems",
      description: "Implementing retrieval-augmented generation for domain-specific AI",
      level: "Advanced"
    },
    {
      name: "AI Agent Design",
      description: "Creating autonomous agents with tool use and multi-step reasoning",
      level: "Advanced"
    }
  ]
}
```

### Add New Tools

In the same file, update the `tools` object:

```typescript
export const tools = {
  analytics: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Looker', 'Tableau'],
  dataScience: ['Python', 'SQL', 'Jupyter', 'pandas', 'scikit-learn'],
  productManagement: ['Jira', 'Confluence', 'Figma', 'Miro', 'ProductBoard'],
  aiMl: ['TensorFlow', 'PyTorch', 'MLflow', 'Sagemaker', 'Vertex AI'],
  // Add generative AI tools
  genAI: ['GPT-4', 'Claude', 'LangChain', 'LlamaIndex', 'Hugging Face'],
  collaboration: ['Slack', 'Notion', 'Linear', 'GitHub'],
};
```

### Add New Framework

In the `frameworks` array:

```typescript
export const frameworks = [
  'RICE Prioritization',
  'Jobs to be Done (JTBD)',
  'North Star Metric',
  'OKRs',
  'User Story Mapping',
  'Lean Canvas',
  'AI Opportunity Canvas',
  'ML Feasibility Matrix',
  'Model vs Rules Decision Tree',
  'Kano Model',
  'AI Product Canvas',  // Add new framework
];
```

---

## 📊 Example 4: Updating Metrics

Let's update the metrics to reflect your current career status.

### Edit `data/metrics.ts`

Replace the `metricsData` array with updated values:

```typescript
export const metricsData: Metric[] = [
  {
    label: 'Users Impacted',
    value: '15M+',
    description: 'Total users across products launched',
    icon: '👥',
  },
  {
    label: 'Products Launched',
    value: '20+',
    description: 'AI/ML features and products shipped to production',
    icon: '🚀',
  },
  {
    label: 'Revenue Impact',
    value: '$75M+',
    description: 'Generated through product initiatives',
    icon: '💰',
  },
  {
    label: 'Teams Led',
    value: '12',
    description: 'Cross-functional teams managed',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    label: 'ML Models Deployed',
    value: '18',
    description: 'Machine learning models taken to production',
    icon: '🤖',
  },
  {
    label: 'Years Experience',
    value: '10+',
    description: 'Years in product management',
    icon: '⏱️',
  },
];
```

---

## 🎯 Example 5: Complete B2B SaaS Case Study

A comprehensive example for a B2B SaaS product.

```typescript
{
  id: 'cs-5',
  slug: "saas-analytics-platform",
  title: "Enterprise Analytics Platform",
  subtitle: "Building a $10M ARR product from 0 to 1",
  category: "B2B SaaS",
  tags: ["Enterprise", "Analytics", "B2B", "0-1 Product"],
  heroImage: "/images/case-studies/analytics-platform-hero.jpg",
  thumbnail: "/images/case-studies/analytics-platform-thumb.jpg",
  problem: `Enterprise teams were spending 20+ hours per week manually creating reports and dashboards. Existing analytics tools were either too complex (requiring SQL knowledge) or too simple (lacking customization). Our target customers (operations leaders at $100M+ companies) needed a solution that was both powerful and user-friendly.

Key pain points identified:
- Manual data aggregation from multiple sources
- No real-time visibility into KPIs
- Inability to share insights across teams
- Expensive custom development ($500K+ per implementation)`,
  approach: `Designed and launched a 0-1 B2B SaaS product:

**Discovery Phase (2 months)**
- Interviewed 60 potential customers (operations leaders, analysts, executives)
- Shadowed 10 companies to understand current workflows
- Identified top 5 use cases with highest pain/frequency
- Validated willingness to pay ($50K-200K annual contracts)

**Product Strategy**
- Focused on 3 core user personas: analyst, manager, executive
- Built for speed (no-code interface) + power (SQL escape hatch)
- API-first architecture for easy integration
- Freemium → team → enterprise pricing model

**Go-to-Market**
- Pilot program with 10 design partners
- Iterated based on feedback for 4 months
- Launched with 5 paid customers from pilot
- Product-led growth with self-serve trial

**Technical Decisions**
- Cloud-native architecture (AWS)
- Pre-built connectors for top 20 data sources
- Real-time data streaming + daily batch updates
- White-label capabilities for enterprise`,
  solution: `Launched comprehensive analytics platform with 3 tiers:

**Core Platform**
- No-code dashboard builder with drag-and-drop
- 50+ pre-built visualization types
- Real-time data refresh (< 5 min latency)
- Collaboration features (comments, annotations, sharing)
- Mobile app for iOS and Android

**Data Integration**
- Pre-built connectors (Salesforce, Postgres, MySQL, MongoDB, etc.)
- Custom API connector builder
- Data transformation layer (no-code ETL)
- Automated data quality checks

**Enterprise Features**
- SSO and advanced security (SOC 2, GDPR compliant)
- Custom branding and white-labeling
- Dedicated account management
- 99.9% uptime SLA
- Role-based access control

**AI-Powered Features**
- Automated insights and anomaly detection
- Natural language queries ("Show me top 10 customers by revenue")
- Predictive analytics and forecasting
- Smart recommendations for visualizations`,
  impact: [
    {
      metric: "ARR",
      value: "$10M",
      description: "Annual recurring revenue in year 2"
    },
    {
      metric: "Enterprise Customers",
      value: "85",
      description: "Companies with $100M+ revenue"
    },
    {
      metric: "Time Savings",
      value: "18 hrs/week",
      description: "Average per team (validated by surveys)"
    },
    {
      metric: "NRR",
      value: "135%",
      description: "Net revenue retention (expansion + upsells)"
    },
    {
      metric: "Customer Satisfaction",
      value: "4.8/5.0",
      description: "Average rating from 200+ reviews"
    }
  ],
  learnings: [
    "Design partners were essential - 5 eventually became paying customers, providing critical early validation",
    "Product-led growth worked for SMB but enterprise needed sales-assisted - adapted strategy after 6 months",
    "Over-invested in customization early - learned to say no and focus on core value prop",
    "API quality matters as much as UI - 40% of customers use API extensively",
    "Security and compliance non-negotiable for enterprise - got SOC 2 in month 8, unlocked $5M pipeline",
    "White-labeling was unexpected revenue driver - 20% of enterprise deals request it"
  ],
  timeline: "18 months (concept to $10M ARR)",
  role: "Founding Product Manager",
  teamSize: 18,
  technologies: [
    "React",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "AWS (ECS, RDS, S3)",
    "Docker",
    "Kubernetes",
    "Apache Kafka",
    "Python",
    "scikit-learn",
    "D3.js"
  ]
}
```

---

## 🔄 Example 6: Modifying Existing Content

### Updating Impact Metrics

Find the case study in `data/case-studies.ts` and update the `impact` array:

**Before:**
```typescript
impact: [
  {
    metric: "Revenue",
    value: "$10M",
    description: "Annual impact"
  }
]
```

**After (with more detail):**
```typescript
impact: [
  {
    metric: "Revenue Impact",
    value: "$15M",
    description: "Annual revenue growth attributable to feature"
  },
  {
    metric: "ROI",
    value: "5x",
    description: "Return on investment within 12 months"
  }
]
```

### Adding More Learnings

Add to the `learnings` array:

```typescript
learnings: [
  "Existing learning 1",
  "Existing learning 2",
  // Add new learnings
  "Model accuracy plateaued at 85% - diminishing returns beyond that point",
  "User feedback loop crucial - implemented in-app rating that improved model by 12%"
]
```

---

## 🎨 Example 7: Skill Level Progression

As you gain experience, update skill levels:

### Before (when learning):
```typescript
{
  name: "Machine Learning",
  description: "Building and deploying ML models",
  level: "Intermediate"
}
```

### After (with more experience):
```typescript
{
  name: "Machine Learning",
  description: "Building and deploying ML models at scale, mentoring team on ML best practices",
  level: "Expert"
}
```

---

## 📝 Copy-Paste Templates

### Minimal Case Study
```typescript
{
  id: 'cs-X',
  slug: "project-slug",
  title: "Project Name",
  subtitle: "One-line impact",
  category: "Category",
  tags: ["Tag1", "Tag2"],
  heroImage: "/images/case-studies/slug-hero.jpg",
  thumbnail: "/images/case-studies/slug-thumb.jpg",
  problem: `What problem were you solving?`,
  approach: `How did you approach it?`,
  solution: `What did you build?`,
  impact: [
    { metric: "Key Metric", value: "+50%", description: "Context" }
  ],
  learnings: ["Key learning"],
  timeline: "X months",
  role: "Your Role",
  teamSize: 5,
  technologies: ["Tech1"]
}
```

### Minimal Experience
```typescript
{
  id: 'exp-X',
  company: "Company",
  role: "Role",
  period: "Start - End",
  location: "Location",
  description: "What you did",
  achievements: ["Achievement 1"],
  technologies: ["Tech1"],
  impact: [{ metric: "Metric", value: "Value" }]
}
```

### Minimal Skill
```typescript
{
  category: "Category",
  icon: "🎯",
  skills: [
    { name: "Skill", description: "What you can do", level: "Advanced" }
  ]
}
```

---

## ✅ Validation Checklist

When adding new content, verify:

- [ ] **IDs are unique** (cs-X, exp-X)
- [ ] **Slugs are unique** and URL-friendly (lowercase, hyphens)
- [ ] **All required fields** are present
- [ ] **Commas** between array items and object properties
- [ ] **Quotes** around strings (use backticks for multiline)
- [ ] **Image paths** start with `/images/`
- [ ] **Images exist** in `public/images/case-studies/`
- [ ] **No TypeScript errors** after saving
- [ ] **Tested locally** with `npm run dev`

---

## 🚀 Next Steps

1. Choose an example that matches your content type
2. Copy the template
3. Customize with your information
4. Save the file
5. Test with `npm run dev`
6. Verify everything looks good
7. Commit and deploy

Happy content editing! 🎉
