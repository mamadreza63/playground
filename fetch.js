
var request = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 3000;
    xhr.withCredentials = false;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(`status is: ${xhr.status}`);
            }
        } 
    }
    xhr.ontimeout = function() {
        reject('timeout')
    }
    xhr.open("GET", "https://restcountries-v1.p.rapidapi.com/alpha/ru", true);
    xhr.setRequestHeader("x-rapidapi-host", "restcountries-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "85a5062f8cmshf74ca2eeebd0ea2p179597jsn732b4d233a5e");
    xhr.send();
});

request
.then(function(result) {
    console.log(JSON.parse(result));
})
.catch(function(err) {
    console.log(err);
})

//////////////////////////////////////////////////////////////////
fetch("https://restcountries-v1.p.rapidapi.com/alpha/ru", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "85a5062f8cmshf74ca2eeebd0ea2p179597jsn732b4d233a5e"
	}
})
.then(response => {
	return response.json();
})
.then((myJson) => {
    console.log(JSON.stringify(myJson));
})
.catch(err => {
	console.log(err);
});