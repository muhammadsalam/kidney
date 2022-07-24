let links = document.getElementsByClassName('content__tab-link');
for(i = 0; i < links.length; i++){
	links[i].onclick = function(){
		for(a = 0; a < links.length; a++){
			links[a].classList.remove('active');
		}
		this.classList.add('active');
	}
}