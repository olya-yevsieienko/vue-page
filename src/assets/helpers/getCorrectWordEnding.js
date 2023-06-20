export default function getCorrectEnding(count, baseWord) {
    const numberToCutString = 19;
    const testNum = count > numberToCutString
        ? +count.toString().slice(-1)
        : count;

    if (testNum === 0 || testNum > 4) {
        return `${baseWord}ов`;
    } else if (testNum > 1) {
        return `${baseWord}a`;
    } else {
        return baseWord;
    }
}
