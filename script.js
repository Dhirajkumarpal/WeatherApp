// OpenWeatherMap API. Do not share it publicly.
var cel=0;
var Faren=0;

function ChangeUnit(curr){
  if(curr.textContent=="Temp In Farenhiet"){
       document.getElementById("temp").innerHTML=Faren;
       curr.textContent="Temp In Celcius";
       
  }
  else{
           document.getElementById("temp").innerHTML=cel;
          curr.textContent="Temp In Farenhiet";


  }
}
const api = '08545d502f84d7f4b569903dd8ef3469'; //Replace with your API

 //Replace with your API

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
//const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

window.addEventListener('load', () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp, feels_like } = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
          const { sunrise, sunset } = data.sys;

          const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          const fahrenheit = (temp * 9) / 5 + 32;
          var cont=document.getElementById("cont");
           if(temp<10){
               cont.style.backgroundImage = "url('./Images/cold.jpg')";
               cont.style.backgroundAttachment = "fixed";
              cont.style.backgroundPosition = "center";
              cont.style.backgroundRepeat = "no-repeat";
              cont.style.backgroundSize="100% 100%"
              

           }else if(temp>10){
              cont.style.backgroundImage = "url('./Images/normal.jpg')";
              cont.style.backgroundAttachment = "fixed";
              cont.style.backgroundPosition = "center";
              cont.style.backgroundRepeat = "no-repeat";
              cont.style.backgroundSize="100% 100%"
              





           }
           else if(temp>30){
              cont.style.backgroundImage = "url('./Images/hot.jpg')";
              cont.style.backgroundAttachment = "fixed";
              cont.style.backgroundPosition = "center";
              cont.style.backgroundRepeat = "no-repeat";
              cont.style.backgroundSize="100% 100%"
              


           }
          // Converting Epoch(Unix) time to GMT
          const sunriseGMT = new Date(sunrise * 1000);
          const sunsetGMT = new Date(sunset * 1000);

          // Interacting with DOM to show data
          iconImg.src = iconUrl;
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          cel=`${temp.toFixed(2)} °C`;
          Faren= `${fahrenheit.toFixed(2)} °F`;
          
           tempC.textContent = `${temp.toFixed(2)} °C`;
         // tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
          sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
          sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        });
    });
  }
});


/*
https://images.unsplash.com/photo-1608905978123-558c415998e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60



https://images.unsplash.com/photo-1504370805625-d32c54b16100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60



*/ 