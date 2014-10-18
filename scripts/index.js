$(document).ready(
	function () {
		var email = "sarahliu@mit.edu";

		$('.email').click(function () {
			$('.email').fadeOut(150);
			$('<a class="email fade" href="mailto:sarahliu@mit.edu">' + email + '</a>').hide().appendTo('#links').fadeIn(1000);
		});
	}
);