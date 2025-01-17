# Airlines Management System

# Dictionary to store flight details
flights = {}


# Function to add a new flight
def add_flight():
    try:
        flight_number = int(input("Enter flight number: "))
        if flight_number in flights:
            print("Flight number already exists. Please choose a different number.")
            return

        destination = input("Enter destination: ")
        seat_capacity = int(input("Enter seat capacity: "))

        flights[flight_number] = {
            "destination": destination,
            "seat_capacity": seat_capacity,
            "booked_seats": 0,
            "passengers": [],
        }
        print("Flight added successfully!")
    except ValueError:
        print(
            "Invalid input. Please enter numeric values for flight number and seat capacity."
        )


# Function to book a ticket
def book_ticket():
    try:
        flight_number = int(input("Enter flight number: "))
        if flight_number not in flights:
            print("Flight not found. Please check the flight number.")
            return

        if (
            flights[flight_number]["booked_seats"]
            >= flights[flight_number]["seat_capacity"]
        ):
            print("No available seats. Flight is fully booked.")
            return

        passenger_name = input("Enter passenger name: ")
        seat_number = flights[flight_number]["booked_seats"] + 1
        flights[flight_number]["booked_seats"] += 1
        flights[flight_number]["passengers"].append(
            {"name": passenger_name, "seat": seat_number}
        )
        print(f"Ticket booked successfully! Seat number: {seat_number}")
    except ValueError:
        print("Invalid input. Please enter a numeric value for the flight number.")


# Function to view flight details
def view_flight():
    try:
        flight_number = int(input("Enter flight number: "))
        if flight_number not in flights:
            print("Flight not found. Please check the flight number.")
            return

        flight = flights[flight_number]
        print("\nFlight Details:")
        print(f"- Destination: {flight['destination']}")
        print(f"- Available Seats: {flight['seat_capacity'] - flight['booked_seats']}")
        print("- Passengers:")
        for passenger in flight["passengers"]:
            print(f"  {passenger['name']} (Seat: {passenger['seat']})")
    except ValueError:
        print("Invalid input. Please enter a numeric value for the flight number.")


# Function to generate a flight report
def generate_report():
    try:
        flight_number = int(input("Enter flight number: "))
        if flight_number not in flights:
            print("Flight not found. Please check the flight number.")
            return

        flight = flights[flight_number]
        revenue = flight["booked_seats"] * 200  # Assuming $200 per ticket
        print("\nFlight Report:")
        print(f"- Destination: {flight['destination']}")
        print(f"- Total Seats: {flight['seat_capacity']}")
        print(f"- Booked Seats: {flight['booked_seats']}")
        print(f"- Available Seats: {flight['seat_capacity'] - flight['booked_seats']}")
        print(f"- Revenue: ${revenue:.2f}")
    except ValueError:
        print("Invalid input. Please enter a numeric value for the flight number.")


# Main program loop
def main():
    print("Welcome to the Airlines Management System!")

    while True:
        action = (
            input("\nWhat would you like to do? (add/book/view/report/exit): ")
            .strip()
            .lower()
        )

        if action == "add":
            add_flight()
        elif action == "book":
            book_ticket()
        elif action == "view":
            view_flight()
        elif action == "report":
            generate_report()
        elif action == "exit":
            print("Thank you for using the Airlines Management System!")
            break
        else:
            print("Invalid action. Please choose from: add, book, view, report, exit.")


# Run the program
if __name__ == "__main__":
    main()
