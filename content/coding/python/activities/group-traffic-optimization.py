# Traffic Optimization System

from datetime import datetime

# Dictionary to store traffic data
traffic_data = {}


# Function to input traffic data
def input_traffic_data():
    try:
        intersection_id = int(input("Enter intersection ID: "))
        cars = int(input("Enter number of cars: "))
        time_str = input("Enter time (HH:MM): ")
        date_str = input("Enter date (YYYY-MM-DD): ")

        time = datetime.strptime(time_str, "%H:%M").time()
        date = datetime.strptime(date_str, "%Y-%m-%d").date()

        if intersection_id not in traffic_data:
            traffic_data[intersection_id] = []

        traffic_data[intersection_id].append({"cars": cars, "time": time, "date": date})
        print("Traffic data recorded successfully!")
    except ValueError:
        print(
            "Invalid input. Please enter numeric values for intersection ID and number of cars, and valid time/date formats."
        )


# Function to analyze traffic patterns
def analyze_traffic():
    try:
        intersection_id = int(input("Enter intersection ID: "))
        if intersection_id not in traffic_data:
            print("No data found for this intersection.")
            return

        data = traffic_data[intersection_id]
        time_counts = {}

        for entry in data:
            hour = entry["time"].hour
            if hour not in time_counts:
                time_counts[hour] = {"total_cars": 0, "count": 0}
            time_counts[hour]["total_cars"] += entry["cars"]
            time_counts[hour]["count"] += 1

        peak_hour = max(
            time_counts,
            key=lambda k: time_counts[k]["total_cars"] / time_counts[k]["count"],
        )
        off_peak_hour = min(
            time_counts,
            key=lambda k: time_counts[k]["total_cars"] / time_counts[k]["count"],
        )

        print(f"\nTraffic Patterns for Intersection {intersection_id}:")
        print(
            f"- Peak Hours: {peak_hour:02}:00 - {peak_hour + 1:02}:00 (Average Cars: {time_counts[peak_hour]['total_cars'] / time_counts[peak_hour]['count']:.0f})"
        )
        print(
            f"- Off-Peak Hours: {off_peak_hour:02}:00 - {off_peak_hour + 1:02}:00 (Average Cars: {time_counts[off_peak_hour]['total_cars'] / time_counts[off_peak_hour]['count']:.0f})"
        )
    except ValueError:
        print("Invalid input. Please enter a numeric value for the intersection ID.")


# Function to optimize traffic light timings
def optimize_timings():
    try:
        intersection_id = int(input("Enter intersection ID: "))
        if intersection_id not in traffic_data:
            print("No data found for this intersection.")
            return

        data = traffic_data[intersection_id]
        time_counts = {}

        for entry in data:
            hour = entry["time"].hour
            if hour not in time_counts:
                time_counts[hour] = {"total_cars": 0, "count": 0}
            time_counts[hour]["total_cars"] += entry["cars"]
            time_counts[hour]["count"] += 1

        peak_hour = max(
            time_counts,
            key=lambda k: time_counts[k]["total_cars"] / time_counts[k]["count"],
        )
        off_peak_hour = min(
            time_counts,
            key=lambda k: time_counts[k]["total_cars"] / time_counts[k]["count"],
        )

        peak_duration = 90  # Default peak duration in seconds
        off_peak_duration = 30  # Default off-peak duration in seconds

        print(f"\nOptimized Traffic Light Timings for Intersection {intersection_id}:")
        print(
            f"- Peak Hours: {peak_hour:02}:00 - {peak_hour + 1:02}:00 (Green Light Duration: {peak_duration} seconds)"
        )
        print(
            f"- Off-Peak Hours: {off_peak_hour:02}:00 - {off_peak_hour + 1:02}:00 (Green Light Duration: {off_peak_duration} seconds)"
        )
    except ValueError:
        print("Invalid input. Please enter a numeric value for the intersection ID.")


# Function to generate a traffic report
def generate_report():
    try:
        intersection_id = int(input("Enter intersection ID: "))
        if intersection_id not in traffic_data:
            print("No data found for this intersection.")
            return

        data = traffic_data[intersection_id]
        total_cars = sum(entry["cars"] for entry in data)
        time_counts = {}

        for entry in data:
            hour = entry["time"].hour
            if hour not in time_counts:
                time_counts[hour] = {"total_cars": 0, "count": 0}
            time_counts[hour]["total_cars"] += entry["cars"]
            time_counts[hour]["count"] += 1

        peak_hour = max(
            time_counts,
            key=lambda k: time_counts[k]["total_cars"] / time_counts[k]["count"],
        )
        off_peak_hour = min(
            time_counts,
            key=lambda k: time_counts[k]["total_cars"] / time_counts[k]["count"],
        )

        peak_duration = 90  # Default peak duration in seconds
        off_peak_duration = 30  # Default off-peak duration in seconds

        print(f"\nTraffic Report for Intersection {intersection_id}:")
        print(f"- Total Cars Recorded: {total_cars}")
        print(
            f"- Peak Hours: {peak_hour:02}:00 - {peak_hour + 1:02}:00 (Average Cars: {time_counts[peak_hour]['total_cars'] / time_counts[peak_hour]['count']:.0f})"
        )
        print(
            f"- Off-Peak Hours: {off_peak_hour:02}:00 - {off_peak_hour + 1:02}:00 (Average Cars: {time_counts[off_peak_hour]['total_cars'] / time_counts[off_peak_hour]['count']:.0f})"
        )
        print("- Optimized Timings:")
        print(f"  - Peak Hours: {peak_duration} seconds")
        print(f"  - Off-Peak Hours: {off_peak_duration} seconds")
    except ValueError:
        print("Invalid input. Please enter a numeric value for the intersection ID.")


# Main program loop
def main():
    print("Welcome to the Traffic Optimization System!")

    while True:
        action = (
            input("\nWhat would you like to do? (input/analyze/optimize/report/exit): ")
            .strip()
            .lower()
        )

        if action == "input":
            input_traffic_data()
        elif action == "analyze":
            analyze_traffic()
        elif action == "optimize":
            optimize_timings()
        elif action == "report":
            generate_report()
        elif action == "exit":
            print("Thank you for using the Traffic Optimization System!")
            break
        else:
            print(
                "Invalid action. Please choose from: input, analyze, optimize, report, exit."
            )


# Run the program
if __name__ == "__main__":
    main()
