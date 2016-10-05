/* 
	dragstart
	drag
	dragenter
	dragleave
	dragover
	drop
	dragend
*/

window.addEventListener("load", cargar);

function cargar () {
	var cols = document.getElementsByClassName("column");
	for (var i = 0, l = cols.length; i < l; i++) {
		cols[i].addEventListener("dragstart", empiezaArrastrar);
		cols[i].addEventListener("dragenter", entraArrastrar);
		cols[i].addEventListener("dragleave", dejaArrastrar);
		cols[i].addEventListener("dragover", arrastrarSobre);
		cols[i].addEventListener("drop", soltar);
		cols[i].addEventListener("dragend", terminaArrastrar);
	}
}

function empiezaArrastrar(e) {
	e.dataTransfer.setData("text", this.id);
	this.style.opacity = "0.4";
}

function entraArrastrar(e) {
	this.classList.add("over");
}

function dejaArrastrar(e) {
	this.classList.remove("over");
}

function arrastrarSobre(e) {
	e.preventDefault();
}

function soltar(e) {
	var idArrastrado = e.dataTransfer.getData("text");
	var elementoArrastrado = document.getElementById(idArrastrado);
	var temporal = this.innerHTML;
	e.target.innerHTML = elementoArrastrado.innerHTML;
	elementoArrastrado.innerHTML = temporal;
	this.classList.remove("over");
}

function terminaArrastrar(e) {
	this.style.opacity = null;
}