jQuery(document).ready(function ($) {
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New%20York",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
			"x-rapidapi-key": "85a5062f8cmshf74ca2eeebd0ea2p179597jsn732b4d233a5e"
		},
		success: function(data, textStatus, jqXHR) {
			$.each(data.Results, function(i, result) {
				$('div').append("<p>"+result.name+"</p>");
			})
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(textStatus);
		},
		complete: function(jqXHR, textStatus) {
			console.log('success or error');
		}
	}
	$(document).ajaxStart(function() {
		$('div').html("<img src='./images/load.gif' alt='loading'>");
	})
	.ajaxStop(function() {
		$('img').remove();
	});

	$.ajax(settings)
	.done(function(data, textStatus, jqXHR){
		console.log(data)
	})
	.fail(function(jqXHR, textStatus, errorThrown){
		console.log(textStatus);
	})
	.always(function(jqXHR, textStatus, errorThrown){
		console.log('success or error');
	});

	///////////////////////////////////////////////////
	
})