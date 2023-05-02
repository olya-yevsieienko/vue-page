export function getCorrectEndingForReviews(count) {
    const baseWord = 'отзыв';
    const testNum = count > 19 ? +count.toString().slice(-1) : count;

    switch (true) {
        case (testNum === 0 || testNum > 4):
            return baseWord + 'ов';
        case (testNum > 1):
            return baseWord + 'а';
        default:
            return baseWord;
    }
}
