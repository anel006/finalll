const express = require('express');
const router = express.Router();
const axios = require('axios');

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Astana&appid=${OPENWEATHER_API_KEY}&units=metric`;

router.get('/weather', async (req, res) => {
    try {
        const response = await axios.get(WEATHER_API_URL);
        res.json(response.data);
    } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error.message);
        res.status(500).json({ message: 'Ошибка при получении данных о погоде' });
    }
});

module.exports = router;
