var controller = (app)=>{
    const bodyParser = require('body-parser');
    const request = require('request');
    const urlencodedParser = bodyParser.urlencoded({extended:false});
app.get('/',function(req,res){
    var lagosweather_data; var cityNameErr=[];
    request({
        url:`https://api.openweathermap.org/data/2.5/weather?q=Lagos,Nigeria&APPID=945a796b34f2c157e96bf554ea05ecec`,
        json:true
    },(error,response,body)=>{
     // I ASSUME THAT THERES NO GOING TO BE ERROR IN LOCATING LAGOS STATE, OTHER
     // STATES ARE LIABLE TO ERROR.
     console.log(body);
        if(error){
            console.log('Unable to connect');
        }
            // coordinates details+
        else if (body.cod === 200){
            var lagos_long = body.coord.lon;
            var lagos_lat = body.coord.lat;
            // weather details
            var lagosweatherId = body.weather[0].id;
            var lagosweatherMain = body.weather[0].main;
            var lagosweatherDesc = body.weather[0].description;
            var lagosweatherIcon = body.weather[0].icon;
            var lagosvisibility = body.visibility;
            // MAIN weather conditions
            var lagoslocation_temp = body.main.temp - 273.15;
            var lagoslocation_pressure = body.main.pressure;
            var lagostemp_feels_like = Math.round(body.main.feels_like - 273.15);
            var lagostemp_min = body.main.temp_min - 273.15;
            var lagostemp_max = body.main.temp_max - 273.15;
            var lagoshumidity = body.main.humidity;
            // Country details...
            var lagoslocation_country = body.sys.country;
            var lagoscity_Name = body.name;
            var lagoswindspeed = body.wind.speed;
            var lagoscloudId = body.weather[0].icon;

             lagosweather_data = {
                //cordinates details
                lagos_long:lagos_long,
                lagos_lat:lagos_lat,
                // weather descriptions and others...
                lagosweatherId:lagosweatherId,
                lagosweatherMain:lagosweatherMain,
                lagosweatherDesc:lagosweatherDesc,
                lagosweatherIcon:lagosweatherIcon,
                lagosvisibility:lagosvisibility,
                // Main weather conditions
                lagoslocation_temp:lagoslocation_temp,
                lagoslocation_pressure:lagoslocation_pressure,
                lagostemp_feels_like:lagostemp_feels_like,
                lagostemp_min:lagostemp_min,
                lagostemp_max:lagostemp_max,
                lagoshumidity:lagoshumidity,
                // country details...
                lagoswindspeed:lagoswindspeed,
                lagoslocation_country:lagoslocation_country,
                lagoscity_Name:lagoscity_Name,
                lagoscloudId:lagoscloudId
            
            }
           res.render('index',{cityNameErr:[],lagosweather_data:lagosweather_data});
            console.log(lagosweather_data); 

        }
    } );

// This will handle the request for the weather details of other city..
// Its gonna be asynchronous ...
// AIzaSyCRTQI9SAulzBkRB1-KDkDKn2Vq6XbFvPw

 app.post('/',urlencodedParser,function(req,res){
    var lagosweather_data;
       var address = req.body.cityName;
        request({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${address}&APPID=945a796b34f2c157e96bf554ea05ecec`,
        json:true
    },(error,response,body)=>{
      //  var serverErr='';
        if(error){
            var serverErr ='Unable to connect to openweathermap Server';
            console.log(serverErr);
            cityNameErr.push(serverErr);
            res.render('index',{cityNameErr:cityNameErr});
            console.log(cityNameErr);

        }
        else if(body.message === 'city not found' ){
            console.log('Unable to find the address');
            cityAddressErr = 'Unable to find the address';
            cityNameErr.push(cityAddressErr);
            res.render('index',{cityNameErr:cityNameErr});
        }
        else if(body.cod === 200){
            var lagos_long = body.coord.lon;
            var lagos_lat = body.coord.lat;
            // weather details
            var lagosweatherId = body.weather[0].id;
            var lagosweatherMain = body.weather[0].main;
            var lagosweatherDesc = body.weather[0].description;
            var lagosweatherIcon = body.weather[0].icon;
            var lagosvisibility = body.visibility;
            // MAIN weather conditions
            var lagoslocation_temp = Math.round(body.main.temp - 273.15);
            var lagoslocation_pressure = body.main.pressure;
            var lagostemp_feels_like =Math.round(body.main.feels_like - 273.15);
            var lagostemp_min = Math.round(body.main.temp_min - 273.15);
            var lagostemp_max = Math.round(body.main.temp_max - 273.15);
            var lagoshumidity = body.main.humidity;
            // Country details...
            var lagoslocation_country = body.sys.country;
            var lagoscity_Name = body.name;
            var lagoswindspeed = body.wind.speed;
            var lagoscloudId = body.weather[0].icon;
            // deployed weather details
            lagosweather_data = {
                //cordinates details
                lagos_long:lagos_long,
                lagos_lat:lagos_lat,
                // weather descriptions and others...
                lagosweatherId:lagosweatherId,
                lagosweatherMain:lagosweatherMain,
                lagosweatherDesc:lagosweatherDesc,
                lagosweatherIcon:lagosweatherIcon,
                lagosvisibility:lagosvisibility,
                // Main weather conditions
                lagoslocation_temp:lagoslocation_temp,
                lagoslocation_pressure:lagoslocation_pressure,
                lagostemp_feels_like:lagostemp_feels_like,
                lagostemp_min:lagostemp_min,
                lagostemp_max:lagostemp_max,
                lagoshumidity:lagoshumidity,
                // country details...
                lagoswindspeed:lagoswindspeed,
                lagoslocation_country:lagoslocation_country,
                lagoscity_Name:lagoscity_Name,
                lagoscloudId:lagoscloudId
            
            }

            res.render('index',{lagosweather_data:lagosweather_data});
           // console.log(lagosweather_data); 
          
    
           
        }
       
    } )

});


});



}

module.exports = controller;