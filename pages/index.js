import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import react from "react";
import { useState } from "react";

// FontAwesomeIcon
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div>
      <Head>
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/logo/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/logo/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/logo/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Meta Tags */}
        <meta
          name="keywords"
          content="food,
            kitchen,
            steak,
            breakfast,
            lunch,
            dinner,
            fine dining"
        />
        <meta
          name="descripton"
          content="Come stop by Gerson's Simple Food, one of the best restaurant in the country."
        />

        {/* Title */}
        <title>GSF - Get your next meal at Gerson's Fine Dining</title>
      </Head>

      {/***********************************  Header Section */}
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

      {/***********************************  Jumbo Section */}

      <section id="jumbo-section">
        {/* Global Container */}
        <div className="container">
          <div className="jumbo-hero__text">
            {/* Jumbo Welcome Text */}
            <div className="jumbo-hero__message-container">
              <h1 className="jumbo-hero__title">
                Simple, Great Taste and Great Price
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

      {/***********************************  About Section */}

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

      {/***********************************  Ingredient Section */}

      <section id="ingredient-section">
        {/* Global Container */}
        <div className="container">
          {/* Ingredient Section Content */}
          <div className="ingredient-section__content">
            {/* Ingredient Section Text */}
            <div className="ingredient-section__text">
              <h2 className="ingredient-section__title">
                You can rest assured, We only use Fresh Ingredients
              </h2>

              <p className="ingredient-section__info">
                We use good, fresh out of the store ingredients to freshly cook
                your favorite meals.
              </p>
            </div>

            {/* Ingredient Section Image */}
            <div className="ingredient-section__img-container">
              <div
                className="ingredient-section__image"
                style={{ position: "relative", objectFit: "cover" }}
              >
                <Image
                  src="/img/fresh-ingredient.jpeg"
                  layout="fill"
                  alt="Image of fresh ingredients for food"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/***********************************  Menu Section */}

      <section id="menu-section">
        {/* Global Container */}
        <div className="container">
          {/* Menu Section Content */}
          <div className="menu-section__content">
            {/* Menu Section Title */}
            <h2 className="menu-section__title">Our Mouth Watering Menu</h2>

            {/* Menu Section Filter */}
            <div className="menu-section__filter">
              <div className="menu-section__filter__item menu-section__filter--breakfast">
                Breakfast
              </div>

              <div className="menu-section__filter__item menu-section__filter--lunch">
                Lunch
              </div>

              <div className="menu-section__filter__item menu-section__filter--dinner">
                Dinner
              </div>
            </div>

            {/* Menu Section Grid Container */}
            <div className="menu-section__menu-grid">
              {/* Menu Section Breakfast */}
              <div className="menu-section__menu-grid__breakfast">
                {/**** Menu Section Breakfast Menu Grid Item - 1 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/breakfast-img-1.png"
                        layout="fill"
                        alt="Image of tasty breakfast plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Pancakes with Cinammon
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Delicious pancakes with cinammon toping is the just the meal
                    you need to start the day.
                  </p>
                </div>

                {/**** Menu Section Breakfast Menu Grid Item - 2 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/breakfast-img-2.png"
                        layout="fill"
                        alt="Image of tasty breakfast plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Vegetable Salad
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Freshly made salad with some avocado, egg and peppers.
                  </p>
                </div>

                {/**** Menu Section Breakfast Menu Grid Item - 3 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/breakfast-img-3.png"
                        layout="fill"
                        alt="Image of tasty breakfast plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Waffles with Grapes
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    A simple waffle with grapes dish but delicious.
                  </p>
                </div>

                {/**** Menu Section Breakfast Menu Grid Item - 4 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/breakfast-img-4.png"
                        layout="fill"
                        alt="Image of tasty breakfast plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Beans with Fried Egg
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Made with brown beans, some egg and some garlic bread.
                  </p>
                </div>
              </div>

              {/* Menu Section Lunch */}
              <div className="menu-section__menu-grid__lunch">
                {/**** Menu Section Lunch Menu Grid Item - 1 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/lunch-img-1.png"
                        layout="fill"
                        alt="Image of tasty lunch plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Yellow Pasta
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Yellow pasta, make with pasta with yellow sauce, simple but
                    delicious.
                  </p>
                </div>

                {/**** Menu Section Lunch Menu Grid Item - 2 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/lunch-img-2.png"
                        layout="fill"
                        alt="Image of tasty lunch plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    A bowl of Shrimp
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Like the title said, a bowl full with good cooked shrimp
                    with some vegetables.
                  </p>
                </div>

                {/**** Menu Section Lunch Menu Grid Item - 3 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/lunch-img-3.png"
                        layout="fill"
                        alt="Image of tasty lunch plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Brown Soup
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Brown Soup, made with brown beans and some leaf.
                  </p>
                </div>

                {/**** Menu Section Lunch Menu Grid Item - 4 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/lunch-img-4.png"
                        layout="fill"
                        alt="Image of tasty lunch plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Seafood
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Seafood, one of our favorite and famous dish, it's made with
                    seashells, shrimps and vegetables.
                  </p>
                </div>
              </div>

              {/* Menu Section Dinner */}
              <div className="menu-section__menu-grid__dinner">
                {/**** Menu Section Dinner Menu Grid Item - 1 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/dinner-img-1.png"
                        layout="fill"
                        alt="Image of tasty dinner plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Brown Rice With Egg
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Brown rice, egg and vegetables.
                  </p>
                </div>

                {/**** Menu Section Dinner Menu Grid Item - 2 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/dinner-img-2.png"
                        layout="fill"
                        alt="Image of tasty dinner plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Vegetable with Beef
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Some good beef and good vegetables.
                  </p>
                </div>

                {/**** Menu Section Dinner Menu Grid Item - 3 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/dinner-img-3.png"
                        layout="fill"
                        alt="Image of tasty dinner plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Beef with Red and Green Peppers
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Red and green peppers plus beef is the perfect combination
                    for a meal in the evening.
                  </p>
                </div>

                {/**** Menu Section Dinner Menu Grid Item - 4 ****/}
                <div className="menu-section__menu-grid__item">
                  <div className="menu-section__menu-grid__item__image">
                    <div style={{ position: "relative", objectFit: "cover" }}>
                      <Image
                        src="/img/dinner-img-4.png"
                        layout="fill"
                        alt="Image of tasty dinner plate"
                      />
                    </div>
                  </div>

                  <h2 className="menu-section__menu-grid__item__title">
                    Brown Rice with Vegetable
                  </h2>

                  <p className="menu-section__menu-grid__item__info">
                    Perfect cool brown rice with vegetables, healthy food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/***********************************  Review Section */}

      <section id="review-section">
        {/* Global Container */}
        <div className="container">
          {/* Review Section Content */}
          <div className="review-section__content">
            {/* Review Section Content Title */}
            <h2 className="review-section__content__title">
              What Our Regulars are Saying About Us
            </h2>

            {/* Review Section Content Grid */}
            <div className="review-section__content__grid">
              {/* Review Section Content Grid Button Left */}
              <div className="review-section__content__grid__button-left">
                <FontAwesomeIcon
                  className="review-section__content__grid__button-left__icon"
                  icon={faChevronLeft}
                />
              </div>

              {/* Review Section Content Grid Items */}
              <div className="review-section__content__grid__container">
                {/* Review Section Content Grid Item - 1 */}
                <div className="review-section__content__grid__item review-section__content__grid__item--1">
                  <div
                    className="review-section__content__grid__item__image"
                    style={{ position: "relative", objectFit: "cover" }}
                  >
                    <Image
                      src="/img/profile-picture-1.jpeg"
                      layout="fill"
                      alt="Profile Picture"
                    />
                  </div>

                  <h3 className="review-section__content__grid__item__name">
                    Beyonce Lees
                  </h3>

                  <p className="review-section__content__grid__item__comment">
                    The menu is simple, the food is delicious, great price for a
                    good portion, I will definitely come back for more.
                  </p>
                </div>

                {/* Review Section Content Grid Item - 2 */}
                <div className="review-section__content__grid__item review-section__content__grid__item--2">
                  <div
                    className="review-section__content__grid__item__image"
                    style={{ position: "relative", objectFit: "cover" }}
                  >
                    <Image
                      src="/img/profile-picture-2.jpeg"
                      layout="fill"
                      alt="Profile Picture"
                    />
                  </div>

                  <h3 className="review-section__content__grid__item__name">
                    Keon Cousins
                  </h3>

                  <p className="review-section__content__grid__item__comment">
                    Going to GSF is one of the best decision in my life, the
                    food there are one of the best I've ever tasted, definitely
                    worth trying.
                  </p>
                </div>

                {/* Review Section Content Grid Item - 3 */}
                <div className="review-section__content__grid__item review-section__content__grid__item--3">
                  <div
                    className="review-section__content__grid__item__image"
                    style={{ position: "relative", objectFit: "cover" }}
                  >
                    <Image
                      src="/img/profile-picture-3.jpeg"
                      layout="fill"
                      alt="Profile Picture"
                    />
                  </div>

                  <h3 className="review-section__content__grid__item__name">
                    Rodrigo Gould
                  </h3>

                  <p className="review-section__content__grid__item__comment">
                    Went there once now I've been a regular customer ever since,
                    great customer service, great food, waiter/waitress responds
                    to your every request, you feel at home.
                  </p>
                </div>

                {/* Review Section Content Grid Item - 4 */}
                <div className="review-section__content__grid__item review-section__content__grid__item--4">
                  <div
                    className="review-section__content__grid__item__image"
                    style={{ position: "relative", objectFit: "cover" }}
                  >
                    <Image
                      src="/img/profile-picture-4.jpeg"
                      layout="fill"
                      alt="Profile Picture"
                    />
                  </div>

                  <h3 className="review-section__content__grid__item__name">
                    Keiran Hatfield
                  </h3>

                  <p className="review-section__content__grid__item__comment">
                    Love this restaurant!! I and my whole family eat there every
                    weekend, great food, great price, they are worth it!
                  </p>
                </div>
              </div>
              {/* Review Section Content Grid Button Right */}
              <div className="review-section__content__grid__button-right">
                <FontAwesomeIcon
                  className="review-section__content__grid__button-right__icon"
                  icon={faChevronRight}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/***********************************  Reservation Section */}

      <section id="reservation-section">
        {/* Global Container */}
        <div className="container">
          {/* Reservation Section Content */}
          <div className="reservation-section__content">
            {/* Reservation Section title  */}
            <h2 className="reservation-section__content__title">
              Make a Reservation
            </h2>

            {/* Reservation Section Grid  */}
            <div className="reservation-section__content__grid">
              {/* Reservation Section Grid Image */}
              <div className="reservation-section__content__grid__image">
                <div
                  style={{
                    position: "relative",
                    objectFit: "cover",
                  }}
                >
                  <Image
                    src="/img/reservation.jpeg"
                    layout="fill"
                    alt="Image of a dining room"
                  />
                </div>
              </div>

              {/* Reservation Section Grid Form Container */}
              <div className="reservation-section__content__grid__form-container">
                {/* Reservation Section Grid Form */}
                <form className="reservation-section__content__grid__form">
                  {/* Reservation Section Grid Form First and Last name*/}
                  <div className="reservation-section__content__grid__form__first-last-name">
                    {/* Reservation Section Grid Form First Name */}
                    <div className="reservation-section__content__grid__form__first-name">
                      <label htmlFor="first-name">First Name *</label>
                      <input id="first-name" name="first-name" required />
                    </div>

                    {/* Reservation Section Grid Form Last Name */}
                    <div className="reservation-section__content__grid__form__last-name">
                      <label htmlFor="last-name">Last Name *</label>
                      <input id="last-name" name="last-name" required />
                    </div>
                  </div>

                  {/* Reservation Section Grid Form Email Address And Phone Number */}
                  <div className="reservation-section__content__grid__form__email-address-phone">
                    {/* Reservation Section Grid Form Email Address */}
                    <div className="reservation-section__content__grid__form__email-address">
                      <label htmlFor="email-address">Email Address *</label>
                      <input
                        id="email-address"
                        name="email-address"
                        type="email"
                        required
                      />
                    </div>

                    {/* Reservation Section Grid Form Phone */}
                    <div className="reservation-section__content__grid__form__phone">
                      <label htmlFor="email-address">Phone Number *</label>
                      <input
                        id="email-address"
                        name="email-address"
                        type="number"
                        required
                      />
                    </div>
                  </div>

                  {/* Reservation Section Grid Form Date, Time, and Number of people */}
                  <div className="reservation-section__content__grid__form__date-time-number">
                    {/* Reservation Section Grid Form Date */}
                    <div className="reservation-section__content__grid__form__date">
                      <label htmlFor="date">Date *</label>
                      <input
                        id="date"
                        type="date"
                        required
                        placeholder="dd/mm/yyyy"
                        required
                      />
                    </div>

                    {/* Reservation Section Grid Form Time */}
                    <div className="reservation-section__content__grid__form__time">
                      <label htmlFor="time">Time *</label>
                      <input
                        id="time"
                        type="time"
                        required
                        placeholder="00/00 am/pm"
                      />
                    </div>

                    {/* Reservation Section Grid Form Number of people */}
                    <div className="reservation-section__content__grid__form__number">
                      <label htmlFor="number-of-people">
                        Number of people*
                      </label>
                      <select
                        id="number-of-people"
                        name="number-of-people"
                        required
                      >
                        <option>Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  {/* Reservation Section Grid Form Note */}
                  <div className="reservation-section__content__grid__form__note">
                    <label htmlFor="note">Note</label>
                    <textarea row="10" cols="58" id="note"></textarea>
                  </div>

                  {/* Revervation Section Grid Form Submit button */}

                  <button
                    className="reservation-section__content__grid__form__submit-button"
                    name="submit-button"
                    type="submit"
                  >
                    Submit
                  </button>

                  {/* Revervation Section Grid Form Notice */}
                  <p className="reservation-section__content__grid__form__notice">
                    *For people of 6 or more please send us a message to{" "}
                    <span>reservation@gsf.com</span> or call us at{" "}
                    <span>+966 13 554 9087.</span> By clicking submit you agree
                    to our <span>terms of privacy.</span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/***********************************  Contact Section */}

      <section id="contact-section">
        {/* Global Container */}
        <div className="container">
          {/* Contact Section Content */}
          <div className="contact-section__content">
            {/* Contact Section Content Title */}
            <h2 className="contact-section__content__title">Contact Us</h2>

            <div className="contact-section__content__grid">
              {/* Contact Section Grid Form Container */}
              <div className="contact-section__content__grid__form-container">
                {/* Contact Section Grid Form */}
                <form className="contact-section__content__grid__form">
                  {/* Contact Section Grid Form First and Last name*/}
                  <div className="contact-section__content__grid__form__first-last-name">
                    {/* Contact Section Grid Form First Name */}
                    <div className="contact-section__content__grid__form__first-name">
                      <label htmlFor="first-name">First Name *</label>
                      <input id="first-name" name="first-name" required />
                    </div>

                    {/* Contact Section Grid Form Last Name */}
                    <div className="contact-section__content__grid__form__last-name">
                      <label htmlFor="last-name">Last Name *</label>
                      <input id="last-name" name="last-name" required />
                    </div>
                  </div>

                  {/* Contact Section Grid Form Email Address */}
                  <div className="contact-section__content__grid__form__email-address">
                    <label htmlFor="email-address">Email Address *</label>
                    <input
                      id="email-address"
                      name="email-address"
                      type="email"
                      required
                    />
                  </div>

                  {/* Contact Section Grid Form Note */}
                  <div className="contact-section__content__grid__form__note">
                    <label htmlFor="note">Note</label>
                    <textarea row="10" cols="58" id="note"></textarea>
                  </div>

                  {/* Contact Section Grid Form Submit button */}

                  <button
                    className="contact-section__content__grid__form__submit-button"
                    name="submit-button"
                    type="submit"
                  >
                    Submit
                  </button>

                  {/* Contact Section Grid Form Notice */}
                  <p className="contact-section__content__grid__form__notice">
                    By clicking submit you agree to our{" "}
                    <span>terms of privacy.</span>
                  </p>
                </form>
              </div>

              {/* Contact Section Grid Image */}
              <div className="contact-section__content__grid__image">
                <div
                  style={{
                    position: "relative",
                    objectFit: "cover",
                  }}
                >
                  <Image
                    src="/img/contact-us-img.jpeg"
                    layout="fill"
                    alt="Image of a dining room"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*********************************** Footer Section */}

      <footer id="footer-section">
        {/* Global Container */}
        <div className="container">
          {/* Footer Section Content */}
          <div className="footer-section__content">
            {/* Footer Section Content Grid */}
            <div className="footer-section__content__grid">
              {/* Footer Section Content Grid Logo */}
              <div className="footer-section__logo">
                <Link href="/">
                  <a className="logo">GSF</a>
                </Link>
              </div>

              {/* Footer Section Content Grid About Us links */}
              <div className="footer-section__about-us-links">
                <h2 className="footer-section__about-us-links__title">
                  About Us
                </h2>

                <Link href="#menu-section">
                  <a className="footer-section__about-us-links__menu">
                    Our Menu
                  </a>
                </Link>

                <Link href="#review-section">
                  <a className="footer-section__about-us-links__review">
                    Reviews
                  </a>
                </Link>
              </div>

              {/* Footer Section Content Grid Reservation Link */}
              <div className="footer-section__reservation-link">
                <h2 className="footer-section__reservation-link__title">
                  Reservation
                </h2>

                <Link href="#reservation-section">
                  <a className="footer-section__reservation-link__resevation">
                    Reservation
                  </a>
                </Link>
              </div>

              {/* Footer Section Content Grid Contact Us */}
              <div className="footer-section__contact-us">
                <h2 className="footer-section__contact-us__title">Contact</h2>

                <p className="footer-section__contact-us__phone-email-address">
                  <span>+966 13 554 9087</span>
                  <span>reservation@gsf.com</span>
                </p>
              </div>
            </div>

            {/* Footer Section Copyright */}
            <p className="footer-section__content__copyright">
              &copy; Gerson's Simple Food. All right reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
