import React, { Component } from "react"; 
import ImagesArray from "../ImagesArray";

class Game extends Component {
    state = {
        currentScore: 0,
        topScore: 0,
        images: []
    }

    componentDidMount = () => {
        this.shuffleImages(ImagesArray);
    }

    shuffleImages = imagesArray => {
        const shuffledImagesArray = imagesArray.map(image => Object.assign({}, image));

        let currentIndex = shuffledImagesArray.length;
        let temporaryValue;
        let randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            temporaryValue = shuffledImagesArray[currentIndex];
            shuffledImagesArray[currentIndex] = shuffledImagesArray[randomIndex];
            shuffledImagesArray[randomIndex] = temporaryValue;
        }

        this.setState({ images: shuffledImagesArray });
    }

    handleImageClick = event => {
        const clickedImage = this.state.images.findIndex(image => image.src === event.target.getAttribute("src"));

        if (this.state.images[clickedImage].wasClicked) {
            this.setState({ currentScore: 0 })
            this.shuffleImages(ImagesArray);
        } else {
            const updatedImages = this.state.images.slice();
            updatedImages[clickedImage].wasClicked = true;
            this.setState(previousState => ({ 
                currentScore: previousState.currentScore + 1,
                topScore: this.getTopScore(previousState),
                images: updatedImages 
            }))
            this.shuffleImages(this.state.images);
        }
    }

    getTopScore = previousState => {
        if ((previousState.currentScore + 1) > previousState.topScore) {
            return previousState.currentScore + 1;
        } else {
            return previousState.topScore;
        }
    }

    render = () => (
        <React.Fragment>
            <h3>Current Score: {this.state.currentScore}</h3>
            <h3>Top Score: {this.state.topScore}</h3>
            {this.state.images.map(image => (
                <img key={image.src} src={image.src} alt="Brooklyn Nine-Nine Character" onClick={this.handleImageClick} />
            ))}
        </React.Fragment>
    )
}

export default Game;