import './vendor';

let count = 0;
let checked = 0;

function countBoxes() {
	count = $("input[type='checkbox']").length;
	// console.log(count);
}

countBoxes();
$(':checkbox').click(countBoxes);

function countChecked() {
	checked = $('input:checked').length;
	let countStepArrow = parseInt(checked * 1.6 / count * 100, 10);
	if (countStepArrow > 0) {
		$('#meter__arrow').attr('transform', `rotate (${countStepArrow} 134 122)`);
	} else if (countStepArrow === 0) {
		$('#meter__arrow').attr('transform', 'rotate (-35 134 122)');
	}
	$('.skils-level__counter').html(countStepArrow);
}

countChecked();
$(':checkbox').click(countChecked);
