

let removeElementFromArray = (data, limiter) => {
    return data.sort().slice(0, limiter);
}
module.exports = removeElementFromArray;