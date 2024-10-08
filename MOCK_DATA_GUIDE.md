Here’s a documentation guide for contributors on how to generate mock APIs using **Mockaroo**, add the data to `data.json`, and use it within the project. This guide can be placed in your `CONTRIBUTING.md` file or as a standalone `mock-data-guide.md` file.

---

# Mock Data Guide for Contributors

In this project, we use **Mockaroo** to generate mock data to simulate API responses for various resources (e.g., employees, customers, tasks) during the development process. This guide will walk you through how to generate mock data using Mockaroo, how to integrate it into the `data.json` file, and how to use this mock data in your development work.

## Step 1: Generate Mock Data Using Mockaroo

1. **Go to Mockaroo**: Navigate to [Mockaroo](https://mockaroo.com/), a free tool that allows you to generate realistic mock data.

2. **Set the Number of Rows**: 
   - At the top, set the **number of rows** you want. For testing, 50–100 records should be sufficient for most cases. 
   - If you're working on something smaller (like a demo feature), you can generate fewer rows (10–20).

3. **Define the Schema**:
   - In the fields section, you can define the schema (structure) for the data. Here are some common examples:
   
   | Field Name   | Type         | Example                                  |
   |--------------|--------------|------------------------------------------|
   | `id`         | Number       | Sequential ID (1, 2, 3, …)               |
   | `name`       | Full Name    | Random name for employees/customers      |
   | `email`      | Email Address| Email format                             |
   | `role`       | Custom List  | Admin, Employee, Member, etc.            |
   | `status`     | Custom List  | Active, Inactive, Suspended, etc.        |
   | `startDate`  | Date         | Start date of an employee                |
   | `phone`      | Phone Number | Random phone number                      |
   | `position`   | Job Title    | Random job titles for employees          |
   | `description`| Sentence     | Task descriptions                        |
   | `status`     | Custom List  | In-progress, Completed, etc. for tasks   |

4. **Download the JSON**:
   - After you define the fields, click **Download Data** and choose **JSON** as the file format. Save the file as `employees.json`, `customers.json`, or any other relevant file name based on the data you're generating.

## Step 2: Add Mock Data to `data.json`

To simulate a real database, you’ll need to merge your mock data file (e.g., `employees.json`) into a centralized file called `data.json`.

1. **Locate the `data.json` file**:
   - The `data.json` file is located in the `/data` directory of the project. This file serves as the mock database for the project.

2. **Open `data.json`**:
   - If the key for the resource you're working on doesn't already exist (e.g., `employees` or `tasks`), you need to add it.

3. **Structure the Data**:
   - If you're adding employee data, your `data.json` might look like this:
     ```json
     {
       "employees": [
         {
           "id": 1,
           "name": "John Doe",
           "email": "johndoe@example.com",
           "role": "Admin",
           "status": "Active",
           "startDate": "2024-01-15",
           "phone": "123-456-7890",
           "position": "Software Engineer"
         },
         {
           "id": 2,
           "name": "Jane Smith",
           "email": "janesmith@example.com",
           "role": "Employee",
           "status": "Inactive",
           "startDate": "2023-12-20",
           "phone": "987-654-3210",
           "position": "Product Manager"
         }
       ],
       "customers": [
         {
           "id": 1,
           "name": "Alice Johnson",
           "email": "alice@example.com",
           "phone": "555-555-5555"
         }
       ]
     }
     ```
   
4. **Add Your Data**:
   - Append your new data under the appropriate section (e.g., `employees`, `tasks`, `customers`). If you're adding new mock data for a resource that isn't already listed, create a new key in the `data.json` file.

## Step 3: Serve Mock Data as an API Using JSON Server

1. **Start JSON Server**:
   - To serve the mock data as an API, use **JSON Server**. This simulates a real backend API by reading from the `data.json` file.
   
   If JSON Server is already installed, run the following command:
   ```bash
   json-server --watch data/data.json --port 3001
   ```

2. **API Endpoints**:
   - Once the server is running, you can access the data through the following endpoints:
   
     - `GET /employees` - Fetch all employees.
     - `GET /employees/1` - Fetch employee with ID 1.
     - `GET /customers` - Fetch all customers.
     - `POST /employees` - Add a new employee.
     - `PUT /employees/1` - Update employee with ID 1.
     - `DELETE /employees/1` - Delete employee with ID 1.
   
3. **Using the Mock API in Your Project**:
   - You can now fetch the data from the API endpoints in your project.
   
   Here's an example using `fetch` to get employee data:
   ```jsx
   import { useEffect, useState } from "react";

   function EmployeeList() {
     const [employees, setEmployees] = useState([]);

     useEffect(() => {
       fetch("http://localhost:3001/employees")
         .then((response) => response.json())
         .then((data) => setEmployees(data))
         .catch((error) => console.error("Error fetching employees:", error));
     }, []);

     return (
       <ul>
         {employees.map((employee) => (
           <li key={employee.id}>
             {employee.name} - {employee.position}
           </li>
         ))}
       </ul>
     );
   }

   export default EmployeeList;
   ```

4. **Test the API**:
   - Test your API endpoints within your project to ensure everything is working as expected.

## Step 4: Migrate from Mock Data to Real Backend

When migrating to a real backend, all you need to do is switch the base API URL from the mock server (e.g., `http://localhost:3001`) to your real API server. You won't need to change the rest of your API logic.

- **For example:**
   ```js
   const API_BASE_URL = process.env.REACT_APP_API_URL || "https://your-real-api.com";
   ```

---

## Summary

- **Mockaroo** is used to generate realistic mock data for different resources.
- The mock data is added to the `data.json` file in the `/data` directory.
- **JSON Server** serves the mock data as a RESTful API during development.
- Contributors can work with the mock API while building the frontend and testing features.
- When switching to the real backend, only the base URL needs to be updated.

By following these steps, you can generate mock data quickly, integrate it into the project, and make it accessible to contributors as if they were working with a real backend API.