const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const errorMessage = document.querySelector('.error-message');

// For clicking search element
search.addEventListener('click', () => {

    const APIKey = '43066dfc1ce1d21a40bdda5a70aa121a';
    const city = document.querySelector('.search-box input').value;

    if (city === '') {
        container.style.height = '105px';
        return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            localStorage.removeItem('.search-box input');

            if (/\d/.test(city)) {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                errorMessage.style.display = 'block';
                errorMessage.classList.add('fadeIn');
                return;
            }

            errorMessage.style.display = 'none';
            errorMessage.classList.remove('fadeIn');

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = '404.jpg';
                    break;

                case 'Rain':
                    image.src = 'racoon.jpg';
                    break;

                case 'Snow':
                    image.src = '404.jpg';
                    break;

                case 'Clouds':
                    image.src = 'racoon.jpg';
                    break;

                case 'Haze':
                    image.src = 'racoon.jpg';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';

        });


});

// For button 'Enter'
const searchInput = document.getElementById('txtSearch');
searchInput.addEventListener('keydown', (event) => {

    const city = document.querySelector('.search-box input').value;  
    const APIKey = '43066dfc1ce1d21a40bdda5a70aa121a';

    if (event.key === 'Enter') 
            
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            document.getElementById('txtSearch').click();
            localStorage.removeItem('.search-box input');

            if (city === '') {
                container.style.height = '105px';
                return;
            }

            if (/\d/.test(city)) {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                errorMessage.style.display = 'block';
                errorMessage.classList.add('fadeIn');
                return;
            }

            errorMessage.style.display = 'none';
            errorMessage.classList.remove('fadeIn');

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }
            
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = '404.jpg';
                    break;

                case 'Rain':
                    image.src = 'racoon.jpg';
                    break;

                case 'Snow':
                    image.src = '404.jpg';
                    break;

                case 'Clouds':
                    image.src = 'racoon.jpg';
                    break;

                case 'Haze':
                    image.src = 'racoon.jpg';
                    break;
                
                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';

        });
    
});

