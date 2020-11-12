import './vendor';

let $count = 0;
let $checked = 0;

function countBoxes() {
	$count = $("input[type='checkbox']").length;
}

countBoxes();
$(':checkbox').click(countBoxes);

function countChecked() {
	$checked = $('input:checked').length;
	let $meterArrow = '#meter__arrow';
	let $countStepArrow = parseInt($checked * 2.25 / $count * 100, 10);

	$($meterArrow).attr('transform', `rotate (${$countStepArrow} 125 111)`);
	$($meterArrow).css('transform', 'rotate(' + $countStepArrow + 'deg)');

	// counter number
	$('.skils-level__counter').html($countStepArrow);
	if ($countStepArrow < 60) {
		$('.skils-level__counter').css('color', '#ffc815');
	} else if ($countStepArrow < 160) {
		$('.skils-level__counter').css('color', '#a3cd3b');
	} else {
		$('.skils-level__counter').css('color', '#0093d7');
	}

	// stamp class active
	if ($countStepArrow >= 160) {
		$('.stamp').addClass('is-active');
	} else {
		$('.stamp').removeClass('is-active');
	}
}

countChecked();
$(':checkbox').on('click', countChecked);
