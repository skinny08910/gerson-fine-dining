import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Font Awesome
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// React Carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Home() {
  // Initiating the Refs for the menu sections
  const breakfastRef = React.useRef();
  const lunchRef = React.useRef();
  const dinnerRef = React.useRef();

  // Initiating the Refs for the menu filter buttons
  const breakfastFilterRef = React.useRef();
  const lunchFilterRef = React.useRef();
  const dinnerFilterRef = React.useRef();

  // Initiating the Refs for the Screen Loader
  const screenLoaderRef = React.useRef();

  // Initiating the Refs for the Whole Content
  const wholeContentRef = React.useRef();

  //  Initiating Refs for the menu items

  // Refs for the Mobile Menu
  const mobileMenuRef = React.useRef();
  const hamburgerRef = React.useRef();

  // ***** Hook for the active menu section
  const [menu, setMenu] = useState({
    breakfast: {
      active: true,
    },

    lunch: {
      active: false,
    },

    dinner: {
      active: false,
    },
  });

  //  Function for the Breakfast filter
  const clickedBreakfast = () => {
    setMenu({
      breakfast: {
        active: true,
      },

      lunch: {
        active: false,
      },

      dinner: {
        active: false,
      },
    });
  };

  // Function for the Lunch filter
  const clickedLunch = () => {
    setMenu({
      breakfast: {
        active: false,
      },

      lunch: {
        active: true,
      },

      dinner: {
        active: false,
      },
    });
  };

  //  Function for the Dinner filter
  const clickedDinner = () => {
    setMenu({
      breakfast: {
        active: false,
      },

      lunch: {
        active: false,
      },

      dinner: {
        active: true,
      },
    });
  };

  /********* useEffect for the menu section *********/
  useEffect(() => {
    // If statement for the Breakfast filter
    if (menu.breakfast.active === true) {
      breakfastRef.current.style.opacity = 1;
      breakfastRef.current.style.zIdex = 30;
      breakfastRef.current.style.transition = "all .5s ease-in-out";

      breakfastFilterRef.current.classList.add("active");
      lunchFilterRef.current.classList.remove("active");
      dinnerFilterRef.current.classList.remove("active");

      lunchRef.current.style.opacity = 0;
      lunchRef.current.style.transition = "all .5s ease-in-out";
      lunchRef.current.style.zIdex = 20;

      dinnerRef.current.style.opacity = 0;
      dinnerRef.current.style.transition = "all .5s ease-in-out";
      dinnerRef.current.style.zIdex = 10;
    }

    // If Statement for the Lunch filter

    if (menu.lunch.active === true) {
      breakfastRef.current.style.opacity = 0;
      breakfastRef.current.style.zIdex = 20;
      breakfastRef.current.style.transition = "all .5s ease-in-out";

      breakfastFilterRef.current.classList.remove("active");
      lunchFilterRef.current.classList.add("active");
      dinnerFilterRef.current.classList.remove("active");

      lunchRef.current.style.opacity = 1;
      lunchRef.current.style.transition = "all .5s ease-in-out";
      lunchRef.current.style.zIdex = 30;

      dinnerRef.current.style.opacity = 0;
      dinnerRef.current.style.transition = "all .5s ease-in-out";
      dinnerRef.current.style.zIdex = 10;
    }

    // If Statement for the Dinner filter

    if (menu.dinner.active === true) {
      breakfastRef.current.style.opacity = 0;
      breakfastRef.current.style.zIdex = 20;
      breakfastRef.current.style.transition = "all .5s ease-in-out";

      breakfastFilterRef.current.classList.remove("active");
      lunchFilterRef.current.classList.remove("active");
      dinnerFilterRef.current.classList.add("active");

      lunchRef.current.style.opacity = 0;
      lunchRef.current.style.transition = "all .5s ease-in-out";
      lunchRef.current.style.zIdex = 10;

      dinnerRef.current.style.opacity = 1;
      dinnerRef.current.style.transition = "all .5s ease-in-out";
      dinnerRef.current.style.zIdex = 30;
    }

    // Function for the screen loader
    let screenLoader = () => {
      setTimeout(() => {
        screenLoaderRef.current.style.opacity = 0;
        screenLoaderRef.current.style.display = "none";
        screenLoaderRef.current.style.transition = "all .4s ease-in-out";

        wholeContentRef.current.style.opacity = 1;
        wholeContentRef.current.style.transition =
          "opacity .9s ease-in-out .4s";
      }, 1200);
    };

    screenLoader();
  });

  // ***** Hook for the inputfields
  const [inputfield, setInputfield] = useState([]);

  // ***** Hook for the active inputfields
  const [activeInputfield, setActiveInputfield] = useState({
    inputfield: "",
  });

  //****  Initiating Ref for the inputs and text area

  // Global Refs
  const inputRef = React.useRef([]);

  // Refs 1
  const inputRef_1 = React.useRef();

  // Refs 2
  const inputRef_2 = React.useRef();

  // Refs 3
  const inputRef_3 = React.useRef();

  // Refs 4
  const inputRef_4 = React.useRef();

  // Refs 5
  const inputRef_5 = React.useRef();

  // Refs 6
  const inputRef_6 = React.useRef();

  // Refs 7
  const inputRef_7 = React.useRef();

  // Refs 8
  const inputRef_8 = React.useRef();

  // Refs 9
  const inputRef_9 = React.useRef();

  // Refs 10
  const inputRef_10 = React.useRef();

  // Refs 11
  const inputRef_11 = React.useRef();

  // Refs 12
  const inputRef_12 = React.useRef();

  // Function to for each input field
  const eachInput = () => {
    inputRef.current.forEach((input) => {
      input.forEach((index) => {
        if (index.current.value !== "") {
          index.current.style.color = "white";
          index.current.style.borderBottom = "1px solid white";
        } else {
          index.current.style.borderBottom = "";
        }
      });
    });
  };

  // Setting the states for the activeInputfield hook
  const inputfieldOn = () => {
    setActiveInputfield({
      inputfield: eachInput(),
    });
  };

  /********* UseEffect for the reservation and contact section *********/
  useEffect(() => {
    // Putting the individuals input field Refs into the Global parent Refs which is an arrays
    let inputfield = [
      inputRef_1,
      inputRef_2,
      inputRef_3,
      inputRef_4,
      inputRef_5,
      inputRef_6,
      inputRef_7,
      inputRef_8,
      inputRef_9,
      inputRef_10,
      inputRef_11,
      inputRef_12,
    ];

    inputRef.current = new Array(inputfield);

    // Setting the state
    setInputfield(inputfield);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // UseEffect for the Mobile Menu
  useEffect(() => {
    // Viewport helper
    let isInViewport = function (elem) {
      let bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // ----- Mobile Menu Section Toggle Animation

    let mobileMenuTimeline = gsap.timeline();

    let mobileMenuAnimate = () => {
      mobileMenuTimeline
        .fromTo(
          "#mobile-menu",
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.out",
          }
        )
        .fromTo(
          "li",
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
    };

    // Getting the Mobile Menu navbar Elements
    let navbarLinks = document
      .querySelector("#mobile-menu")
      .querySelectorAll("li");

    // Adding the Event Listener to the hamburger element
    hamburgerRef.current.addEventListener("click", () => {
      if (isInViewport(mobileMenuRef.current)) {
        mobileMenuRef.current.classList.add("active");

        mobileMenuAnimate();
      } else {
        mobileMenuRef.current.classList.remove("active");
      }
    });

    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuRef.current.classList.remove("active");
      });
    });
  }, []);

  return (
    <>
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
            fine dining,
            simple good food"
        />
        <meta
          name="description"
          content="Come stop by Gerson's Simple Food, one of the best restaurant in the country."
        />

        {/* Title */}
        <title>GSF - Get your next meal at Gerson's Fine Dining</title>
      </Head>

      {/*********************************** Screen Loader */}

      <div id="screen-loader" ref={screenLoaderRef}>
        {/* Global Container */}
        <div className="container">
          {/* Screen Loader Container */}
          <div className="screen-loader__container">
            {/* Circle 1 */}
            <div className="screen-loader__container__circle__1"></div>

            {/* Circle 2 */}
            <div className="screen-loader__container__circle__2"></div>
          </div>
        </div>
      </div>

      {/* Targeting the Whole Content */}
      <div id="whole-content" ref={wholeContentRef}>
        {/***********************************  Header Section */}
        <header id="header-section">
          {/* Global Container */}
          <div className="container">
            {/* Navbar */}

            <nav className="navbar">
              <div className="navbar__logo">
                <Link href="/" to="GSF" className="logo">
                  GSF
                </Link>
              </div>

              <ul className="navbar__links">
                <li>
                  <Link href="/" to="Home" className="navbar__link">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="#about-section"
                    activeClass="active"
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="navbar__link"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="#menu-section"
                    activeClass="active"
                    to="menu-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="navbar__link"
                  >
                    Our Menu
                  </Link>
                </li>

                <li>
                  <Link
                    href="#review-section"
                    activeClass="active"
                    to="review-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="navbar__link"
                  >
                    Reviews
                  </Link>
                </li>

                <li>
                  <Link
                    href="#reservation-section"
                    activeClass="active"
                    to="reservation-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="navbar__link navbar__link--reservation"
                  >
                    Reservations
                  </Link>
                </li>

                <li>
                  <Link
                    href="#contact-section"
                    activeClass="active"
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="navbar__link"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* Hamburger Menu */}
              <div class="navbar__hamburger" ref={hamburgerRef}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
          </div>
        </header>

        {/***********************************  Mobile Menu Section */}
        <div id="mobile-menu" ref={mobileMenuRef}>
          {/* Global Container */}
          <div className="container">
            {/* Navbar Link */}
            <ul className="navbar__links">
              <li>
                <Link href="/" to="Home" className="navbar__link">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#about-section"
                  activeClass="active"
                  to="about-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="navbar__link"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="#menu-section"
                  activeClass="active"
                  to="menu-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="navbar__link"
                >
                  Our Menu
                </Link>
              </li>

              <li>
                <Link
                  href="#review-section"
                  activeClass="active"
                  to="review-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="navbar__link"
                >
                  Reviews
                </Link>
              </li>

              <li>
                <Link
                  href="#reservation-section"
                  activeClass="active"
                  to="reservation-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="navbar__link navbar__link--reservation"
                >
                  Reservations
                </Link>
              </li>

              <li>
                <Link
                  href="#contact-section"
                  activeClass="active"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="navbar__link"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

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
                  Come taste our simple food here at GSF for the price of a
                  candy bar.
                </p>

                <Link
                  href="#menu-section"
                  activeClass="active"
                  to="menu-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="jumbo-hero__text-btn"
                >
                  Our Simple Menu
                </Link>
              </div>

              {/* Jumbo Image */}

              <div className="jumbo-hero__img">
                <div style={{ position: "relative", objectFit: "contain" }}>
                  <Image
                    src="/img/jumbo-img.png"
                    layout="fill"
                    alt="Image of a celery soup."
                  />
                </div>
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
                  our best to make your stay one of the best nights of your
                  life.
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
                  We use good, fresh out of the store ingredients to freshly
                  cook your favorite meals.
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
                <div
                  className="menu-section__filter__item menu-section__filter--breakfast"
                  onClick={clickedBreakfast}
                  ref={breakfastFilterRef}
                >
                  Breakfast
                </div>

                <div
                  className="menu-section__filter__item menu-section__filter--lunch"
                  onClick={clickedLunch}
                  ref={lunchFilterRef}
                >
                  Lunch
                </div>

                <div
                  className="menu-section__filter__item menu-section__filter--dinner"
                  onClick={clickedDinner}
                  ref={dinnerFilterRef}
                >
                  Dinner
                </div>
              </div>

              {/* Menu Section Grid Container */}
              <div className="menu-section__menu-grid">
                {/* Menu Section Breakfast */}
                <div
                  className="menu-section__menu-grid__breakfast"
                  ref={breakfastRef}
                >
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
                      Delicious pancakes with cinammon toping is the just the
                      meal you need to start the day.
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
                <div className="menu-section__menu-grid__lunch" ref={lunchRef}>
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
                      Yellow pasta, made with pasta with yellow sauce, simple
                      but delicious.
                    </p>
                  </div>

                  {/**** Menu Section Lunch Menu Grid Item - 2 ****/}
                  <div className="menu-section__menu-grid__item ">
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
                      Seafood, one of our favorite and famous dish, it's made
                      with seashells, shrimps and vegetables.
                    </p>
                  </div>
                </div>

                {/* Menu Section Dinner */}
                <div
                  className="menu-section__menu-grid__dinner"
                  ref={dinnerRef}
                >
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
                {/* Review Section Content Grid Items */}
                <div className="review-section__content__grid__container">
                  {/***** Alice Carousel ********/}
                  <AliceCarousel
                    disableDotsControls
                    responsive={{
                      0: {
                        items: 1,
                      },
                    }}
                  >
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
                        The menu is simple, the food is delicious, great price
                        for a good portion, I will definitely come back for
                        more.
                      </p>

                      <p className="review-section__content__grid__item__star">
                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>
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
                        food there are one of the best I've ever tasted,
                        definitely worth trying.
                      </p>

                      <p className="review-section__content__grid__item__star">
                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>
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
                        Went there once now I've been a regular customer ever
                        since, great customer service, great food,
                        waiter/waitress responds to your every request, you feel
                        at home.
                      </p>

                      <p className="review-section__content__grid__item__star">
                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>
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
                        Love this restaurant!! I and my whole family eat there
                        every weekend, great food, great price, they are worth
                        it!
                      </p>

                      <p className="review-section__content__grid__item__star">
                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>

                        <div className="review-section__content__grid__item__star__icon-container">
                          <FontAwesomeIcon
                            className="review-section__content__grid__item__star__icon"
                            icon={faStar}
                          />
                        </div>
                      </p>
                    </div>
                  </AliceCarousel>
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
                        <label
                          htmlFor="reservation-first-name"
                          className="reservation-section-label"
                        >
                          First Name *
                        </label>
                        <input
                          ref={inputRef_1}
                          id="reservation-first-name"
                          name="first-name"
                          required
                          onChange={inputfieldOn}
                          onPaste={inputfieldOn}
                          className="reservation-section-input"
                        />
                      </div>

                      {/* Reservation Section Grid Form Last Name */}
                      <div className="reservation-section__content__grid__form__last-name">
                        <label
                          htmlFor="reservation-last-name"
                          className="reservation-section-label"
                        >
                          Last Name *
                        </label>
                        <input
                          ref={inputRef_2}
                          id="reservation-last-name"
                          name="last-name"
                          required
                          onChange={inputfieldOn}
                          onPaste={inputfieldOn}
                          className="reservation-section-input"
                        />
                      </div>
                    </div>

                    {/* Reservation Section Grid Form Email Address And Phone Number */}
                    <div className="reservation-section__content__grid__form__email-address-phone">
                      {/* Reservation Section Grid Form Email Address */}
                      <div className="reservation-section__content__grid__form__email-address">
                        <label
                          htmlFor="reservation-email-address"
                          className="reservation-section-label"
                        >
                          Email Address *
                        </label>
                        <input
                          ref={inputRef_3}
                          id="reservation-email-address"
                          type="email"
                          required
                          onChange={inputfieldOn}
                          onPaste={inputfieldOn}
                          className="reservation-section-input"
                        />
                      </div>

                      {/* Reservation Section Grid Form Phone */}
                      <div className="reservation-section__content__grid__form__phone">
                        <label
                          htmlFor="reservation-email-address"
                          className="reservation-section-label"
                        >
                          Phone Number *
                        </label>
                        <input
                          ref={inputRef_4}
                          id="reservation-email-address"
                          name="email-address"
                          type="number"
                          required
                          onChange={inputfieldOn}
                          onPaste={inputfieldOn}
                          className="reservation-section-input"
                        />
                      </div>
                    </div>

                    {/* Reservation Section Grid Form Date, Time, and Number of people */}
                    <div className="reservation-section__content__grid__form__date-time-number">
                      {/* Reservation Section Grid Form Date */}
                      <div className="reservation-section__content__grid__form__date">
                        <label
                          htmlFor="date"
                          className="reservation-section-label"
                        >
                          Date *
                        </label>
                        <input
                          ref={inputRef_5}
                          id="date"
                          type="date"
                          required
                          placeholder="dd/mm/yyyy"
                          required
                          onChange={inputfieldOn}
                          onPaste={inputfieldOn}
                          className="reservation-section-input"
                        />
                      </div>

                      {/* Reservation Section Grid Form Time */}
                      <div className="reservation-section__content__grid__form__time">
                        <label
                          htmlFor="time"
                          className="reservation-section-label"
                        >
                          Time *
                        </label>
                        <input
                          ref={inputRef_6}
                          id="time"
                          type="time"
                          required
                          placeholder="00/00 am/pm"
                          onChange={inputfieldOn}
                          onPaste={inputfieldOn}
                          className="reservation-section-input"
                        />
                      </div>

                      {/* Reservation Section Grid Form Number of people */}
                      <div className="reservation-section__content__grid__form__number">
                        <label
                          htmlFor="number-of-people"
                          className="reservation-section-label"
                        >
                          Number of people*
                        </label>
                        <select
                          ref={inputRef_7}
                          id="number-of-people"
                          name="number-of-people"
                          required
                          onChange={inputfieldOn}
                          onPaste={inputfieldOn}
                          className="reservation-section-select"
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
                      <label
                        htmlFor="reservation-note"
                        className="reservation-section-label"
                      >
                        Note
                      </label>
                      <textarea
                        ref={inputRef_8}
                        row="10"
                        cols="58"
                        id="reservation-note"
                        onChange={inputfieldOn}
                        onPaste={inputfieldOn}
                        className="reservation-section-textarea"
                      ></textarea>
                    </div>

                    {/* Revervation Section Grid Form Submit button */}

                    <button
                      className="reservation-section__content__grid__form__submit-button"
                      name="submit-button"
                      type="submit"
                      onClick={(e) => e.preventDefault()}
                    >
                      Submit
                    </button>

                    {/* Revervation Section Grid Form Notice */}
                    <p className="reservation-section__content__grid__form__notice">
                      *For people of 6 or more please send us a message to{" "}
                      <span>reservation@gsf.com</span> or call us at{" "}
                      <span>+966 13 554 9087.</span> By clicking submit you
                      agree to our <span>terms of privacy.</span>
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
                        <label
                          htmlFor="first-name"
                          className="contact-section-label"
                        >
                          First Name *
                        </label>
                        <input
                          ref={inputRef_9}
                          id="first-name"
                          name="first-name"
                          required
                          onChange={inputfieldOn}
                          onPaste={inputfieldOn}
                          onPaste={inputfieldOn}
                          className="contact-section-input"
                        />
                      </div>

                      {/* Contact Section Grid Form Last Name */}
                      <div className="contact-section__content__grid__form__last-name">
                        <label
                          htmlFor="last-name"
                          className="contact-section-label"
                        >
                          Last Name *
                        </label>
                        <input
                          ref={inputRef_10}
                          id="last-name"
                          name="last-name"
                          required
                          onChange={inputfieldOn}
                          onPaste={inputfieldOn}
                          onPaste={inputfieldOn}
                          className="contact-section-input"
                        />
                      </div>
                    </div>

                    {/* Contact Section Grid Form Email Address */}
                    <div className="contact-section__content__grid__form__email-address">
                      <label
                        htmlFor="contact-email-address"
                        className="contact-section-label"
                      >
                        Email Address *
                      </label>
                      <input
                        ref={inputRef_11}
                        id="contact-email-address"
                        name="email-address"
                        type="email"
                        required
                        onChange={inputfieldOn}
                        onPaste={inputfieldOn}
                        className="contact-section-input"
                      />
                    </div>

                    {/* Contact Section Grid Form Note */}
                    <div className="contact-section__content__grid__form__note">
                      <label htmlFor="note" className="contact-section-label">
                        Note
                      </label>
                      <textarea
                        ref={inputRef_12}
                        row="10"
                        cols="58"
                        id="note"
                        onChange={inputfieldOn}
                        onPaste={inputfieldOn}
                        className="contact-section-textarea"
                      ></textarea>
                    </div>

                    {/* Contact Section Grid Form Submit button */}

                    <button
                      className="contact-section__content__grid__form__submit-button"
                      name="submit-button"
                      type="submit"
                      onClick={(e) => e.preventDefault()}
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
                  <Link href="/" className="logo" onClick={scrollToTop}>
                    GSF
                  </Link>
                </div>

                {/* Footer Section Content Grid About Us links */}
                <div className="footer-section__about-us-links">
                  <h2 className="footer-section__about-us-links__title">
                    About Us
                  </h2>

                  <Link
                    href="#menu-section"
                    activeClass="active"
                    to="menu-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="footer-section__about-us-links__menu"
                  >
                    Our Menu
                  </Link>

                  <Link
                    href="#review-section"
                    activeClass="active"
                    to="review-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="footer-section__about-us-links__review"
                  >
                    Reviews
                  </Link>
                </div>

                {/* Footer Section Content Grid Reservation Link */}
                <div className="footer-section__reservation-link">
                  <h2 className="footer-section__reservation-link__title">
                    Reservation
                  </h2>

                  <Link
                    href="#reservation-section"
                    activeClass="active"
                    to="reservation-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className="footer-section__reservation-link__resevation"
                  >
                    Reservation
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
    </>
  );
}
