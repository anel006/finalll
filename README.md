# Portfolio Showcase Project

## Description
This is a portfolio showcase project that highlights various creative works and projects. The website includes user authentication features, a carousel for displaying projects, and data visualization using charts. The website uses a soft pink color theme to create a pleasant and aesthetic user experience.

## Features
- **User Registration and Login**: Users can sign up and log in to access personalized content.
- **Two-Factor Authentication**: An additional layer of security for user authentication.
- **Carousel for Projects**: Displays various creative projects with captions.
- **Data Visualization**: Uses Chart.js for displaying data insights.
- **Responsive Design**: The website is fully responsive and adapts to different screen sizes.

## Technologies Used
- **HTML5 & CSS3**: For structuring and styling the website.
- **JavaScript**: For interactive elements and form validation.
- **Bootstrap 5**: For responsive design and components.
- **Chart.js**: For data visualization.
- **Node.js & Express**: Backend server and API integration (if applicable).
- **JWT**: For user authentication.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repository.git
    cd your-repository
    ```

2. Install dependencies (if using Node.js backend):
    ```bash
    npm install
    ```

3. Create a `.env` file for environment variables (e.g., JWT secret, OpenWeather API key):
    ```
    JWT_SECRET=your_jwt_secret
    OPENWEATHER_API_KEY=your_openweather_api_key
    ```

4. Run the application:
    ```bash
    npm start
    ```

5. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## Project Structure

## How to Use
1. **Sign Up**: Create a new account using the sign-up form.
2. **Log In**: Access your account using the login form.
3. **Two-Factor Authentication**: Enter the verification code sent to your email.
4. **View Projects**: Browse through the carousel to view various creative projects.
5. **Data Visualization**: Select a city to see weather data visualized on a chart.

## API Endpoints (if using Node.js)
- **POST** `/api/register` - Register a new user.
- **POST** `/api/login` - User login and token generation.
- **POST** `/api/verify` - Verify two-factor authentication code.
- **GET** `/api/weather/:city` - Fetch weather data for a city.

## Dependencies
- [Bootstrap 5](https://getbootstrap.com/)
- [Chart.js](https://www.chartjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

## Contributing
Feel free to contribute to this project by submitting a pull request. Please ensure that your code follows the project's coding standards.

## License
This project is open-source and available under the **MIT License**.

## Author
Developed by **Alibek Anel | BDA-2302**

## Acknowledgements
- [OpenWeather API](https://openweathermap.org/api) for weather data.
- [Unsplash](https://unsplash.com/) for placeholder images.
