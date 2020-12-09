function redirect( callback){

  var login="admin";
  var password="12345";
 
  return(callback(login,password))
  

}

function validator(login,password)
{  
  let x=document.getElementById("loginid");
  let y=document.getElementById("loginpassword");
  let z=document.getElementById("mypanel");
  
  if(x.value==login && y.value==password)
  {
    return true;
  
  }
  else{
    if(x.value!=login)
    {
      x.style.borderColor="red";
   
    
      
    }
    if( y.value!=password)
    {
      y.style.borderColor="red";
     
    }
    return false;
  }
}

