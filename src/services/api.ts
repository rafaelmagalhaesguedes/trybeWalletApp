/*
  Connect API's
*/
const urlAPI = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrencies = async () => {
  try {
    const response = await fetch(urlAPI);
    if (!response) {
      throw new Error('Error fetching data!');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
