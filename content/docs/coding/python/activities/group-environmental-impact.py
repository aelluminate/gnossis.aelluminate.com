# Environmental Impact Analysis and Optimization System

# Dictionary to store environmental data
environmental_data = {}


# Function to input environmental data
def input_data():
    try:
        activity = input("Enter activity name: ")
        carbon_emissions = float(input("Enter carbon emissions (in tons): "))
        energy_usage = float(input("Enter energy usage (in kWh): "))
        waste_production = float(input("Enter waste production (in kg): "))

        environmental_data[activity] = {
            "carbon_emissions": carbon_emissions,
            "energy_usage": energy_usage,
            "waste_production": waste_production,
        }
        print("Environmental data recorded successfully!")
    except ValueError:
        print(
            "Invalid input. Please enter numeric values for carbon emissions, energy usage, and waste production."
        )


# Function to analyze environmental impact
def analyze_impact():
    if not environmental_data:
        print("No data found. Please input data first.")
        return

    highest_carbon = max(
        environmental_data, key=lambda k: environmental_data[k]["carbon_emissions"]
    )
    highest_energy = max(
        environmental_data, key=lambda k: environmental_data[k]["energy_usage"]
    )
    highest_waste = max(
        environmental_data, key=lambda k: environmental_data[k]["waste_production"]
    )

    print("\nEnvironmental Impact Analysis:")
    print(
        f"- Highest Carbon Footprint: {highest_carbon} ({environmental_data[highest_carbon]['carbon_emissions']} tons)"
    )
    print(
        f"- Highest Energy Usage: {highest_energy} ({environmental_data[highest_energy]['energy_usage']} kWh)"
    )
    print(
        f"- Highest Waste Production: {highest_waste} ({environmental_data[highest_waste]['waste_production']} kg)"
    )


# Function to optimize resource usage
def optimize_usage():
    if not environmental_data:
        print("No data found. Please input data first.")
        return

    activity = input("Enter activity name to optimize: ")
    if activity not in environmental_data:
        print("Activity not found. Please check the activity name.")
        return

    data = environmental_data[activity]
    optimized_energy = data["energy_usage"] * 0.8  # Reduce energy usage by 20%
    optimized_waste = data["waste_production"] * 0.7  # Reduce waste by 30%

    print(f"\nOptimized Resource Usage for {activity}:")
    print(f"- Reduce energy usage by 20% ({optimized_energy:.2f} kWh).")
    print(
        f"- Increase recycling rate by 30% (waste reduced to {optimized_waste:.2f} kg)."
    )


# Function to provide recommendations
def provide_recommendations():
    if not environmental_data:
        print("No data found. Please input data first.")
        return

    activity = input("Enter activity name for recommendations: ")
    if activity not in environmental_data:
        print("Activity not found. Please check the activity name.")
        return

    print(f"\nRecommendations for {activity}:")
    print("1. Switch to renewable energy sources (e.g., solar panels).")
    print("2. Implement a recycling program to reduce waste production.")
    print("3. Use energy-efficient appliances to lower energy consumption.")


# Main program loop
def main():
    print("Welcome to the Environmental Impact Analysis and Optimization System!")

    while True:
        action = (
            input(
                "\nWhat would you like to do? (input/analyze/optimize/recommend/exit): "
            )
            .strip()
            .lower()
        )

        if action == "input":
            input_data()
        elif action == "analyze":
            analyze_impact()
        elif action == "optimize":
            optimize_usage()
        elif action == "recommend":
            provide_recommendations()
        elif action == "exit":
            print(
                "Thank you for using the Environmental Impact Analysis and Optimization System!"
            )
            break
        else:
            print(
                "Invalid action. Please choose from: input, analyze, optimize, recommend, exit."
            )


# Run the program
if __name__ == "__main__":
    main()
