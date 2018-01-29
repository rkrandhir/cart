myApp.filter('roundedNumber', function() {
return function(price) {
     return Math.ceil(price);
    }
});

myApp.filter('limitCharItemName', function(){
	return function(n){
		if (n.length > 20){
			return n.substring(0,20).trim()+'...';
		} else {
			return n;
		}
	}
});