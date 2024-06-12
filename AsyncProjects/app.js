
// ###########################################
// CHUCK NORRIS API / FETCH API

const loadJoke = async () => {
    const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random', {
        headers: {
            Accept: "application/json"
          }
    });

    const jokeData = await chuckNorrisFetch.json();

    console.log(jokeData.value)
    document.getElementById('loadingJoke').innerHTML = jokeData.value;
  };
  
document.getElementById("loadJokeBtn").addEventListener("click", loadJoke);


// ###########################################
// WEATHER API / FETCH API

const date = document.querySelector('#date');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const tempImg = document.querySelector('#temp-img');
const description = document.querySelector('#description');
const tempMax = document.querySelector('#temp-max');
const tempMin = document.querySelector('#temp-min');

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;


const app = document.querySelector('.app');

const getWeather = async () => {

    try {
        const cityName = document.getElementById('search-bar-input').value;    
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${"LOAD API KEY IN HERE"}`, {
            headers: {
                Accept: "application/json"
              }
        });  
    
        const weatherData = await weatherDataFetch.json();    
        console.log(weatherData)    
        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;    
        tempMax.innerHTML = `${weatherData.main.temp_max}°C`;
        tempMin.innerHTML = `${weatherData.main.temp_min}°C`;
    }
    catch(error) {
        console.log(error)
    }
}


// ###########################################
// POKEDEX API / FETCH API

const getPokemon = async () => {
    try{
        const pokemonName = document.getElementById('searchName').value.toLowerCase();
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!pokemonData.ok) {
            throw new Error('Could not find pokemon');
        }

        const data = await pokemonData.json();
        const pokemonImage = data.sprites.front_default;

        const displayPokemon = document.getElementById('pokemonImg');

        displayPokemon.src = pokemonImage;
        displayPokemon.style.display = "block";
    }
    catch(error) {
        console.log(error);
    }
}