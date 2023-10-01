# Consignment Management Application - Frontend

Welcome to the Consignment Management Application Frontend repository. This Angular-based web application provides a user-friendly interface for managing consignments efficiently.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure user login and registration.
- **Consignment Listing**: View a list of consignments with key details.
- **Consignment Details**: Access detailed information about each consignment.
- **Consignment Tracking**: Track the status and history of consignments.
- **User Profile**: Manage user profiles and preferences.
- **Responsive Design**: Ensures a seamless experience on various devices.
- **Error Handling**: Provides clear error messages for better user understanding.

## Getting Started

### Prerequisites

Before you can run this frontend application, ensure you have the following prerequisites:

- Node.js and npm (Node Package Manager)
- Angular CLI
- Access to the Consignment Management Application Backend API (ensure it's running and accessible)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/consignment-management-frontend.git
   cd consignment-management-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the application by modifying `src/environments/environment.ts` and `src/environments/environment.prod.ts`:

   ```typescript
   export const environment = {
     production: false, // Set to true for production
     apiUrl: 'http://localhost:8080/api', // API base URL
   };
   ```

4. Start the development server:

   ```bash
   ng serve
   ```

The application should now be running on `http://localhost:4200`. You can access it in your web browser.

## Configuration

You can further configure the application by modifying environment variables in the `environment.ts` and `environment.prod.ts` files. Customize API URLs and other settings as needed.

## Usage

Once the application is running, open your web browser and navigate to `http://localhost:4200`. You can log in, view consignments, and perform various operations as per your role and permissions.

## Screenshots

![Consignment List](/screenshots/consignment-list.png)

![Consignment Details](/screenshots/consignment-details.png)

## Contributing

Contributions to this project are welcome. Please follow our [contribution guidelines](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the Consignment Management Application Frontend. If you have any questions or need assistance, please feel free to contact us.
