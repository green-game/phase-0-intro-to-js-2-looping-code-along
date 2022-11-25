// Code your solutions in this file
function writeCards( array,event){
    let newArray = []
       for (let P = 0;P < array.length;P++){
           
    newArray.push(`Thank you, ${array[P]}, for the wonderful ${event} gift!`)
    
   };
   
   return newArray};
   
   
   function countDown(count){
    
       while (count > -1) {
         console.log(count--);
       }
   }
   