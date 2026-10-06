import './index.css';

const greeting = document.querySelector('.greeting');
const temperature = document.querySelector('.temperature');
const condition = document.querySelector('.condition');
const high = document.querySelector('.high');
const low = document.querySelector('.low');
const location = document.querySelector('.location');

fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7608&longitude=-111.8910&current=temperature_2m%2Cweather_code&daily=temperature_2m_max%2Ctemperature_2m_min%2Cweather_code&temperature_unit=fahrenheit&timezone=America%2FDenver')
  .then(response => response.json())
  .then(data => {
  console.log(data);

temperature.textContent = `${data.current.temperature_2m}°`;
console.log('Weather code:', data.current.weather_code);
if (data.current.weather_code === 3) {
  condition.textContent = 'overcast';
} else if (data.current.weather_code === 0) {
  condition.textContent = 'sunny';
}
  else if (data.current.weather_code === 1 || data.current.weather_code === 2) {
  condition.textContent = 'partly cloudy';
}
else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(data.current.weather_code)) {
  condition.textContent = 'rainy';
}
else if ([71, 73, 75, 77, 85, 86].includes(data.current.weather_code)) {
  condition.textContent = 'snowy';
}
else if ([45, 48].includes(data.current.weather_code)) {
  condition.textContent = 'foggy';
}
})
  .catch(error => console.error(error));

const weather = {
  location: 'Salt Lake City',
  temperature: '62°',
  condition: 'sunny',
  high: '63°',
  low: '47°',
};

greeting.textContent = 'good morning ♡';
temperature.textContent = weather.temperature;
condition.textContent = weather.condition;
high.textContent = `☀️ high ${weather.high}`;
low.textContent = `🌙 low ${weather.low}`;
location.textContent = weather.location;

