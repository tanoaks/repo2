import React from 'react';
import './App.css';
import Page2 from './Page2'
class SendUserResponse extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.setState={
        backendData:{}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentData(){

    fetch('http://localhost:8008/api/getquestion?ids="1,2,3"')
    .then(result=>{
        return result.json();
    }).then(data=>{

    this.setState({
        backendData:data
    })       
    })
  }


  render() {
    return (
<Page2></Page2>
    );
  }
}

export default SendUserResponse;