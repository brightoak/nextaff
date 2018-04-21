'use strict';

/*****

	1. adding animations to elements in current viewport
	2. ScrollTo
	3. Custom Select
	4. Tabs
	5. Mediabox

****/

// 1. adding animations to elements in current viewport
let sections = document.querySelectorAll('.js-flyin');
if (sections.length > 0){
	inView();
	window.onscroll = () =>{
		inView();
	}
}
function inView(){
	if (window.innerWidth > 768) {
		sections.forEach((section) => {
			if (inViewport(section, { offset: -300 })) {
				section.classList.add('js-inview');
			}
		});
	}
}

// 2. ScrollTo
let scroll = new SmoothScroll();
let smoothScrollWithoutHash = function (selector, settings) {
	/**
	 * If smooth scroll element clicked, animate scroll
	 */
	let clickHandler = function (event) {
		let toggle = event.target.closest( selector );
		if ( !toggle || toggle.tagName.toLowerCase() !== 'a' ) return;
		let anchor = document.querySelector( toggle.hash );
		if ( !anchor ) return;

		event.preventDefault(); // Prevent default click event
		scroll.animateScroll( anchor, toggle, settings || {} ); // Animate scroll
	};

	window.addEventListener('click', clickHandler, false );
};

// Run our function
smoothScrollWithoutHash('a.scrollto[href*="#"]',{
	header: '#header'
});

// 7. Sticky Header
let header = document.getElementById('header');
if (header){
    let headroom  = new Headroom(header);
    headroom.init();
}

// 3. Custom Select
customSelect('.custom-select');

let slider = tns({
    container: '#steps-slides',
    navContainer: "#steps-navigation",
		autoplay: false,
		autoHeight:true
});

// 4. Tabs
let tabset = document.getElementById('faqs-tabs');
if (tabset) {
	let tabsEls = tabset.querySelectorAll('li');
	let tabs = document.querySelectorAll('#faqs .tab');
	tabsEls.forEach((el) => {
		let link = el.querySelector('a');
		link.onclick = (e) => {
			e.preventDefault();
			let parent = link.parentNode;
			if (!parent.classList.contains('js-active')) {
				let activeEl = tabset.querySelector('.js-active');
				activeEl.classList.remove('js-active');
				parent.classList.add('js-active');

				let targetTabNumber = link.getAttribute('href');
				let targetTab = document.querySelector('#faqs .tab[data-attr="' + targetTabNumber + '"]');

				tabs.forEach((holder, index) => {
					if (holder.classList.contains('js-active')) {
						holder.classList.remove('js-active');
					}
					if ((index + 1) > targetTabNumber) {
						holder.setAttribute('data-direction', 'right');
					}
					if ((index + 1) < targetTabNumber) {
						holder.setAttribute('data-direction', 'left');
					}
				});
				targetTab.classList.add('js-active');
			}
		}
	});

	let openers = document.querySelectorAll('.tabs-holder .opener');
	openers.forEach((el) => {
		el.onclick = () => {
			el.parentNode.classList.toggle('js-opened');
		}
	});
}

// 5. Mediabox
MediaBox('.mediabox');