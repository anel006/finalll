const express = require('express');
const router = express.Router();
const axios = require('axios');

const VISUALCROSSING_API_KEY = process.env.VISUALCROSSING_API_KEY;

router.get('/weather-timeline/:city', async (req, res) => {
    const { city } = req.params;
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(new Date().setDate(new Date().getDate() - 30))
        .toISOString()
        .split('T')[0];

    const TIMELINE_API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&key=${VISUALCROSSING_API_KEY}&include=days`;

    try {
        const response = await axios.get(TIMELINE_API_URL);
        const rawData = response.data.days;

        const timelineData = rawData.map((day) => ({
            date: day.datetime,
            maxTemp: day.tempmax,
            minTemp: day.tempmin,
            precipitation: day.precip,
            windSpeed: day.windspeed,
        }));

        res.json(timelineData);
    } catch (error) {
        console.error('Ошибка при получении временных данных о погоде:', error.message);
        res.status(500).json({ message: 'Ошибка при получении данных' });
    }
});

module.exports = router;
