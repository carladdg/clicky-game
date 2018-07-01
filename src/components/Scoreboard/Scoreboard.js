import React, { Component } from "react";
import "./Scoreboard.css";

class Scoreboard extends Component {
    state = {
        sticky: false,
        stickySpacerHeight: 0
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const pageY = window.scrollY;
        const headerHeight = 300;
        const elementHeightWithMargin = this.scoreboardElement.offsetHeight + 30;

        if (pageY >= headerHeight) {
            this.setState({ 
                sticky: true,
                stickySpacerHeight: elementHeightWithMargin
            })
        } else {
            this.setState({ sticky: false })
        }
    }

    render = () => (
        <React.Fragment>
            <div 
                className={`scoreboard text-center sticky-${this.state.sticky}`} 
                ref={(scoreboardElement => this.scoreboardElement = scoreboardElement)} 
                onScroll={this.handleScroll}
            >
                <h4>Click on an image to earn points, but don't click on any more than once!</h4>
                <h4 className="scores">Current Score: {this.props.currentScore} | Top Score: {this.props.topScore}</h4>
            </div>
            {this.state.sticky && <div style={{height: this.state.stickySpacerHeight}}></div>}
        </React.Fragment>
    )
}

export default Scoreboard;