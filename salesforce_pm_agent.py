"""
Salesforce PM Agent - Customer-Backward Product Manager
Always thinks customer-backward and incorporates customer feedback into all decisions.
"""

from typing import Dict, List, Optional, Any
from dataclasses import dataclass, field
from datetime import datetime
import json


@dataclass
class FeedbackTheme:
    """Represents a customer feedback theme with improvement plans."""
    category: str
    problem_statement: str
    improvement_plan: List[str]
    key_metrics: List[str] = field(default_factory=list)


@dataclass
class CustomerInsight:
    """Structured customer insight from feedback."""
    user_type: str  # admin, agent, end_customer
    pain_point: str
    impact: str
    priority: str  # high, medium, low


@dataclass
class Persona:
    """Detailed persona information for different user types."""
    name: str  # e.g., "Knowledge Admin", "Content Author"
    user_type: str  # admin, author, agent, end_customer
    role_description: str
    daily_tasks: List[str]
    key_goals: List[str]
    common_challenges: List[str]
    tools_used: List[str] = field(default_factory=list)
    technical_skill_level: str = "intermediate"  # beginner, intermediate, advanced
    org_size_context: str = "varies"  # small, medium, large, enterprise


@dataclass
class ProductDetail:
    """Salesforce Knowledge product details and context."""
    feature_name: str
    category: str
    description: str
    current_capabilities: List[str]
    limitations: List[str] = field(default_factory=list)
    related_features: List[str] = field(default_factory=list)


class SalesforceKnowledgePMAgent:
    """
    Customer-backward Product Manager Agent for Salesforce Knowledge.
    Always considers customer feedback when making product decisions.
    """
    
    def __init__(self):
        self.feedback_themes = self._initialize_feedback_themes()
        self.customer_insights = self._initialize_customer_insights()
        self.personas = self._initialize_personas()
        self.product_details = self._initialize_product_details()
        self.decision_history = []
        
    def _initialize_feedback_themes(self) -> Dict[str, FeedbackTheme]:
        """Initialize all customer feedback themes."""
        return {
            "search_discovery": FeedbackTheme(
                category="Search & Discovery",
                problem_statement=(
                    "Users struggle with search syntax, filters, and result relevance, "
                    "especially in large orgs. This erodes trust in self-service and "
                    "pushes people back to creating cases unnecessarily."
                ),
                improvement_plan=[
                    "Invest in relevance tuning: boost by case context, product, issue type, and prior article success; expose admin controls for tuning without code.",
                    "Enhance UX for filters and facets: clearer labels, saved search scopes, and better handling of common synonyms and typos via AI-based suggestions.",
                    "Add search insights: out‑of‑the‑box reports for 'zero‑result queries', 'queries with quick exits', and 'high deflection queries' to highlight content gaps."
                ],
                key_metrics=[
                    "Search success rate",
                    "Zero-result query percentage",
                    "Case deflection rate from search",
                    "Time to find relevant article"
                ]
            ),
            "authoring_quality": FeedbackTheme(
                category="Authoring & Content Quality",
                problem_statement=(
                    "Authors and SMEs want more flexible layouts, richer media, and tools "
                    "to keep content current without manual overhead. End users want "
                    "step‑by‑step, visual content tuned to their role, not long generic articles."
                ),
                improvement_plan=[
                    "Upgrade the editor: first‑class support for templates, collapsible sections, checklists, and inline multimedia to match modern help-center expectations.",
                    "Guided authoring: wizards that generate a structure based on problem type, with prompts to add prerequisites, steps, troubleshooting, and next actions.",
                    "Content health signals: show 'stale', 'low rated', and 'high search views but low success' tags directly in the author queue to prioritize updates."
                ],
                key_metrics=[
                    "Content freshness score",
                    "Author productivity (articles per hour)",
                    "End-user content rating",
                    "Content consumption rate"
                ]
            ),
            "governance_lifecycle": FeedbackTheme(
                category="Governance, Scale, and Lifecycle",
                problem_statement=(
                    "Admins report friction managing large article volumes, limits, and lifecycle "
                    "across products and regions. Without clear ownership and workflows, content "
                    "quickly becomes inconsistent or outdated."
                ),
                improvement_plan=[
                    "Stronger lifecycle workflows: configurable states (Draft, Review, SME Approved, Legal Approved, Published, Retire) with auto‑notifications and SLAs.",
                    "Scalable information architecture: opinionated defaults and diagnostics for data categories, record types, and limits, plus alerts as orgs approach constraints.",
                    "Role‑based work queues: views for 'My products', 'Articles awaiting my review', and 'Articles expiring soon' for admins, owners, and SMEs."
                ],
                key_metrics=[
                    "Content governance efficiency",
                    "Time to publish",
                    "Content ownership clarity",
                    "Workflow compliance rate"
                ]
            ),
            "feedback_analytics": FeedbackTheme(
                category="Feedback, Ratings, and Analytics",
                problem_statement=(
                    "Customers and agents can rate and comment, but teams struggle to turn this "
                    "into systematic improvement. Feedback often sits in separate objects or "
                    "reports that don't drive day‑to‑day decisions."
                ),
                improvement_plan=[
                    "Unified feedback fabric: consolidate ratings, comments, thumbs up/down, and case outcomes into one feedback model per article with status and owner.",
                    "Opinionated dashboards: ship default boards for 'Top negative feedback by product,' 'Articles driving most repeat contacts,' and 'Time to act on feedback.'",
                    "Closed‑loop experience: when feedback is resolved, notify the submitter and show 'Recently improved based on user feedback' badges on articles."
                ],
                key_metrics=[
                    "Feedback response time",
                    "Feedback resolution rate",
                    "Articles improved from feedback",
                    "Customer satisfaction with content"
                ]
            ),
            "experience_cloud": FeedbackTheme(
                category="Experience Cloud & Channel Integration",
                problem_statement=(
                    "External users want a seamless knowledge experience in portals, and admins "
                    "want parity and consistency across channels. Limitations and inconsistent "
                    "behavior between Classic, Lightning, and sites can cause confusion."
                ),
                improvement_plan=[
                    "Modern self‑service templates: pre‑built Experience Cloud templates optimized for search, navigation, and responsiveness, with product‑specific navigation patterns.",
                    "Cross‑channel usage insights: correlate article usage across portal, in‑case, chat, and email to see where content actually deflects contact.",
                    "Migration and parity tooling: clearer guidance, checks, and automated fixes to reduce friction moving from Classic Knowledge and older PKB setups."
                ],
                key_metrics=[
                    "Cross-channel consistency",
                    "Portal adoption rate",
                    "Migration success rate",
                    "Channel-specific deflection rates"
                ]
            )
        }
    
    def _initialize_customer_insights(self) -> List[CustomerInsight]:
        """Initialize key customer insights from feedback."""
        return [
            CustomerInsight(
                user_type="end_customer",
                pain_point="Search doesn't find the right article, or returns too many/too few results",
                impact="High - Erodes trust in self-service, increases case volume",
                priority="high"
            ),
            CustomerInsight(
                user_type="author",
                pain_point="Content structure and formatting make articles hard to scan",
                impact="Medium - Reduces content effectiveness, increases support burden",
                priority="high"
            ),
            CustomerInsight(
                user_type="admin",
                pain_point="Managing versions, lifecycle, and ownership is painful",
                impact="High - Content becomes outdated, governance breaks down",
                priority="high"
            ),
            CustomerInsight(
                user_type="admin",
                pain_point="Feedback and analytics exist, but teams don't act on them easily",
                impact="Medium - Missed opportunities for improvement",
                priority="medium"
            ),
            CustomerInsight(
                user_type="end_customer",
                pain_point="Experience Cloud / external KB feels disconnected or limited",
                impact="Medium - Poor external user experience",
                priority="medium"
            )
        ]
    
    def _initialize_personas(self) -> Dict[str, Persona]:
        """Initialize detailed persona information."""
        return {
            "knowledge_admin": Persona(
                name="Knowledge Administrator",
                user_type="admin",
                role_description=(
                    "Manages the Knowledge base configuration, governance, workflows, "
                    "and overall content strategy. Responsible for maintaining content quality, "
                    "ensuring compliance, and optimizing the knowledge experience."
                ),
                daily_tasks=[
                    "Configure data categories and record types",
                    "Manage article lifecycle and approval workflows",
                    "Monitor content quality and freshness",
                    "Set up search relevance and tuning",
                    "Manage user permissions and access",
                    "Review analytics and feedback reports",
                    "Coordinate with content owners and SMEs"
                ],
                key_goals=[
                    "Maintain high content quality and freshness",
                    "Ensure governance and compliance",
                    "Maximize case deflection through self-service",
                    "Scale knowledge base efficiently",
                    "Improve search relevance and user experience"
                ],
                common_challenges=[
                    "Managing large volumes of articles across multiple products",
                    "Keeping content current and relevant",
                    "Balancing governance with author productivity",
                    "Understanding which content drives deflection",
                    "Configuring complex approval workflows",
                    "Managing limits and data model constraints"
                ],
                tools_used=["Setup UI", "Workflow Builder", "Reports & Dashboards", "Data Category Management"],
                technical_skill_level="intermediate",
                org_size_context="enterprise"
            ),
            "content_author": Persona(
                name="Content Author / SME",
                user_type="author",
                role_description=(
                    "Creates and maintains knowledge articles. Typically a subject matter expert "
                    "who understands the product or process deeply but may not be a technical writer. "
                    "Balances accuracy with clarity and user-friendliness."
                ),
                daily_tasks=[
                    "Write new knowledge articles",
                    "Update existing articles based on feedback",
                    "Review and respond to article feedback",
                    "Collaborate with other authors and reviewers",
                    "Ensure content accuracy and completeness",
                    "Format articles for readability",
                    "Add multimedia and visual aids"
                ],
                key_goals=[
                    "Create clear, actionable content quickly",
                    "Keep content current and accurate",
                    "Help users solve problems independently",
                    "Receive feedback on content effectiveness",
                    "Maintain consistency across articles"
                ],
                common_challenges=[
                    "Knowing what content to prioritize",
                    "Understanding which articles need updates",
                    "Formatting and structuring content effectively",
                    "Adding rich media and interactive elements",
                    "Tracking content performance and impact",
                    "Managing multiple article versions"
                ],
                tools_used=["Knowledge Authoring UI", "Rich Text Editor", "Article Templates"],
                technical_skill_level="beginner",
                org_size_context="varies"
            ),
            "support_agent": Persona(
                name="Support Agent",
                user_type="agent",
                role_description=(
                    "Uses Knowledge articles to help customers resolve cases. Relies on "
                    "search to find relevant articles quickly during case interactions. "
                    "May also provide feedback on article quality and gaps."
                ),
                daily_tasks=[
                    "Search for relevant articles during case handling",
                    "Share articles with customers",
                    "Provide feedback on article usefulness",
                    "Identify content gaps when articles don't exist",
                    "Rate article helpfulness",
                    "Track which articles help resolve cases"
                ],
                key_goals=[
                    "Find relevant articles quickly",
                    "Resolve cases faster with self-service content",
                    "Identify and report content gaps",
                    "Improve article quality through feedback",
                    "Reduce case resolution time"
                ],
                common_challenges=[
                    "Search doesn't return the right articles",
                    "Too many or too few search results",
                    "Articles are outdated or inaccurate",
                    "Can't find articles for specific issues",
                    "Articles are too generic or not actionable",
                    "Feedback doesn't lead to improvements"
                ],
                tools_used=["Case Console", "Knowledge Search", "Article Sharing", "Feedback Forms"],
                technical_skill_level="beginner",
                org_size_context="varies"
            ),
            "end_customer": Persona(
                name="End Customer / Portal User",
                user_type="end_customer",
                role_description=(
                    "Self-service user accessing Knowledge through Experience Cloud portals, "
                    "in-app help, or other channels. Wants to solve problems independently "
                    "without creating a support case."
                ),
                daily_tasks=[
                    "Search for solutions to problems",
                    "Browse knowledge articles",
                    "Read step-by-step guides",
                    "Rate article helpfulness",
                    "Submit feedback on articles",
                    "Navigate product-specific content"
                ],
                key_goals=[
                    "Find answers quickly without contacting support",
                    "Understand solutions clearly",
                    "Follow step-by-step instructions",
                    "Access content on any device",
                    "Trust that content is current and accurate"
                ],
                common_challenges=[
                    "Search doesn't find what they're looking for",
                    "Articles are too technical or generic",
                    "Content is outdated or incorrect",
                    "Can't find content for their specific product/version",
                    "Portal experience is inconsistent",
                    "Mobile experience is poor"
                ],
                tools_used=["Experience Cloud Portal", "In-App Help", "Mobile App"],
                technical_skill_level="beginner",
                org_size_context="varies"
            )
        }
    
    def _initialize_product_details(self) -> Dict[str, ProductDetail]:
        """Initialize Salesforce Knowledge product details."""
        return {
            "knowledge_base": ProductDetail(
                feature_name="Salesforce Knowledge",
                category="Core Platform",
                description=(
                    "Salesforce Knowledge enables organizations to create, manage, and share "
                    "knowledge articles to improve customer self-service and agent productivity. "
                    "It's part of Service Cloud and integrates with Cases, Experience Cloud, Chat, Email, "
                    "and other channels. Knowledge articles are stored as Salesforce records and can be "
                    "organized using data categories, article types, and record types."
                ),
                current_capabilities=[
                    "Article authoring with rich text editor (Lightning and Classic)",
                    "Multiple article types and record types for content organization",
                    "Data categories and data category groups for hierarchical organization",
                    "Article lifecycle management (Draft, Published, Archived, Obsolete)",
                    "Article versioning with version history tracking",
                    "Multi-language support with translation workflows",
                    "Article attachments and file uploads",
                    "Article expiration dates and review reminders",
                    "Knowledge search with keyword matching and filters",
                    "Experience Cloud (Community) integration",
                    "Case deflection tracking and metrics",
                    "Article ratings (thumbs up/down) and comments",
                    "Article view tracking and analytics",
                    "Sharing rules and field-level security",
                    "Article assignment and ownership",
                    "Custom fields and page layouts",
                    "Workflow rules and Process Builder support",
                    "Apex and API access for customizations",
                    "Standard Knowledge reports and dashboards",
                    "Einstein Search integration (when enabled)",
                    "Article recommendations in Case feed",
                    "Knowledge component in Lightning App Builder"
                ],
                limitations=[
                    "Requires Service Cloud license (or Knowledge User license)",
                    "Limited search relevance tuning without custom development",
                    "Basic rich text editor compared to modern help center platforms",
                    "Complex approval workflows require custom development (Process Builder/Flow)",
                    "Feedback data stored across multiple objects (Vote, Feed, custom objects)",
                    "Limited cross-channel analytics out-of-the-box",
                    "Migration from Classic Knowledge requires data migration tools",
                    "Article limits: 5,000 published articles per org (can be increased)",
                    "Data category limits: 1,000 categories per group",
                    "No built-in content health scoring",
                    "Limited template customization without code",
                    "No native content collaboration features (like Google Docs)",
                    "Article preview limited in authoring interface",
                    "Bulk operations require custom tools or Data Loader"
                ],
                related_features=[
                    "Service Cloud", "Experience Cloud", "Case Management", "Chat", 
                    "Einstein Search", "Einstein Article Recommendations", "Workflow", 
                    "Process Builder", "Flow", "Reports & Dashboards", "Sharing Rules"
                ]
            ),
            "search": ProductDetail(
                feature_name="Knowledge Search",
                category="Search & Discovery",
                description=(
                    "Search functionality that allows users to find knowledge articles using keywords, "
                    "filters, and data categories. Powers self-service across multiple channels including "
                    "Lightning Experience, Experience Cloud portals, Case console, and mobile. Search "
                    "can be enhanced with Einstein Search for AI-powered relevance."
                ),
                current_capabilities=[
                    "Keyword-based full-text search across article title, summary, and body",
                    "Data category filtering (single and multi-select)",
                    "Article type filtering",
                    "Article status filtering (Published, Draft, etc.)",
                    "Search within article content and attachments",
                    "Search result ranking based on relevance",
                    "Search in Lightning Knowledge component",
                    "Search in Experience Cloud Knowledge component",
                    "Search in Case console (in-context search)",
                    "Search in mobile app",
                    "Search suggestions and autocomplete (when Einstein Search enabled)",
                    "Search analytics via Knowledge Usage reports",
                    "Search result highlighting",
                    "Article preview in search results",
                    "Sort by relevance or date",
                    "Filter by language (when multi-language enabled)",
                    "Guest user search (in Experience Cloud with proper permissions)"
                ],
                limitations=[
                    "Limited relevance tuning controls without custom development",
                    "No built-in AI-powered typo correction or synonym handling",
                    "No case context integration in standard search",
                    "Limited search insights out-of-the-box (basic reports only)",
                    "No saved search scopes or search history",
                    "No search result personalization without Einstein",
                    "Limited support for complex search queries (no boolean operators in UI)",
                    "Search performance can degrade with very large article volumes",
                    "No search result A/B testing capabilities",
                    "Limited search analytics (no zero-result query tracking out-of-box)",
                    "No search result feedback loop for relevance improvement",
                    "Einstein Search requires additional licensing"
                ],
                related_features=[
                    "Einstein Search", "Data Categories", "Article Types", 
                    "Knowledge Usage Reports", "Case Console", "Experience Cloud"
                ]
            ),
            "authoring": ProductDetail(
                feature_name="Article Authoring",
                category="Content Management",
                description=(
                    "Tools and interfaces for creating and editing knowledge articles. "
                    "Includes rich text editor (Lightning and Classic), article templates, "
                    "versioning, and content management features. Authors can create articles "
                    "in multiple languages and manage translations."
                ),
                current_capabilities=[
                    "Rich text editor with formatting options (bold, italic, lists, links, etc.)",
                    "Article templates (predefined structures for common article types)",
                    "Article versioning with automatic version numbers",
                    "Draft, publish, and archive workflow",
                    "Article attachments (files, images, documents)",
                    "Image insertion and basic image editing",
                    "Table creation and formatting",
                    "Hyperlink insertion",
                    "Article summary field for preview text",
                    "Custom fields for metadata (product, version, etc.)",
                    "Multi-language article creation and translation workflows",
                    "Article assignment and ownership",
                    "Article expiration dates and review reminders",
                    "Article validation rules",
                    "Page layouts for different article types",
                    "Article preview (limited)",
                    "Bulk article creation via Data Loader/API",
                    "Article cloning/duplication",
                    "Article merge capabilities",
                    "Rich text editor in both Lightning and Classic"
                ],
                limitations=[
                    "Limited template flexibility (templates are basic, not highly customizable)",
                    "No collapsible sections or accordions in standard editor",
                    "No guided authoring wizards or step-by-step creation flows",
                    "Limited multimedia support (images and attachments only, no video embedding)",
                    "No content health signals in authoring UI (stale content, low ratings, etc.)",
                    "Basic formatting options compared to modern content management systems",
                    "No real-time collaboration (no co-authoring or comments during editing)",
                    "Limited WYSIWYG preview (preview doesn't match exact end-user view)",
                    "No content suggestions or AI-assisted writing",
                    "No built-in content style guide or checklist",
                    "Limited support for complex layouts (no drag-and-drop page builder)",
                    "No content snippets or reusable components",
                    "Article body field has character limits (32,000 characters)",
                    "No version comparison UI (must use version history)",
                    "Limited undo/redo functionality"
                ],
                related_features=[
                    "Rich Text Editor", "Article Types", "Data Categories", "Workflow", 
                    "Process Builder", "Translation Workbench", "Page Layouts", "Validation Rules"
                ]
            ),
            "governance": ProductDetail(
                feature_name="Content Governance",
                category="Administration",
                description=(
                    "Features for managing article lifecycle, approvals, ownership, and compliance. "
                    "Includes workflows, permissions, sharing rules, and administrative controls. "
                    "Governance is primarily configured through custom workflows, approval processes, "
                    "and sharing rules rather than out-of-the-box features."
                ),
                current_capabilities=[
                    "Article approval workflows (custom via Process Builder, Flow, or Apex)",
                    "User permissions via profiles and permission sets",
                    "Article sharing rules (public, private, restricted)",
                    "Field-level security for article fields",
                    "Article ownership and assignment",
                    "Data category management and data category groups",
                    "Record type configuration for different article types",
                    "Article expiration dates and review reminders",
                    "Article status field (Draft, In Review, Published, Archived, Obsolete)",
                    "Custom fields for governance metadata (reviewer, approval status, etc.)",
                    "Validation rules for article quality",
                    "Workflow rules and Process Builder automation",
                    "Flow-based approval processes",
                    "Email notifications for article lifecycle events",
                    "Article assignment rules",
                    "Sharing settings (public read-only, public read/write, private)",
                    "Knowledge User license for read-only access",
                    "Article access via sharing rules and criteria"
                ],
                limitations=[
                    "Workflows and approval processes require custom development (no out-of-box approval)",
                    "No role-based work queues out-of-the-box (must build custom)",
                    "Limited lifecycle state management (only basic status field)",
                    "No SLA tracking for approvals or review cycles",
                    "Complex setup for multi-product orgs (requires careful data category design)",
                    "Limited diagnostics for limits (no built-in alerts for approaching limits)",
                    "No built-in content ownership dashboards",
                    "No automated content quality scoring",
                    "No built-in content review scheduling",
                    "Limited bulk governance operations",
                    "No content governance reports out-of-the-box",
                    "Complex permission model (profiles, permission sets, sharing rules)",
                    "No content ownership transfer workflows",
                    "Limited audit trail for governance actions"
                ],
                related_features=[
                    "Workflow", "Process Builder", "Flow", "Approval Process", 
                    "Sharing Rules", "Data Categories", "Profiles", "Permission Sets",
                    "Field-Level Security", "Validation Rules"
                ]
            ),
            "analytics": ProductDetail(
                feature_name="Knowledge Analytics",
                category="Analytics & Reporting",
                description=(
                    "Reporting and analytics capabilities for understanding article performance, "
                    "user engagement, and case deflection. Includes standard Knowledge reports, "
                    "custom report types, and dashboard capabilities. Analytics data comes from "
                    "Knowledge Usage object, article views, ratings, and case deflection metrics."
                ),
                current_capabilities=[
                    "Standard Knowledge reports (Article Performance, Knowledge Usage, etc.)",
                    "Article view tracking via Knowledge Usage object",
                    "Article rating aggregation (thumbs up/down counts)",
                    "Case deflection reports (articles linked to cases)",
                    "Custom report types for Knowledge objects",
                    "Dashboard capabilities with Knowledge report components",
                    "Article view counts and trends",
                    "Most viewed articles reports",
                    "Article rating reports (positive/negative)",
                    "Knowledge Usage by User reports",
                    "Case deflection metrics",
                    "Article performance by data category",
                    "Article performance by article type",
                    "Knowledge Usage by Experience Cloud site",
                    "Report filtering and grouping",
                    "Scheduled report delivery",
                    "Report exports (CSV, Excel)",
                    "Einstein Analytics integration (when enabled)"
                ],
                limitations=[
                    "Feedback data scattered across multiple objects (Vote, Feed, custom objects)",
                    "No unified feedback dashboard out-of-the-box",
                    "Limited search analytics (no zero-result queries, no search term analysis)",
                    "No content health scoring (no stale content, low-rated content alerts)",
                    "Limited cross-channel analytics (difficult to correlate portal vs in-case usage)",
                    "No actionable insights out-of-the-box (must build custom dashboards)",
                    "No article effectiveness scoring",
                    "Limited article lifecycle analytics (no time-in-status tracking)",
                    "No content gap analysis (no search queries without results)",
                    "Limited user behavior analytics (no click paths, no time-on-article)",
                    "No predictive analytics (which articles will be most helpful)",
                    "Knowledge Usage object has limits on data retention",
                    "No real-time analytics (reports are based on historical data)",
                    "Limited article comparison analytics",
                    "No content ROI calculations out-of-the-box"
                ],
                related_features=[
                    "Reports & Dashboards", "Einstein Analytics", "Case Management", 
                    "Knowledge Usage Object", "Experience Cloud Analytics"
                ]
            ),
            "experience_cloud": ProductDetail(
                feature_name="Experience Cloud Integration",
                category="Channel Integration",
                description=(
                    "Integration between Knowledge and Experience Cloud (formerly Community Cloud) "
                    "to provide self-service portals for external users. Knowledge articles can be "
                    "displayed in Experience Cloud sites with search, filtering, and navigation. "
                    "Supports both guest users and authenticated community members."
                ),
                current_capabilities=[
                    "Knowledge component in Experience Cloud (Lightning component)",
                    "Knowledge search in Experience Cloud sites",
                    "Article display in portal pages",
                    "Data category navigation and filtering",
                    "Article type filtering",
                    "Responsive design support (mobile-friendly)",
                    "Guest user access (with proper sharing rules)",
                    "Authenticated user access with permissions",
                    "Article ratings and feedback in portal",
                    "Article view tracking in Experience Cloud",
                    "Custom branding and styling (with CSS)",
                    "Knowledge base navigation components",
                    "Article list views",
                    "Article detail pages",
                    "Search result pages",
                    "Multi-language support in portals",
                    "Article sharing from portal",
                    "Article print functionality",
                    "Article email sharing",
                    "Integration with Experience Cloud search"
                ],
                limitations=[
                    "Limited template options (must customize Lightning components)",
                    "Inconsistent behavior vs Lightning Experience (different UI patterns)",
                    "Migration complexity from Classic Knowledge to Lightning",
                    "Limited customization without code (requires Lightning component development)",
                    "No product-specific navigation patterns out-of-the-box",
                    "Limited cross-channel insights (difficult to see portal vs in-case usage)",
                    "Guest user permissions require careful sharing rule configuration",
                    "No built-in article recommendation engine",
                    "Limited article preview options",
                    "No built-in article feedback collection UI",
                    "Search experience differs from Lightning Knowledge search",
                    "Limited mobile optimization (basic responsive, not native mobile app)",
                    "No built-in article analytics in portal",
                    "Complex setup for multi-brand portals",
                    "Limited A/B testing capabilities",
                    "No built-in article personalization"
                ],
                related_features=[
                    "Experience Cloud", "Lightning Components", "Site.com", 
                    "Lightning App Builder", "Sharing Rules", "Guest User Access"
                ]
            ),
            "einstein": ProductDetail(
                feature_name="Einstein for Knowledge",
                category="AI & Machine Learning",
                description=(
                    "AI-powered features that enhance Knowledge with machine learning capabilities. "
                    "Includes Einstein Search for improved relevance, Einstein Article Recommendations "
                    "for case deflection, and intelligent content suggestions. Requires Einstein licenses."
                ),
                current_capabilities=[
                    "Einstein Search for improved search relevance",
                    "Natural language search queries",
                    "Search result ranking based on user behavior",
                    "Einstein Article Recommendations in Case feed",
                    "Article recommendations based on case context",
                    "Search suggestions and autocomplete",
                    "Learning from user interactions",
                    "Multi-language search support",
                    "Intent-based article matching"
                ],
                limitations=[
                    "Requires Einstein Search or Einstein Platform licenses",
                    "Additional cost beyond standard Knowledge licenses",
                    "Limited customization of AI models",
                    "Training data requirements (needs usage history)",
                    "Not available in all Salesforce editions",
                    "Limited control over recommendation algorithms",
                    "No explainability for why articles are recommended",
                    "Requires sufficient data volume for effectiveness",
                    "No A/B testing of AI models",
                    "Limited admin controls for tuning"
                ],
                related_features=[
                    "Einstein Search", "Einstein Platform", "Case Management", 
                    "Einstein Article Recommendations"
                ]
            ),
            "api_integration": ProductDetail(
                feature_name="Knowledge API & Integration",
                category="Integration & Development",
                description=(
                    "API and integration capabilities for programmatic access to Knowledge articles, "
                    "custom integrations, and third-party tool connections. Includes REST API, SOAP API, "
                    "and Apex classes for Knowledge operations."
                ),
                current_capabilities=[
                    "REST API for Knowledge article CRUD operations",
                    "SOAP API support",
                    "Apex classes for Knowledge operations (KnowledgeManagement, etc.)",
                    "Bulk API for mass article operations",
                    "Article metadata API access",
                    "Data category API access",
                    "Article version API access",
                    "Knowledge Usage API access",
                    "Custom Lightning components development",
                    "External system integration via API",
                    "Article import/export via Data Loader",
                    "Article synchronization capabilities",
                    "Webhook support (via Process Builder/Flow)",
                    "Article content extraction via API"
                ],
                limitations=[
                    "API rate limits apply (varies by org)",
                    "Complex article body content via API (rich text handling)",
                    "Limited real-time event notifications",
                    "No GraphQL API for Knowledge",
                    "Article attachments require separate API calls",
                    "Data category operations can be complex",
                    "Limited API documentation for advanced use cases",
                    "No built-in API testing tools",
                    "Article versioning via API requires careful handling",
                    "Multi-language article operations via API are complex"
                ],
                related_features=[
                    "REST API", "SOAP API", "Apex", "Bulk API", "Data Loader", 
                    "Lightning Components", "Process Builder", "Flow"
                ]
            )
        }
    
    def _get_customer_context(self, prompt: str) -> Dict[str, Any]:
        """
        Analyze prompt and extract relevant customer feedback themes.
        Returns context that should be considered.
        """
        prompt_lower = prompt.lower()
        relevant_themes = []
        
        # Keyword-based theme matching
        search_keywords = ["search", "discovery", "find", "query", "result", "relevance"]
        authoring_keywords = ["author", "content", "editor", "format", "template", "quality"]
        governance_keywords = ["governance", "lifecycle", "workflow", "approval", "version", "manage"]
        feedback_keywords = ["feedback", "rating", "analytics", "dashboard", "metric"]
        experience_keywords = ["experience cloud", "portal", "channel", "external", "migration"]
        
        if any(kw in prompt_lower for kw in search_keywords):
            relevant_themes.append("search_discovery")
        if any(kw in prompt_lower for kw in authoring_keywords):
            relevant_themes.append("authoring_quality")
        if any(kw in prompt_lower for kw in governance_keywords):
            relevant_themes.append("governance_lifecycle")
        if any(kw in prompt_lower for kw in feedback_keywords):
            relevant_themes.append("feedback_analytics")
        if any(kw in prompt_lower for kw in experience_keywords):
            relevant_themes.append("experience_cloud")
        
        # If no specific themes match, consider all themes (customer-backward thinking)
        if not relevant_themes:
            relevant_themes = list(self.feedback_themes.keys())
        
        # Identify relevant personas based on prompt
        prompt_lower = prompt.lower()
        relevant_personas = []
        
        if any(kw in prompt_lower for kw in ["admin", "governance", "configuration", "setup"]):
            relevant_personas.append("knowledge_admin")
        if any(kw in prompt_lower for kw in ["author", "write", "create", "content", "sme"]):
            relevant_personas.append("content_author")
        if any(kw in prompt_lower for kw in ["agent", "support", "case", "resolve"]):
            relevant_personas.append("support_agent")
        if any(kw in prompt_lower for kw in ["customer", "end user", "portal", "self-service", "external"]):
            relevant_personas.append("end_customer")
        
        # If no personas identified, include all
        if not relevant_personas:
            relevant_personas = list(self.personas.keys())
        
        # Identify relevant product details
        relevant_products = []
        if any(kw in prompt_lower for kw in ["search", "find", "discovery", "query"]):
            relevant_products.append("search")
        if any(kw in prompt_lower for kw in ["author", "editor", "write", "content", "article creation"]):
            relevant_products.append("authoring")
        if any(kw in prompt_lower for kw in ["governance", "workflow", "approval", "lifecycle", "compliance"]):
            relevant_products.append("governance")
        if any(kw in prompt_lower for kw in ["analytics", "report", "dashboard", "metric", "insight"]):
            relevant_products.append("analytics")
        if any(kw in prompt_lower for kw in ["experience cloud", "portal", "community", "external", "site"]):
            relevant_products.append("experience_cloud")
        if any(kw in prompt_lower for kw in ["einstein", "ai", "machine learning", "ml", "recommendation", "intelligent"]):
            relevant_products.append("einstein")
        if any(kw in prompt_lower for kw in ["api", "integration", "rest", "soap", "apex", "developer", "programmatic"]):
            relevant_products.append("api_integration")
        
        return {
            "relevant_themes": relevant_themes,
            "all_themes": list(self.feedback_themes.keys()),
            "customer_insights": self.customer_insights,
            "relevant_personas": relevant_personas,
            "all_personas": list(self.personas.keys()),
            "relevant_products": relevant_products,
            "all_products": list(self.product_details.keys())
        }
    
    def _build_customer_backward_prompt(self, original_prompt: str, context: Dict[str, Any]) -> str:
        """Build an enhanced prompt that incorporates customer feedback."""
        enhanced_prompt = f"""
CUSTOMER-BACKWARD PRODUCT MANAGEMENT CONTEXT:
You are making product decisions for Salesforce Knowledge. Always prioritize customer value and feedback.

ORIGINAL PROMPT:
{original_prompt}

RELEVANT CUSTOMER FEEDBACK TO CONSIDER:
"""
        
        for theme_key in context["relevant_themes"]:
            theme = self.feedback_themes[theme_key]
            enhanced_prompt += f"""
--- {theme.category} ---
Problem: {theme.problem_statement}
Improvement Plan:
"""
            for item in theme.improvement_plan:
                enhanced_prompt += f"  • {item}\n"
            enhanced_prompt += f"Key Metrics: {', '.join(theme.key_metrics)}\n"
        
        enhanced_prompt += """
KEY CUSTOMER INSIGHTS:
"""
        for insight in context["customer_insights"]:
            if insight.priority == "high":
                enhanced_prompt += f"  • [{insight.user_type}] {insight.pain_point} - {insight.impact}\n"
        
        # Add relevant personas
        if context.get("relevant_personas"):
            enhanced_prompt += """
RELEVANT USER PERSONAS:
"""
            for persona_key in context["relevant_personas"]:
                persona = self.personas[persona_key]
                enhanced_prompt += f"""
--- {persona.name} ({persona.user_type}) ---
Role: {persona.role_description}
Daily Tasks: {', '.join(persona.daily_tasks[:3])}...
Key Goals: {', '.join(persona.key_goals[:3])}...
Common Challenges: {', '.join(persona.common_challenges[:3])}...
Technical Skill: {persona.technical_skill_level}
"""
        
        # Add relevant product details
        if context.get("relevant_products"):
            enhanced_prompt += """
SALESFORCE KNOWLEDGE PRODUCT CONTEXT:
"""
            for product_key in context["relevant_products"]:
                product = self.product_details[product_key]
                enhanced_prompt += f"""
--- {product.feature_name} ({product.category}) ---
Description: {product.description}
Current Capabilities: {', '.join(product.current_capabilities[:5])}...
Limitations: {', '.join(product.limitations[:3])}...
"""
        
        enhanced_prompt += """
CUSTOMER-BACKWARD THINKING PRINCIPLES:
1. Always ask: "How does this solve a real customer problem?"
2. Prioritize features that address high-priority pain points
3. Consider impact on case deflection and self-service success
4. Ensure solutions are measurable against customer success metrics
5. Think about all user types: admins, authors, agents, and end customers

Now, provide your response considering the above customer context:
"""
        
        return enhanced_prompt
    
    def process_prompt(self, prompt: str, include_context: bool = True) -> Dict[str, Any]:
        """
        Process a prompt with customer-backward thinking.
        
        Args:
            prompt: The original prompt/question
            include_context: Whether to include full customer context in response
        
        Returns:
            Dictionary with enhanced prompt, relevant themes, and recommendations
        """
        context = self._get_customer_context(prompt)
        enhanced_prompt = self._build_customer_backward_prompt(prompt, context)
        
        # Extract relevant themes for response
        relevant_theme_objects = {
            theme_key: self.feedback_themes[theme_key]
            for theme_key in context["relevant_themes"]
        }
        
        response = {
            "timestamp": datetime.now().isoformat(),
            "original_prompt": prompt,
            "enhanced_prompt": enhanced_prompt,
            "relevant_feedback_themes": {
                theme_key: {
                    "category": theme.category,
                    "problem": theme.problem_statement,
                    "improvements": theme.improvement_plan,
                    "metrics": theme.key_metrics
                }
                for theme_key, theme in relevant_theme_objects.items()
            },
            "customer_insights_considered": [
                {
                    "user_type": insight.user_type,
                    "pain_point": insight.pain_point,
                    "impact": insight.impact,
                    "priority": insight.priority
                }
                for insight in context["customer_insights"]
                if insight.priority == "high"
            ],
            "relevant_personas": {
                persona_key: {
                    "name": persona.name,
                    "user_type": persona.user_type,
                    "role_description": persona.role_description,
                    "key_goals": persona.key_goals,
                    "common_challenges": persona.common_challenges
                }
                for persona_key in context.get("relevant_personas", [])
                for persona in [self.personas[persona_key]]
            },
            "relevant_product_details": {
                product_key: {
                    "feature_name": product.feature_name,
                    "category": product.category,
                    "description": product.description,
                    "current_capabilities": product.current_capabilities,
                    "limitations": product.limitations,
                    "related_features": product.related_features
                }
                for product_key in context.get("relevant_products", [])
                for product in [self.product_details[product_key]]
            }
        }
        
        # Store in decision history
        self.decision_history.append(response)
        
        return response
    
    def get_feedback_summary(self) -> str:
        """Get a summary of all customer feedback themes."""
        summary = "SALESFORCE KNOWLEDGE CUSTOMER FEEDBACK SUMMARY\n"
        summary += "=" * 60 + "\n\n"
        
        for theme_key, theme in self.feedback_themes.items():
            summary += f"{theme.category}\n"
            summary += "-" * 60 + "\n"
            summary += f"Problem: {theme.problem_statement}\n\n"
            summary += "Improvement Plan:\n"
            for i, item in enumerate(theme.improvement_plan, 1):
                summary += f"  {i}. {item}\n"
            summary += f"\nKey Metrics: {', '.join(theme.key_metrics)}\n\n"
        
        return summary
    
    def get_recommendations_for_prompt(self, prompt: str) -> List[str]:
        """
        Get specific product recommendations based on prompt and customer feedback.
        """
        context = self._get_customer_context(prompt)
        recommendations = []
        
        for theme_key in context["relevant_themes"]:
            theme = self.feedback_themes[theme_key]
            recommendations.extend(theme.improvement_plan)
        
        return recommendations
    
    def generate_response(self, prompt: str, max_recommendations: int = 5) -> str:
        """
        Generate a narrative response to a prompt using customer-backward thinking.
        
        Args:
            prompt: The original prompt/question
            max_recommendations: Maximum number of recommendations to include
        
        Returns:
            A narrative response string with customer context and recommendations
        """
        response_data = self.process_prompt(prompt)
        
        # Build narrative response
        answer_parts = []
        
        # Introduction
        answer_parts.append("💬 **Customer-Backward Analysis**\n")
        answer_parts.append(f"Question: {prompt}\n")
        answer_parts.append("=" * 70 + "\n")
        
        # Customer feedback context
        if response_data['relevant_feedback_themes']:
            themes_count = len(response_data['relevant_feedback_themes'])
            if themes_count == 1:
                theme_name = list(response_data['relevant_feedback_themes'].values())[0]['category']
                answer_parts.append(f"\n🎯 **Primary Focus: {theme_name}**\n")
            else:
                answer_parts.append(f"\n🎯 **Customer Feedback Areas ({themes_count}):**\n")
            
            for theme_key, theme_info in list(response_data['relevant_feedback_themes'].items())[:3]:
                answer_parts.append(f"**{theme_info['category']}**\n")
                answer_parts.append(f"Problem: {theme_info['problem']}\n")
                if theme_info['metrics']:
                    answer_parts.append(f"Key Metrics: {', '.join(theme_info['metrics'][:3])}\n")
                answer_parts.append("")
        
        # Persona context
        if response_data['relevant_personas']:
            personas = list(response_data['relevant_personas'].values())
            if len(personas) == 1:
                persona = personas[0]
                answer_parts.append(f"\n👤 **Key User: {persona['name']}**\n")
                answer_parts.append(f"Role: {persona['role_description'][:200]}...\n")
                if persona['common_challenges']:
                    answer_parts.append(f"Top Challenge: {persona['common_challenges'][0]}\n")
            else:
                answer_parts.append(f"\n👥 **Affected Users ({len(personas)}):**\n")
                for persona in personas[:3]:
                    answer_parts.append(f"- {persona['name']}: {persona['role_description'][:100]}...\n")
        
        # Product context
        if response_data['relevant_product_details']:
            products = list(response_data['relevant_product_details'].values())
            product = products[0]
            answer_parts.append(f"\n🔧 **Current State: {product['feature_name']}**\n")
            answer_parts.append(f"{product['description'][:200]}...\n")
            
            if product['limitations']:
                answer_parts.append(f"\n⚠️ **Known Limitations ({len(product['limitations'])}):**\n")
                for limitation in product['limitations'][:3]:
                    answer_parts.append(f"- {limitation}\n")
        
        # Recommendations
        recommendations = self.get_recommendations_for_prompt(prompt)
        if recommendations:
            answer_parts.append(f"\n💡 **Recommended Actions**\n")
            for i, rec in enumerate(recommendations[:max_recommendations], 1):
                answer_parts.append(f"{i}. {rec}\n")
            if len(recommendations) > max_recommendations:
                answer_parts.append(f"\n... and {len(recommendations) - max_recommendations} more recommendations\n")
        
        # Customer insights
        if response_data['customer_insights_considered']:
            answer_parts.append(f"\n📊 **High-Priority Customer Insights**\n")
            for insight in response_data['customer_insights_considered'][:3]:
                answer_parts.append(f"- [{insight['user_type']}] {insight['pain_point']}\n")
                answer_parts.append(f"  Impact: {insight['impact']}\n")
        
        # Closing
        answer_parts.append("\n" + "=" * 70)
        answer_parts.append("\n💭 **Customer-Backward Principle:** Every recommendation above addresses real customer pain points and is measurable against customer success metrics.\n")
        
        return "".join(answer_parts)
    
    def export_decision_history(self, filename: Optional[str] = None) -> str:
        """Export decision history to JSON file."""
        if filename is None:
            filename = f"pm_decisions_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        
        with open(filename, 'w') as f:
            json.dump(self.decision_history, f, indent=2)
        
        return filename


def main():
    """Example usage of the PM Agent."""
    agent = SalesforceKnowledgePMAgent()
    
    print("=" * 70)
    print("SALESFORCE KNOWLEDGE PM AGENT - Customer-Backward Thinking")
    print("=" * 70)
    print("\nThis agent always considers customer feedback in all decisions.\n")
    
    # Example prompts
    example_prompts = [
        "How should we improve search functionality?",
        "What features should we prioritize for the next release?",
        "How can we help authors create better content?",
        "What analytics should we build for admins?"
    ]
    
    print("Example usage:\n")
    for i, prompt in enumerate(example_prompts, 1):
        print(f"\n{'='*70}")
        print(f"Example {i}: {prompt}")
        print('='*70)
        
        response = agent.process_prompt(prompt)
        
        print(f"\nRelevant Customer Feedback Themes:")
        for theme_key, theme_info in response["relevant_feedback_themes"].items():
            print(f"\n  • {theme_info['category']}")
            print(f"    Problem: {theme_info['problem'][:100]}...")
        
        print(f"\nHigh-Priority Customer Insights:")
        for insight in response["customer_insights_considered"]:
            print(f"  • [{insight['user_type']}] {insight['pain_point']}")
    
    print("\n\n" + "="*70)
    print("Full Customer Feedback Summary:")
    print("="*70)
    print(agent.get_feedback_summary())


if __name__ == "__main__":
    main()

