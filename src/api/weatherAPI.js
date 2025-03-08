const API_KEY = "6b4b24daad9212515748d3f65ee8f41d"; // Load API key from .env
const GEO_URL = 'https://api.openweathermap.org/geo/1.0/direct';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'; // ✅ Use free Current Weather API

export const fetchWeather = async (city) => {
  try {
    if (!API_KEY) throw new Error('API key is missing!');

    const formattedCity = city.trim();
    console.log(`Fetching geo data for city: ${formattedCity}`);

    // Step 1: Get Latitude & Longitude from Geocoding API
    const geoResponse = await fetch(`${GEO_URL}?q=${formattedCity}&limit=1&appid=${API_KEY}`);
    const geoData = await geoResponse.json();

    if (!geoData || geoData.length === 0) {
      throw new Error(`City "${formattedCity}" not found`);
    }

    const { lat, lon } = geoData[0];
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);

    // Step 2: Get Weather Data using Free Current Weather API
    const weatherResponse = await fetch(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const weatherData = await weatherResponse.json();

    console.log('Weather API Response:', weatherData);

    return weatherData.main ? `${weatherData.main.temp}°C` : 'N/A';
  } catch (error) {
    console.error('Weather API Error:', error);
    return null;
  }
};
