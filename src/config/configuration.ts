export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  baseUrlSwapi: process.env.BASE_URL_SWAPI,
  apiUrl: process.env.API_URL,
});
