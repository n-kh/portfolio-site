# Original Prompt: Create Salesforce Knowledge PM Agent

This is the comprehensive prompt that would have created the entire PM agent in one shot.

---

## Prompt

You are the best Product Manager in the world and you are currently working as the product manager for Salesforce and managing the Knowledge Portfolio. You are an experimental PM who always works customer backwards.

Create a complete Salesforce PM agent system which will always think customer backward and when given a prompt will keep the customer feedback in mind while carrying out the prompts. The agent should be a Python-based system with an interactive CLI.

### Customer Feedback Data

Salesforce Knowledge users consistently ask for better search relevance, richer authoring, easier governance, and clearer analytics to drive a self-service experience that actually deflects cases. An effective improvement plan starts by grouping raw feedback into clear themes tied to concrete product bets and measurement.

#### Feedback Themes

Typical feedback from admins, agents, and end customers clusters into these areas:
- "Search doesn't find the right article, or returns too many/too few results."
- "Content structure and formatting make articles hard to scan."
- "Managing versions, lifecycle, and ownership is painful."
- "Feedback and analytics exist, but teams don't act on them easily."
- "Experience Cloud / external KB feels disconnected or limited."

#### Category 1: Search & Discovery

Users struggle with search syntax, filters, and result relevance, especially in large orgs. This erodes trust in self-service and pushes people back to creating cases unnecessarily.

Improvement plan:  
- Invest in relevance tuning: boost by case context, product, issue type, and prior article success; expose admin controls for tuning without code.
- Enhance UX for filters and facets: clearer labels, saved search scopes, and better handling of common synonyms and typos via AI-based suggestions.
- Add search insights: out‑of‑the‑box reports for "zero‑result queries", "queries with quick exits", and "high deflection queries" to highlight content gaps.

#### Category 2: Authoring & Content Quality

Authors and SMEs want more flexible layouts, richer media, and tools to keep content current without manual overhead. End users want step‑by‑step, visual content tuned to their role, not long generic articles.

Improvement plan:  
- Upgrade the editor: first‑class support for templates, collapsible sections, checklists, and inline multimedia to match modern help-center expectations.
- Guided authoring: wizards that generate a structure based on problem type, with prompts to add prerequisites, steps, troubleshooting, and next actions.
- Content health signals: show "stale", "low rated", and "high search views but low success" tags directly in the author queue to prioritize updates.

#### Category 3: Governance, Scale, and Lifecycle

Admins report friction managing large article volumes, limits, and lifecycle across products and regions. Without clear ownership and workflows, content quickly becomes inconsistent or outdated.

Improvement plan:  
- Stronger lifecycle workflows: configurable states (Draft, Review, SME Approved, Legal Approved, Published, Retire) with auto‑notifications and SLAs.
- Scalable information architecture: opinionated defaults and diagnostics for data categories, record types, and limits, plus alerts as orgs approach constraints.
- Role‑based work queues: views for "My products", "Articles awaiting my review", and "Articles expiring soon" for admins, owners, and SMEs.

#### Category 4: Feedback, Ratings, and Analytics

Customers and agents can rate and comment, but teams struggle to turn this into systematic improvement. Feedback often sits in separate objects or reports that don't drive day‑to‑day decisions.

Improvement plan:  
- Unified feedback fabric: consolidate ratings, comments, thumbs up/down, and case outcomes into one feedback model per article with status and owner.
- Opinionated dashboards: ship default boards for "Top negative feedback by product," "Articles driving most repeat contacts," and "Time to act on feedback."
- Closed‑loop experience: when feedback is resolved, notify the submitter and show "Recently improved based on user feedback" badges on articles.

#### Category 5: Experience Cloud & Channel Integration

External users want a seamless knowledge experience in portals, and admins want parity and consistency across channels. Limitations and inconsistent behavior between Classic, Lightning, and sites can cause confusion.

Improvement plan:  
- Modern self‑service templates: pre‑built Experience Cloud templates optimized for search, navigation, and responsiveness, with product‑specific navigation patterns.
- Cross‑channel usage insights: correlate article usage across portal, in‑case, chat, and email to see where content actually deflects contact.
- Migration and parity tooling: clearer guidance, checks, and automated fixes to reduce friction moving from Classic Knowledge and older PKB setups.

### Requirements

1. **Core Agent Class**: Create a `SalesforceKnowledgePMAgent` class that:
   - Stores all customer feedback themes with categories, problem statements, improvement plans, and key metrics
   - Stores customer insights with user types, pain points, impact, and priority
   - Stores detailed user personas (Knowledge Admin, Content Author, Support Agent, End Customer) with role descriptions, daily tasks, key goals, common challenges, tools used, technical skill level, and org size context
   - Stores comprehensive Salesforce Knowledge product details including:
     - Salesforce Knowledge (core platform) - 20+ capabilities and 10+ limitations
     - Knowledge Search - 15+ capabilities and 10+ limitations
     - Article Authoring - 18+ capabilities and 12+ limitations
     - Content Governance - 15+ capabilities and 12+ limitations
     - Knowledge Analytics - 15+ capabilities and 12+ limitations
     - Experience Cloud Integration - 18+ capabilities and 14+ limitations
     - Einstein for Knowledge - 8+ capabilities and 8+ limitations
     - Knowledge API & Integration - 12+ capabilities and 8+ limitations
   - Automatically matches relevant feedback themes, personas, and product details based on prompt keywords
   - Builds enhanced prompts that incorporate customer context
   - Generates narrative responses (not just structured data) that are conversational and varied

2. **Data Structures**: Use Python dataclasses for:
   - `FeedbackTheme`: category, problem_statement, improvement_plan, key_metrics
   - `CustomerInsight`: user_type, pain_point, impact, priority
   - `Persona`: name, user_type, role_description, daily_tasks, key_goals, common_challenges, tools_used, technical_skill_level, org_size_context
   - `ProductDetail`: feature_name, category, description, current_capabilities, limitations, related_features

3. **Key Methods**:
   - `process_prompt(prompt: str)`: Returns structured data with relevant themes, personas, products, and enhanced prompt
   - `generate_response(prompt: str, max_recommendations: int = 5)`: Returns a narrative, conversational response that varies based on the prompt
   - `get_recommendations_for_prompt(prompt: str)`: Returns list of improvement recommendations
   - `get_feedback_summary()`: Returns formatted summary of all feedback themes
   - `export_decision_history(filename)`: Exports decision history to JSON

4. **Interactive CLI**: Create `interactive_agent.py` with:
   - Interactive command loop
   - Commands: help, summary, themes, history, export, clear, exit
   - Uses `generate_response()` to show narrative answers
   - Shows detailed breakdown with statistics
   - Clean, user-friendly output with emojis and formatting

5. **Example Usage**: Create `example_usage.py` with 7+ example scenarios demonstrating different use cases

6. **Documentation**: Create comprehensive README.md with:
   - Overview and key features
   - Usage examples
   - Customer feedback themes summary
   - Architecture overview
   - Extension guide reference

7. **Extension Guide**: Create `EXTENSION_GUIDE.md` with:
   - How to add new personas
   - How to add product details
   - How to add feedback themes
   - Best practices
   - Examples

8. **Customer-Backward Principles**: The agent should always:
   - Ask: "How does this solve a real customer problem?"
   - Prioritize features that address high-priority pain points
   - Consider impact on case deflection and self-service success
   - Ensure solutions are measurable against customer success metrics
   - Think about all user types: admins, authors, agents, and end customers

### Technical Requirements

- Python 3.7+ compatible
- Use only standard library (no external dependencies)
- Clean, well-documented code
- Type hints where appropriate
- Error handling
- Decision history tracking

### Output Format

The agent should generate narrative responses that:
- Start with a customer-backward analysis header
- Include relevant customer feedback themes with context
- Show affected user personas
- Display current product state and limitations
- Provide actionable recommendations
- Include high-priority customer insights
- End with customer-backward principles reminder

Responses should be varied and conversational, not repetitive structured data.

### Deliverables

1. `salesforce_pm_agent.py` - Main agent class (1000+ lines)
2. `interactive_agent.py` - Interactive CLI
3. `example_usage.py` - Example scenarios
4. `README.md` - Comprehensive documentation
5. `EXTENSION_GUIDE.md` - Guide for extending the agent
6. `QUICK_REFERENCE.md` - Quick reference guide

All files should be production-ready, well-documented, and follow Python best practices.

---

## Notes

This prompt would generate the entire PM agent system in one shot, including:
- All customer feedback data structured
- All personas with detailed information
- All product details with comprehensive capabilities and limitations
- Intelligent context matching
- Narrative response generation
- Interactive CLI
- Complete documentation

The key is that it provides:
1. Complete customer feedback data
2. Clear requirements for structure and functionality
3. Specific technical requirements
4. Expected output format
5. List of deliverables

This single prompt contains all the information needed to build the complete system.

