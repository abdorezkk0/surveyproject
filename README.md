# Intern Survey Project

A survey project with three main modules:
1. Survey Creation - Create surveys with mandatory questions
2. Survey Assignment - Assign surveys to users
3. Response Summary - View and analyze survey responses

## Technology Stack
- Frontend: React
- Backend: Node.js with Express
- Database: MongoDB

## Project Structure
The project is divided into frontend and backend directories:

### Frontend
- React application for creating, assigning, and viewing surveys
- Components for survey creation, user assignment, and response visualization

### Backend
- Express API for handling survey data
- MongoDB models for users, surveys, assignments, and responses

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
