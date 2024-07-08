

interface IHouseCardProps{
    imgSrc:any;
    altText?:string;
    text?:string;
    price?: number
    className:string;
}

export const HouseCard = ({imgSrc, altText, text, price }:IHouseCardProps) => {

  return (
    <div className="section_2card">
      <img
        src={imgSrc}
        alt={altText}
      />
      <span>Price: {price}</span>
      <a href="">{text}</a>
    </div>
  );
};

