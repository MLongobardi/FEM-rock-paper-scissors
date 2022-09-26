export function whoWon(player, house) {
    if (player == house) {
        //draw
        return -1;
    } else if (player % 2 == house % 2) {
        //if numbers are both odd or both even the smallest number won
        return Math.min(player,house)
    }
    //biggest number won
    return Math.max(player, house)
}