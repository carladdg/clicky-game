import React from 'react';
import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

const App = () => (
  <React.Fragment>
    <Header>Clicky Game</Header>
    <Game />
    <Footer>Clicky Game</Footer>
  </React.Fragment>
)

export default App;
