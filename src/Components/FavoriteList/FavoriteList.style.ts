import styled from 'styled-components';

export const FavoritesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
`;

export const FavoriteItem = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px;
`;

export const FavoriteImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
  margin-bottom: 8px;
`;

export const FavoritePrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const FavoriteTitle = styled.p`
  font-size: 14px;
  text-align: center;
  color: #555;
`;
