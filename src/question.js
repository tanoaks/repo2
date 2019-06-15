import React from 'react';
import './App.css';
function question(props) {
    
    return(
       
        <form>
        <div class="form-group">
         <div> <label>
          Question:{props.name}</label>
          <input type="text" name="question" class="form-control" /></div>
          
        </div>
        <input type="submit" value="Submit" class="form-control"/>
       </form>

    );

}
    
export default question;