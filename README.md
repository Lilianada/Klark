# Klark - Business Management MVP

**Klark** is a comprehensive business management tool designed to help organizations streamline operations, manage employees, track clients, handle tasks, and more. This MVP focuses on offering essential features for managing businesses efficiently.

## Information Architecture Overview

The information architecture of Klark is organized into several key sections, designed for both employees and administrators to manage daily business processes. Below is an outline of the main components:

### 1. Landing Page
   - Provides users with the option to register or log in.
   - Includes options for "Forgot Password" and "Reset Password."

### 2. Overview
   The overview provides a high-level dashboard with essential business metrics and quick access to actions.

   **Metrics:**
   - Total Employees
   - Total Customers
   - Invoice Overview
   - Task Summary (see all tasks)
   - Reminders (see all reminders)

   **Quick Actions:**
   - Create Invoice
    - Add New Employee
    - Add New Task
    - Set Reminder
   - Clock In/Out (for employees to track their work hours)

   **Employee & Task Actions:**
   - Create Employee
   - Create Task
   - Create Invoice

### 3. Employees
   Manage employees, their attendance, leave records, and onboarding processes.

   **Employee Management:**
   - Total Employees
   - Employee Table
   - Employee Profiles

   **Leave Management:**
   - Leave Table
   - Leave Details

   **Time Tracking:**
   - Track employee time logs and activities.

### 4. Clients
   Manage clients, view client data, and manage tasks related to each client.

   **Client Management:**
   - Create Client
   - Total Clients
   - Client Table

   **Client Details:**
   - View detailed information about each client.

### 5. Tasks
   Manage and track business-related tasks.

   **Task Management:**
   - Add New Task
   - View All Tasks

   **Task Status:**
   - Pending Task
   - Completed Task

### 6. Finance
   Manage all business finances, including invoices, expenses, and financial summaries.

### 7. Settings
   Adjust the application settings according to your organization's needs.

   **Settings Options:**
   - General Settings
   - Content Visibility: Control access to different content types.
   - Users & Permissions: Manage user access and permissions.
   - Change Password: Update account security settings.
   - Data Privacy: Adjust data privacy settings for your organization.

### 8. Notifications
   Manage notifications for important updates and reminders within the organization.

### 9. Resources
   Access resources, guides, and documentation for the organization and its employees.

### 10. Logout
   Users can securely log out of the application.

---

## Reusable Components

Klark includes several reusable components that are implemented throughout the platform to ensure consistency and scalability:

- **Alert**
- **Avatar**
- **Badge**
- **Button**
- **Checkbox**
- **Description-list**
- **Dialog**
- **Divider**
- **Dropdown**
- **Fieldset**
- **Heading**
- **Input**
- **Link**
- **Listbox**
- **Navbar**
- **Pagination**
- **Radio**
- **Select**
- **Sidebar-layout**
- **Sidebar**
- **Stacked-layout**
- **Switch**
- **Table**
- **Text**
- **Text-area**

These components are designed to be flexible and customizable for use in various sections of the application.

---

## How to Contribute

We want to make contributing to this project as easy and transparent as
possible.

## Pull Requests

We actively welcome your pull requests.

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes. (`yarn test`)
5. Make sure your code lints. (`yarn prettier`)
6. If you haven't already, complete the Contributor License Agreement ("CLA").

Please ensure all changes are well-documented and thoroughly tested before submission.

## Contributor License Agreement ("CLA")

In order to accept your pull request, we need you to submit a CLA. You only need
to do this once to work on any of Buildingbloques's open source projects.

Complete your CLA here: <https://forms.gle/1ZrLBfnHmdhicWTb9>

## Issues

We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue.

---

## License

Klark is an open-source project licensed under the MIT License.

---

## Contact

For any questions or suggestions, please contact us at [info@buildingbloques.com](mailto:info@buildingbloques.com).
