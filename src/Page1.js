import React from 'react';
import './App.css';
import SendUserResponse from './SendUserResponse';
class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    let input=this.state.value;
    console.log(input)
    new SendUserResponse(input);
    event.preventDefault();
  }


  render() {
    return (
      <div className="pageBody" class="alert alert-warning alert-dismissible fade show">
        <h1>Enter data for us to Start</h1>
        <form onSubmit={this.handleSubmit}>
     <div class="form-group">
      <div> <label>
       Name:</label>
       <input type="text" name="name" class="form-control" onChange={this.handleChange} value={this.state.value.name} /></div>
       <div> <label>
       qualification:</label>
       <input type="text" name="qualification" class="form-control" onChange={this.handleChange} value={this.state.value.quali} /></div>
       <div> <label>
       asspiration:</label>
       <input type="text" name="asspiration" class="form-control"  onChange={this.handleChange} value={this.state.value.asspiration}/></div>
     </div>
     <input type="submit" value="Submit" class="form-control"/>
</form>
      </div>
    );
  }
}

export default Page1;