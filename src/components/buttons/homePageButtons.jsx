import React, { Component } from 'react';
import HomePageButton from './homePageButton';

class HomePageButtons extends Component {
    state = { buttons: [
        { id: "about", buttonText: "About Me", hrefUrl: "/about-me", isLinkFlag: true },
        { id: "twitter", buttonText: "Twitter", hrefUrl: "https://twitter.com/xarizzar", isLinkFlag: false },
        { id: "twitter_spl", buttonText: "Twitter (Spl clips)", hrefUrl: "https://twitter.com/KuroXar", isLinkFlag: false },
        { id: "youtube", buttonText: "YouTube", hrefUrl: "https://www.youtube.com/channel/UC4iP3qGpEFY-YP9ZsL1ofGA", isLinkFlag: false },
        { id: "lot2_temp_stratum_guide", buttonText: "LoT2 F13-F15 Guide", hrefUrl: "/lot2-temperature-stratum-guide", isLinkFlag: true, hasDisplayNoneFlag: true }
    ] } 
    render() { 
        return (
            <React.Fragment>
                {this.state.buttons.map(button => (
                    <HomePageButton
                        id={ button.id }
                        key={ button.id }
                        buttonText={ button.buttonText }
                        hrefUrl={ button.hrefUrl }
                        isLinkFlag={ button.isLinkFlag }
                        hasDisplayNoneFlag = { button.hasDisplayNoneFlag }
                    />
                ))}
            </React.Fragment>
        );
    }
}
 
export default HomePageButtons;