const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=6660d2ece82717bbbc5388727bbb2fd6'

export const fetchWeather = (lat, lon) => {
<<<<<<< HEAD
=======
	console.log("latitude= " + lat + ", Longtude= " + lon)
>>>>>>> Fixed the URL format and added a log to print latitude and longtude
	const url = rootUrl+'&lat='+lat+"&lon="+lon
     console.log(url)

return fetch(url)
        .then(res => res.json())
        .then(json => ({
            temp: json.main.temp,
            weather: json.weather[0].main,
						city: json.name
        }))

}
