function maxProfit(prices: number[]): number {
    const [firstLeft, firstRight, mainProfit] = findMaxProfit(prices);
    if (firstLeft == firstRight) {
        return mainProfit;
    }

    // let priorProfit = 0;
    // const priorPrices = prices.slice(0, firstLeft);
    // if(priorPrices.length > 0) {
    //     const [priorLeft, priorRight] = findMaxProfit(priorPrices);
    //     priorProfit = priorPrices[priorRight] - priorPrices[priorLeft];
    //     // console.log("Prior: ", priorLeft, priorRight)
    // }
    // // console.log(priorProfit);
    const [priorLeft, priorRight,priorProfit] = findMaxProfit(prices.slice(0, firstLeft));

    // let postProfit = 0;
    // const postPrices = prices.slice(firstRight+1);
    // if(postPrices.length > 0) {
    //     const [postLeft, postRight] = findMaxProfit(postPrices);
    //     postProfit = postPrices[postRight] - postPrices[postLeft];
    //     // console.log("Post: ", postLeft, postRight)
    // }
    // console.log(postProfit);
    const [postLeft, postRight,postProfit] = findMaxProfit(prices.slice(firstRight+1));

    // 在中間尋找最大下跌區間
    // let middleLoss = 0;
    // const middlePrices = prices.slice(firstLeft+1, firstRight);
    // if (middlePrices.length > 0) {
    //     const [middleLeft, middleRight] = findMaxLoss(middlePrices);
    //     middleLoss = middlePrices[middleRight] - middlePrices[middleLeft];
    //     // console.log("Middle: ", middleLeft, middleRight)
    // }
    // // console.log(middleLoss)
    const [middleLeft, middleRight,middleProfit] = findMaxProfit(prices.slice(firstLeft+1, firstRight).map( x => -x));
    // const [middleLeft, middleRight,middleLoss] = findMaxLoss(prices.slice(firstLeft+1, firstRight));

    return mainProfit + Math.max(priorProfit, postProfit, middleProfit);
    // return mainProfit + Math.max(priorProfit, postProfit, -middleLoss);

};

function findMaxProfit(subPrices: number[]): number[] {
    let buyIndex = 0;
    let profit = 0;
    let profitable = [0, 0];

    for (let i = 1; i < subPrices.length; i++) {
        if (subPrices[i] < subPrices[buyIndex]) {
            buyIndex = i;
        } else {
            if (subPrices[i] - subPrices[buyIndex] > profit) {
                profit = subPrices[i] - subPrices[buyIndex];
                profitable = [buyIndex, i];
            }
        }
    }
    profitable.push(profit);
    return profitable;
}

function findMaxLoss(subPrices: number[]): number[] {
    let buyIndex = 0;
    let loss = 0;
    let lossable = [0, 0];

    for (let i = 1; i < subPrices.length; i++) {
        if (subPrices[i] > subPrices[buyIndex]) {
            buyIndex = i;
        } else {
            if (subPrices[i] - subPrices[buyIndex] < loss) {
                loss = subPrices[i] - subPrices[buyIndex];
                lossable = [buyIndex, i];
            }
        }
    }
    lossable.push(loss);
    return lossable;

}
