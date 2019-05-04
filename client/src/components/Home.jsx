import React from 'react';
import '../App.css';

class Home extends React.Component {

    handleClick(event) {
        event.preventDefault()
        fetch('/buy') 
        .then(function(res) {
          console.log(res)
          window.location=res.url;
        })
        .catch(error => console.log(error) );
      }

    render() {
        return (
            <div className="body">
            
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <br /><br /><br /><br /><br /><br />
                        <div className="center card text-center">
                            <div className="card-header">
                                <h1>Donate Today</h1>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Help support our cause</h5>
                                <p className="card-text">A donation of $25.00 or greater can go a long way in helping us achieve our mission.</p>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-warning">
                                        <input type="radio" name="options" id="option1" /> $25.00
                                    </label>
                                    &nbsp;
                                    <label className="btn btn-warning">
                                        <input type="radio" name="options" id="option2" /> $50.00
                                    </label>
                                    &nbsp;
                                    <label className="btn btn-warning">
                                        <input type="radio" name="options" id="option3" /> $100.00
                                    </label>
                                    &nbsp;
                                    <label className="btn btn-warning">
                                        <input type="radio" name="options" id="option2" /> $200.00
                                    </label>
                                    &nbsp;
                                    <label className="btn btn-warning">
                                        <input type="radio" name="options" id="option3" /> $400.00
                                    </label>
                                </div>
                                <br />
                                <label>
                                    Custom Amount:&nbsp;&nbsp;$<input type="number" placeholder="0.00"/>
                                </label>
                                <br />
                            </div>
                            <div className="card-footer text-muted">
                                <button className="btn btn-primary" onclick={this.handleClick}>Donate</button>
                            </div>
                        </div>
                        <br /><br /><br /><br /><br /><br />
                    </div>
                </div>
                </div>
            </div>
        );
    } 
}

export default Home;