import React from 'react';
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
  return (
    <MainContainer>
      <Header />
      <Router>
        <HomePage path="/" />
        <RandomCatImage path="/randomCat" />
        <RandomDogImage path="/randomDog" />
        <RandomCatFact path="/randomCatFact" />
      </Router>
    </MainContainer>
  );
}

export default App;
