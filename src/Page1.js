import React from 'react';
import './App.css';
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
    event.preventDefault();
  }


  render() {
    return (
      <div className="pageBody">
        <h1>Enter data for us to Start</h1>
        <form>
     <label>
       Name:
       <input type="text" name="name" />
     </label>
     <input type="submit" value="Submit" />
</form>
      </div>
    );
  }
}

export default Page1;