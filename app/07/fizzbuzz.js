var fizzbuzz = function(a){

    if(typeof(a) == 'number'){
	var hoge;
	if(a%5 == 0 && a%3 == 0){
	    hoge = 'fizzbuzz';
	}else if(a%3 == 0){
	    hoge = 'fizz';
	}else if(a%5 == 0){
	    hoge = 'buzz';
	}else{
	    hoge = a;
	}
	return hoge;
    }else{
	return a;
    }
    
}
