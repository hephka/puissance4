import chalk from 'chalk'
import readlineSync from 'readline-sync'
import { grille } from './grille.js'

export const startGame = () => {

    console.log('Bienvenue sur notre puissance4 fait en NodeJS')

    let gameReady = false
    while(!gameReady) {
        const croix = chalk.red('X')
        const rond = chalk.yellow('O')
        let player1 = console.log(readlineSync.question(`Quel joueur prendra les ${croix} ? Player1: `))
        let player2 = console.log(readlineSync.question(`Quel joueur prendra les ${rond} ? Player2: `))
        gameReady = true
    }
    grille()
}


startGame()