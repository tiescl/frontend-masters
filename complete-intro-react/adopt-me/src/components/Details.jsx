import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchPet from '../utils/fetchPet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';
import AdoptedPetContext from './AdoptedPetContext';

function Details() {
  let { id } = useParams();
  let navigate = useNavigate();

  var [showModal, setShowModal] = useState(false);
  var [_, setAdoptedPet] = useContext(AdoptedPetContext); // eslint-disable-line

  var results = useQuery({
    queryKey: ['details', id],
    queryFn: fetchPet
  });

  if (results.isLoading) {
    return (
      <div className='loading-pane'>
        <h2 className='loader'>🌀</h2>
      </div>
    );
  }

  var pet = results.data.pets[0];

  return (
    <div className='details'>
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>

        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className='buttons'>
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate('/');
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
