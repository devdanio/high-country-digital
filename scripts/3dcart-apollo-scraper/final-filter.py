with open('apollo_data_3d_cart.csv', 'r') as csv_file:
    csv_lines = csv_file.readlines()

# Read data from the validation text file and store each line in a list
with open('apollo_3d_cart_verified_by_technology_validation.txt', 'r') as validation_file:
    validation_lines = validation_file.readlines()

# Create a new CSV file to write the filtered results
with open('final-data.csv', 'w') as output_file:
    for csv_line in csv_lines:
        # Check if any validation line is a substring of the current CSV line
        if any(validation_line.strip() in csv_line for validation_line in validation_lines):
            output_file.write(csv_line)