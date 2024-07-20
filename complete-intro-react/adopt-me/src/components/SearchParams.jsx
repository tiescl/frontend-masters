import { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchSearch from '../utils/fetchSearch';
import useBreedList from '../hooks/useBreedList';
import Results from './Results';
import AdoptedPetContext from './AdoptedPetContext';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

var SearchParams = function () {
  var [adoptedPet] = useContext(AdoptedPetContext);

  var [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: ''
  });
  var [animal, setAnimal] = useState('');
  var [breeds] = useBreedList(animal);

  var results = useQuery({
    queryKey: ['search', requestParams],
    queryFn: fetchSearch
  });

  var pets = results?.data?.pets ?? [];

  return (
    <div className='search-params'>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          let formData = new FormData(e.target);
          let obj = {
            location: formData.get('location') ?? '',
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? ''
          };

          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className='pet image-container'>
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor='location'>
          Location
          <input id='location' name='location' placeholder='Location' />
        </label>

        <label htmlFor='animal'>
          Animal
          <select
            id='animal'
            name='animal'
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option>Select an animal</option>
            {ANIMALS.map(listAnimal)}
          </select>
        </label>

        <label htmlFor='breed'>
          Breed
          <select id='breed' disabled={breeds.length == 0} name='breed'>
            <option>Select a breed</option>
            {breeds.map(listBreed)}
          </select>
        </label>

        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

function listAnimal(animal) {
  return <option key={animal}>{animal}</option>;
}

function listBreed(breed) {
  return <option key={breed}>{breed}</option>;
}

export default SearchParams;
