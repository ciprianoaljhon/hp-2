import slideOneImg from "../../assets/display/img1.png";
import slideImgTwo from "../../assets/display/img2.png";
export const SlideOne = () => {
  return (
    <Container>
      <div className="wrapper z-10">
        <SlideTitle
          title="A Handpicked Selection of the Finest Books Awaits You"
          subTitle="Hidden Pages"
          btnText="Explore Books"
        />
      </div>
      <picture className="w-full pr-4">
        <img src={slideOneImg} alt="" className="w-full" />
      </picture>
    </Container>
  );
};
export const SlideTwo = () => {
  return (
    <Container>
      <div>
        <div className="mb-2">
          <h5 className="overflow-hidden line-clamp-2 text-ellipsis">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum qui
            odit quae natus facilis ullam facere impedit harum eaque inventore,
          </h5>
          <p>
            by <b>Author</b>
          </p>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex ">
            <h2 className="">₱799</h2>
            <p className="pl-2 line-through text-gray-500 self-end">₱1499</p>
          </div>
          <p className=" font-bold">Offer Ends In: </p>
          <div id="timer" className="flex gap-x-3">
            <p>
              <b className="text-xl">???</b> Days
            </p>
            <p>
              <b className="text-xl">???</b> Hours
            </p>
            <p>
              <b className="text-xl">???</b> Minutes
            </p>
            <p>
              <b className="text-xl">???</b> Seconds
            </p>
          </div>
          <div className="flex gap-x-2 w-full child:grow child:max-w-[175px]">
            <button className="primary-btn">Buy Now</button>
            <button className="secondary-btn">View Details</button>
          </div>
        </div>
      </div>
      <img src={slideImgTwo} alt="" className="h-60 md:h-auto" />
    </Container>
  );
};
export const SlideThree = () => {
  return <SlideTwo />;
};

const SlideTitle = (props) => {
  const { title, subTitle, btnText } = props;
  return (
    <div>
      <h5 className="">{subTitle}</h5>
      <h1 className="my-4">{title}</h1>
      <button className="primary-btn w-max">{btnText}</button>
    </div>
  );
};

const Container = ({ children }) => {
  return (
    <article className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 place-items-center h-full w-full  overflow-hidden">
      {children}
    </article>
  );
};
