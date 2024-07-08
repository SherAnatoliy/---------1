import { SCPictureSection2 } from "./PictureSection2.style";
import { HouseCard } from "../../HouseCard/HouseCard";
import { useGetPropertyByIdQuery, useGetPropertyListQuery } from "../../../store/Api/getpropertieslistApi";
import { useState, useEffect } from "react";

export const PictureSection2 = () => {
  const [propertyId, setPropertyId] = useState<string | null>(null);

  useEffect(() => {
    // Example of generating a random property ID
    const randomPropertyId = Math.floor(Math.random() * 100) + 1;
    setPropertyId(randomPropertyId.toString());
  }, []);

  const { data, error, isLoading } = useGetPropertyListQuery("5002,6020");
  
 let house = data?.hits;  

  console.log(house)

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <SCPictureSection2>
      {house && house.map((elem) => (
        <HouseCard
        className={"card_picture"}
          imgSrc={elem.coverPhoto.url}
          // altText={elem._geoloc.geography}
          // text={elem.title}
          // price={elem.price}
        />
      )
        
      )}
      {/* <div className="section_2card">
        <img
          src="../../../../public/Img/Main/section2/03395c7b12e5323c7a8dc21ece1412f2.jpeg"
          alt=""
        />
        <a href="">Recommended homes</a>
      </div> */}
      {/* <div className="section_2card">
        <img
          src="../../../../public/Img/Main/section2/1640236728_1-bigfoto-name-p-kukhni-v-zagorodnom-dome-s-oknom-1.jpg"
          alt=""
        />
        <a href="">New Listings</a>
      </div>
      <div className="section_2card">
        <img
          src="../../../../public/Img/Main/section2/1678143671_bogatyr-club-p-krasivie-fasadi-domov-foni-instagram-54.jpg"
          alt=""
        />
        <a href="">Price Reduces</a>
      </div>
      <div className="section_2card">
        <img
          src="../../../../public/Img/Main/section2/1678349635_bogatyr-club-p-neboskrebi-v-tumane-foni-pinterest-87.jpg"
          alt=""
        />
        <a href="">Open Houses</a>
      </div>
      <div className="section_2card">
        <img
          src="../../../../public/Img/Main/section2/1689342626_vsegda-pomnim-com-p-mnogoetazhnii-dom-nochyu-foto-55.jpg"
          alt=""
        />
        <a href="">Recently Sold</a>
      </div>
      <div className="section_2card">
        <img
          src="../../../../public/Img/Main/section2/296365-doma-mnogoetazhnye-6.jpg"
          alt=""
        />
        <a href="">New Construction</a>
      </div>
      <div className="section_2card">
        <img
          src="../../../../public/Img/Main/section2/Marina-Hotel-Apartments-Dubai-Exterior.jpg"
          alt=""
        />
        <a href="">New Home Communities</a>
      </div>
      <div className="section_2card">
        <img
          src="../../../../public/Img/Main/section2/road_city_school_holland_building_netherlands_dutch_playground-460687.jpg!d"
          alt=""
        />
        <a href="">Land</a>
      </div> */}
    </SCPictureSection2>
  );
};
