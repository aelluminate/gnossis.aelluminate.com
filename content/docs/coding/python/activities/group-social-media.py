# Simple Social Media App

# Dictionary to store user profiles
users = {}


# Function to create a new profile
def create_profile():
    try:
        username = input("Enter your username: ")
        if username in users:
            print("Username already exists. Please choose a different username.")
            return

        name = input("Enter your name: ")
        users[username] = {"name": name, "posts": []}
        print("Profile created successfully!")
    except Exception as e:
        print(f"An error occurred: {e}")


# Function to post an update
def post_update():
    try:
        username = input("Enter your username: ")
        if username not in users:
            print("User not found. Please check your username.")
            return

        post = input("Enter your post: ")
        users[username]["posts"].append(post)
        print("Post added successfully!")
    except Exception as e:
        print(f"An error occurred: {e}")


# Function to view a user's feed
def view_feed():
    try:
        username = input("Enter your username: ")
        if username not in users:
            print("User not found. Please check your username.")
            return

        posts = users[username]["posts"]
        if not posts:
            print("Your feed is empty.")
        else:
            print("Your Feed:")
            for i, post in enumerate(reversed(posts), 1):
                print(f"{i}. {post}")
    except Exception as e:
        print(f"An error occurred: {e}")


# Function to view all profiles
def view_all_profiles():
    try:
        if not users:
            print("No profiles found.")
        else:
            print("All Profiles:")
            for i, (username, details) in enumerate(users.items(), 1):
                print(f"{i}. {details['name']} ({username})")
    except Exception as e:
        print(f"An error occurred: {e}")


# Main program loop
def main():
    while True:
        print("\nWelcome to the Social Media App!")
        print("1. Create Profile")
        print("2. Post Update")
        print("3. View My Feed")
        print("4. View All Profiles")
        print("5. Exit")

        try:
            choice = input("Enter your choice: ").strip()
            if not choice:
                print("No input detected. Please enter a valid choice.")
                continue

            choice = int(choice)
            if choice == 1:
                create_profile()
            elif choice == 2:
                post_update()
            elif choice == 3:
                view_feed()
            elif choice == 4:
                view_all_profiles()
            elif choice == 5:
                print("Thank you for using the Social Media App!")
                break
            else:
                print("Invalid choice. Please select a valid option.")
        except ValueError:
            print("Invalid input. Please enter a numeric value for the choice.")


# Run the program
if __name__ == "__main__":
    main()
