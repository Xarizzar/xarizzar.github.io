import React, { Component } from 'react';
import HomePageButton from './homePageButton';

class HomePageButtons extends Component {
    state = { buttons: [
        { id: "about", buttonText: "About Me", hrefUrl: "#" },
        { id: "twitter", buttonText: "Twitter", hrefUrl: "https://twitter.com/xarizzar" },
        { id: "youtube", buttonText: "YouTube", hrefUrl: "https://www.youtube.com/channel/UC4iP3qGpEFY-YP9ZsL1ofGA" }
    ] } 
    render() { 
        return (
            <React.Fragment>
                {this.state.buttons.map(button => (
                    <HomePageButton id={ button.id } buttonText={ button.buttonText } hrefUrl={ button.hrefUrl } />
                ))}
            </React.Fragment>
        );
    }
}
 
export default HomePageButtons;