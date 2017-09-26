const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=6660d2ece82717bbbc5388727bbb2fd6'

export const fetchWeather = (lat, lon) => {
	console.log("latitude= " + lat + ", Longtude= " + lon)
	const url = rootUrl+'&lat='+lat+"&lon="+lon
  console.log(url)

	return fetch(url)
        .then(res => res.json())
        .then(json => ({
            weather: json.weather[0].main,
						temp: json.main.temp,
						humidity: json.main.humidity,
						pressure: json.main.pressure,
						temp_min: json.main.temp_min,
						temp_max: json.main.temp_max,
						wind_speed: json.wind.speed,
						//rain: json.rain["3h"],
						city: json.name,
        }))

}
