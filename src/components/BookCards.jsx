import React from "react";
import { NavLink } from "react-router-dom";
import { images } from "../config/images";
import { BsCartPlus } from "react-icons/bs";

const bookSample = {
  title: "No title",
  author: "No Author",
  price: 100,
  discount: 0.3,
  ratings: 4.5,
  ratingsCount: 242,
  imgSrc: "",
};
const sampleImg = images["lost_city_cover"];
export function BookCard({
  book,
  containerStyle = " w-52 max-w-[240px] min-w-[160px]",
  imgStyle,
}) {
  const {
    _id,
    title = "No title",
    author = "No Author",
    prices,
    description,
    image,
    ratings,
    ratingsCount,
  } = book;
  const { price } = prices[0];
  return (
    <NavLink
      to={`/collections/${_id}`}
      className={
        "book-card relative transition-all cursor-pointer overflow-hidden  border-border border-solid border-[1px] px-3 bg-background hover:shadow-2xl hover:border-borderHover h-[318px]" +
        containerStyle
      }
    >
      <div className="w-full p-2 flex justify-center">
        <img
          src={images[image.replace(".jpg", "")] || images["defaultImg"]}
          alt=""
          className={
            "h-full max-h-[200px] min-w-[132px] min-h-[200px] w-auto self-center " +
            imgStyle
          }
        />
      </div>
      <div className="title-card h-[100px] self-end bg-[inherit] relative z-10 py-2">
        <h6 className="text-ellipsis line-clamp-1 ">{title}</h6>
        <p className="line-clamp-1">
          by <b>{author}</b>
        </p>
        <div className="price flex gap-1">
          <h6>₱{price}</h6>
          <p className="self-end line-through text-xs mt-auto">₱{price}</p>
        </div>
      </div>
      <div className="action-grp w-full child:grow-0 flex pb-2 absolute bottom-0 left-0 px-[inherit] z-0">
        <button className="primary-btn py-1 mr-auto">Buy</button>
        <button className="primary-btn py-1 px-1 rounded-lg">
          <BsCartPlus size={24} />
        </button>
      </div>
    </NavLink>
  );
}

export function BookCardLg({ book, className }) {
  const {
    _id,
    title = "No title",
    author = "No Author",
    price = 100,
    discount = 0.3,
    imgSrc,
    ratings,
    ratingsCount,
  } = bookSample;

  return (
    <NavLink
      to={`/collections/${_id}`}
      className={
        "border-solid border-2 border-accent w-[20rem] sm:w-sm h-full grid grid-rows-2 p-4 gap-y-4 " +
        className
      }
    >
      <img
        src={sampleImg}
        alt=""
        className="justify-self-center row-span-2 h-full "
      />
      <div className=" row-span">
        <h6 className="mb-1 line-clamp-2 text-ellipsis">
          {title} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti quas temporibus exercitationem consequuntur vero omnis
          assumenda. Aspernatur veniam culpa quia ex dolores. Eos reiciendis
          vitae voluptate debitis ipsum aspernatur quisquam.
        </h6>
        <p className="text-gray-700 mb-2">
          by <b>{author}&nbsp;&nbsp;</b>{" "}
          <em className="text-sm">
            {ratings} ({ratingsCount})
          </em>
        </p>
        <div id="price-tag" className="flex gap-x-2 mb-4 ">
          <h2 className="text">₱{(1 - discount) * price}</h2>
          <p className="text-green-500 line-through self-end">{`₱${price}`}</p>
        </div>
        <div className="flex gap-x-2 child:grow ">
          <button className="primary-btn">Buy Now</button>
          <button className="secondary-btn">Add to Cart</button>
        </div>
      </div>
    </NavLink>
  );
}

export function BookCardLandscape({ className = "w-1/3 min-w-[300px]", book }) {
  const {
    _id,
    title = "No title",
    author = "No Author",
    price = 100,
    discount = 0.3,
    image,
    genre,
    ratings,
    ratingsCount,
  } = book;
  return (
    <div
      id="book-card-landscape"
      className={
        "flex px-4 py-2 gap-x-4 bg-[inherit] transition-all  duration-200 border-border border-solid border-[1px] hover:border-borderHover hover:shadow-2xl hover:bg-background2 " +
        className
      }
    >
      <NavLink to={`/collections/${_id}`}>
        <img
          src={images[image.replace(".jpg", "")] || images["defaultImg"]}
          alt=""
          className="min-w-[120px] max-w-[120px] h-full"
        />
      </NavLink>
      <div className=" card-landscape  w-2/3 flex flex-col grow ">
        <div className="wrapper overflow-scroll mb-auto ">
          <NavLink to={`/collections/${_id}`}>
            <p className="">{title}</p>
            <p className="">{author}</p>
            <p className="">₱{price}</p>
          </NavLink>
          <ul className="flex gap-x-1">
            {genre.map((genre) => {
              return (
                <p
                  key={genre}
                  className="bg-neutral-3 px-2 py-1 rounded-sm text-xs"
                >
                  {genre}
                </p>
              );
            })}
          </ul>
        </div>
        <button className="w-full py-2  justify-self-stretch primary-btn ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
