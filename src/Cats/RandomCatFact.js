import React, { useState, useEffect } from 'react';

//https://alexwohlbruck.github.io/cat-facts/docs/
const baseUrl = 'https://cat-fact.herokuapp.com';

function RandomCatFact() {
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    fetch(baseUrl + '/facts/random?animal_type=cat&amount=1')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatFact(data.text);
      })
      .catch((err) => console.log('error fetching cat fact ', err));
  }, []);

  return <p>{catFact}</p>;
}

export default RandomCatFact;
