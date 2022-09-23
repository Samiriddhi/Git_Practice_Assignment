  
function prime(num){
     let fac=0;
     for(let i=1;i<=num;i++){
       if(i%num==0){
	fac++;
    	}
  
	if(fac==2){
  	console.log("prime");
  	}else	{	
	console.log("non_prime");
  	}
    	}

prime(13);
  