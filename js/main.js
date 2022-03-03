// const iconLink = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
const searchTemperature = async () => {
    const apiKey =`d688b8d4b1e53062089ce9ab2ff36798`;
    const input = document.getElementById('city-name');
    const inputValue = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    const response = await fetch(url)
    const data = await response.json()
    getTemperature (data);
    input.value = "";
}
const selectID = (id, text)=>{
    document.getElementById(id).innerText = text;
}
const getTemperature = temp =>{
    selectID('city-name-show', temp.name? temp.name: "No City Found");
    selectID('Temperature', temp.main.temp? temp.main.temp: ' ');
    selectID('weather', temp.weather[0].main? temp.weather[0].main: 'No weather');
    const image = document.getElementById('weather-icon');
    const iconUrl = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    console.log(iconUrl);
    image.setAttribute('src', iconUrl);
    console.log(temp);

}