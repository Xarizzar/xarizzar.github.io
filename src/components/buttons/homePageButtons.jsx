import React, { Component } from 'react';
import HomePageButton from './homePageButton';

class HomePageButtons extends Component {
    state = { buttons: [
        { id: "about", buttonText: "About Me" }
    ] } 
    render() { 
        return (
            <div>
                {this.state.buttons.map(button => (
                    <HomePageButton id={ button.id } buttonText={ button.buttonText } />
                ))}
            </div>
        );
    }
}
 
export default HomePageButtons;