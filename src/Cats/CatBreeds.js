import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const baseUrl = 'https://api.thecatapi.com/';
const apiKey = '38e84c87-8714-404d-9212-5ce17a1dfd24';

const Image = styled.img`
  width: 100%;
  margin-top: 16px;
`;

const CatBreeds = () => {
  const [catBreedsList, setCatBreedsList] = useState([]);
  const [selectedBreedId, setSelectedBreedId] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(baseUrl + 'v1/breeds', {
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatBreedsList(data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedBreedId == null) return;

    fetch(baseUrl + 'v1/images/search?breed_id=' + selectedBreedId, {
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImageUrl(data[0].url);
      })
      .catch((err) => console.log('fetch image by breed err ', err));
  }, [selectedBreedId]);

  return (
    <div>
      {catBreedsList.length > 0 ? (
        <select
          onChange={(e) => {
            setSelectedBreedId(catBreedsList[e.target.selectedIndex].id);
          }}
        >
          {catBreedsList.map((item) => {
            return <option key={item.id}>{item.name}</option>;
          })}
        </select>
      ) : (
        <p>Loading breeds list</p>
      )}
      {imageUrl ? (
        <>
          <br />
          <Image src={imageUrl} alt="cat here" />
        </>
      ) : (
        <p>Select breed for image, please</p>
      )}
    </div>
  );
};

export default CatBreeds;
