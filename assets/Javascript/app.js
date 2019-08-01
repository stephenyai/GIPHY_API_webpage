var ballers = ['Kobe Bryant', 'Lebron James', 'Diana Taurasi', 'Michael Jordan', 'Stephen Curry', 'Klay Thompson', 'Kevin Durant', 'Giannis', 'Damian Lillard'];
var animateURL;
var stillURL;
var ballerImg;
var rating;
var ballerName;

function renderButtons() {
	for (var i=0; i<ballers.length; i++) {
		makeButton(ballers[i]);
	}
}

function makeButton(baller) {
	var btn = $('<button>');
	btn.attr('class', 'button')
	btn.text(baller)
	$('#ballers-view').append(btn);
}

//Upon clicking button, append 10 gifs

$(document).on('click', '.button', function() {
	event.preventDefault();
	$('#baller-gifs').empty();

	ballerName = $(this)[0].innerText;
	var urlObj = {
		"api_key": 'zFqcBS1uDz4ScU6xiVkScPGNZiF6mwNy',
		q: ballerName,
		limit: 10
		// rating: 
	}

	var gURL = "https://api.giphy.com/v1/gifs/search?" + $.param(urlObj);

	$.ajax({
		url: gURL,
		method: 'GET'
	}).then(function(response) {
		console.log(response.data)

		for (var i=0; i<10; i++) {
			animateURL = response.data[i].images.fixed_height.url;
			stillURL = response.data[i].images.fixed_height_still.url;
			rating = response.data[i].rating

			ballerImg = $('<img>');
			ballerImg.attr('src', stillURL);
			ballerImg.attr('alt', 'baller');
			ballerImg.attr('data-state', 'still');
			ballerImg.attr('data-animate', animateURL);
			ballerImg.attr('data-still', stillURL);

			var ballerGIF = $('<p>').text(ballerImg);
			var rating = $('<p>').text(rating)
			var newDiv = $('<div>').append(ballerImg, rating)
			newDiv.attr('class', 'img-rating');

			$('#baller-gifs').prepend(newDiv);
		}
	});
});

//Animate or still function

$(document).on('click', 'img', function() {
	console.log('efefe')
	event.preventDefault();

	var state = $(this).attr('data-state');

	if (state === "still") {
		$(this).attr('src', $(this).attr('data-animate'));
		$(this).attr('data-state', 'animate');
	} else {
		$(this).attr('src', $(this).attr('data-still'));
		$(this).attr('data-state', 'still');
	}
})

//Upon text input, add to array and make new button

$('.submit').on('click', function() {
	event.preventDefault();

	var newBaller = $('#ball-player').val();
	ballers.push(newBaller);
	makeButton(newBaller);

	$("#ball-player").val("");
})

renderButtons()




