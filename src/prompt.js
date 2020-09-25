import readlineSync from 'readline-sync'
import { myRules } from './rules.js'

export const playerChoice = () => {
    let choix = ['Jouer', 'Règles', 'Qui suis-je ?', 'Abandonner la partie']
    let index = readlineSync.keyInSelect(choix, `A vous de jouer ...`)
    switch (index) {
        case 0:
            console.log('placer un jeton')
            break
        case 1:
            myRules()
            break
        case 2:
            console.log('whoami')
            break
        case 3:
            console.log('abandon')
            break
        default:
            console.log('bad choice')
    }
}
