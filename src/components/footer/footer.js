import enquire from 'enquire.js'

const footerMenu = document.querySelector('.footer__two-js');

const menuOpen = (e) => {
    const menu = e.target;
    if(menu.classList.contains('footer-menu-js')) {
        menu.closest('UL').classList.toggle('_active');
    }
}

enquire.register('screen and (max-width: 992px)', {
	match() {
		footerMenu.addEventListener('click', menuOpen)
		// document.addEventListener('click', event => {
		// 	if (event.target.dataset.backdrop === 'overlay') {
		// 		hideMenu()
		// 	}
		// })
		// $closeBtn.addEventListener('click', hideMenu)
	},
	unmatch() {
		footerMenu.removeEventListener('click', menuOpen)
		// $closeBtn.removeEventListener('click', hideMenu)
	}
})