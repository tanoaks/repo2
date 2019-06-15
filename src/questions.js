import React from 'react';
import './App.css';
class questions extends React.Component {

  render() {
   const questions=["1","2","3"];
    return (
        <li>
           
                <question name={questions}  />
            
            
        </li>
        
      
    );
  }
}
questions.propTypes = {
    name: PropTypes.array.isRequired,
    
  };

export default questions;