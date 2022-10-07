export default class Weather {
    constructor(api_key1, api_key2) {
        this.apiKey1 = api_key1;
        this.apiKey2 = api_key2;

        if (localStorage.getItem('timestamp') && localStorage.getItem('timestamp') < Date.now() - 600000) {

            const weatherData = JSON.parse(localStorage.getItem('weather'));
            this.displayWeather(weatherData);
        } else {
            this.getLocation();
        }

    }

    // Get location from IP API
    getLocation() {
        // Get location from browser
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
            navigator.geolocation.getCurrentPosition(this.getEvent.bind(this));
            } else {
                alert('Geolocation is not supported by this browser.');
        }
    }
    
    // Fetch weather from API
    async getWeather(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey1}&q=${lat},${lon}`;
        fetch(url) 
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem('weather', JSON.stringify(data));
                localStorage.setItem('timestamp', Date.now()); 
                this.displayWeather(data);
            });
    }

    async getEvent(position) {
        const Eventurl = `http://gateway.marvel.com/v1/public/characters?apikey=${this.apiKey2}`;
        fetch(Eventurl) 
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    }

    displayWeather(data) {
        const temp = data.current.temp_c;
        document.querySelector('.weather__temp').innerHTML = `${temp}°C`;

        const weather = data.current.condition.text;
        document.querySelector('.weather__summary').innerHTML = weather;

        const icon = data.current.condition.icon;
        const img = document.createElement('img');
        img.src = icon;
        document.querySelector('.weather__icon').appendChild(img);
    }

} 