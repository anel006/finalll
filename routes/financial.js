const express = require('express');
const router = express.Router();
const axios = require('axios');

const VISUALCROSSING_API_KEY = process.env.VISUALCROSSING_API_KEY;

router.get('/weather-history/:city', async (req, res) => {
    const { city } = req.params;
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(new Date().setDate(new Date().getDate() - 30))
        .toISOString()
        .split('T')[0];

    const WEATHER_API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&key=${VISUALCROSSING_API_KEY}&include=days`;

    try {
        const response = await axios.get(WEATHER_API_URL);
        const rawData = response.data.days;

        const weatherData = rawData.map((day) => ({
            date: day.datetime,
            temp: day.temp,
            humidity: day.humidity,
            windSpeed: day.windspeed,
        }));

        res.json(weatherData);
    } catch (error) {
        console.error('Ошибка при получении исторических данных о погоде:', error.message);
        res.status(500).json({ message: 'Ошибка при получении данных' });
    }
});

module.exports = router;
