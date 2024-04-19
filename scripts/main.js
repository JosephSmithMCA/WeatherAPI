var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var day6 = document.getElementById("day6");
var day7 = document.getElementById("day7");

var table = document.getElementById("weatherTable");

LoadCoordinates();

class Weather {

    //FIELDS
    date = "";
    isday = "";
    nameDay = "";
    high = "";
    low = "";
    precip = 0.0;
    humidity = "";
    detailForecast = "";
    iconImage = "";

    constructor() {
        high = "";
        low = "";
        precip = 0.0;
        humidity = "";

        this.date = "";
        this.isdate = "";
        this.nameDay = "";
        this.detailForecast = "";
        this.iconImage = "";
    }//end constructor

}//end class

function LoadCoordinates() {
    //VARIABLES
    var ajaxRequest = new XMLHttpRequest;
    var url = 'https://api.weather.gov/gridpoints/LIX/111,110/forecast';
    var runAsyncronously = true;

    //SETUP REQUEST
    ajaxRequest.open('GET', url, runAsyncronously);

    //WHICH FUNCTION TO RUN WHEN THE REQUEST RETURNS
    ajaxRequest.onreadystatechange = WeatherCallBack;

    //ACTUALLY SEND THE REQUEST AND WAIT FOR RESPONSE
    ajaxRequest.send();
}//end function

function WeatherCallBack() {

    //STATUSES
    //200: "OK"
    //403: "Forbidden"
    //404: "Page not found"

    //READY STATES
    //0      The request is not initialized
    //1      The request has been set up
    //2      The request has been sent
    //3      The request is in process
    //4      The request is complete

    if (this.status === 200 && this.readyState === 4) {

        console.log(this.responseText);

        //PARSING THE STRING BACK INTO AN OBJECT
        var data = JSON.parse(this.responseText);

        day1.innerHTML = `Today`;
        day2.innerHTML = data.properties.periods[2].name;
        day3.innerHTML = data.properties.periods[4].name;
        day4.innerHTML = data.properties.periods[6].name;
        day5.innerHTML = data.properties.periods[8].name;
        day6.innerHTML = data.properties.periods[10].name;
        day7.innerHTML = data.properties.periods[12].name;

        //TAKES DATA TO THE FUNCTION
        ShowWeather(data);



    }//end if

}//end function

function ShowWeather(data) {
    //VARIABLE
    var loop = 0;

    //LOOPING THRU THE WHOLE WEEK 
    for (var days = 0; days <= 7 - 1; days++) {

        if (days == 0) {
            var Mcurrent = document.getElementById("current0");
            var Mlow = document.getElementById("low0");
            var Mprecipt = document.getElementById("precipt0");
            var Mhumid = document.getElementById("humid0");

            var Ecurrent = document.getElementById("ecurrent0");
            var Elow = document.getElementById("elow0");
            var Eprecipt = document.getElementById("eprecipt0");
            var Ehumid = document.getElementById("ehumid0");
        } else if (days == 1) {
            var Mcurrent = document.getElementById("current1");
            var Mlow = document.getElementById("low1");
            var Mprecipt = document.getElementById("precipt1");
            var Mhumid = document.getElementById("humid1");

            var Ecurrent = document.getElementById("ecurrent1");
            var Elow = document.getElementById("elow1");
            var Eprecipt = document.getElementById("eprecipt1");
            var Ehumid = document.getElementById("ehumid1");
        } else if (days == 2) {
            var Mcurrent = document.getElementById("current2");
            var Mlow = document.getElementById("low2");
            var Mprecipt = document.getElementById("precipt2");
            var Mhumid = document.getElementById("humid2");

            var Ecurrent = document.getElementById("ecurrent2");
            var Elow = document.getElementById("elow2");
            var Eprecipt = document.getElementById("eprecipt2");
            var Ehumid = document.getElementById("ehumid2");
        } else if (days == 3) {
            var Mcurrent = document.getElementById("current3");
            var Mlow = document.getElementById("low3");
            var Mprecipt = document.getElementById("precipt3");
            var Mhumid = document.getElementById("humid3");

            var Ecurrent = document.getElementById("ecurrent3");
            var Elow = document.getElementById("elow3");
            var Eprecipt = document.getElementById("eprecipt3");
            var Ehumid = document.getElementById("ehumid3");
        } else if (days == 4) {
            var Mcurrent = document.getElementById("current4");
            var Mlow = document.getElementById("low4");
            var Mprecipt = document.getElementById("precipt4");
            var Mhumid = document.getElementById("humid4");

            var Ecurrent = document.getElementById("ecurrent4");
            var Elow = document.getElementById("elow4");
            var Eprecipt = document.getElementById("eprecipt4");
            var Ehumid = document.getElementById("ehumid4");
        } else if (days == 5) {
            var Mcurrent = document.getElementById("current5");
            var Mlow = document.getElementById("low5");
            var Mprecipt = document.getElementById("precipt5");
            var Mhumid = document.getElementById("humid5");

            var Ecurrent = document.getElementById("ecurrent5");
            var Elow = document.getElementById("elow5");
            var Eprecipt = document.getElementById("eprecipt5");
            var Ehumid = document.getElementById("ehumid5");
        } else if (days == 6) {
            var Mcurrent = document.getElementById("current6");
            var Mlow = document.getElementById("low6");
            var Mprecipt = document.getElementById("precipt6");
            var Mhumid = document.getElementById("humid6");

            var Ecurrent = document.getElementById("ecurrent6");
            var Elow = document.getElementById("elow6");
            var Eprecipt = document.getElementById("eprecipt6");
            var Ehumid = document.getElementById("ehumid6");
        }//end if 


        //LOOPING THRU EACH DAY TO GET INFO FOR THE WEEK 
        for (index = 0; index <= 0; index++) {


            if (data.properties.periods[loop].isDaytime == true) {

                var dayTime = document.getElementById("header1");
                var nightTime = document.getElementById("header2");

                //GRABBING INFO OUT OF THE VAR DATA
                Weather.high = data.properties.periods[loop].temperature;
                Weather.low = data.properties.periods[loop + 1].temperature;
                Weather.precip = data.properties.periods[loop].probabilityOfPrecipitation.value;
                Weather.humidity = data.properties.periods[loop].relativeHumidity.value;

                //WHAT TO DO IF THE PRECIPT IS NULL
                if (Weather.precip == null) {
                    Weather.precip = 0.0;
                }//end if

                //SHOW WEATHER ON HTML PAGE
                dayTime.innerHTML = data.properties.periods[0].name;
                Mcurrent.innerHTML = `Current: ${Weather.high}`;
                Mlow.innerHTML = `Low: ${Weather.low}`;
                Mprecipt.innerHTML = `Precipt: ${Weather.precip}%`;
                Mhumid.innerHTML = `Humidity: ${Weather.humidity}`;

                //GRABBING INFO OUT OF THE VAR DATA
                Weather.high = data.properties.periods[loop + 1].temperature;
                Weather.low = data.properties.periods[loop + 1].temperature;
                Weather.precip = data.properties.periods[loop + 1].probabilityOfPrecipitation.value;
                Weather.humidity = data.properties.periods[loop + 1].relativeHumidity.value;

                //WHAT TO DO IF PRECIPT IS NULL
                if (Weather.precip == null) {
                    Weather.precip = 0.0;
                }//end if

                //SHOWING WEATHER ON THE HTML PAGE
                nightTime.innerHTML = data.properties.periods[1].name;
                Ecurrent.innerHTML = `Current: ${Weather.high}`;
                Elow.innerHTML = `Low: ${Weather.low}`;
                Eprecipt.innerHTML = `Precipt: ${Weather.precip}%`;
                Ehumid.innerHTML = `Humidity: ${Weather.humidity}`;

            } else if (data.properties.periods[loop].isDaytime == false) {

                //GRABBING INFO OUT OF THE VAR DATA
                Weather.high = data.properties.periods[loop + 1].temperature;
                Weather.low = data.properties.periods[loop + 1].temperature;
                Weather.precip = data.properties.periods[loop + 1].probabilityOfPrecipitation.value;
                Weather.humidity = data.properties.periods[loop + 1].relativeHumidity.value;

                //WHAT TO DO IF PRECIPT IS NULL
                if (Weather.precip == null) {
                    Weather.precip = 0.0;
                }//end if

                //SHOWING WEATHER ON THE HTML PAGE
                nightTime.innerHTML = `Evening`;
                Ecurrent.innerHTML = `Current: ${Weather.high}`;
                Elow.innerHTML = `Low: ${Weather.low}`;
                Eprecipt.innerHTML = `Precipt: ${Weather.precip}%`;
                Ehumid.innerHTML = `Humidity: ${Weather.humidity}`;

                //GRABBING INFO OUT OF THE VAR DATA
                Weather.high = data.properties.periods[loop].temperature;
                Weather.low = data.properties.periods[loop + 1].temperature;
                Weather.precip = data.properties.periods[loop].probabilityOfPrecipitation.value;
                Weather.humidity = data.properties.periods[loop].relativeHumidity.value;

                //WHAT TO DO IF THE PRECIPT IS NULL
                if (Weather.precip == null) {
                    Weather.precip = 0.0;
                }//end if

                //SHOW WEATHER ON HTML PAGE
                dayTime.innerHTML = `Morning`;
                Mcurrent.innerHTML = `Current: ${Weather.high}`;
                Mlow.innerHTML = `Low: ${Weather.low}`;
                Mprecipt.innerHTML = `Precipt: ${Weather.precip}%`;
                Mhumid.innerHTML = `Humidity: ${Weather.humidity}`;

            }

            loop += 2;
        }//end for
    }//end for

}//end function
