/*
 * id: stars group id
 * endpos: selected star pos
 * cbf: click event callback function
 * width: star image width
 */

function init_mini_rank(id, endpos, width, cbf) {
  var eles = get_stars(id);

  for(var i = 0; i < eles.length && i <= endpos; i++) {
	  eles[i].style.left = "-" + width + "px";
	  if(i == endpos) eles[i].name = "endflag";
  }

  for(var i = 0; i < eles.length; i++) {
	  eles[i].onmouseenter = function() {
		  highlight_star(this, width);
	  };
	  eles[i].onmouseleave = function() {
		  var id = this.parentNode.parentNode.id;
		  for(var i = 0; i < eles.length; i++) {
			  if(eles[i].name === "endflag") break;
		  }
		  highlight_star(eles[i], width);
	  };
	  //bind click event callback function
	  eles[i].onclick = function() {
		  for(var i = 0; i < eles.length; i++) {
			  if(eles[i] === this) break;
		  }
		  set_end_pos(this);
		  alert((i+1) + " star");
		  cbf();
	  };
  }
}

function get_stars(id) {
  var stars = document.getElementById(id);
  var eles = stars.getElementsByClassName("star");
  return eles;
}

function set_end_pos(ele) {
  var eles = get_stars(ele.parentNode.parentNode.id);
  for(var i = 0; i < eles.length; i++) {
	  if(eles[i].name === "endflag") {
		  eles[i].removeAttribute("name");
		  break;
	  }
  }
  ele.name = "endflag";
}

function highlight_star(ele, width) {
  var eles = get_stars(ele.parentNode.parentNode.id);
  var w = width;
  for(var i = 0; i < eles.length; i++) {
	  eles[i].style.left = "-" + w + "px";
	  if(eles[i] === ele) w = 0;
  }
}

/*
function has_class(ele, cls) {
	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function add_class(ele, cls) {
	if(!has_class(ele, cls))
		ele.className += " " + cls;
}
*/
