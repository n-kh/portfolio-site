/**
 * Product case studies data
 */

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  heroImage: string;
  thumbnail: string;
  problem: string;
  approach: string;
  solution: string;
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  learnings: string[];
  timeline: string;
  role: string;
  teamSize: number;
  technologies: string[];
  fullContent?: string; // Optional markdown content for detailed case study
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'cs-1',
    slug: 'ai-recommendation-engine',
    title: 'AI-Powered Recommendation Engine',
    subtitle: 'Increasing user engagement by 45% through personalized recommendations',
    category: 'AI/ML',
    tags: ['Recommendation Systems', 'Personalization', 'B2C', 'ML'],
    heroImage: '/images/case-studies/recommendations-hero.jpg',
    thumbnail: '/images/case-studies/recommendations-thumb.jpg',
    problem: `Users were struggling to discover relevant content in a catalog of 100K+ items. Manual curation wasn't scalable, and generic trending lists had low click-through rates (2.3%). Customer surveys showed 68% of users felt overwhelmed by choices, leading to decision paralysis and churn.`,
    approach: `I led a cross-functional initiative to build a personalized recommendation system:

1. **Data Strategy**: Collaborated with data science to identify key signals (views, clicks, purchases, ratings, session duration)
2. **ML Approach**: Evaluated collaborative filtering vs content-based vs hybrid approaches
3. **User Research**: Conducted 25 interviews to understand discovery patterns and preferences
4. **Experimentation Framework**: Designed A/B tests with clear success metrics (CTR, engagement time, conversion)
5. **Phased Rollout**: Started with 5% traffic, scaled to 100% after validation`,
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
    impact: [
      {
        metric: 'Click-Through Rate',
        value: '+187%',
        description: 'From 2.3% to 6.6% on recommended items',
      },
      {
        metric: 'User Engagement',
        value: '+45%',
        description: 'Average session duration increased from 8 to 11.6 minutes',
      },
      {
        metric: 'Conversion Rate',
        value: '+32%',
        description: 'Users who engaged with recommendations converted at 32% higher rate',
      },
      {
        metric: 'Revenue Impact',
        value: '$12M',
        description: 'Incremental annual revenue from personalized recommendations',
      },
      {
        metric: 'User Satisfaction',
        value: '+28%',
        description: 'NPS score improved from 42 to 54',
      },
    ],
    learnings: [
      'Cold start problem was harder than expected - invested in hybrid approach combining popularity with content similarity',
      'Explainability matters - adding "Why this?" increased trust and CTR by 15%',
      'Diversity vs relevance tradeoff required careful tuning - users wanted some serendipity',
      'Real-time vs batch predictions - chose batch with 15-min refresh for cost optimization',
      'Model monitoring essential - set up alerts for CTR drops, coverage issues, and latency spikes',
    ],
    timeline: '6 months (MVP to production)',
    role: 'Lead Product Manager',
    teamSize: 12,
    technologies: [
      'Python',
      'TensorFlow',
      'AWS Sagemaker',
      'Redis',
      'Spark',
      'MLflow',
      'Looker',
    ],
  },
  {
    id: 'cs-2',
    slug: 'intelligent-search',
    title: 'Intelligent Search with NLP',
    subtitle: 'Improving search success rate from 45% to 78% using semantic understanding',
    category: 'AI/ML',
    tags: ['NLP', 'Search', 'Semantic Search', 'ML'],
    heroImage: '/images/case-studies/search-hero.jpg',
    thumbnail: '/images/case-studies/search-thumb.jpg',
    problem: `Traditional keyword-based search was failing users. Analysis showed:
- 55% of searches returned zero results (mostly due to typos, synonyms, or natural language queries)
- Average time to find desired item: 4.2 minutes
- 30% of support tickets were search-related
- Users expressed frustration with exact-match requirements`,
    approach: `Developed a multi-phase strategy to transform search:

1. **Research Phase**
   - Analyzed 1M+ search queries to identify failure patterns
   - Interviewed 40 users about search behavior
   - Benchmarked against industry leaders (Amazon, Google)

2. **Technical Evaluation**
   - Evaluated Elasticsearch vs vector search (FAISS, Pinecone)
   - Tested pre-trained models (BERT, sentence-transformers)
   - Calculated infrastructure costs at scale

3. **ML Strategy**
   - Semantic search for understanding intent
   - Query expansion for typos and synonyms
   - Personalized ranking based on user context
   - Autocomplete with learning from popular queries`,
    solution: `Built a three-tier intelligent search system:

**Tier 1: Query Understanding**
- NLP-based spell correction and synonym expansion
- Intent classification (product search, support question, etc.)
- Query reformulation suggestions

**Tier 2: Semantic Retrieval**
- Embedded catalog items using sentence-transformers
- Vector similarity search for semantic matching
- Hybrid scoring combining keyword + semantic relevance

**Tier 3: Personalized Ranking**
- ML ranker considering user history, preferences, popularity
- Context-aware results (location, time, device)
- A/B tested ranking algorithms`,
    impact: [
      {
        metric: 'Search Success Rate',
        value: '+73%',
        description: 'From 45% to 78% of searches resulted in user action',
      },
      {
        metric: 'Zero Results',
        value: '-82%',
        description: 'Reduced from 55% to 10% of searches',
      },
      {
        metric: 'Time to Find',
        value: '-57%',
        description: 'Average search time dropped from 4.2 to 1.8 minutes',
      },
      {
        metric: 'Support Tickets',
        value: '-65%',
        description: 'Search-related support requests decreased significantly',
      },
      {
        metric: 'Revenue',
        value: '+$8M',
        description: 'Annual impact from improved search conversions',
      },
    ],
    learnings: [
      'Vector search added cost but value justified it - key was hybrid approach (keyword + semantic)',
      'Model fine-tuning on domain data (2 weeks effort) improved relevance by 25%',
      'Autocomplete ROI was highest - quick win before full semantic search',
      'User feedback loop critical - added "Was this helpful?" to gather training data',
      'Search analytics became product gold mine - informed roadmap priorities',
    ],
    timeline: '5 months (concept to launch)',
    role: 'Product Manager',
    teamSize: 8,
    technologies: [
      'Elasticsearch',
      'BERT',
      'sentence-transformers',
      'Python',
      'FastAPI',
      'Redis',
      'PostgreSQL',
    ],
  },
  {
    id: 'cs-3',
    slug: 'ml-document-processing',
    title: 'ML-Powered Document Processing',
    subtitle: 'Automating data extraction from 1M+ documents monthly',
    category: 'B2B SaaS',
    tags: ['NLP', 'OCR', 'Automation', 'Enterprise'],
    heroImage: '/images/case-studies/document-hero.jpg',
    thumbnail: '/images/case-studies/document-thumb.jpg',
    problem: `Enterprise customers were spending 100+ hours weekly manually extracting data from invoices, contracts, and forms. Issues included:
- Error rate of 12% in manual data entry
- Processing delays causing downstream workflow bottlenecks
- High operational costs ($500K+ annually per large customer)
- No way to handle 10x document volume spikes`,
    approach: `Designed 0-1 product for intelligent document processing:

1. **Customer Discovery**
   - Shadowed 10 operations teams processing documents
   - Identified 15 document types with highest volume
   - Mapped current workflows and pain points

2. **Technical Feasibility**
   - Evaluated OCR engines (Tesseract, Google Vision, AWS Textract)
   - Tested NER models for entity extraction
   - Prototyped with 1000 sample documents

3. **Product Strategy**
   - Started with invoice processing (highest volume, clear ROI)
   - Built template-free extraction (works on any format)
   - Human-in-the-loop for quality assurance
   - API-first design for easy integration`,
    solution: `Launched end-to-end ML document processing platform:

**Core Features**
- Multi-format support (PDF, images, scanned docs)
- Automatic field extraction using NER + custom ML models
- Confidence scoring with human review queue
- Validation rules and business logic
- Real-time API and batch processing

**ML Pipeline**
1. Document classification (identify document type)
2. OCR and text extraction
3. Layout analysis (tables, headers, line items)
4. Entity extraction (dates, amounts, names, addresses)
5. Validation and confidence scoring
6. Human review for low-confidence predictions

**Integration**
- RESTful API for real-time processing
- Batch upload via web interface
- Webhooks for async notifications
- Export to ERP systems (SAP, Oracle, Workday)`,
    impact: [
      {
        metric: 'Processing Time',
        value: '-92%',
        description: 'From 5 minutes to 24 seconds per document',
      },
      {
        metric: 'Accuracy',
        value: '96%',
        description: 'Improved from 88% (manual) to 96% (automated)',
      },
      {
        metric: 'Cost Savings',
        value: '$8M',
        description: 'Saved across customer base in first year',
      },
      {
        metric: 'Volume Handled',
        value: '1M+',
        description: 'Documents processed monthly',
      },
      {
        metric: 'ARR',
        value: '$5M',
        description: 'Product revenue in first 12 months',
      },
    ],
    learnings: [
      'Template-free was right bet - customers had thousands of document variations',
      'Human-in-the-loop essential for trust - started with 30% review, now at 5%',
      'Model retraining from corrections created flywheel - accuracy improved 8% over 6 months',
      'Table extraction was hardest - complex layouts required custom models',
      'API-first design enabled land-and-expand - integrations drove adoption',
    ],
    timeline: '8 months (0 to 1)',
    role: 'Lead Product Manager',
    teamSize: 10,
    technologies: [
      'PyTorch',
      'Tesseract',
      'spaCy',
      'AWS Textract',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
      'FastAPI',
    ],
  },
];

/**
 * Get case study by slug
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find((study) => study.slug === slug);
}

/**
 * Get all case study slugs for static generation
 */
export function getAllCaseStudySlugs(): string[] {
  return caseStudiesData.map((study) => study.slug);
}
