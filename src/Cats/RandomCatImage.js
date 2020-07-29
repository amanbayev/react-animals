import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

// https://docs.thecatapi.com/

function RandomCatImage(props) {
  const [catImageUrl, setCatImageUrl] = useState(null);
  const { timeLeft, refetch } = props;

  useEffect(() => {
    setCatImageUrl(null);
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatImageUrl(data[0].url);
      });
  }, [refetch]);

  if (catImageUrl == null) return <div> Loading </div>;

  return (
    <MainContainer>
      <Image src={catImageUrl} />
      <p>New cat image will appear in {timeLeft} seconds.</p>
    </MainContainer>
  );
}

export default RandomCatImage;
