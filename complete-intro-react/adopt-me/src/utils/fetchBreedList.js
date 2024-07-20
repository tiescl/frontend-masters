async function fetchBreedList({ queryKey }) {
  let animal = queryKey[1];

  if (!animal) return [];

  var response = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!response.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  return response.json();
}

export default fetchBreedList;
