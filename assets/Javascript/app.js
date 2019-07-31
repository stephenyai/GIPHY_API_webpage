var ballers = ['Kobe Bryant', 'Lebron James', 'Diana Taurasi', 'Michael Jordan', 'Stephen Curry', 'Klay Thompson', 'Kevin Durant', 'Giannis', 'Damian Lillard'];

function renderButtons() {
	for (var i=0; i<ballers.length; i++) {
		makeButton(ballers[i]);
	}
}

function makeButton(baller) {
	var btn = $('<button>');
	btn.attr('class', 'button')
	btn.text(baller)
	$('#buttons-view').append(btn);
}

renderButtons()