import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BACKEND_URL from "../apiConfig";
import homePLogo from "../assets/booklogo.png";
import homeBookCover from "../assets/bookcover1.png";
import "../static/homestyles.css";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URL}/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data.data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);
  console.log(books);
  return (
    <div>
      <header>
        <div className="top-bar">
          <div className="contact-info">
            <i className="fa fa-phone"></i> +254 72980....
          </div>
          <div className="social-icons">
            <Link to="#">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
        <div className="mid-bar">
          <div className="home--logo">
            <img src={homePLogo} alt="Book Haven Logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search Books..." />

            <i className="fas fa-search"></i>
          </div>
          <div className="account--icons">
            <Link to="/login">
              <i className="fas fa-user"></i> Account
            </Link>
            <Link to="#">
              <i className="fas fa-shopping-cart"></i> Cart (0)
            </Link>
            <Link to="#">
              <i className="fas fa-heart"></i> Wishlist
            </Link>
          </div>
        </div>
        <nav className="home--navbar">
          <ul className="home--nav--links">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/">New Release</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Book Haven!</h1>
            <p>
              Explore a world of stories, knowledge, and adventure. From
              bestselling novels to hidden gems, our curated collection is
              designed to ignite your imagination and satisfy your literary
              cravings. Dive into our latest arrivals and find the book that
              speaks to you.
            </p>
          </div>
          <div className="home-book-cover">
            <img src={homeBookCover} alt="Book Cover 1" />
          </div>
        </section>
        <section className="release--books">
          <h2>New Release Books</h2>

          <div className="card-container">
            {books.map((books) => (
              <div key={books._id} className="card">
                <img src={books.imageUrl} alt="bookcover" />
                <h3 className="bookTitle">{books.title}</h3>
                <h4 className="bookAuthor">by {books.author}</h4>
                <h3 className="bookPrice">{books.price}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-info">
          <div className="footer-links">
            <h3>COMPANY</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/">New Release</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>IMPORTANT LINKS</h3>
            <ul>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
              <li>
                <Link to="#">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>&copy; 2024 Book Haven. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
