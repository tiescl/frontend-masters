async function fetchPet({ queryKey }) {
  var id = queryKey[1];
  var apiResponse = await fetch(
    `http://pets-v2.dev-apis.com/pets?id=${id}`
  );

  if (!apiResponse.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiResponse.json();
}

export default fetchPet;
