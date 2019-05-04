import React from 'react';
import '../App.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            amount: 0
        };
        this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    update(e) {
        console.log("this works")
        this.setState({
            amount: e.currentTarget.value
        })
        console.log(e.currentTarget.value);
    }

    handleClick(event) {
        event.preventDefault()
        fetch('/buy', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({price: this.state.amount})
        }) 
        .then(function(res) {
            console.log(res)
            window.location=res.url;
        })
        .catch(error =>
            console.log(error)
        );
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
                                        <input type="radio" name="options" id="option1" value="25.00" onChange={this.update}/> $25.00
                                    </label>
                                    &nbsp;
                                    <label className="btn btn-warning">
                                        <input type="radio" name="options" id="option2" value="50.00" onChange={this.update}/> $50.00
                                    </label>
                                    &nbsp;
                                    <label className="btn btn-warning">
                                        <input type="radio" name="options" id="option3" value="100.00" onChange={this.update}/> $100.00
                                    </label>
                                    &nbsp;
                                    <label className="btn btn-warning">
                                        <input type="radio" name="options" id="option2" value="200.00" onChange={this.update}/> $200.00
                                    </label>
                                    &nbsp;
                                    <label className="btn btn-warning">
                                        <input type="radio" name="options" id="option3" value="400.00" onChange={this.update}/> $400.00
                                    </label>
                                </div>
                                <br />
                                {/* <label>
                                    Custom Amount:&nbsp;&nbsp;$<input type="number" placeholder="0.00" value="" onChange={this.update}/>
                                </label>
                                <br /> */}
                            </div>
                            <div className="card-footer text-muted">
                                <button className="btn btn-primary" onClick={this.handleClick}>Donate via PayPal</button>
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