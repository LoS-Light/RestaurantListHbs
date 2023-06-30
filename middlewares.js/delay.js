
export function delay(miliseconds) {
    return (req, res, next) => setTimeout(() => next(), miliseconds);
}