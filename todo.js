
 function a(){ let promise=new Promise(function(resolve,reject){
    var count=0;
 
    var cbox=document.getElementsByClassName("newcbox");
   
  for(var i=0;i<cbox.length;i++)
   {
         if(cbox[i].checked==true)
         { 
             count++;
         }
         
   }
      if(count==5){
         resolve("Congrats. 5 Tasks have been Successfully Completed");


      }
      
  });
  promise.then(function(value){alert(value);});
}
$(document).ready(function(){
   
      $.get("https://jsonplaceholder.typicode.com/todos", function(result){
       $(result).each(function(i,element){
        if(!element.completed)
        {
            var x=`<input class="newcbox" type="checkbox" onclick="a()" >`;
        }
        else{
            var x=`<input type="checkbox" checked disabled>`;
        }
        var t=(`<tr><td>${element.userId}</td><td>${element.id}</td><td> ${element.title} </td><td>${x}</td></tr>`);
        $("table").append(t);
       });
        
      });
      
    
     
    
  });