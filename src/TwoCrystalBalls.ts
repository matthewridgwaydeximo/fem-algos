export default function twoCrystalBalls(breaks: boolean[]): number {
    const n = breaks.length;

    if (n === 0) return -1;

    const step = Math.floor(Math.sqrt(n));

    let i = step;
    for (; i < n; i += step) {
        if (breaks[i]) break;
    }

    let j = i - step;
    for (j; j <= i && j < n; j++) {
        if (breaks[j]) return j;
    }

    return -1;
}
