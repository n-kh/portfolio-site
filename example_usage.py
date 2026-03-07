"""
Example usage of the Salesforce Knowledge PM Agent
Demonstrates customer-backward thinking in action.
"""

from salesforce_pm_agent import SalesforceKnowledgePMAgent
import json


def example_1_basic_prompt():
    """Example: Basic prompt processing"""
    print("\n" + "="*70)
    print("EXAMPLE 1: Basic Prompt Processing")
    print("="*70)
    
    agent = SalesforceKnowledgePMAgent()
    prompt = "How should we improve search functionality?"
    
    response = agent.process_prompt(prompt)
    
    print(f"\nOriginal Prompt: {prompt}")
    print(f"\nRelevant Feedback Themes Identified: {len(response['relevant_feedback_themes'])}")
    
    for theme_key, theme_info in response['relevant_feedback_themes'].items():
        print(f"\n  • {theme_info['category']}")
        print(f"    Key Metrics: {', '.join(theme_info['metrics'])}")


def example_2_feature_prioritization():
    """Example: Feature prioritization with customer context"""
    print("\n" + "="*70)
    print("EXAMPLE 2: Feature Prioritization")
    print("="*70)
    
    agent = SalesforceKnowledgePMAgent()
    prompt = "What features should we prioritize for the next release?"
    
    response = agent.process_prompt(prompt)
    recommendations = agent.get_recommendations_for_prompt(prompt)
    
    print(f"\nPrompt: {prompt}")
    print(f"\nCustomer-Backward Recommendations ({len(recommendations)} total):")
    
    for i, rec in enumerate(recommendations[:5], 1):  # Show first 5
        print(f"\n  {i}. {rec}")


def example_3_authoring_improvements():
    """Example: Authoring improvements"""
    print("\n" + "="*70)
    print("EXAMPLE 3: Authoring Improvements")
    print("="*70)
    
    agent = SalesforceKnowledgePMAgent()
    prompt = "How can we help authors create better content faster?"
    
    response = agent.process_prompt(prompt)
    
    print(f"\nPrompt: {prompt}")
    print(f"\nCustomer Insights Considered:")
    for insight in response['customer_insights_considered']:
        print(f"  • [{insight['user_type']}] {insight['pain_point']}")
        print(f"    Impact: {insight['impact']}")


def example_4_analytics_design():
    """Example: Analytics design with customer feedback"""
    print("\n" + "="*70)
    print("EXAMPLE 4: Analytics Design")
    print("="*70)
    
    agent = SalesforceKnowledgePMAgent()
    prompt = "What analytics should we build for admins?"
    
    response = agent.process_prompt(prompt)
    
    print(f"\nPrompt: {prompt}")
    
    # Show metrics from relevant themes
    all_metrics = set()
    for theme_info in response['relevant_feedback_themes'].values():
        all_metrics.update(theme_info['metrics'])
    
    print(f"\nCustomer-Backed Metrics to Consider ({len(all_metrics)} total):")
    for metric in sorted(all_metrics):
        print(f"  • {metric}")


def example_5_enhanced_prompt():
    """Example: View the enhanced prompt with customer context"""
    print("\n" + "="*70)
    print("EXAMPLE 5: Enhanced Prompt with Customer Context")
    print("="*70)
    
    agent = SalesforceKnowledgePMAgent()
    prompt = "Should we build a new AI-powered search feature?"
    
    response = agent.process_prompt(prompt)
    
    print("\nEnhanced Prompt (with customer context):")
    print("-" * 70)
    print(response['enhanced_prompt'])


def example_6_decision_history():
    """Example: Track and export decision history"""
    print("\n" + "="*70)
    print("EXAMPLE 6: Decision History Tracking")
    print("="*70)
    
    agent = SalesforceKnowledgePMAgent()
    
    # Process multiple prompts
    prompts = [
        "How to improve search?",
        "What authoring features are needed?",
        "How to improve governance?"
    ]
    
    for prompt in prompts:
        agent.process_prompt(prompt)
    
    print(f"\nProcessed {len(prompts)} prompts")
    print(f"Decision history contains {len(agent.decision_history)} decisions")
    
    # Export history
    filename = agent.export_decision_history("example_decisions.json")
    print(f"\nDecision history exported to: {filename}")


def example_7_feedback_summary():
    """Example: View complete customer feedback summary"""
    print("\n" + "="*70)
    print("EXAMPLE 7: Complete Customer Feedback Summary")
    print("="*70)
    
    agent = SalesforceKnowledgePMAgent()
    summary = agent.get_feedback_summary()
    print(summary)


if __name__ == "__main__":
    print("\n" + "="*70)
    print("SALESFORCE KNOWLEDGE PM AGENT - Example Usage")
    print("="*70)
    print("\nDemonstrating customer-backward thinking in various scenarios...")
    
    example_1_basic_prompt()
    example_2_feature_prioritization()
    example_3_authoring_improvements()
    example_4_analytics_design()
    example_5_enhanced_prompt()
    example_6_decision_history()
    example_7_feedback_summary()
    
    print("\n" + "="*70)
    print("All examples completed!")
    print("="*70 + "\n")

