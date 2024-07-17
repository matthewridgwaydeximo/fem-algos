export default function binarySearchList(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    } while (lo < hi);

    return false;
}
