import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import Header from './Header/Header';
import HomePage from './HomePage';
import RandomCatImage from './Cats/RandomCatImage';
import './App.css';
import RandomDogImage from './Dogs/RandomDogImage';
import RandomCatFact from './Cats/RandomCatFact';

const MainContainer = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  display: flex;
`;

function App() {
  const [timeLeft, setTimeLeft] = useState(30);
  // variable to trigger fetch effect hook. ignore the value, just switching T and F
  const [refetch, setRefetch] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
      if (timeLeft === 0) {
        setTimeLeft(30);
        setRefetch(!refetch);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <MainContainer>
      <Header />
      <Router>
        <HomePage path="/" />
        <RandomCatImage
          path="/randomCat"
          timeLeft={timeLeft}
          refetch={refetch}
        />
        <RandomDogImage
          path="/randomDog"
          timeLeft={timeLeft}
          refetch={refetch}
        />
        <RandomCatFact
          path="/randomCatFact"
          timeLeft={timeLeft}
          refetch={refetch}
        />
      </Router>
    </MainContainer>
  );
}

export default App;
