const express = require('express');
const axios = require('axios');
const router = express.Router();

const VISUALCROSSING_API_KEY = process.env.VISUALCROSSING_API_KEY;

router.get('/api/weather/:city', async (req, res) => {
    const city = req.params.city;
    const CURRENT_WEATHER_API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&key=${VISUALCROSSING_API_KEY}&include=current`;

    try {
        const response = await axios.get(CURRENT_WEATHER_API_URL);
        const weatherData = {
            city: response.data.address,
            temperature: response.data.currentConditions.temp,
            humidity: response.data.currentConditions.humidity,
            windSpeed: response.data.currentConditions.windspeed,
            description: response.data.currentConditions.conditions,
        };

        res.json(weatherData);
    } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error.message);
        res.status(500).json({ message: 'Ошибка при получении данных о погоде' });
    }
});

module.exports = router;
