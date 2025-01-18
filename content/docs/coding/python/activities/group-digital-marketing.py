# Digital Marketing Business App

# Dictionaries to store client and campaign details
clients = {}
campaigns = {}


# Function to add a new client
def add_client():
    try:
        client_id = int(input("Enter client ID: "))
        if client_id in clients:
            print("Client ID already exists. Please choose a different ID.")
            return

        name = input("Enter client name: ")
        email = input("Enter client email: ")
        clients[client_id] = {"name": name, "email": email}
        print("Client added successfully!")
    except ValueError:
        print("Invalid input. Please enter a numeric value for the client ID.")


# Function to create a new campaign
def create_campaign():
    try:
        campaign_id = int(input("Enter campaign ID: "))
        if campaign_id in campaigns:
            print("Campaign ID already exists. Please choose a different ID.")
            return

        client_id = int(input("Enter client ID: "))
        if client_id not in clients:
            print("Client not found. Please check the client ID.")
            return

        name = input("Enter campaign name: ")
        impressions = int(input("Enter initial impressions: "))
        clicks = int(input("Enter initial clicks: "))
        conversions = int(input("Enter initial conversions: "))

        campaigns[campaign_id] = {
            "client_id": client_id,
            "name": name,
            "impressions": impressions,
            "clicks": clicks,
            "conversions": conversions,
        }
        print("Campaign created successfully!")
    except ValueError:
        print("Invalid input. Please enter numeric values for IDs and metrics.")


# Function to track campaign performance
def track_performance():
    try:
        campaign_id = int(input("Enter campaign ID: "))
        if campaign_id not in campaigns:
            print("Campaign not found. Please check the campaign ID.")
            return

        impressions = int(input("Enter new impressions: "))
        clicks = int(input("Enter new clicks: "))
        conversions = int(input("Enter new conversions: "))

        campaigns[campaign_id]["impressions"] = impressions
        campaigns[campaign_id]["clicks"] = clicks
        campaigns[campaign_id]["conversions"] = conversions
        print("Campaign performance updated successfully!")
    except ValueError:
        print("Invalid input. Please enter numeric values for metrics.")


# Function to generate a campaign report
def generate_report():
    try:
        campaign_id = int(input("Enter campaign ID: "))
        if campaign_id not in campaigns:
            print("Campaign not found. Please check the campaign ID.")
            return

        campaign = campaigns[campaign_id]
        print("\nCampaign Report:")
        print(f"- Campaign Name: {campaign['name']}")
        print(f"- Impressions: {campaign['impressions']}")
        print(f"- Clicks: {campaign['clicks']}")
        print(f"- Conversions: {campaign['conversions']}")
    except ValueError:
        print("Invalid input. Please enter a numeric value for the campaign ID.")


# Main program loop
def main():
    while True:
        print("\nWelcome to the Digital Marketing Business App!")
        print("1. Add Client")
        print("2. Create Campaign")
        print("3. Track Campaign Performance")
        print("4. Generate Report")
        print("5. Exit")

        try:
            choice = input("Enter your choice: ").strip()
            if not choice:
                print("No input detected. Please enter a valid choice.")
                continue

            choice = int(choice)
            if choice == 1:
                add_client()
            elif choice == 2:
                create_campaign()
            elif choice == 3:
                track_performance()
            elif choice == 4:
                generate_report()
            elif choice == 5:
                print("Thank you for using the Digital Marketing Business App!")
                break
            else:
                print("Invalid choice. Please select a valid option.")
        except ValueError:
            print("Invalid input. Please enter a numeric value for the choice.")


# Run the program
if __name__ == "__main__":
    main()
