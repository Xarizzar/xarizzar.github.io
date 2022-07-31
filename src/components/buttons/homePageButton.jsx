import React, { Component } from 'react';


class HomePageButton extends Component {
    state = {
        buttonText: this.props.buttonText,
        hrefUrl: this.props.hrefUrl
    };

    render() { 
        return (
            <a href={this.state.hrefUrl}>
                <button className='btn btn-primary hpbutton'>{this.state.buttonText}</button>
            </a>
        );
    }
}
 
export default HomePageButton;