# Extension Guide: Adding More Details to the PM Agent

This guide shows you how to add more Salesforce Knowledge details and persona information to enhance the PM agent.

## Table of Contents

1. [Adding New Personas](#adding-new-personas)
2. [Enhancing Existing Personas](#enhancing-existing-personas)
3. [Adding Product Details](#adding-product-details)
4. [Adding New Feedback Themes](#adding-new-feedback-themes)
5. [Adding Customer Insights](#adding-customer-insights)

---

## Adding New Personas

Personas represent different user types who interact with Salesforce Knowledge. To add a new persona:

### Step 1: Define the Persona

Edit `salesforce_pm_agent.py` and add to the `_initialize_personas()` method:

```python
"new_persona_key": Persona(
    name="Persona Display Name",
    user_type="admin",  # or "author", "agent", "end_customer"
    role_description="Detailed description of their role and responsibilities",
    daily_tasks=[
        "Task 1",
        "Task 2",
        "Task 3",
        # Add more tasks
    ],
    key_goals=[
        "Goal 1",
        "Goal 2",
        # Add more goals
    ],
    common_challenges=[
        "Challenge 1",
        "Challenge 2",
        # Add more challenges
    ],
    tools_used=["Tool 1", "Tool 2"],  # Optional
    technical_skill_level="intermediate",  # beginner, intermediate, advanced
    org_size_context="enterprise"  # small, medium, large, enterprise, varies
)
```

### Example: Adding a "Knowledge Manager" Persona

```python
"knowledge_manager": Persona(
    name="Knowledge Manager",
    user_type="admin",
    role_description=(
        "Strategic role responsible for knowledge base strategy, content planning, "
        "and measuring ROI. Works with admins and authors to optimize content effectiveness."
    ),
    daily_tasks=[
        "Analyze content performance metrics",
        "Plan content roadmap and priorities",
        "Review feedback trends and patterns",
        "Coordinate content strategy across products",
        "Report on knowledge base ROI and deflection"
    ],
    key_goals=[
        "Maximize case deflection",
        "Improve content ROI",
        "Ensure content aligns with business goals",
        "Drive continuous improvement"
    ],
    common_challenges=[
        "Lack of actionable analytics",
        "Difficulty correlating content to business outcomes",
        "No clear prioritization framework",
        "Limited visibility into content gaps"
    ],
    tools_used=["Reports & Dashboards", "Einstein Analytics", "Excel"],
    technical_skill_level="intermediate",
    org_size_context="enterprise"
)
```

### Step 2: Update Keyword Matching (Optional)

If you want the agent to automatically identify this persona based on prompt keywords, update the `_get_customer_context()` method:

```python
if any(kw in prompt_lower for kw in ["manager", "strategy", "roi", "metrics"]):
    relevant_personas.append("knowledge_manager")
```

---

## Enhancing Existing Personas

To add more details to existing personas, simply edit the persona definition in `_initialize_personas()`.

### Example: Adding More Details to Knowledge Admin

```python
"knowledge_admin": Persona(
    name="Knowledge Administrator",
    user_type="admin",
    role_description=(
        "Manages the Knowledge base configuration, governance, workflows, "
        "and overall content strategy. Responsible for maintaining content quality, "
        "ensuring compliance, and optimizing the knowledge experience."
    ),
    daily_tasks=[
        # Add more specific tasks
        "Configure data categories and record types",
        "Manage article lifecycle and approval workflows",
        "Monitor content quality and freshness",
        "Set up search relevance and tuning",
        "Manage user permissions and access",
        "Review analytics and feedback reports",
        "Coordinate with content owners and SMEs",
        "Troubleshoot search issues",  # NEW
        "Manage article translations",  # NEW
        "Configure Experience Cloud knowledge components"  # NEW
    ],
    key_goals=[
        # Add more goals
        "Maintain high content quality and freshness",
        "Ensure governance and compliance",
        "Maximize case deflection through self-service",
        "Scale knowledge base efficiently",
        "Improve search relevance and user experience",
        "Reduce admin overhead",  # NEW
        "Enable self-service for authors"  # NEW
    ],
    # ... rest of persona
)
```

---

## Adding Product Details

Product details help the agent understand current Salesforce Knowledge capabilities and limitations.

### Step 1: Define the Product Detail

Add to the `_initialize_product_details()` method:

```python
"new_feature_key": ProductDetail(
    feature_name="Feature Display Name",
    category="Category Name",
    description="Detailed description of the feature",
    current_capabilities=[
        "Capability 1",
        "Capability 2",
        # Add more capabilities
    ],
    limitations=[
        "Limitation 1",
        "Limitation 2",
        # Add more limitations
    ],
    related_features=["Feature 1", "Feature 2"]  # Optional
)
```

### Example: Adding Einstein Search Details

```python
"einstein_search": ProductDetail(
    feature_name="Einstein Search for Knowledge",
    category="AI & Search",
    description=(
        "AI-powered search capabilities that use machine learning to improve "
        "search relevance and provide intelligent suggestions."
    ),
    current_capabilities=[
        "Natural language search",
        "Intent-based ranking",
        "Learning from user behavior",
        "Multi-language search support"
    ],
    limitations=[
        "Requires Einstein Search license",
        "Limited customization options",
        "Training data requirements",
        "Not available in all orgs"
    ],
    related_features=["Knowledge Search", "Einstein", "Case Deflection"]
)
```

### Step 2: Update Keyword Matching

Update `_get_customer_context()` to identify this product:

```python
if any(kw in prompt_lower for kw in ["einstein", "ai search", "ml", "machine learning"]):
    relevant_products.append("einstein_search")
```

---

## Adding New Feedback Themes

Feedback themes represent major areas of customer feedback.

### Step 1: Add the Theme

Add to `_initialize_feedback_themes()`:

```python
"new_theme_key": FeedbackTheme(
    category="Theme Category Name",
    problem_statement=(
        "Detailed description of the customer problem or pain point."
    ),
    improvement_plan=[
        "Improvement 1: detailed description",
        "Improvement 2: detailed description",
        "Improvement 3: detailed description"
    ],
    key_metrics=[
        "Metric 1",
        "Metric 2",
        "Metric 3"
    ]
)
```

### Example: Adding Mobile Experience Theme

```python
"mobile_experience": FeedbackTheme(
    category="Mobile & Accessibility",
    problem_statement=(
        "Users accessing Knowledge on mobile devices struggle with navigation, "
        "reading long articles, and interacting with content. The experience is "
        "not optimized for touch interfaces and small screens."
    ),
    improvement_plan=[
        "Mobile-optimized article templates: responsive layouts, touch-friendly controls, and progressive disclosure for long articles.",
        "Offline article access: allow users to download articles for offline reading when connectivity is poor.",
        "Mobile-specific search: voice search, camera-based search (scan QR codes), and location-aware content suggestions."
    ],
    key_metrics=[
        "Mobile article view rate",
        "Mobile bounce rate",
        "Mobile search success rate",
        "Mobile case deflection rate"
    ]
)
```

### Step 2: Update Keyword Matching

```python
mobile_keywords = ["mobile", "phone", "tablet", "responsive", "offline", "touch"]
if any(kw in prompt_lower for kw in mobile_keywords):
    relevant_themes.append("mobile_experience")
```

---

## Adding Customer Insights

Customer insights are specific pain points from customer feedback.

### Step 1: Add the Insight

Add to `_initialize_customer_insights()`:

```python
CustomerInsight(
    user_type="admin",  # or "author", "agent", "end_customer"
    pain_point="Specific pain point description",
    impact="High/Medium/Low - Description of impact",
    priority="high"  # high, medium, low
)
```

### Example: Adding More Insights

```python
CustomerInsight(
    user_type="admin",
    pain_point="No way to bulk update article metadata across multiple articles",
    impact="High - Time-consuming manual work, prone to errors",
    priority="high"
),
CustomerInsight(
    user_type="author",
    pain_point="Can't preview how article will look to end users before publishing",
    impact="Medium - Authors publish articles that don't render well",
    priority="medium"
),
CustomerInsight(
    user_type="end_customer",
    pain_point="Articles don't show which product version they apply to",
    impact="High - Users follow wrong instructions, create cases",
    priority="high"
)
```

---

## Best Practices

### 1. Be Specific
- Use concrete examples in descriptions
- Include actual use cases and scenarios
- Reference specific Salesforce features when relevant

### 2. Balance Detail
- Too little detail: agent won't have enough context
- Too much detail: responses become cluttered
- Aim for 3-5 items in lists (daily_tasks, goals, challenges)

### 3. Keep It Current
- Update personas as roles evolve
- Update product details as features change
- Refresh feedback themes with new customer input

### 4. Use Consistent Terminology
- Match Salesforce product terminology
- Use consistent user type names (admin, author, agent, end_customer)
- Align with customer feedback language

### 5. Test Your Additions
- Run the agent with prompts that should trigger your new additions
- Verify personas/products are correctly identified
- Check that enhanced prompts include your new information

---

## Testing Your Extensions

After adding new details, test them:

```python
from salesforce_pm_agent import SalesforceKnowledgePMAgent

agent = SalesforceKnowledgePMAgent()

# Test persona identification
response = agent.process_prompt("How can we help knowledge managers?")
print("Relevant Personas:", response["relevant_personas"])

# Test product detail identification
response = agent.process_prompt("What are the limitations of Einstein Search?")
print("Relevant Products:", response["relevant_product_details"])

# Test feedback theme identification
response = agent.process_prompt("How can we improve mobile experience?")
print("Relevant Themes:", response["relevant_feedback_themes"])
```

---

## Example: Complete Extension

Here's a complete example of adding a new persona, product detail, and feedback theme:

```python
# In _initialize_personas()
"content_strategist": Persona(
    name="Content Strategist",
    user_type="admin",
    role_description="Plans content roadmap and ensures content aligns with business objectives",
    daily_tasks=["Analyze content gaps", "Plan content calendar", "Review content metrics"],
    key_goals=["Maximize deflection", "Improve content ROI"],
    common_challenges=["No content gap analysis tools", "Limited planning features"],
    technical_skill_level="intermediate",
    org_size_context="enterprise"
)

# In _initialize_product_details()
"content_planning": ProductDetail(
    feature_name="Content Planning Tools",
    category="Content Strategy",
    description="Tools for planning and managing content roadmaps",
    current_capabilities=["Basic reporting", "Article lists"],
    limitations=["No gap analysis", "No planning calendar", "No content prioritization"],
    related_features=["Reports", "Data Categories"]
)

# In _initialize_feedback_themes()
"content_strategy": FeedbackTheme(
    category="Content Strategy & Planning",
    problem_statement="Teams struggle to plan content effectively and identify gaps",
    improvement_plan=[
        "Content gap analysis: identify topics with high search volume but no articles",
        "Content planning calendar: visual roadmap for content creation and updates",
        "Content prioritization framework: score articles by impact and effort"
    ],
    key_metrics=["Content gap coverage", "Planning accuracy", "Content ROI"]
)

# In _get_customer_context() - keyword matching
if any(kw in prompt_lower for kw in ["strategist", "planning", "roadmap", "gap"]):
    relevant_personas.append("content_strategist")
    relevant_products.append("content_planning")
    relevant_themes.append("content_strategy")
```

---

## Need Help?

- Review existing personas/products in the code for examples
- Check the enhanced prompt output to see how details are used
- Test with the interactive agent: `python3 interactive_agent.py`

