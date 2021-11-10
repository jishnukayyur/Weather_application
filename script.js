function fetchWeather()
    {
        let location_name=loc_name.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location_name}&appid=f44ecd0a82f4fd31db840f0252cd3ca9&units=metric`).
        then(res=>{
            if(res.ok)
            {
                return res.json()
            }
            else
            {
                throw new Error("failed to fetch data")
            }
            }).then(data=>displayValues(data)).catch(error=>swal("ERROR", "Check the place name you have entered", "error"))
    }
    function displayValues(data)
    {
        let location_name=data.name
        let temparature=data["main"].temp
        let weather_type=data["weather"][0].main
        let wint_speed=data["wind"].speed
        let feels=data["main"].feels_like
        let hum=data["main"].humidity
        let today=new Date;
        let date=today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+'   '+today.getHours()+':'+today.getMinutes()

        let html_data=``;

        html_data+=`<div class="loc_name">${location_name}</div>
        <div class="date">${date}</div>
        <div class="temp">Temp: ${temparature}°C </div>
        <div>
        <div class="data">Feels Like: ${feels}°C </div>
        <div class="data">${weather_type}<div>
        <div class="data">Humidity:${hum}%</div>
        <div class="data">Wind:${wint_speed} km/h</div></div>`
        document.querySelector("#result").innerHTML=html_data
    }