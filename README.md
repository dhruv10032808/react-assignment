# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### PROJECT SETUP AND IMPLEMENTATION DETAILS

- This is a React-based application to manage patient records and immediate actions for a pediatrics department. It features a user-friendly interface for viewing and editing patient data, including actions that can be updated directly from a modal dialog.

- Features

1. Patient Records Table: Displays detailed patient information and actions in a tabular format.
2. Action Modal: Allows users to edit immediate actions for patients.
3. Responsive Design: Optimized for various screen sizes using Bootstrap.
4. State Management: Uses React state to manage modal interactions and data updates.

- Prerequisites
  Before setting up the project, ensure you have the following installed:

Node.js (v16 or later)
npm (v8 or later)

- Setup Instructions

1. Clone the Repository:
   git clone <repository-url>
   cd <project-directory>

2. Install Dependencies: Run the following command to install the required packages:
   npm install

3. Start the Development Server: Launch the application in development mode:
   npm start

- The application will be available at http://localhost:3000.

- Build for Production: To create a production-ready build:
  npm run build

- Implementation Details :

1. Adding a Patient:
   --- Patients are displayed in a table with their name, contact information, parent details, and immediate actions.
   --- Clicking on the patient name opens a modal displaying detailed information about the patient.

2. Editing Immediate Actions
   --- Click the Action button in the "Immediate Actions" column for a patient.
   --- A modal dialog opens with the action’s details pre-populated.
   --- Edit the fields (action, status, or due date) and click Save Changes.
   --- The updates are reflected directly in the table.

3. Customization
   --- Modify the patient data by editing the sampleData.js file in the data directory.
   --- Update styles by editing styles.css in the src directory.

4. Dependencies
   React: Front-end library for building user interfaces.
   React-Bootstrap: UI framework for styling and responsive design.
   Bootstrap: CSS framework for styling.
