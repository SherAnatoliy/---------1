
import { useState, useEffect } from 'react';

interface IHouseCardProps {
  imgSrc: string;
  altText?: string;
  text?: string;
  price?: number;
  className: string;
  title_l3?: string;
}

export const HouseCard = ({ imgSrc, altText, text, price, title_l3, className }: IHouseCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems') || '[]');
    if (favoriteItems.some((item: { imgSrc: string; }) => item.imgSrc === imgSrc)) {
      setIsFavorite(true);
    }
  }, [imgSrc]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);

    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems') || '[]');
    if (!isFavorite) {
      favoriteItems.push({ imgSrc, price, title_l3 });
    } else {
      const index = favoriteItems.findIndex((item: { imgSrc: string; }) => item.imgSrc === imgSrc);
      if (index > -1) {
        favoriteItems.splice(index, 1);
      }
    }
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  };

  const buttonClass = `section_2card_button ${isFavorite ? 'red' : 'gray'}`;

  return (
    <div className="section_2card">
      <img src={imgSrc} alt={altText} />
      <span>Price: {price}</span>
      <p className="section_2card_info">{title_l3}</p>
      <a href="">{text}</a>
      <button className={buttonClass} onClick={toggleFavorite}>
        {isFavorite ? (
          <img
            src="../../../public/Img/Favorite/favorite_ctrsw0zcbgkq.svg"
            alt="Favorite"
          />
        ) : (
          <img
            src="../../../public/Img/Favorite/favorite_ctrsw0zcbgkq.svg"
            alt="Not Favorite"
          />
        )}
      </button>
    </div>
  );
};
