import React, { Component } from 'react';


class HomePageButton extends Component {
    state = {
        buttonText: this.props.buttonText
    };

    render() { 
        return (<button className='btn btn-primary hpbutton'>{this.state.buttonText}</button>);
    }
}
 
export default HomePageButton;