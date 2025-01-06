# ReactJS User Authentication App (Login, Register, Private Navigation)

This is a simple user authentication app built with **React** and **Vite**, featuring a login and registration system, private navigation, and responsive design. The app utilizes **React Router** for navigation and handles authentication with **localStorage**.

## Features

- **Login Page**: Allows users to log in using their credentials.
- **Register Page**: Provides a form for new users to create an account.
- **Private Navigation**: Ensures that protected routes are only accessible to authenticated users.
- **Responsive Design**: The app layout adjusts for different screen sizes to ensure a smooth user experience on mobile devices and desktops.
- **JWT Authentication**: While not implemented in this app, it's ready to integrate with any backend that supports JWT tokens for authentication.

## Features in Detail

### 1. **Login Page**:
  - Users can enter their username and password to log in.
  - If authentication is successful, an auth token is stored in **localStorage**, and the user is redirected to the home page.

### 2. **Register Page**:
  - New users can register by providing a username and password.
  - On successful registration, users are redirected to the login page.

### 3. **Private Route**:
  - The home page is protected by a private route that only displays if the user is authenticated.
  - If the user is not logged in, they will be redirected to the login page.

### 4. **Responsive Design**:
  - The app is designed to be fully responsive, adjusting to different screen sizes.
  - Media queries ensure the layout works seamlessly on both mobile and desktop devices.

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/DEVJDR/kplrAssignment.git
cd kplrAssignment
npm install
npm run dev
