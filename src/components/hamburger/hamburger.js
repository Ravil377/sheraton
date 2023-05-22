import enquire from 'enquire.js'
import { overlayAdd, overlayRemove } from '../overlay/overlay'

const $hamburger = document.querySelector('.hamburger--js');
const $mainmenu = document.querySelector('.header-js');
// const $mainmenu = document.querySelector('.mainmenu--js')
// const mobilMenu = document.querySelector('.header__mobil-menu--js');


function showMenu() {
	$mainmenu.classList.add('is-active')
	$hamburger.classList.add('is-active')
	overlayAdd();
}

function hideMenu() {
	$mainmenu.classList.remove('is-active')
	$hamburger.classList.remove('is-active')
	overlayRemove()
}

const clickHandler = event => {
	event.preventDefault()

	if ($mainmenu.classList.contains('is-active')) {
		hideMenu()
	} else {
		showMenu()
	}
}

enquire.register('screen and (max-width: 1500px)', {
	// deferSetup: true,
	match() {
		$hamburger.addEventListener('click', clickHandler)
		document.addEventListener('click', event => {
			if (event.target.dataset.backdrop === 'overlay') {
				hideMenu();
			}
		})
		// $closeBtn.addEventListener('click', hideMenu)
	},
	unmatch() {
		$hamburger.removeEventListener('click', clickHandler)
		hideMenu();
		// $closeBtn.removeEventListener('click', hideMenu)
	}
})

// mobilMenu.addEventListener('click', (e) => {
// 	const a = e.target;
// 	if(a.tagName === "A") {
// 		hideMenu();
// 	}
	
// })