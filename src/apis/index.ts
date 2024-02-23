export const listOfFilms = async () => {
  let result = await fetch("https://swapi.dev/api/films");
  const data = await result.json();
  return data?.results || [];
};

export const filmDetail = async(id: string) => {
  let result = await fetch(`https://swapi.dev/api/films/${id}`);
  const data = await result.json();
  return data || {}
}