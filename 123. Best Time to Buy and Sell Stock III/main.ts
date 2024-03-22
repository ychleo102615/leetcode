function maxProfit(prices: number[]): number {
    const [mainProfit, [firstLeft, firstRight]] = findMaxProfit(prices);
    if (firstLeft == firstRight) {
        return mainProfit;
    }

    const [priorProfit] = findMaxProfit(prices.slice(0, firstLeft));

    const [postProfit] = findMaxProfit(prices.slice(firstRight+1));

    // 在中間尋找最大下跌區間
    const [middleProfit] = findMaxProfit(prices.slice(firstLeft+1, firstRight).map(x => -x));

    return mainProfit + Math.max(priorProfit, postProfit, middleProfit);
};

function findMaxProfit(subPrices: number[]): [number, number[]] {
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

    return [profit, profitable];
}
