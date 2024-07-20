async function fetchSearch({ queryKey }) {
  let { animal, location, breed } = queryKey[1];

  var response = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!response.ok) {
    throw new Error(
      `pet search not okay: ${animal}, ${location}, ${breed}`
    );
  }

  return response.json();
}

export default fetchSearch;
