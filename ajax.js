var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://restcountries-v1.p.rapidapi.com/alpha/ru",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "85a5062f8cmshf74ca2eeebd0ea2p179597jsn732b4d233a5e"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});