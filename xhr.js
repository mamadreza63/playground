var xhr;
if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xhr = new XMLHttpRequest();
} else { // code for IE6, IE5
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            onNext(xhr.response);
        } else {
            onError(xhr.response);
        }
        document.getElementById('root').innerHTML = "test";
    } else {
        document.getElementById('root').innerHTML = "<img src='./images/load.gif' alt='loading'>";
    }
});
xhr.open("GET", "https://restcountries-v1.p.rapidapi.com/alpha/ru", true);
xhr.setRequestHeader("x-rapidapi-host", "restcountries-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "85a5062f8cmshf74ca2eeebd0ea2p179597jsn732b4d233a5e");
xhr.send();
xhr.onerror = function () { // only triggers if the request couldn't be made at all
    console.log(`Network Error`);
    document.getElementById('root').innerHTML = "test";
};

function onNext(response) {
    if (response) {
        var resObject = JSON.parse(response);
        console.log(resObject);
    }
}

function onError(error) {
    if (error) {
        var errObject = JSON.parse(error);
        console.log(errObject);
    }
}

/////////////////////////////////////////////////

var data = JSON.stringify({
    "user": {
        "id": "1234567890",
        "screen_name": "IUNetSci",
        "...": "..."
    },
    "timeline": [{
            "id": 1234567890,
            "text": "@Botometer is so cool!",
            "...": "..."
        },
        "..."
    ],
    "mentions": [{
            "id": 9876543210,
            "text": "@TruthyAtIndiana is also cool!",
            "...": "..."
        },
        "..."
    ]
});
var xhr2 = new XMLHttpRequest();
xhr2.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        onNext(xhr2.responseText);
    }
});
xhr2.open("POST", "https://osome-botometer.p.rapidapi.com/2/check_account");
xhr2.setRequestHeader("x-rapidapi-host", "osome-botometer.p.rapidapi.com");
xhr2.setRequestHeader("x-rapidapi-key", "85a5062f8cmshf74ca2eeebd0ea2p179597jsn732b4d233a5e");
xhr2.setRequestHeader("content-type", "application/json");
xhr2.setRequestHeader("accept", "application/json");
xhr2.send(data);