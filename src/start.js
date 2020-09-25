import chalk from 'chalk'
import readlineSync from 'readline-sync'

export const startGame = () => {
    console.log('')
    console.log('Bienvenue sur notre puissance4 fait en NodeJS')
    console.log('')

    const croix = chalk.red('X')
    const rond = chalk.yellow('O')
    let player1 = console.log(
        readlineSync.question(`Quel joueur prendra les ${croix} ? Player1: `)
    )
    let player2 = console.log(
        readlineSync.question(`Quel joueur prendra les ${rond} ? Player2: `)
    )
}
