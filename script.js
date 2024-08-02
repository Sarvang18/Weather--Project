const apiKey='511877d2e5aad3d0839f51a8718d5d17'
const apiURL='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchInput=document.querySelector('#searchInput')
const searchBTN=document.querySelector('#searchIcon')

const weatherImage=document.querySelector('#weatherImage')

async function checkWeather(city){
    const response=await fetch(apiURL+city+'&appid='+apiKey)
    var data=await response.json()
    console.log(data);   
    
    document.querySelector('#city').innerText=data.name;
    document.querySelector('#temp').innerText=Math.round(data.main.temp)+'°c'
    document.querySelector('#humidityValue').innerText=data.main.humidity+'%'
    document.querySelector('#windSpeedValue').innerText=data.wind.speed+' km/h'
      
    weatherData=data.weather[0].main
    console.log(weatherData);

    if(weatherData==='Clouds'){
        weatherImage.src='images/clouds.png'
    }

    else if(weatherData==='Clear'){
        weatherImage.src='images/clear.png'
    }

    else if(weatherData==='Rain'){
        weatherImage.src='images/rain.png'
    }

    else if(weatherData==='Drizzle'){
        weatherImage.src='images/Drizzle.png'
    }

    else if(weatherData==='Snow'){
        weatherImage.src='images/snow.png'
    }

    else if(weatherData==='Mist'){
        weatherImage.src='images/mist.png'
    }
}

searchBTN.addEventListener('click',()=>{
    checkWeather(searchInput.value)
})


// // selection

// let searchBar=document.querySelector('.searchBar>input')
// let cityName=document.querySelector('#city')

// //search ka maal ko cityName mein paste


// let searchBTN=document.querySelector('#searchIcon')


// searchBTN.addEventListener('click',(evt)=>{
//     cityName.innerText=searchBar.value
//     document.querySelector('#temp').innerText=data.main.temp
// })
