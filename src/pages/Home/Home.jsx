import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import ScrollContainer from "../../components/ScrollContainer";
import CategoryButton from "../../components/CategoryButton";
import { BookCardLg, BookCard } from "../../components/BookCards.jsx";
import { SlideOne, SlideTwo, SlideThree } from "./Slides";
import { useScroll } from "../../hooks/useScrollContainer";
import { getRandomCategories } from "../../config/filters.js";
import Recommendations from "../Home/Recommendations.jsx";
import img5 from "../../assets/display/img5.png";
import { NavLink } from "react-router-dom";
import { sampleData } from "../../config/sampleData.js";
export function Home() {
  const [randomCategories, setRandomCategories] = useState();
  const {
    containerRef: mainContainer,
    scrollToSubContainer,
    totalSubContainers,
    index,
  } = useScroll(true);
  const isMobile = useMediaQuery({ query: "(max-width: 520px)" });
  const scrollContent = [<SlideOne />, <SlideTwo />, <SlideThree />];
  useEffect(() => {
    scrollToSubContainer(1);
    setRandomCategories(getRandomCategories(4));
  }, []);
  return (
    <main className="h-max w-full ">
      <section className="h-screen w-full flex justify-center items-center flex-col  pt-20 pb-4">
        <div className="content h-full w-[90%] flex  relative p-10 bg-background2 shadow-xl ">
          {isMobile ? (
            ""
          ) : (
            <button
              onClick={() => scrollToSubContainer(-1)}
              className="p-3  h-max self-center secondary-btn mx-4"
            >
              <SlArrowLeft
                className="hover:text-textSecondary child:text-border "
                size={20}
              />
            </button>
          )}
          <ScrollContainer
            forwardRefs={mainContainer}
            elements={scrollContent}
          ></ScrollContainer>
          <div
            id="dot-indicator"
            className="absolute bottom-0 right-1/2 flex items-center justify-center gap-x-2  mb-4"
          >
            {[...Array(totalSubContainers)].map((_, i) => (
              <div
                key={i}
                className={
                  "w-2 rounded-full h-2 " +
                  (i == index ? " bg-accent " : "bg-primary")
                }
              ></div>
            ))}
          </div>
          {isMobile ? (
            " "
          ) : (
            <button
              onClick={() => scrollToSubContainer(1)}
              className="p-3 h-max self-center secondary-btn mx-4"
            >
              <SlArrowRight
                className="hover:text-textSecondary child:text-border "
                size={20}
              />
            </button>
          )}
        </div>
      </section>
      <section className="h-max w-full px-4 flex flex-col justify-center items-center">
        {randomCategories ? (
          <div className="flex flex-col gap-4 items-center py-10 bg-background2 px-4 shadow-xl rounded-lg my-6 ">
            <h1>Featured Categories</h1>
            <IconContext.Provider value={{ size: "48px" }}>
              <div className="flex gap-3 items-center justify-center flex-wrap child:grow px-6">
                {randomCategories.map((category, i) => {
                  console.log(category);
                  return (
                    <CategoryButton
                      category={category}
                      key={i}
                    ></CategoryButton>
                  );
                })}
              </div>
            </IconContext.Provider>
          </div>
        ) : (
          ""
        )}
        <h1 className="mt-6 mb-2 text-center">Featured Books</h1>

        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 ">
          <BookCardLg className="shrink-0"></BookCardLg>
          <div className="wrapper flex flex-wrap child:shrink gap-2 child:w-1/4 child:grow max-w-[750px] max-h-[680px] overflow-scroll hide-scrollbar">
            {sampleData.slice(0, 6).map((book, i) => {
              return <BookCard key={i} book={book}></BookCard>;
            })}
          </div>
        </div>
      </section>
      <section className="h-max w-full  px-10 py-10">
        <div className=" h-full rounded-lg book-container-1 flex justify-center overflow-auto w-full items-center flex-col lg:flex-row bg-background2 py-10 shadow-xl">
          <div className="poster h-full relative  px-8 py-5 flex lg:flex-col flex-wrap items-center justify-center">
            <div className="header-wrapper">
              <h1 className="text-4xl">New Arrivals</h1>
              <p className="text-xl my-2">Discount 30%</p>
              <NavLink
                to={"/collections?romance"}
                className="text-md mb-5 hover:underline"
              >
                Shop Now
              </NavLink>
            </div>
            <img className="w-full max-w-[280px]" src={img5}></img>
          </div>
          <ul className="book-card-list flex flex-wrap justify-center h-full w-3/4 child:w-1/4 ">
            {sampleData.slice(0, 4).map((book, i) => {
              return (
                <BookCard
                  key={i}
                  book={book}
                  containerStyle="shrink grow min-w-[142px] bg-background2 "
                ></BookCard>
              );
            })}
          </ul>
        </div>
        <Recommendations
          className="flex flex-col items-center justify-center w-full mt-10 "
          books={sampleData}
        ></Recommendations>
      </section>
    </main>
  );
}

export default Home;
