let element = function(e,a,t,c){
	let n = document.createElement(e);
	if (t && typeof t == 'string'){
		n.innerText = t;
	}	
	if (a && typeof a == 'object'){		
		for(let k in a){
			n.setAttribute(k,a[k]);
		};
	}
	if (c && Array.isArray(c)){
		for (var i = 0; i < c.length; i++) {
			n.appendChild(c[i]);
		};
	}
	return n;
};
module.exports = element;