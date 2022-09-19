// Navbar Script
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	const box = document.querySelector('.card');
	const rect = box.getBoundingClientRect();

	const isInViewport = rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth);

	if (!isInViewport) {
		document.getElementById("navbarsearch").style.top = "0";
		document.getElementById("navbarmenu").style.opacity = '100%';
		document.getElementById("navbarmenu").style.background = '#fff';
		document.getElementById("navbarmenu").style.top = "-100%";
	} else {
		document.getElementById("navbarsearch").style.top = "-100%";
		document.getElementById("navbarmenu").style.opacity = '80%';
		document.getElementById("navbarmenu").style.background = '#fff';
		document.getElementById("navbarmenu").style.top = "0";
	}
}
