"use client";
import Image from "next/image";
import HeroImage from "../../public/HeroImage.jpg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTriger from "gsap/dist/ScrollTrigger";
import ExploreContainer from "@/components/ExploreContainer";
import { articleData, tipData } from "@/data";
import { motion } from "framer-motion";
import Latest from "../../public/Latest.jpg";

gsap.registerPlugin(TextPlugin, ScrollTriger);

export default function Home() {
  const [onHover, setOnHover] = useState(false);

  const textRef = useRef(null);
  const bodyRef = useRef(null);

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          console.log(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        observer.observe(bodyRef.current);
      } else {
        // Scrolling up, ignore observation
        observer.unobserve(bodyRef.current);
      }

      setPrevScrollY(currentScrollY);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    observer.observe(bodyRef.current);
  }, []);

  const animation = {
    initial: { y: "100%" },

    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };
  const headerText = ["Empower Your Fitness", "Journey with Expert Tip"];
  return (
    <>
      <section className="hero">
        <div className="hero-blur"></div>
        <div className="hero-w">
          <div className="hero-w__wrapper">
            <div className="hero-grid">
              <div className="hero-grid__first-section">
                <div className="content">
                  <h1 className="content__header">
                    Transform Your Life Through{" "}
                    <span ref={textRef}>Health</span> and Fitness
                  </h1>

                  <p className="content__desc">
                    Discover a journey to wellness and vitality with our expert
                    insights, inspiring stories, and actionable tips. Embrace a
                    healthier lifestyle and unlock the best version of yourself.
                    Your path to fitness starts here.
                  </p>
                  <Link
                    onMouseEnter={() => {
                      setOnHover(true);
                    }}
                    onMouseLeave={() => {
                      setOnHover(false);
                    }}
                    className="content__cta"
                    href={"/"}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-6 h-6 ${onHover && "animate-svg"}`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <p>Explore Now </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hero-grid__second-section">
                <Image src={HeroImage} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="explore">
        <div className="explore__wrapper">
          <div className="explore-intro grid">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              className="explore-intro__header"
            >
              Explore Our Featured Articles
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              className="explore-intro__desc"
            >
              Delve into a treasure trove of health and fitness knowledge with
              our carefully curated featured articles. From invigorating
              workouts and nutritious recipes to mindfulness practices and
              wellness insights, discover a wealth of information to guide you
              on your journey to a healthier and happier life.
            </p>
          </div>
          <div className="explore-article">
            {articleData.map((article) => (
              <ExploreContainer
                delay={article.delay}
                keyValue={article.id}
                title={article.title}
                desc={article.desc}
                img={article.img}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="empower" className="empower">
        <section className="empower__wrapper">
          <div ref={bodyRef} className="empower-intro">
            {headerText.map((text, index) => (
              <>
                <div className="text-mask">
                  <motion.h1
                    custom={index}
                    variants={animation}
                    initial="initial"
                    animate={isInView ? "enter" : ""}
                  >
                    {text}
                  </motion.h1>
                </div>
              </>
            ))}
            <p
              className="empower-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Unlock the secrets to a healthier, stronger you with our Fitness
              Tips section. Whether you're a seasoned fitness enthusiast or just
              starting your wellness journey, our expert tips provide valuable
              insights to elevate your workout routine. From cardiovascular
              exercises to strength-building at home, we've curated a collection
              of actionable advice to guide you towards a fitter and more
              vibrant lifestyle.
            </p>

            <div className="empower-support">
              <p>Need Support?</p>
              <Link href={"contact"}>Contact Us</Link>
            </div>
          </div>

          <div className="empower-img">
            <div className="empower-img__container">
              <Image src={HeroImage} alt="Hero Image" />{" "}
            </div>
            <div className="empower-img__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>

          <div className="empower-tip">
            {tipData.map((tip) => (
              <div
                className="empower-tip__container"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tip.delay}
              >
                <div>
                  <h1>{tip.title}</h1>
                  <p>{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className="nourish">
        <section className="nourish__wrapper">
          <div className="nourish-intro">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              Nourish Your Body, Fuel Your Life
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Welcome to our Nutrition Corner, a dedicated space where we
              explore the delicious intersection of health and taste. Dive into
              a world of nutrient-rich choices, balanced meals, and culinary
              delights that not only satisfy your taste buds but also nourish
              your body from within.
            </p>
          </div>
        </section>
        <hr className="mt-[1.5rem]" />
        <div className="nourish__details ">
          <div className="recipes">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="nourish-text"
            >
              <span>Recipe</span> of the Week
            </h1>

            <div className="nourish-grid">
              <div data-aos="fade-right" data-aos-duration="1000">
                <h1>Quinoa and Veggie Buddha Bowl</h1>
                <p>
                  Indulge in a culinary masterpiece that not only tantalizes
                  your taste buds but also packs a nutritional punch. Our Quinoa
                  and Veggie Buddha Bowl is a delightful combination of protein,
                  fiber, and essential nutrients, making it a perfect choice for
                  a satisfying and health-conscious meal.
                </p>
                <Link href="/">Read More</Link>
              </div>
              <div
                className="recipe-img"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div>
                  <Image src={require("../../public/Recipe.jpg")}></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nourish__details nutrition">
          <div className="recipes">
            <h1
              className="nourish-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Nutrition Tip
            </h1>

            <div className="nourish-grid">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="tip-img"
              >
                <div>
                  <Image src={require("../../public/tip.jpg")}></Image>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <h1>Balancing Macronutrients for Optimal Energy</h1>
                <p>
                  Discover the art of macronutrient balance – a key to
                  sustaining energy levels throughout the day. Our nutrition tip
                  breaks down the importance of balancing proteins,
                  carbohydrates, and fats, offering practical insights to help
                  you create meals that support your overall well-being.
                </p>
                <Link href="/">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="journey">
        <div className="journey__wrapper">
          <div className="journey_f-section">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              Inspiring Journeys, Real Results
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Step into our Success Stories section, where we celebrate the
              triumphs and transformations of individuals who have embarked on
              their health and fitness journeys. These inspiring narratives are
              a testament to the incredible potential within each of us to
              achieve our goals.
            </p>
          </div>
        </div>
      </section>
      <section className="latest">
        <div className="latest__wrapper">
          <div className="latest-header">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              Stay Informed with Latest News and Research
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Welcome to our Latest News and Research section, your gateway to
              staying abreast of the ever-evolving landscape of health, fitness,
              and wellness. Here, we curate the most recent findings, trends,
              and breakthroughs in the world of well-being.
            </p>
          </div>

          <div className="header-details">
            <div className="header-details__left">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="trending-topic"
              >
                <h1>Trending Topic</h1>
                <div>
                  <p>Read all articles</p>
                </div>
              </div>
              <Image
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                src={Latest}
                alt="Latest news and research"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="header-details__right"
            >
              <div>
                <h1>The Rise of Plant-Based Diets: A Comprehensive Overview</h1>
                <p>
                  Stay ahead of the curve with our in-depth exploration of the
                  rising trend of plant-based diets. We dissect the research,
                  discuss the health implications, and provide insights into
                  adopting a plant-centric lifestyle for improved well-being.
                </p>
                <Link href="/">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="newsletters">
        <div className="newsletters__wrapper">
          <svg
            className="scribOne"
            width="764"
            height="340"
            viewBox="0 0 764 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M88.466 -65C103.283 -30.791 155.762 38.1276 247.147 40.1301C361.379 42.6332 579.805 -133.084 705.507 -19.9442C831.21 93.1958 789.15 339.501 595.1 323.481C401.049 307.461 365.203 203.332 210.345 208.839C86.4586 213.244 19.1623 297.449 1 339"
              stroke="#A7A7A7"
            />
          </svg>
          <div className="newsletters-details">
            <div>
              <h1>
                Stay Connected, Stay Informed - Subscribe to Our Newsletter
              </h1>
              <p>
                Join our community of health enthusiasts, wellness seekers, and
                fitness aficionados by subscribing to our newsletter.
              </p>
              <form>
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
