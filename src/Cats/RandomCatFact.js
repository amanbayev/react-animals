import React, { useState, useEffect } from 'react';

//https://alexwohlbruck.github.io/cat-facts/docs/
const baseUrl = 'https://cat-fact.herokuapp.com';

function RandomCatFact(props) {
  const [catFact, setCatFact] = useState('');
  const { timeLeft, refetch } = props;

  useEffect(() => {
    fetch(baseUrl + '/facts/random?animal_type=cat&amount=1')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatFact(data.text);
      })
      .catch((err) => console.log('error fetching cat fact ', err));
  }, [refetch]);

  return (
    <>
      <p>{catFact}</p>
      <p>New fact will appear in {timeLeft} seconds.</p>
    </>
  );
}

export default RandomCatFact;
