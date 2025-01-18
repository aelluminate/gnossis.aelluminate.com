# Simple Banking System App

# Dictionary to store account details
accounts = {}

# Function to create a new account
def create_account():
    try:
        name = input("Enter your name: ")
        balance = float(input("Enter initial balance: "))
        if balance < 0:
            print("Initial balance cannot be negative. Please try again.")
            return
        
        # Generate a unique account number (simple implementation)
        account_number = len(accounts) + 1001
        accounts[account_number] = {"name": name, "balance": balance}
        print(f"Account created successfully! Your account number is {account_number}.")
    except ValueError:
        print("Invalid input. Please enter a numeric value for the balance.")

# Function to deposit money
def deposit():
    try:
        account_number = int(input("Enter your account number: "))
        if account_number not in accounts:
            print("Account not found. Please check your account number.")
            return
        
        amount = float(input("Enter amount to deposit: "))
        if amount < 0:
            print("Deposit amount cannot be negative. Please try again.")
            return
        
        accounts[account_number]["balance"] += amount
        print(f"Deposit successful! Your new balance is {accounts[account_number]['balance']}.")
    except ValueError:
        print("Invalid input. Please enter a numeric value for the account number or amount.")

# Function to withdraw money
def withdraw():
    try:
        account_number = int(input("Enter your account number: "))
        if account_number not in accounts:
            print("Account not found. Please check your account number.")
            return
        
        amount = float(input("Enter amount to withdraw: "))
        if amount < 0:
            print("Withdrawal amount cannot be negative. Please try again.")
            return
        
        if accounts[account_number]["balance"] < amount:
            print("Insufficient balance. Please try again.")
            return
        
        accounts[account_number]["balance"] -= amount
        print(f"Withdrawal successful! Your new balance is {accounts[account_number]['balance']}.")
    except ValueError:
        print("Invalid input. Please enter a numeric value for the account number or amount.")

# Function to check balance
def check_balance():
    try:
        account_number = int(input("Enter your account number: "))
        if account_number not in accounts:
            print("Account not found. Please check your account number.")
            return
        
        print(f"Your current balance is {accounts[account_number]['balance']}.")
    except ValueError:
        print("Invalid input. Please enter a numeric value for the account number.")

# Main program loop
def main():
    while True:
        print("\nWelcome to the Banking System!")
        print("1. Create Account")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Check Balance")
        print("5. Exit")
        
        try:
            choice = int(input("Enter your choice: "))
            if choice == 1:
                create_account()
            elif choice == 2:
                deposit()
            elif choice == 3:
                withdraw()
            elif choice == 4:
                check_balance()
            elif choice == 5:
                print("Thank you for using the Banking System!")
                break
            else:
                print("Invalid choice. Please select a valid option.")
        except ValueError:
            print("Invalid input. Please enter a numeric value for the choice.")

# Run the program
if __name__ == "__main__":
    main()