// Obtención de la API Key y uso de Fetch API
const apiKey = 'TU_API_KEY_AQUI';

const peticion = fetch(`URL_DE_GIPHY_API?api_key=${apiKey}`);

peticion
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const { url } = data.images.original;

    // Creación de la imagen
    const img = document.createElement('img');
    img.src = originalUrl;

    // Insertar la imagen en el HTML
    document.body.appendChild(img);
  })
  .catch((error) => console.warn('Error:', error));
