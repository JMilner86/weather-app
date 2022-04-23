let apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0b106405e1fea6fced972a3d3945745f`
console.log(apiUrl);

// API key 0b106405e1fea6fced972a3d3945745f


let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=0b106405e1fea6fced972a3d3945745f`
const getCurrentWeather = () => {
    fetch(currentWeather).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                console.log(data);
            })
        }
        else {
            alert("Error, weather API not found")
        }
    })
    .catch(function(error){
       alert("Unable to connect to weather API")     
    });
};
