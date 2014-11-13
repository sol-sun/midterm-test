var fizz = function(a){

    if(typeof(a) == 'number'){
	if (a%3 == 0){
	    var hoge = 'fizz';
	    return hoge;
	}else if(a%3 != 0){
	    return a;
	}
    }else{
	return a;
    }
    
}
