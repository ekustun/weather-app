
// Constants and variables
const API_KEY = '7131d2933a8741dce1c595695162ed19';
const BASE_URL ='https://api.openweathermap.org/data/2.5/weather?';

//?q=pasadena&appid=abc123$units=imperial

let weatherData, userInput;

const $cityname = $('#cityName');
const $temp = $('#temp');
const $feelslike = $('#feelsLike');
const $weather = $('#weather');

const $input = $('input[type="text"]');



$('form').on('submit', handleGetData);


function handleGetData(event){

    event.preventDefault();
    userInput = $input.value= '';
  
    $.ajax(BASE_URL + 'q='+ userInput + '&appid=' + API_KEY +'&units=imperial' )
    .then(
        (data)=>{
            weatherData = data;
            render();
        },
        (error)=>{
            console.log("Error: ", error);
        }
    )
   
    

}


function render(){
    $cityname.text(weatherData.name);
    $temp.text(weatherData.main.temp);
    $feelslike.text(weatherData.main.feels_like);
    $weather.text(weatherData.weather[0].description);
}