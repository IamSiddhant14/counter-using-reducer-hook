import React from 'react'

const reducer = ( count , action) => {
  
     if( action.type ==="INC"){
        count += 1;
     }

     if( action.type ==="DEC"){
        if( count == 0){
            
        }else{
            count -= 1;
        }
        
     }
  
     return count;
}

export default reducer