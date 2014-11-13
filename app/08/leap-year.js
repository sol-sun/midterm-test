
var leapYear = function(a){

    if(typeof(a) != 'number'){
	return false;
    }else{
	if(a > 0 && a == parseInt(a)){
	    if(a%4 != 0){
		return false;
	    }else if (a%4 == 0 && a%100 != 0 && a%400 != 0){
		return true;
	    }else if (a%100 == 0 && a%400 != 0){
		return false;
	    }else if(a%400 == 0){
		return true;
	    }
	}else if( a > 0 && a != parseInt(a)){
	    return false;
	}else if(a == 0){
	    return false;
	}else if (a < 0){
	    return false;
	}
    }
    
}
