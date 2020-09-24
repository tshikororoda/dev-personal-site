	'use strict';
	
	// This changes the title of the page
		let title;
		let titleName = "Tshikororoda | ";
		
		title = document.querySelector('title'); // Get the elements title
		title.innerHTML = titleName;
		
	//  
		const activeNav = () => {
		
			let tdaMainNav 	= document.querySelector("#tda-main-nav"); // Get Nav container
			let tdaLinks	= tdaMainNav.querySelectorAll(".tda-link"); // Get all items with class tda-link
		
			const active = function(e){
				e.preventDefault();
				
				let tdaActiveClass = document.querySelectorAll(".active");
				
				if(tdaActiveClass.length > 0) {
						
					tdaActiveClass[0].className = tdaActiveClass[0].className.replace("active", "");
				}
					
				this.className += " active";
			}
		
			for(let i = 0; i < tdaLinks.length; i++){
				
				tdaLinks[i].addEventListener("click", active);
			}
		}
	
	
	
	const load = () => {
		
		activeNav();
		console.log("load event detected!");
	}
	
	window.onload = load; 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	