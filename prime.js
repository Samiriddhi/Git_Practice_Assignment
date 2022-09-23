  
function prime(batman){
     let fac=0;
     for(let i=0;i<batman;i++){
       if(i%batman==0){
	fac++;
    	}
  
	if(fac==2){
  	console.log("prime");
  	}else	{	
	console.log("non_prime");
  	}
    	}

prime(23);
  