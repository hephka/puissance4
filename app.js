import readlineSync from 'readline-sync'
import chalk from 'chalk'
import { myRules } from './src/rules.js'
import { grille } from './src/grille.js'
import { startGame } from './src/start.js'

const app = () => {
    startGame()
}

app()
