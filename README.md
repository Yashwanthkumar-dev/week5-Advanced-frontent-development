# Advanced E-Commerce Frontend

## Project Overview
A modern e-commerce frontend application built using React that simulates a real-world shopping experience. It includes product browsing, filtering, searching, and cart functionality with a responsive design. The project demonstrates component-based architecture, API integration, and state management.

---

## Features
- Product catalog using API data
- Category-based filtering system
- Product search functionality
- Shopping cart (add / remove items)
- Cart item count tracking
- Responsive UI for mobile & desktop
- Clean and reusable components
- Routing using React Router

---

## Tech Stack
- React 18
- JavaScript (ES6+)
- React Router DOM
- Context API (State Management)
- Axios (API calls)
- CSS / Inline Styling

---

## Project Structure
src/
│── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── CartPage.jsx
│
│── context/
│   ├── CartContext.jsx
│
│── services/
│   ├── api.js
│
│── App.jsx
│── main.jsx

---

## Setup Instructions

git clone <your-repo-link>
cd ecommerce-app
npm install
npm run dev

---

## Testing Performed

### Functional Testing
- Verified product listing from API
- Tested add to cart functionality
- Tested remove from cart functionality
- Checked navigation between pages

### UI Testing
- Responsive layout tested on mobile and desktop
- Product cards aligned properly
- Navbar cart count updates correctly

### Edge Case Testing
- Empty cart state handled
- API loading state verified
- Invalid routes handled using React Router

---

## Screenshots
![Alt Text](https://github.com/Yashwanthkumar-dev/week5-Advanced-frontent-development/blob/c66cbfed20bb34e4aa63c8492bc5f5a3697d0a80/Screenshot%20from%202026-06-13%2008-36-58.png)
![Alt Text](https://github.com/Yashwanthkumar-dev/week5-Advanced-frontent-development/blob/c66cbfed20bb34e4aa63c8492bc5f5a3697d0a80/Screenshot%20from%202026-06-13%2008-37-03.png)
![Alt Text](https://github.com/Yashwanthkumar-dev/week5-Advanced-frontent-development/blob/c66cbfed20bb34e4aa63c8492bc5f5a3697d0a80/Screenshot%20from%202026-06-13%2008-37-08.png)
![Alt Text](https://github.com/Yashwanthkumar-dev/week5-Advanced-frontent-development/blob/c66cbfed20bb34e4aa63c8492bc5f5a3697d0a80/Screenshot%20from%202026-06-13%2008-37-16.png)
![Alt Text](https://github.com/Yashwanthkumar-dev/week5-Advanced-frontent-development/blob/c66cbfed20bb34e4aa63c8492bc5f5a3697d0a80/Screenshot%20from%202026-06-13%2008-37-23.png)
![Alt Text](https://github.com/Yashwanthkumar-dev/week5-Advanced-frontent-development/blob/c66cbfed20bb34e4aa63c8492bc5f5a3697d0a80/Screenshot%20from%202026-06-13%2008-38-01.png)
![Alt Text](https://github.com/Yashwanthkumar-dev/week5-Advanced-frontent-development/blob/c66cbfed20bb34e4aa63c8492bc5f5a3697d0a80/Screenshot%20from%202026-06-13%2008-38-09.png)
![Alt Text](https://github.com/Yashwanthkumar-dev/week5-Advanced-frontent-development/blob/c66cbfed20bb34e4aa63c8492bc5f5a3697d0a80/Screenshot%20from%202026-06-13%2008-38-28.png)
- Search functionality
- Category filtering
- Cart page
- Empty cart state
- Mobile responsive view

---

## Component Architecture
App
 ├── Navbar
 ├── Home Page
 │     ├── ProductCard
 ├── Cart Page

---

## Key Learnings
- React component-based architecture
- State management using Context API
- API integration using Axios
- Routing using React Router
- Responsive UI design

---

## Future Improvements
- User authentication system
- Wishlist feature
- Checkout & payment flow
- Advanced filtering
- Performance optimization

---

## Author
Yashwanth Kumar
