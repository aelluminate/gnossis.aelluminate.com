# Real-Time Sales Tracking System

# Dictionary to store product details
products = {}

# List to store sales details
sales = []


# Function to add a new product
def add_product():
    try:
        product_id = int(input("Enter product ID: "))
        if product_id in products:
            print("Product ID already exists. Please choose a different ID.")
            return

        name = input("Enter product name: ")
        price = float(input("Enter product price: "))
        quantity = int(input("Enter product quantity: "))

        products[product_id] = {"name": name, "price": price, "quantity": quantity}
        print("Product added successfully!")
    except ValueError:
        print("Invalid input. Please enter numeric values for ID, price, and quantity.")


# Function to record a sale
def record_sale():
    try:
        product_id = int(input("Enter product ID: "))
        if product_id not in products:
            print("Product not found. Please check the product ID.")
            return

        quantity_sold = int(input("Enter quantity sold: "))
        if quantity_sold > products[product_id]["quantity"]:
            print("Insufficient stock. Please check the quantity.")
            return

        # Update product quantity
        products[product_id]["quantity"] -= quantity_sold

        # Record sale
        sale_price = products[product_id]["price"] * quantity_sold
        sales.append(
            {
                "product_id": product_id,
                "quantity_sold": quantity_sold,
                "sale_price": sale_price,
            }
        )
        print("Sale recorded successfully!")
    except ValueError:
        print("Invalid input. Please enter numeric values for ID and quantity.")


# Function to view inventory
def view_inventory():
    if not products:
        print("No products found.")
    else:
        print("Current Inventory:")
        for product_id, details in products.items():
            print(
                f"- {details['name']} (ID: {product_id}): {details['quantity']} in stock"
            )


# Function to calculate total revenue
def calculate_revenue():
    total_revenue = sum(sale["sale_price"] for sale in sales)
    print(f"Total Revenue: ${total_revenue:.2f}")


# Function to analyze sales performance
def analyze_performance():
    if not sales:
        print("No sales recorded yet.")
        return

    # Find the best-selling product
    from collections import defaultdict

    sales_by_product = defaultdict(int)

    for sale in sales:
        sales_by_product[sale["product_id"]] += sale["quantity_sold"]

    best_product_id = max(sales_by_product, key=sales_by_product.get)
    best_product_name = products[best_product_id]["name"]
    best_quantity_sold = sales_by_product[best_product_id]

    print(
        f"Best-Selling Product: {best_product_name} (ID: {best_product_id}) - {best_quantity_sold} sold"
    )


# Main program loop
def main():
    print("Welcome to the Real-Time Sales Tracking System!")

    while True:
        action = (
            input(
                "\nWhat would you like to do? (add/record/view/revenue/analyze/exit): "
            )
            .strip()
            .lower()
        )

        if action == "add":
            add_product()
        elif action == "record":
            record_sale()
        elif action == "view":
            view_inventory()
        elif action == "revenue":
            calculate_revenue()
        elif action == "analyze":
            analyze_performance()
        elif action == "exit":
            print("Thank you for using the Real-Time Sales Tracking System!")
            break
        else:
            print(
                "Invalid action. Please choose from: add, record, view, revenue, analyze, exit."
            )


# Run the program
if __name__ == "__main__":
    main()
