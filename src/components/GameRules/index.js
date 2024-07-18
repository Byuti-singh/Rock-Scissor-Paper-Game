import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {RulesContainer, RulesImage} from '../styledComponents'

const GameRules = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          RULES
        </button>
      }
    >
      {close => (
        <>
          <RulesContainer>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="rules-img"
            />
          </RulesContainer>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <RiCloseLine />
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default GameRules
