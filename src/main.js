import WeatherApi from "./js/api/WeatherApi";
import TemperatureUtils from "./js/utils/TemperatureUtils";
import EmojiUi from "./js/ui/EmojiUi";

document.querySelector('#search-by-town-button').addEventListener('click', ()=> {
    const searchByCity = document.querySelector('#search-by-town').value;
    const city = new WeatherApi(searchByCity);
    city.getWeather().then(data => {
        const temperature = TemperatureUtils.convertTemperature(data.tempeture);
        EmojiUi.showCityName(data.cityName);
        EmojiUi.showCityTemp(temperature);
        EmojiUi.showSmile(temperature);
    });

})
    





// const va = new TemperatureUtils(item);






