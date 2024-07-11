import { SCPictureSection2 } from "./PictureSection2.style";
import { HouseCard } from "../../HouseCard/HouseCard";
import { useGetPropertyByIdQuery, useGetPropertyListQuery } from "../../../store/Api/getpropertieslistApi";
import { useState, useEffect } from "react";

export const PictureSection2 = () => {
  const [propertyId, setPropertyId] = useState<string | null>(null);

  useEffect(() => {
    const randomPropertyId = Math.floor(Math.random() * 100) + 1;
    setPropertyId(randomPropertyId.toString());
  }, []);

  const { data, error, isLoading } = useGetPropertyListQuery("5002,6020");
  
 let house = data?.hits;  

  console.log(house)

  
  if (isLoading) return <div>Loading...</div>;
  
 

  return (
    <SCPictureSection2>
      {house && house.map((elem) => (
        <HouseCard
        className={"card_picture"}
          imgSrc={elem.coverPhoto.url}
          // altText={elem._geoloc.geography}
          // text={elem.title}
          price={elem.price}
          title_l3={elem.title}
        />
      )
        
      )}
    </SCPictureSection2>
  );
};
