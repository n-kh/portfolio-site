# Quick Reference: Using the Enhanced PM Agent

## What's New

The PM agent now includes:
- **4 Detailed Personas**: Knowledge Admin, Content Author, Support Agent, End Customer
- **6 Product Details**: Knowledge Base, Search, Authoring, Governance, Analytics, Experience Cloud
- **Automatic Context Matching**: Agent identifies relevant personas and products from your prompts

## How to Add More Details

### 1. Add a New Persona

Edit `salesforce_pm_agent.py`, find `_initialize_personas()`, and add:

```python
"your_persona_key": Persona(
    name="Display Name",
    user_type="admin",  # or author, agent, end_customer
    role_description="What they do",
    daily_tasks=["Task 1", "Task 2"],
    key_goals=["Goal 1", "Goal 2"],
    common_challenges=["Challenge 1", "Challenge 2"],
    tools_used=["Tool 1"],  # Optional
    technical_skill_level="intermediate",  # beginner/intermediate/advanced
    org_size_context="enterprise"  # small/medium/large/enterprise/varies
)
```

### 2. Add Product Details

Edit `salesforce_pm_agent.py`, find `_initialize_product_details()`, and add:

```python
"your_product_key": ProductDetail(
    feature_name="Feature Name",
    category="Category",
    description="What it does",
    current_capabilities=["Capability 1", "Capability 2"],
    limitations=["Limitation 1", "Limitation 2"],
    related_features=["Feature 1"]  # Optional
)
```

### 3. Update Keyword Matching (Optional)

To make the agent automatically identify your new persona/product, edit `_get_customer_context()`:

```python
# For personas
if any(kw in prompt_lower for kw in ["your", "keywords"]):
    relevant_personas.append("your_persona_key")

# For products
if any(kw in prompt_lower for kw in ["your", "keywords"]):
    relevant_products.append("your_product_key")
```

## Example: Adding a "Knowledge Manager" Persona

```python
# In _initialize_personas()
"knowledge_manager": Persona(
    name="Knowledge Manager",
    user_type="admin",
    role_description="Strategic role for knowledge base strategy and ROI",
    daily_tasks=[
        "Analyze content performance metrics",
        "Plan content roadmap",
        "Review feedback trends"
    ],
    key_goals=["Maximize deflection", "Improve ROI"],
    common_challenges=["Lack of analytics", "No prioritization framework"],
    technical_skill_level="intermediate",
    org_size_context="enterprise"
)

# In _get_customer_context() - add keyword matching
if any(kw in prompt_lower for kw in ["manager", "strategy", "roi"]):
    relevant_personas.append("knowledge_manager")
```

## Testing Your Additions

```python
from salesforce_pm_agent import SalesforceKnowledgePMAgent

agent = SalesforceKnowledgePMAgent()

# Test persona
response = agent.process_prompt("How can we help knowledge managers?")
print(response["relevant_personas"])

# Test product
response = agent.process_prompt("What are search limitations?")
print(response["relevant_product_details"])
```

## Current Personas

1. **Knowledge Administrator** - Manages configuration, governance, workflows
2. **Content Author / SME** - Creates and maintains articles
3. **Support Agent** - Uses articles to resolve cases
4. **End Customer / Portal User** - Self-service user

## Current Product Details

1. **Salesforce Knowledge** - Core platform
2. **Knowledge Search** - Search functionality
3. **Article Authoring** - Content creation tools
4. **Content Governance** - Lifecycle and approvals
5. **Knowledge Analytics** - Reporting and insights
6. **Experience Cloud Integration** - Portal integration

## Full Documentation

See `EXTENSION_GUIDE.md` for complete examples and best practices.

