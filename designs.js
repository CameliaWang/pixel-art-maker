$(document).ready(function(){

	$('#sizePicker').submit(function() {
		return false;
	});

	$('input[type="submit"]').click(function makeGrid() {
		const COLUMN = parseInt($('#inputHeight').val());
		const ROW = parseInt($('#inputWidth').val());
		$('#pixelCanvas').empty();
		if (COLUMN < 50 && ROW < 50) {
			for (let a = 0; a < COLUMN; a++) {
				let gridOutcomes = "";
				for (let b = 0; b < ROW; b++) {
					gridOutcomes += '<td></td>';
				}
				$('#pixelCanvas').append('<tr>' + gridOutcomes + '</tr>');
			}
		} else {
			COLUMN = 50;
			ROW = 50;
		}
	});


	let colorbase = '#050505';

	$('#colorPicker').change(function() {
		colorbase = $('#colorPicker').val();
	});


	$('#pixelCanvas').on('click', 'td', function cells() {
		$(this).css('background-color', colorbase);
	});

});