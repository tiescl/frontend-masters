import Pet from './Pet';

export default function Results({ pets }) {
  return (
    <div className='search'>
      {!pets.length ? <h1>No pets found</h1> : pets.map(listPet)}
    </div>
  );
}

function listPet(pet) {
  return (
    <Pet
      key={pet.id}
      id={pet.id}
      name={pet.name}
      animal={pet.animal}
      images={pet.images}
      location={`${pet.city}, ${pet.state}`}
      breed={pet.breed}
    />
  );
}
