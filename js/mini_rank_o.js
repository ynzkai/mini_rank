/*
 * id: stars group id
 * r: rank
 * w: star image width
 * cbf: click event callback function
 */

function MiniRank(id, r, w, cbf) {
	this.id = id;
	this.rank = r;
	this.width = w;
	this.callback = cbf;
}

MiniRank.prototype._get_stars = function() {
	return this.stars || document.getElementById(this.id).getElementsByClassName("star");
}

MiniRank.prototype.pre_set_rank = function (r) {
  var stars = this._get_stars();

  for(var i = 0; i < stars.length; i++) {
	  if(i < r)
		  stars[i].style.left = "-" + this.width + "px";
	  else
		  stars[i].style.left = "0px";
  }
}

MiniRank.prototype.set_rank = function (r) {
	this.pre_set_rank(r);
	this.rank = r;
}

MiniRank.prototype.init = function() {
	var stars  = this._get_stars();

	for(var i = 0; i < stars.length; i++) {
		stars[i].setAttribute("data-rank", i+1);
	}

	this.set_rank(this.rank);

	var _this = this;
	for(var i = 0; i < stars.length; i++) {
		var star = stars[i];
		star.onmouseenter = function() {
			var r = this.getAttribute("data-rank");
			_this.pre_set_rank(r);
		};
		star.onmouseleave = function() {
			_this.pre_set_rank(_this.rank);
		};
		//bind click event callback function
		star.onclick = function() {
			var r = this.getAttribute("data-rank");
			_this.set_rank(r);
			_this.callback(r);
		};
	}

}

/*
MiniRank.prototype._set_end_pos = function() {
	var stars = this.stars;
	for(var i = 0; i < stars.length; i++) {
		if(stars[i].name === "endflag") {
		  stars[i].removeAttribute("name");
		  break;
		}
	}
	this.endstar.name = "endflag";
}

MiniRank.prototype.rank = set function rank(n) {
	alert(n);
}
*/
