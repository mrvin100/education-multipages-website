/* custom js file made by JeanDoe */

/* Declaration of variables & constantes */

const navbar = document.querySelector('.header .navbar'),
	  menuBtn = document.getElementById('menu-btn'),
	  closeBtn = document.getElementById('close-btn');

if(menuBtn){
	menuBtn.addEventListener('click', () => {
		navbar.classList.toggle('active');
	})
}
if(closeBtn){
	closeBtn.addEventListener('click', () => {
		navbar.classList.remove('active');
	})
}

window.addEventListener('scroll', () =>{
	navbar.classList.remove('active');
})

/*-------- view more by toggle with course title --------*/


 const boxItem = document.querySelectorAll('.courses .box')

//1. Select the box item
boxItem.forEach((item) =>{
	const titleItem = item.querySelector('.course_title')
	//2. select box when click on title
	titleItem.addEventListener('click', () =>{
		//7. create a variable
		const viewMore = document.querySelector('.view-more')
		//5. link to a toggle function item
		toggleItem(item)
		
		//8. valid if class exist
		if(viewMore && viewMore!== item){
			toggleItem(viewMore)
		}
	})
})

//3. create a constant type function
const toggleItem = (item) =>{
	//3.1 create variable
 	const more = item.querySelector('.courses .more')
	//6. if exist another element who content the class view-more remove it
	if(item.classList.contains('view-more')){
		more.removeAttribute('style')
		item.classList.remove('view-more')
	}else{
		//4. put height to max height contain
		more.style.height = more.scrollHeight + 'px'
		item.classList.add('view-more');
	}
}


/* enable and disable dark mode */
let body = document.body;
let themeBtn = document.getElementById('theme-btn');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
	themeBtn.classList.replace('fa-lightbulb', 'fa-sun');
	body.classList.add('dark');
	localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
	themeBtn.classList.replace('fa-sun', 'fa-lightbulb');
	body.classList.remove('dark');
	localStorage.setItem('dark-mode', 'disabled');
}

themeBtn.onclick = (e) =>{
	let darkMode = localStorage.getItem('dark-mode');
	if(darkMode === 'disabled'){
		enableDarkMode();
	}else{
		disableDarkMode();
	}
}

if(darkMode === 'enabled'){
	enableDarkMode();
}