# Admin User Interface
This repository contains my implementation of an admin user interface for managing users. The goal of this project was to build a functional UI that allows admins to view and delete users. The users are provided through an API, and the UI incorporates various features to enhance the user experience.

# Preview
![image](https://github.com/sanchitttt/geektrust-adminUI/assets/46245135/9a818ce4-c6af-4dab-a10f-e2cbc893764c)
![image](https://github.com/sanchitttt/geektrust-adminUI/assets/46245135/d8af2eda-1a78-47ef-adb0-75ac01862eaf)

# Score
![image](https://github.com/sanchitttt/geektrust-adminUI/assets/46245135/e3b90625-e788-466c-915e-467b24686675)


# Features
Column Titles: The column titles are designed to stand out from the user entries, making it easier for admins to identify the displayed properties.
Search Bar: A search bar is included to enable filtering based on any user property. Admins can enter a search query, and the UI will update in real-time, displaying only the matching user entries.

- Edit & Delete Rows: Admins have the ability to edit or delete rows directly in the UI. Please note that these actions only occur in memory and do not persist to any external database.

 - Pagination: Pagination is implemented to enhance usability and manage large datasets. Each page contains 10 rows, and buttons at the bottom of the table allow admins to navigate to specific pages, including options for the first page, previous page, next page, and last page. The pagination dynamically updates based on search/filtering criteria. For example, if there are 25 records that match a search query, the pagination buttons will only display up to the third page.

- Row Selection: Admins can select one or more rows by clicking on them. When a row is selected, it is highlighted with a grayish background color. Multiple selected rows can be deleted simultaneously by using the "Delete Selected" button located at the bottom left of the UI. Please note that row selection only applies to the ten rows displayed on the current page and does not affect all 50 rows.

- Select/Deselect All Rows: A checkbox is provided in the top left corner to select or deselect all displayed rows on the current page. This checkbox is a convenient shortcut for admins when they want to perform actions on all visible users.

# Users API
To populate the UI with user data, I have utilized the Users API provided. It is a GET request to the following endpoint:

bash
Copy code
https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json
The response from the API contains an array of user objects, where each object represents a user and includes properties such as id, name, email, and role. The users are sorted by the id field, and there is no alphabetical sorting.

# Technologies Used
The implementation of this admin user interface was done using JavaScript and React, which provided a robust and efficient framework for building dynamic and interactive user interfaces. React's component-based architecture allowed me to modularize the UI elements and maintain a clean code structure.

# Usage
To run this admin user interface locally, follow these steps:

Clone this repository to your local machine.
Install the necessary dependencies by running the command: npm install.
Start the development server using the command: npm start.
Open your web browser and visit http://localhost:3000 to access the admin user interface.
