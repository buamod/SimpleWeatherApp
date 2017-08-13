const rootUrl = 'http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=6660d2ece82717bbbc5388727bbb2fd6'

export const fetchWeather = (lat,lon) => {
    const url = rootUrl+'&lat='+lat+'&lon='+lon
    console.log(url)
}