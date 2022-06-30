//Javascript document

// Change Navbar styles on scroll

window.addEventListener('scroll', () => {
	document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})

// SHow/Hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const cloesBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
	menu.style.display = "flex";
	cloesBtn.style.display = "inline-block";
	menuBtn.style.display = "none";
})

// Close nav menu
const cloesNav = () => {
	menu.style.display = "none";
	cloesBtn.style.display = "none";
	menuBtn.style.display = "inline-block";
}

cloesBtn.addEventListener('click', cloesNav)