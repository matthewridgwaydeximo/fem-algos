export default function twoCrystalBalls(breaks: boolean[]): number {
    let i = Math.floor(Math.sqrt(breaks.length));

    for (; i < breaks.length; i += Math.floor(Math.sqrt(breaks.length))) {
        if (breaks[i]) {
            break;
        }
    }
}
