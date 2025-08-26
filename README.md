# Intern Survey Project

A comprehensive survey management application built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Overview

This application is divided into three main modules:

1. **Survey Creation**: Create custom surveys with multiple-choice questions
2. **Survey Assignment**: Assign surveys to specific users
3. **Response Summary**: View and analyze survey responses

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **API Style**: RESTful

## Project Structure

### Backend
```
backend/
├── config/
│   └── db.js             # Database configuration
├── controllers/
│   ├── surveyController.js  # Survey CRUD operations
│   ├── userController.js    # User management (for survey assignment)
│   └── responseController.js # Survey responses handling
├── models/
│   ├── Survey.js         # Survey schema
│   ├── User.js           # User schema (for assignment)
│   └── Response.js       # Survey response schema
├── routes/
│   ├── surveys.js        # Survey routes
│   ├── users.js          # User routes
│   └── responses.js      # Response routes
├── middleware/
│   └── auth.js           # Authentication middleware (future implementation)
├── package.json          # Backend dependencies
└── server.js             # Express server setup
```

### Frontend
```
frontend/
├── public/
│   ├── index.html        # HTML template
│   └── ...               # Other public assets
├── src/
│   ├── components/
│   │   ├── QuestionInput.js  # Question input component
│   │   ├── SurveyForm.js     # Survey creation form
│   │   ├── SurveyCard.js     # Survey display card
│   │   └── Layout.js         # App layout component
│   ├── pages/
│   │   ├── Dashboard.js      # Main dashboard
│   │   ├── CreateSurvey.js   # Survey creation page
│   │   ├── AssignSurvey.js   # Survey assignment page (Module 2)
│   │   └── ResponseSummary.js # Response summary page (Module 3)
│   ├── services/
│   │   └── api.js           # API service for backend communication
│   ├── App.js               # Main application component
│   ├── App.css              # Application styles
│   └── index.js             # Application entry point
└── package.json             # Frontend dependencies
```

## Module-to-File Mapping

### Module 1: Survey Creation

#### Frontend Files
- **Components:**
  - `src/components/SurveyForm.js` - Main form for creating/editing surveys
  - `src/components/QuestionInput.js` - Input component for survey questions with mandatory toggle

- **Pages:**
  - `src/pages/CreateSurvey.js` - Main page for survey creation module

- **Utils:**
  - `src/utils/validation.js` - Validation logic for survey forms

#### Backend Files
- **Controllers:**
  - `controllers/surveyController.js` - Handles survey CRUD operations

- **Models:**
  - `models/Survey.js` - Data model for surveys and questions

- **Routes:**
  - `routes/surveys.js` - API endpoints for survey management

### Module 2: Survey Assignment

#### Frontend Files
- **Components:**
  - `src/components/AssignmentList.js` - Display assigned surveys
  - `src/components/UserSelector.js` - Select users to assign surveys to

- **Pages:**
  - `src/pages/AssignSurvey.js` - Main page for survey assignment module
  - `src/pages/TakeSurvey.js` - Interface for users to complete assigned surveys

#### Backend Files
- **Controllers:**
  - `controllers/assignmentController.js` - Handles assignment creation and management

- **Models:**
  - `models/Assignment.js` - Data model for survey assignments

- **Routes:**
  - `routes/assignments.js` - API endpoints for assignment management

### Module 3: Response Summary

#### Frontend Files
- **Components:**
  - `src/components/ResponseChart.js` - Charts and visualizations for survey responses
  - `src/components/SurveyCard.js` - Used to display survey response summaries

- **Pages:**
  - `src/pages/SurveySummary.js` - Main page for response summary module

#### Backend Files
- **Controllers:**
  - `controllers/responseController.js` - Handles response collection and analysis

- **Models:**
  - `models/Response.js` - Data model for survey responses

- **Routes:**
  - `routes/responses.js` - API endpoints for response management

### Shared/Supporting Files

#### Frontend
- `src/components/Layout.js` - Common layout used across all modules
- `src/pages/Dashboard.js` - Main dashboard that integrates all three modules
- `src/pages/Login.js` - Authentication page that protects all modules
- `src/services/api.js` - API service used by all modules
- `src/utils/helpers.js` - Utility functions used across modules
- `src/App.js` - Main app with routing to all module pages

#### Backend
- `config/db.js` - Database connection used by all modules
- `middleware/auth.js` - Authentication middleware protecting all modules
- `models/User.js` - User model referenced by all modules
- `controllers/authController.js` - Authentication logic used across modules
- `routes/auth.js` - Authentication endpoints
- `app.js` and `server.js` - Core server files supporting all modules

## Getting Started
Instructions for setting up and running the project will be added here.
