import chalk from 'chalk'

export const myRules = () => {
    console.log(
        chalk.bgGreen.black(`
    Pour jouer au puissance 4, il vous faut :
    * Le plateau du jeu et ses 42 emplacements pour jetons répartis en 6 lignes et 7 colonnes
    * 42 jetons de 2 couleurs différentes
    * Être 2 joueurs.
    
    Commencer une partie de puissance 4 :
    Pour commencer une partie de puissance 4, on désigne le premier joueur. Celui­ci met un de ses jetons de couleur dans l’une des colonnes de son choix. Le jeton tombe alors en bas de la colonne.
    Le deuxième joueur insère à son tour son jeton, de l’autre couleur dans la colonne de son choix. Et ainsi de suite jusqu’à obtenir une rangée de 4 jetons de même couleur.
    
    Comment gagner une partie de puissance 4 :
Pour gagner une partie de puissance 4, il suffit d’être le premier à aligner 4 jetons de sa couleur horizontalement, verticalement et diagonalement.
Si lors d’une partie, tous les jetons sont joués sans qu’il y est d’alignement de jetons, la partie est déclaré nulle.
    `)
    )
}
