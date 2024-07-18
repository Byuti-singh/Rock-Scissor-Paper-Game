import {Component} from 'react'

import GameRules from './components/GameRules'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    showResultView: false,
    result: '',
    yourChoice: 0,
    opponentChoice: 0,
  }

  getOpponentChoice = id => {
    let {score} = this.state
    const random = Math.random() * 3
    const opponentIndex = Math.floor(random)
    const yourId = id
    const yourIdIndex = choicesList.map(eachItem => eachItem.id).indexOf(id)
    const opponentId = choicesList[opponentIndex].id
    let gameResult = ''

    if (yourId === 'PAPER' && opponentId === 'ROCK') {
      gameResult = 'YOU WON'
      score += 1
    } else if (yourId === 'SCISSORS' && opponentId === 'ROCK') {
      gameResult = 'YOU LOSE'
      score -= 1
    } else if (yourId === 'ROCK' && opponentId === 'PAPER') {
      gameResult = 'YOU LOSE'
      score -= 1
    } else if (yourId === 'SCISSORS' && opponentId === 'PAPER') {
      gameResult = 'YOU WON'
      score += 1
    } else if (yourId === 'ROCK' && opponentId === 'SCISSORS') {
      gameResult = 'YOU WON'
      score += 1
    } else if (yourId === 'PAPER' && opponentId === 'SCISSORS') {
      gameResult = 'YOU LOSE'
      score -= 1
    } else {
      gameResult = 'IT IS DRAW'
    }

    this.setState({
      showResultView: true,
      result: gameResult,
      yourChoice: yourIdIndex,
      opponentChoice: opponentIndex,
      score,
    })
  }

  playAgain = () => {
    this.setState({
      showResultView: false,
    })
  }

  render() {
    const {score, showResultView, result} = this.state
    const {opponentChoice, yourChoice} = this.state
    const scoreStr = `${score}`

    return (
      <div className="bg-conatainer">
        <div className="container">
          <div className="item-name">
            <h1 className="item-heading">Rock Paper Scissors</h1>
            <div className="score">
              <p className="score-para">Score</p>
              <p className="score-heading">{scoreStr}</p>
            </div>
          </div>
          <>
            {showResultView ? (
              <>
                <div className="button-card">
                  <p className="rock-button">
                    YOU
                    <img
                      src={choicesList[yourChoice].imageUrl}
                      alt="your choice"
                      className="rock-button"
                    />
                  </p>
                  <p className="scissor-button">
                    OPPONENT
                    <img
                      src={choicesList[opponentChoice].imageUrl}
                      alt="opponent choice"
                      className="scissor-button"
                    />
                  </p>
                </div>
                <div className="play-again-container">
                  <p>{result}</p>
                  <button type="button" onClick={this.playAgain}>
                    PLAY AGAIN
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="button-card">
                  <button
                    type="button"
                    className="rock-button"
                    data-testid="rockButton"
                    onClick={() => this.getOpponentChoice(choicesList[0].id)}
                  >
                    <img
                      src={choicesList[0].imageUrl}
                      alt={choicesList[0].id}
                      className="rock-button"
                    />
                  </button>
                  <button
                    type="button"
                    className="scissor-button"
                    data-testid="scissorsButton"
                    onClick={() => this.getOpponentChoice(choicesList[1].id)}
                  >
                    <img
                      src={choicesList[1].imageUrl}
                      alt={choicesList[1].id}
                      className="scissor-button"
                    />
                  </button>
                </div>
                <button
                  type="button"
                  className="paper-button"
                  data-testid="paperButton"
                  onClick={() => this.getOpponentChoice(choicesList[2].id)}
                >
                  <img
                    src={choicesList[2].imageUrl}
                    alt={choicesList[2].id}
                    className="paper-button"
                  />
                </button>
              </>
            )}
          </>

          <div>
            <GameRules />
          </div>
        </div>
      </div>
    )
  }
}

export default App
