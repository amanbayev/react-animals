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
  const [timeLeft, setTimeLeft] = useState(30);

  // variable to trigger fetch effect hook. ignore the value, just switching T and F
  const [refetch, setRefetch] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
      if (timeLeft === 0) {
        setTimeLeft(30);
        setRefetch(!refetch);
        setCatImageUrl(null);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
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
