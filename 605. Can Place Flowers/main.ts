function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let lastPlantedIndex = -1;
    let plantable = 0;
    let amount = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 1) {

            if (lastPlantedIndex < 0) {
                plantable += Math.floor(i / 2);
            } else {
                amount = Math.floor((i - lastPlantedIndex - 2) / 2);
                if (amount > 0) {
                    plantable += amount;
                }
            }

            if (plantable >= n) {
                return true;
            }

            lastPlantedIndex = i;
        }
    }
    if (lastPlantedIndex < 0) {
        return Math.ceil(flowerbed.length / 2) >= n;
    }
    amount = Math.floor((flowerbed.length - lastPlantedIndex - 1) / 2);
    if (amount > 0) {
        return plantable + amount >= n;
    }
    return false;
};
