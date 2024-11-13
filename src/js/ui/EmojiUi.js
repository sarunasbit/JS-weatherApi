

class EmojiUi {
    static showCityName(cityName) {
        document.querySelector('#city-name').textContent = cityName;
    }
    static showCityTemp(tempeture) {
        document.querySelector('#city-temperature').textContent = `${tempeture}°C`;
    }
    static showSmile(tempetureBySmile) {
        let iconSrc = "";
        if (tempetureBySmile >= 20) {
            iconSrc = "/src/img/emoji.png";
        } else if (tempetureBySmile >= 10) {
            iconSrc = "/src/img/smile.png";
        } else if (tempetureBySmile >= 0) {
            iconSrc = "/src/img/confused.png";
        } else {
            iconSrc = "/src/img/sad.png";
        }
        document.querySelector('#city-sky').src = `${iconSrc}`
    }
}

export default EmojiUi;