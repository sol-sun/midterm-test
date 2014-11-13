var prime = function(a){

    if(a > 0 && a == parseInt(a)){
	if(a == 1){
	    return false;
	}
	var flag = 1;
	for(var i=2;i<a;i++){
	    if(a%i == 0){
		flag = 0;
	    }
	}

	if(flag == 1){
	    return true;
	}else{
	    return false;
	}
	
	
    }else{
	return false;
    }
    
}
