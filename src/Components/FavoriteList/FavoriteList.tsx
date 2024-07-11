
import { useState, useEffect } from 'react';
import { FavoritesListContainer, FavoriteItem, FavoriteImage, FavoritePrice, FavoriteTitle } from './FavoriteList.style';

interface FavoriteItemProps {
  imgSrc: string;
  price?: number;
  title_l3?: string;
}

const FavoritesList = () => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItemProps[]>([]);

  useEffect(() => {
    const storedFavoriteItems = JSON.parse(localStorage.getItem('favoriteItems') || '[]');
    setFavoriteItems(storedFavoriteItems);
  }, []);

  if (favoriteItems.length === 0) {
    return <p>No favorite items.</p>;
  }

  return (
    <FavoritesListContainer>
      {favoriteItems.map((item, index) => (
        <FavoriteItem key={index}>
          <FavoriteImage src={item.imgSrc} alt={`Favorite ${index}`} />
          <FavoritePrice>Price: {item.price}</FavoritePrice>
          <FavoriteTitle>{item.title_l3}</FavoriteTitle>
        </FavoriteItem>
      ))}
    </FavoritesListContainer>
  );
};

export default FavoritesList;
