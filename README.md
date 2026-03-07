# Salesforce Knowledge PM Agent

A customer-backward Product Manager agent for Salesforce Knowledge that always incorporates customer feedback into product decisions.

## Overview

This PM agent is designed to think customer-backward, ensuring that every product decision, feature prioritization, and strategic recommendation considers real customer feedback and pain points.

## Key Features

- **Customer-Backward Thinking**: All prompts are automatically enhanced with relevant customer feedback context
- **Detailed Personas**: 4 user personas with roles, goals, challenges, and daily tasks
- **Comprehensive Product Details**: 8 Salesforce Knowledge product areas with 138+ capabilities and 110+ limitations
- **Feedback Theme Integration**: 5 major feedback categories are embedded:
  1. Search & Discovery
  2. Authoring & Content Quality
  3. Governance, Scale, and Lifecycle
  4. Feedback, Ratings, and Analytics
  5. Experience Cloud & Channel Integration
- **Intelligent Context Matching**: Automatically identifies relevant customer feedback themes based on prompt keywords
- **Decision History**: Tracks all decisions with customer context for future reference

## Usage

### Basic Usage

```python
from salesforce_pm_agent import SalesforceKnowledgePMAgent

# Initialize the agent
agent = SalesforceKnowledgePMAgent()

# Process any prompt - customer feedback is automatically considered
response = agent.process_prompt("How should we improve search functionality?")

# View relevant customer feedback themes
print(response["relevant_feedback_themes"])

# View customer insights considered
print(response["customer_insights_considered"])

# Get the enhanced prompt with customer context
print(response["enhanced_prompt"])
```

### Get Product Recommendations

```python
# Get specific recommendations based on customer feedback
recommendations = agent.get_recommendations_for_prompt(
    "What features should we prioritize?"
)

for rec in recommendations:
    print(f"• {rec}")
```

### View Customer Feedback Summary

```python
# Get a comprehensive summary of all customer feedback
summary = agent.get_feedback_summary()
print(summary)
```

### Export Decision History

```python
# Export all decisions to JSON
filename = agent.export_decision_history()
print(f"Decisions exported to {filename}")
```

## Customer Feedback Themes

### 1. Search & Discovery
**Problem**: Users struggle with search syntax, filters, and result relevance, especially in large orgs.

**Key Improvements**:
- Relevance tuning with admin controls
- Enhanced UX for filters and facets
- Search insights and analytics

### 2. Authoring & Content Quality
**Problem**: Authors want flexible layouts and tools; end users want step-by-step, visual content.

**Key Improvements**:
- Upgraded editor with templates and multimedia
- Guided authoring wizards
- Content health signals

### 3. Governance, Scale, and Lifecycle
**Problem**: Admins struggle with managing large article volumes and lifecycle across products.

**Key Improvements**:
- Stronger lifecycle workflows
- Scalable information architecture
- Role-based work queues

### 4. Feedback, Ratings, and Analytics
**Problem**: Teams struggle to turn feedback into systematic improvement.

**Key Improvements**:
- Unified feedback fabric
- Opinionated dashboards
- Closed-loop experience

### 5. Experience Cloud & Channel Integration
**Problem**: External users want seamless experience; admins want parity across channels.

**Key Improvements**:
- Modern self-service templates
- Cross-channel usage insights
- Migration and parity tooling

## Example Output

When you ask: "How should we improve search functionality?"

The agent will:
1. Identify relevant customer feedback themes (Search & Discovery)
2. Include customer pain points and improvement plans
3. Provide context about high-priority customer insights
4. Generate an enhanced prompt that ensures customer-backward thinking

## Customer-Backward Principles

The agent follows these principles:

1. **Always ask**: "How does this solve a real customer problem?"
2. **Prioritize** features that address high-priority pain points
3. **Consider impact** on case deflection and self-service success
4. **Ensure solutions** are measurable against customer success metrics
5. **Think about all user types**: admins, authors, agents, and end customers

## Running the Agent

### Interactive Mode (Recommended)

```bash
# Start interactive CLI
python3 interactive_agent.py
```

This starts an interactive session where you can:
- Ask questions about product decisions
- View customer feedback themes
- See decision history
- Export decisions to JSON

### Example Usage Script

```bash
# Run example usage scenarios
python3 example_usage.py
```

### Direct Usage

```bash
# Run the main agent with examples
python3 salesforce_pm_agent.py
```

## Requirements

- Python 3.7+
- No external dependencies (uses only standard library)

## Files

- `salesforce_pm_agent.py` - Main PM agent class and core functionality
- `interactive_agent.py` - Interactive CLI for conversational use
- `example_usage.py` - Example scenarios demonstrating the agent
- `EXTENSION_GUIDE.md` - Complete guide for adding personas, product details, and more
- `QUICK_REFERENCE.md` - Quick reference for extending the agent
- `ENHANCEMENT_SUMMARY.md` - Summary of recent enhancements to product details
- `README.md` - This documentation

## Architecture

The agent consists of:
- `SalesforceKnowledgePMAgent`: Main agent class
- `FeedbackTheme`: Data structure for feedback themes
- `CustomerInsight`: Data structure for customer insights
- `Persona`: Data structure for user personas (NEW)
- `ProductDetail`: Data structure for product information (NEW)
- Automatic context matching and prompt enhancement
- Decision history tracking

## Extending the Agent

The agent is designed to be easily extended with:
- **New Personas**: Add detailed user personas with roles, goals, and challenges
- **Product Details**: Add Salesforce Knowledge features with capabilities and limitations
- **Feedback Themes**: Add new customer feedback categories
- **Customer Insights**: Add specific pain points and insights

See `EXTENSION_GUIDE.md` for detailed instructions and examples.

## Interactive Commands

When using `interactive_agent.py`, you can use these commands:
- `help` - Show available commands
- `summary` - Show complete customer feedback summary
- `themes` - List all feedback theme categories
- `history` - Show decision history
- `export` - Export decision history to JSON
- `clear` - Clear decision history
- `exit` or `quit` - Exit the agent

Or simply ask questions - the agent will automatically consider customer feedback!

