import React, { Component } from 'react';
import { Link } from "react-router-dom";


class HomePageButton extends Component {
    state = {
        buttonText: this.props.buttonText,
        hrefUrl: this.props.hrefUrl,
        isLinkFlag: this.props.isLinkFlag
    };

    render() { 
        return this.linkOrAnchor(this.state.isLinkFlag);
    }

    linkOrAnchor(isLinkFlag) {
        if (isLinkFlag) {
            return (
                <Link to={this.state.hrefUrl}>
                    <button className='btn btn-primary hpbutton'>{this.state.buttonText}</button>
                </Link>
            );
        } else {
            return (
                <a href={this.state.hrefUrl}>
                    <button className='btn btn-primary hpbutton'>{this.state.buttonText}</button>
                </a>
            );
        }
    }
}
 
export default HomePageButton;