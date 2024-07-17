Book Haven Store
Introduction
Title: Book Haven Store - An Online Bookstore Application Using MERN Stack

Author: Clinton Orenge

Inspiration for Book Haven Store:
I was inspired by the love for books and the desire to create an accessible platform for book enthusiasts to explore, purchase, and manage books online.

Link to Deployed Site: https://bookhavenstore-frontend.onrender.com/

Final Project Blog Article: Read the Blog: https://bookhavenstore-frontend.onrender.com/

LinkedIn: https://www.linkedin.com/in/clinton-orenge-77211287/

I'm getting book details from this website
https://www.goodreads.com/genres/google

Installation
To run this project locally, follow these steps:

1.  Clone the repository:
    git clone https://github.com/yourusername/book-haven-store.git
    cd book-haven-store
2.  Install dependencies: # For the backend
    cd backend
    npm install

        # For the frontend
        cd ../frontend
        npm install

3.  Set up environment variables:
    Create a .env file in the backend directory with the following content:
    MONGO_URI=your_mongodb_uri
    BACKEND_URL=http://localhost:5555
4.  Run the application: # Start the backend server
    cd backend
    npm start

        # Start the frontend server
        cd ../frontend
        npm run dev

5.  Access the application:
    Open your browser and navigate to http://localhost:5000

Usage
Once the application is running, you can:

Browse the homepage to view available books.
Add, edit, and delete books (admin users only).
Search for books using the search bar.
Navigate through different sections using the navigation menu.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.

Related Projects
Another Bookstore App
Book Management System

Licensing
This project is not licensed

Technology & Architecture
Frontend: React.js, React Router for navigation, CSS, HTML
Backend: Express.js, Node.js, MongoDB database
Other Tools: Vite.js for efficient development, Mongoose for MongoDB interactions
Deployment: Render.com

Core Algorithms and Code Snippet
Book Fetching
Efficiently fetching and displaying book data from the database.

Example of a fetch operation in the HomePage component:
useEffect(() => {
fetch(`${BACKEND_URL}/books`)
.then((response) => response.json())
.then((data) => setBooks(data.data))
.catch((error) => console.error("Error fetching data:", error));
}, []);

HTTP Methods
POST: Save a new book
GET: Retrieve books from the database
PUT: Update a book
DELETE: Delete a book by ISBN number

Process, Collaboration, and Timeline
Week 1 and 2: Learning React.js, JavaScript, and Node.js concepts
Week 3: Planning, Backend Setup, Initial Frontend. Implemented basic backend with CRUD operations for books and started frontend work.
Week 4: Completed development, testing, deployment. Created frontend pages for homepage, admin dashboard, and book management. Integrated backend APIs with frontend components and deployed on Render.com.
Challenges Overcome
Learning Curve: Gaining proficiency in React.js, JavaScript, and Node.js
Invested time in online tutorials, documentation, and hands-on practice.
Technical Issues: Integrating backend with frontend and ensuring data flow
Broke down tasks into smaller components to manage complexity.
Learnings and Future Plans
Learnings:

Comprehensive understanding of React.js for dynamic UIs.
Backend proficiency with Node.js, CRUD operations, and API integration.
Improved JavaScript skills for asynchronous operations and state management.
Deployment experience with Render.com for online accessibility.
Full-stack development experience combining frontend and backend technologies.
Future Plans:

Implementing user authentication and authorization.
Enhancing the admin dashboard for user and book management.
Adding purchasing features with a secure payment gateway.
Implementing order management functionalities for tracking purchases and order history.
