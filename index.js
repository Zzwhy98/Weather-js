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

    // If user 'click' the search element
    if (city === '') {
        container.style.height = '105px';
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            localStorage.removeItem('.search-box input');

            // If user put number
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

            // If user put invalid location
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

            //Result
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'clear.png';
                    break;

                case 'Rain':
                    image.src = 'rain.png';
                    break;

                case 'Snow':
                    image.src = 'snow.png';
                    break;

                case 'Clouds':
                    image.src = 'cloud.png';
                    break;

                case 'Haze':
                    image.src = 'mist.png';
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
    
    //Show current data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            document.getElementById('txtSearch').click();
            localStorage.removeItem('.search-box input');

            // If user hit 'Enter'
            if (city === '') {
                container.style.height = '105px';
                return;
            }

            // If user put number
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

            // If user put invalid location
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
            
            //Result
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'clear.png';
                    break;

                case 'Rain':
                    image.src = 'rain.png';
                    break;

                case 'Snow':
                    image.src = 'snow.png';
                    break;

                case 'Clouds':
                    image.src = 'cloud.png';
                    break;

                case 'Haze':
                    image.src = 'mist.png';
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

function updateClock() {
    const clockElement = document.getElementById('clock');
    
    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format time to always show two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the clock element
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
