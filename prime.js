  
function prime(num){
     let fac=0;
     for(let i=1;i<=num;i++){
       if(i%num==0){
  fac++;
    }
  if(fac==2){
  return "prime";
  }else{
"non_prime";
  }
    }
   let x=prime(5);
  console.log(x);
  