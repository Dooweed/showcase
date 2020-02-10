var callForm 	= document.getElementById("request_call_form"), callFormActive = false,
	callButtons = document.getElementsByClassName("order_call_button_pressed"),
	exitCallFormButton = document.getElementById("request_call_exit_button");


for (var i = callButtons.length - 1; i >= 0; i--)
	callButtons[i].addEventListener("click", toggleForm)
exitCallFormButton.addEventListener("click", toggleForm)

function toggleForm(){
	if(callFormActive){
		callForm.style.display = "none"
	}
	else{
		callForm.style.display = "block"
	}
	callFormActive = !callFormActive
}




/*Catalog dropdown*/
var catalogDropdownBlock  = document.getElementById("catalog-dropdown-div"),
	catalogDropdownButton = document.getElementById("catalog-dropdown-a"),
	catalogItems    	  = document.getElementsByClassName("catalog-dropdown-item")
catalogDropdownBlock.addEventListener("mouseenter", showCatalogBlock);
catalogDropdownBlock.addEventListener("mouseleave", hideCatalogBlock);
for (var i = catalogItems.length - 1; i >= 0; i--) {
	catalogItems[i].addEventListener("mouseenter", showCatalogBlock);
	catalogItems[i].addEventListener("mouseleave", hideCatalogBlock);
}
function showCatalogBlock(){
	for (var i = catalogItems.length - 1; i >= 0; i--) {
		catalogItems[i].style.display = "block";
	}
}
function hideCatalogBlock(){
	for (var i = catalogItems.length - 1; i >= 0; i--) {
		catalogItems[i].style.display = "none";
	}
}

/*ATTACH MENU TO TOP OF PAGE*/
var menuBar = document.getElementById("navbar-normal_sized-menu_block");
window.onscroll = function (e) {
	if(window.innerWidth >= 760){
		if(window.scrollY > 112){
	    	menuBar.classList.add("sticked-to-top-menu")
		}
	    else{
	    	menuBar.classList.remove("sticked-to-top-menu")
	    }
	}  
};





/*SHORT SCREEN MENU*/
const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
const backLink = `<li class="nav-item">
<a class="nav-link nav-back-link" href="javascript:;">
  Назад
</a>
</li>`

navExpand.forEach(item => {
item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


// ---------------------------------------
// not-so-important stuff starts here

const ham = document.getElementById('ham')
ham.addEventListener('click', function() {
document.body.classList.toggle('nav-is-toggled')
})




/*GO TO MAIN PAGE   LOGO CLICK*/
var headerLogo = document.getElementsByClassName("navbar-logo_block"),
	footerLogo = document.getElementsByClassName("footer-logo");
for (var i = headerLogo.length - 1; i >= 0; i--) {
	headerLogo[i].addEventListener("click", goToMainPage)
}
for (var i = footerLogo.length - 1; i >= 0; i--) {
	footerLogo[i].addEventListener("click", goToMainPage)
}
function goToMainPage(){
	document.location.href = "index.html";
}