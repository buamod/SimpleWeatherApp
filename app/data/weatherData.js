
export const defaultWeatherData = {
    cityName: 'Ottawa',
    lastUpdatedTime: 'date + time',
    currentWeather: {
        weatherCond: 'Default',
        temp: '20',
        minTemp: '20',
        maxTemp: '20',
        humidity: '20',
        windSpeed: '20',
    },
        forcastSummaries:[
        {
            day: 'Sat',
            weatherCond: 'Rain',
            minTemp: '20',
            maxTemp: '20', 
        },
        {
            day: 'Sun',
            weatherCond: 'Rain',
            minTemp: '20',
            maxTemp: '20', 
        },
        {
            day: 'Mon',
            weatherCond: 'Rain',
            minTemp: '20',
            maxTemp: '20', 
        },
    ]
}
  
export const initialWeatherData = {
    cityName: '----',
    lastUpdatedTime: '---- + ----',
    currentWeather: {
        weatherCond: 'Default',
        temp: '--',
        minTemp: '--',
        maxTemp: '--',
        humidity: '--',
        windSpeed: '--',
    },
        forcastSummaries:[
        {
            day: '---',
            weatherCond: 'Default',
            minTemp: '--',
            maxTemp: '--', 
        },
        {
            day: '---',
            weatherCond: 'Default',
            minTemp: '--',
            maxTemp: '--', 
        },
        {
            day: '---',
            weatherCond: 'Default',
            minTemp: '--',
            maxTemp: '--', 
        },
    ]
}
  
export const defaultHourlyForcast= [
    {
        hour: '10 AM',
        weatherCond: 'Default',
        temp: '20',
    },
    {
        hour: '11 AM',
        weatherCond: 'Clear',
        temp: '20',
    },
    {
        hour: '12 PM',
        weatherCond: 'Rain',
        temp: '20',
    },
    {
        hour: '1 PM',
        weatherCond: 'Thunderstorm',
        temp: '2 PM',
    },
    {
        hour: '3 PM',
        weatherCond: 'Clouds',
        temp: '20',
    },
    {
        hour: '4 PM',
        weatherCond: 'Snow',
        temp: '20',
    },
    {
        hour: '',
        weatherCond: '',
        temp: '',
    }
]