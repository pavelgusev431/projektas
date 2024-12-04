import photo1 from "../img/Photo1.jpg";
import photo2 from "../img/Photo2.jpg";
import photo3 from "../img/Photo3.jpg";

const Main = () => {
  return (
    <div className="p-[5rem]">
      <div className="grid grid-cols-2 my-9">
        <h1 className="text-[5rem]">
          Our Upcoming
          <br />
          Events
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="grid grid-cols-3 ">
        <img className="img" src={photo1} alt="photo1" />
        <img className="img" src={photo2} alt="photo2" />
        <img className="img" src={photo3} alt="photo3" />
      </div>
      <h2 className="text-[4rem]">Events Closed</h2>
      <div className="grid grid-cols-3 ">
        <img className="col-span-2 img2" src={photo1} alt="photo1" />
        <img className="img" src={photo2} alt="photo2" />
        <img className="img" src={photo1} alt="photo1" />
        <img className="img" src={photo2} alt="photo2" />
        <img className="img" src={photo3} alt="photo3" />
        
      </div>

      <div className=" text-center py-5"><button className="py-2 px-5 border-2 border-amber-800 text-amber-800">Load More</button></div>
    </div>
  );
};

export default Main;
