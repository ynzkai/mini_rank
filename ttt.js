
function A(a) {
	this.a = a;
}

A.prototype.init = function() {
	var e = document.getElementById("xid");
	e.onclick = function() {
		alert(this.a);
	}

}
