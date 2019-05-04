import React from 'react';
import '../App.css';


class Success extends React.Component {
    render() {
      return (
        <div className="container">
          <div class="alert alert-success" role="alert">
            Success!
          </div>
            <h1>Thank you for your donation.</h1>
        </div>
      );
    } 
  }
  
  export default Success;