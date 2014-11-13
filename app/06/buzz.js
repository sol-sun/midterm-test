var buzz = function(a){

    if(typeof(a) == 'number'){
	if(a%5 == 0){
	    var hoge = 'buzz';
	    return hoge;
	}else if(a%5 != 0){
	    return a;
	}
    }else{
	return a;
    }
}
