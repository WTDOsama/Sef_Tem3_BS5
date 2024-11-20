
//Scroll Spy
document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
    el.addEventListener('shown.bs.tab', () => {
      const target = el.getAttribute('data-bs-target')
      const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
      bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
    })
  })




//Start Soial Media
let mediaCog = document.getElementById("mediaCog")
let soialMedia = document.getElementById("soialMedia")
let closeBar = document.getElementById("closeBar")
let iconCog = document.getElementById("iconCog")

function openCog(){
    soialMedia.style.right = "80px"
    iconCog.style.display= "none"
    closeBar.style.display = "block"
}

function closeCog(){
    soialMedia.style.right = "-75px"
    iconCog.style.display= "block"
    closeBar.style.display = "none"
}
//End Soial Media

//Popover Button
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })


 // Open modal when the button is clicked
 document.getElementById('popoverButton').addEventListener('click', function() {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal_1'));
    modal.show();
});

 document.getElementById('popoverButton_1').addEventListener('click', function() {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal_1'));
    modal.show();
});

 document.getElementById('popoverButton_2').addEventListener('click', function() {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal_1'));
    modal.show();
});


//Scroll To Top 
var scrTop = document.getElementById("scrTop");

window.onscroll = function () {
	'use strict';
	
	if(window.pageYOffset >= 100){
		
		scrTop.style.display="block";
	}	
	else{
		scrTop.style.display="none";
	}
};

scrTop.onclick = function () {
		'use strict';
		window.scrollTo({
		top:0,
		left:0,
		behavior:"smooth",
	});
};


