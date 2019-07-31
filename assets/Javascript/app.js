var ballers = ['Kobe Bryant', 'Lebron James', 'Diana Taurasi', 'Michael Jordan', 'Stephen Curry', 'Klay Thompson', 'Kevin Durant', 'Giannis', 'Damian Lillard'];
var animateURL;
var stillURL;
var ballerImg;

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

renderButtons()

$('.button').on('click', function() {

	$('#baller-gifs').empty();

	console.log('sdfsd', $(this)[0].innerText)
	var ballerName = $(this)[0].innerText
	var urlObj = {
		"api_key": 'zFqcBS1uDz4ScU6xiVkScPGNZiF6mwNy',
		q: ballerName,
		limit: 10
	}

	var gURL = "https://api.giphy.com/v1/gifs/search?" + $.param(urlObj);

	$.ajax({
		url: gURL,
		method: 'GET'
	}).then(function(response) {
		console.log(response.data)

		var imageURL;

		for (var i=0; i<10; i++) {
			animateURL = response.data[i].images.fixed_height.url;
			stillURL = response.data[i].images.fixed_height_still.url;

			ballerImg = $('<img>');

			ballerImg.attr('src', stillURL);
			ballerImg.attr('alt', 'baller');
			ballerImg.attr('data-state', 'still');
			ballerImg.attr('data-animate', animateURL);
			ballerImg.attr('data-still', stillURL);
			ballerImg.attr('class', 'hello')
			console.log('sddddd', ballerImg)
			$('#baller-gifs').append(ballerImg);
		}
	});
});

$('.hello').on('click', function() {
	var state = $(this).attr('data-state');
	console.log('titeite', state)
	if (state === "still") {
		$(this).attr('src', $(this).attr('data-animate'));
		$(this).attr('data state', 'animate');
	} else {
		$(this).attr('src', $(this).attr('data-still'));
		$(this).attr('data-state', 'still');
	}
})








