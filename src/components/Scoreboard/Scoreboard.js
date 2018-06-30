import React, { Component } from "react";
import "./Scoreboard.css";

class Scoreboard extends Component {
    state = {
        sticky: false
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const pageY = window.scrollY;
        console.log(pageY);
        console.log(this.scoreboardElement.offsetTop);
        console.log(this.scoreboardElement.offsetHeight);
        console.log(this.scoreboardElement.getBoundingClientRect().bottom);
        if (this.scoreboardElement.getBoundingClientRect().bottom <= 0) {
            this.setState({ sticky: true })
        } else if (pageY === 0) {
            this.setState({ sticky: false })
        }
    }

    render = () => (
        <div 
            className={`scoreboard text-center sticky-${this.state.sticky}`} 
            ref={(scoreboardElement => this.scoreboardElement = scoreboardElement)} 
            onScroll={this.handleScroll}
        >
            <h4>Click on an image to earn points, but don't click on any more than once!</h4>
            <h4 className="scores">Current Score: {this.props.currentScore} | Top Score: {this.props.topScore}</h4>
        </div>
    )
}

export default Scoreboard;