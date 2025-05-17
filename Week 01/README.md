## Project Structure
The project consists of the following files:

- `index.html` - The login page HTML
- `register.html` - The registration page HTML
- `style.css` - Shared CSS styles for both pages
- `login.js` - JavaScript for the login page functionality
- `register.js` - JavaScript for the registration page functionality
- `vite.config.js` - Configuration for the Vite development server
- `package.json` - Project configuration and dependencies

## How It Works
1. When a user registers, their information is stored in the browser's localStorage.
2. When a user tries to log in, the system checks if their credentials match any stored user.
3. Both pages include validation for all input fields.
4. The system prevents users from registering with an email that's already in use.
5. Password requirements include minimum 8 characters, at least 1 uppercase letter, and 1 symbol.