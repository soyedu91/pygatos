
async function fetchCatImages(limit = 12) {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
  if (!response.ok) throw new Error('Error al obtener los datos');
  return await response.json();
}