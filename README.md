# User Card Manager

A dynamic user profile card management application built with **HTML, CSS, and Vanilla JavaScript**. This project demonstrates DOM manipulation, event handling, object-based data management, and dynamic UI rendering through an interactive form.

## Overview

User Card Manager allows users to enter profile information through a form and dynamically generate profile cards without reloading the page. Each card displays the user's name, professional role, bio, and profile image.

This project was developed as part of my hands-on JavaScript practice to strengthen my understanding of core frontend development concepts.

## Features

- **Dynamic Profile Creation** — Generate user cards by submitting a form.
- **Custom User Information** — Add a name, role, bio, and photo URL.
- **DOM Manipulation** — Create and append HTML elements dynamically using JavaScript.
- **Event Handling** — Handle form submissions and prevent default page reloads.
- **Object-Based Data Management** — Store user information in an array of objects.
- **Dynamic UI Rendering** — Display updated user data on the page.
- **Form Reset** — Clear input fields after successful submission.
- **Responsive Layout** — Display profile cards in a grid that adapts to smaller screens.
- **Dark UI** — A clean, minimal interface with a dark theme.

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Form structure and page content |
| CSS3 | Styling, Grid layout, and responsiveness |
| JavaScript (ES6+) | Application logic and interactivity |
| DOM API | Dynamic creation and rendering of user cards |
| Git & GitHub | Version control and project hosting |

## Project Structure

```text
user-card-manager/
│
├── index.html      # Application structure
├── style.css       # Styling and responsive layout
├── script.js       # User management and DOM logic
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser
- Visual Studio Code or another code editor
- Live Server extension (recommended)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/user-card-manager.git
```

**2. Navigate to the project directory**

```bash
cd user-card-manager
```

**3. Open the project**

Open the folder in Visual Studio Code.

**4. Run the application**

Open `index.html` using the Live Server extension, or open the HTML file directly in your browser.

## How to Use

1. Open the application in your browser.
2. Enter the user's name.
3. Provide a role or professional title.
4. Add a short biography.
5. Enter a valid profile image URL.
6. Click **Submit** to generate the profile card.
7. Repeat the process to add more user cards.

## Key JavaScript Concepts Practiced

This project helped me practice:

- `document.querySelector()` for selecting DOM elements.
- `document.createElement()` for creating HTML elements dynamically.
- `classList.add()` for assigning CSS classes.
- `textContent` and element properties for inserting user data.
- `appendChild()` for building nested DOM structures.
- `addEventListener()` for handling form submission.
- `event.preventDefault()` for preventing the default form behavior.
- `bind(this)` for preserving the correct object context.
- Objects and arrays for managing user information.
- `forEach()` for iterating through stored users.
- The separation of application logic into object methods.

## Current Limitations

- User data is stored in memory and is lost when the page is refreshed.
- Profile images require a valid, accessible image URL.
- Persistent storage, editing, and deletion functionality may be added in future versions.

## Future Improvements

- Add user profile deletion and editing.
- Implement local storage for persistent user data.
- Add form validation and clearer error messages.
- Improve image URL validation and fallback handling.
- Add search and filtering functionality.
- Enhance accessibility and mobile responsiveness.

## Learning Objective

The primary goal of this project was to gain practical experience with JavaScript DOM manipulation and understand how user input can be transformed into dynamically generated interface components.

## Author

**Hadia Akbar Azad**

Aspiring Software Engineer | BS Software Engineering Student

Interested in JavaScript, frontend development, and building practical web applications.

---

If you find this project useful, feel free to explore the code and use it for learning purposes.

**Built with HTML, CSS, and JavaScript.**
