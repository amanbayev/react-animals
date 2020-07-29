import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

// https://dog.ceo/dog-api/

function RandomDogImage(props) {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const { timeLeft, refetch } = props;

  useEffect(() => {
    setDogImageUrl(null);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDogImageUrl(data.message);
      });
  }, [refetch]);

  if (dogImageUrl == null) return <div> Loading </div>;

  return (
    <MainContainer>
      <Image src={dogImageUrl} />
      <p>New dog image will appear in {timeLeft} seconds.</p>
    </MainContainer>
  );
}

export default RandomDogImage;
