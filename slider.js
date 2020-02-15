setInterval(function(){
	if(document.getElementsByClassName("a")[0].classList.contains("s")){
		document.getElementsByClassName("a")[1].classList.add("s");
		document.getElementsByClassName("a")[0].classList.remove("s");
	}
	else if(document.getElementsByClassName("a")[1].classList.contains("s")){
		document.getElementsByClassName("a")[2].classList.add("s");
		document.getElementsByClassName("a")[1].classList.remove("s");
	}
	else if(document.getElementsByClassName("a")[2].classList.contains("s")){
		document.getElementsByClassName("a")[3].classList.add("s");
		document.getElementsByClassName("a")[2].classList.remove("s");
	}
	else if(document.getElementsByClassName("a")[3].classList.contains("s")){
		document.getElementsByClassName("a")[0].classList.add("s");
		document.getElementsByClassName("a")[3].classList.remove("s");
	}
	


},2000);