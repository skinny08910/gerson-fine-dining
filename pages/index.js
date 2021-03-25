import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import react from "react";
import { useState } from "react";
// import styles from "../styles/_index.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GSF - Get your next meal at Gerson's Fine Dining</title>
        <link rel="icon" href="/favicon.ico" />
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
                    Made with brown beans, some egg and some garlic bred.
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
            {/* Review Section Content Grid */}
            <div className="review-section__content__grid">
              {/* Review Section Content Grid Button Left */}
              <div className="review-section__content__grid__button-left"></div>

              {/* Review Section Content Grid Items */}
              <div className="review-section__content__grid-container">
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

                  <h2 className="review-section__content__grid__item__name"></h2>

                  <p className="review-section__content__grid__item__comment"></p>
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

                  <h2 className="review-section__content__grid__item__name"></h2>

                  <p className="review-section__content__grid__item__comment"></p>
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

                  <h2 className="review-section__content__grid__item__name"></h2>

                  <p className="review-section__content__grid__item__comment"></p>
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

                  <h2 className="review-section__content__grid__item__name"></h2>

                  <p className="review-section__content__grid__item__comment"></p>
                </div>
              </div>

              {/* Review Section Content Grid Button Right */}
              <div className="review-section__content__grid__button-right"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
