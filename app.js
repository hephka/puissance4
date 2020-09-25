import { grille } from './src/grille.js'
import { startGame } from './src/start.js'
import { playerChoice } from './src/prompt.js'

const app = () => {
    let gameReady = false
    while (!gameReady) {
        startGame()
        gameReady = true
    }
    grille()
    playerChoice()
}

app()
