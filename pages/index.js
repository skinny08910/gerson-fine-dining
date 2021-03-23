import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import react from "react";
// import styles from "../styles/_index.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GSF - Get your next meal at Gerson's Fine Dining</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header id="header-section">
        {/* Global Container */}
        <div className="container">
          {/* Navbar */}
          <nav className="navbar">
            <div className="navbar__logo">
              <Link href="/">
                <a className="logo">GSF</a>
              </Link>
            </div>

            <ul className="navbar__links">
              <li>
                <Link href="/">
                  <a className="navbar__link">Home</a>
                </Link>
              </li>

              <li>
                <Link href="#about-section">
                  <a className="navbar__link">About Us</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a className="navbar__link">Our Menu</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a className="navbar__link">Reviews</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a className="navbar__link navbar__link--reservation">
                    Reservations
                  </a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a className="navbar__link">Contact Us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Jumbo Section */}

      <section id="jumbo-section">
        {/* Global Container */}
        <div className="container">
          <div className="jumbo-hero__text">
            {/* Jumbo Welcome Text */}
            <div className="jumbo-hero__message-container">
              <h1 className="jumbo-hero__title">
                Simple, Great Taste and Great Price.
              </h1>

              <p className="jumbo-hero__message">
                Come taste our simple food here at GSF for the price of a candy
                bar.
              </p>

              <Link href="#menu-section">
                <a className="jumbo-hero__text-btn">Our Simple Menu</a>
              </Link>
            </div>

            {/* Jumbo Image */}
            <div
              className="jumbo-hero__img"
              style={{ position: "relative", objectFit: "cover" }}
            >
              <Image
                src="/img/jumbo-img.png"
                layout="fill"
                alt="Image of a celery soup."
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section id="about-section">
        {/* Global Container */}
        <div className="container">
          <div className="about-section__content">
            {/* About Section Image */}
            <div
              className="about-section__img"
              style={{ position: "relative", objectFit: "cover" }}
            >
              <Image
                src="/img/about-us-img.jpeg"
                layout="fill"
                alt="Image of dining tables in dining room"
              />
            </div>

            {/* About Section Bio */}
            <div className="about-section__text">
              <h2 className="about-section__text-title">About Us</h2>

              <p className="about-section__text-info">
                GSF (Gerson's Simple Food) was named the best affordable
                restaurant with great food in 2017 and has been the to-go eat
                ever since for many of our customers. At GSF, customer
                satisfaction is our main priority, so rest assured, we will do
                our best to make your stay one of the best nights of your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}

      <section id="menu-section">
        {/* Global Container */}
        <div className="container">
          {/* Menu Section Title */}
          <h2 className="menu-section__title"></h2>

          {/* Menu Section Grid Container */}
          <div className="menu-section__menu-grid">
            {/* Menu Section Breakfast */}
            <div className="menu-section__menu-grid__breakfast">
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
            </div>

            {/* Menu Section Lunch */}
            <div className="menu-section__menu-grid__lunch">
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
            </div>

            {/* Menu Section Dinner */}
            <div className="menu-section__menu-grid__dinner">
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
              <div className="menu-section__menu-grid__item"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
