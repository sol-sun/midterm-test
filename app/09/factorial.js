var factorial = function(a){
    var hoge = 1;
    
    if(a > 0 && a == parseInt(a)){
	for(var i=1;i<=a;i++){
	    hoge *= i; 
	}
	return hoge;
    }else if( a > 0){
	a = Math.floor(a);
	for(var i=1;i<=a;i++){
	    hoge *= i; 
	}
	return hoge;
    }else if(a <= 0){
	return null;
    }else if(typeof(a) != 'number'){
	return null;
    }
}
