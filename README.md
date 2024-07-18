This project is based on the **Rock Paper Scissors** game. It works as shown below.

### Rock Paper Scissors Game:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-output.gif" alt="rock paper scissors output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>


  #### Game Rules

    <details>
    <summary>Click to view the Game Rules</summary>
    <br/>
    <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" alt="rules image" style="width:500px" />
    <br/>

  - Game result based on choices

    - When your choice is **paper** and the opponent choice is **rock**, then the result will be `YOU WON`
    - When your choice is **scissors** and the opponent choice is **rock**, then the result will be `YOU LOSE`
    - When your choice is **rock** and the opponent choice is **paper**, then the result will be `YOU LOSE`
    - When your choice is **scissors** and the opponent choice is **paper**, then the result will be `YOU WON`
    - When your choice is **rock** and the opponent choice is **scissors**, then the result will be `YOU WON`
    - When your choice is **paper** and the opponent choice is **scissors**, then the result will be `YOU LOSE`
    - When your choice and the opponent choice match, then the result will be `IT IS DRAW`

    </details>

- When the result is `YOU WON`, then the score should be incremented by one
- When the result is `IT IS DRAW`, then there shouldn't be any change in the score
- When the result is `YOU LOSE`, then the score should be decremented by one
