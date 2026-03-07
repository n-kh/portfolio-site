"""
Interactive CLI for the Salesforce Knowledge PM Agent
Run this to have an interactive conversation with the PM agent.
"""

from salesforce_pm_agent import SalesforceKnowledgePMAgent
import sys


def print_header():
    """Print welcome header."""
    print("\n" + "="*70)
    print("SALESFORCE KNOWLEDGE PM AGENT - Interactive Mode")
    print("="*70)
    print("\nThis agent thinks customer-backward and always considers")
    print("customer feedback in all product decisions.")
    print("\nType 'help' for commands, 'exit' to quit, or 'summary' for")
    print("customer feedback summary.")
    print("="*70 + "\n")


def print_help():
    """Print help information."""
    print("\n" + "-"*70)
    print("AVAILABLE COMMANDS:")
    print("-"*70)
    print("  help          - Show this help message")
    print("  summary       - Show complete customer feedback summary")
    print("  themes        - List all feedback theme categories")
    print("  history       - Show decision history")
    print("  export        - Export decision history to JSON")
    print("  clear         - Clear decision history")
    print("  exit/quit     - Exit the agent")
    print("\nOr simply ask a question about product decisions, features,")
    print("priorities, or strategy. The agent will automatically consider")
    print("relevant customer feedback.\n")


def print_themes(agent):
    """Print all feedback themes."""
    print("\n" + "-"*70)
    print("CUSTOMER FEEDBACK THEMES:")
    print("-"*70)
    for i, (theme_key, theme) in enumerate(agent.feedback_themes.items(), 1):
        print(f"\n{i}. {theme.category}")
        print(f"   Problem: {theme.problem_statement[:100]}...")
        print(f"   Key Metrics: {', '.join(theme.metrics[:3])}...")


def print_history(agent):
    """Print decision history."""
    if not agent.decision_history:
        print("\nNo decisions recorded yet.")
        return
    
    print(f"\n{'='*70}")
    print(f"DECISION HISTORY ({len(agent.decision_history)} decisions)")
    print("="*70)
    
    for i, decision in enumerate(agent.decision_history[-10:], 1):  # Show last 10
        print(f"\n{i}. {decision['original_prompt']}")
        print(f"   Themes: {', '.join(decision['relevant_feedback_themes'].keys())}")
        print(f"   Time: {decision['timestamp']}")


def process_user_input(agent, user_input):
    """Process user input and return response."""
    user_input = user_input.strip()
    
    if not user_input:
        return
    
    # Handle commands
    if user_input.lower() in ['exit', 'quit']:
        print("\nExiting PM Agent. Goodbye!\n")
        sys.exit(0)
    
    elif user_input.lower() == 'help':
        print_help()
        return
    
    elif user_input.lower() == 'summary':
        print(agent.get_feedback_summary())
        return
    
    elif user_input.lower() == 'themes':
        print_themes(agent)
        return
    
    elif user_input.lower() == 'history':
        print_history(agent)
        return
    
    elif user_input.lower() == 'export':
        filename = agent.export_decision_history()
        print(f"\n✓ Decision history exported to: {filename}\n")
        return
    
    elif user_input.lower() == 'clear':
        agent.decision_history = []
        print("\n✓ Decision history cleared.\n")
        return
    
    # Process as a prompt - Use the new generate_response method
    print("\n" + "="*70)
    print("PROCESSING WITH CUSTOMER-BACKWARD THINKING...")
    print("="*70)
    
    # Generate narrative response
    narrative_response = agent.generate_response(user_input)
    print(narrative_response)
    
    # Optionally show detailed breakdown
    print("\n" + "-"*70)
    print("📋 **Detailed Breakdown**")
    print("-"*70)
    
    response = agent.process_prompt(user_input)
    
    # Show summary stats
    print(f"\n📊 **Context Summary:**")
    print(f"   • Feedback Themes: {len(response['relevant_feedback_themes'])}")
    print(f"   • User Personas: {len(response['relevant_personas'])}")
    print(f"   • Product Areas: {len(response['relevant_product_details'])}")
    print(f"   • Customer Insights: {len(response['customer_insights_considered'])}")
    
    # Show recommendations count
    recommendations = agent.get_recommendations_for_prompt(user_input)
    if recommendations:
        print(f"   • Recommendations: {len(recommendations)}")
    
    print("\n" + "="*70 + "\n")


def main():
    """Main interactive loop."""
    agent = SalesforceKnowledgePMAgent()
    print_header()
    print_help()
    
    try:
        while True:
            try:
                user_input = input("PM Agent> ").strip()
                if user_input:
                    process_user_input(agent, user_input)
            except KeyboardInterrupt:
                print("\n\nExiting PM Agent. Goodbye!\n")
                sys.exit(0)
            except EOFError:
                print("\n\nExiting PM Agent. Goodbye!\n")
                sys.exit(0)
    except Exception as e:
        print(f"\nError: {e}\n")
        sys.exit(1)


if __name__ == "__main__":
    main()

