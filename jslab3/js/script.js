function getCurrentWeather() {
    let city = encodeURIComponent(search.value) === "" ? "Нальчик" : encodeURIComponent(search.value);
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&lang=ru&units=metric&appid=32273e1edabe3f7e12571409dbace3cf")
        .then(Response => Response.json())
        .then(data_json => {
            if (data_json.cod === "404") {
                alert("Все плохо.");
            } else {
                parseAndSetWeather(data_json);
            }
        })
}

function parseAndSetWeather(json) {
    document.getElementById("city").innerHTML = json.name;
    console.log(json.name);
    document.getElementById("temperature").innerHTML = Math.round(json.main.temp) + "℃";
    console.log(json.main.temp);
    document.getElementById("humidity").innerHTML = json.main.humidity + "%";
    console.log(json.main.humidity);
    if (json.main.temp < 0) {
        document.getElementById("mood").innerHTML = "Я умер";
    } else {
        document.getElementById("mood").innerHTML = json.main.temp >= 15 ? "Замечательное" : "Не очень";
    }
    console.log(json.name);
}
