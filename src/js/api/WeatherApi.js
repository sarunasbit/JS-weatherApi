class WeatherApi{
    constructor(city){
        this.city = city;

    }

    getWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=`;
        const key = ``
        return fetch(`${url}${this.city}&appid=${key}&units=metric`)
        .then(response => response.json()).then(data => {
            return {
                tempeture: data.main.temp,
                cityName: data.name
            }
        })
    }
}

export default WeatherApi;
