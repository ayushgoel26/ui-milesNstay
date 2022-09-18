// // When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	// if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	//   document.getElementById("navbarsearch").style.top = "0";
	//   document.getElementById("navbarmenu").style.top = "-130px";
	// } 
	const box = document.querySelector('.card');
	const rect = box.getBoundingClientRect();

	const isInViewport = rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth);

	if (!isInViewport) {
		console.log('true');
		document.getElementById("navbarsearch").style.top = "0";
		// document.getElementById("navbarmenu").style.display = block;
		// document.getElementById("navbarmenu").style.display = none;
		document.getElementById("navbarmenu").style.top = "-130px";
	} else {
		console.log('false');
		// document.getElementById("navbarsearch").style.display = none;
		// document.getElementById("navbarmenu").style.display = block;

		document.getElementById("navbarsearch").style.top = "-130px";
		document.getElementById("navbarmenu").style.top = "0";

	}
	// var currentScrollPos = window.pageYOffset;
	// if (prevScrollpos > currentScrollPos) {
	//   document.getElementById("navbar").style.top = "0";
	// } else {
	//   document.getElementById("navbar").style.top = "-50px";
	// }
	// prevScrollpos = currentScrollPos;
}



// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// Carousel Script
// let items = document.querySelectorAll('.carousel .carousel-item')
// console.log(items)

// window.onload = () => { items.forEach((el) => {
//   console.log("hi")
//     const minPerSlide = 4
//     let next = el.nextElementSibling
//     for (var i=1; i<minPerSlide; i++) {
//         if (!next) {
//             // wrap carousel by using first child
//             next = items[0]
//         }
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })};