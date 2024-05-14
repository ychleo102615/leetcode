function letterCombinations(digits: string): string[] {
    if (digits.length == 0) {
        return [];
    }

    const digitMap = new Map<string, string[]>([
        ["2", ["a", "b", "c"]],
        ["3", ["d", "e", "f"]],
        ["4", ["g", "h", "i"]],
        ["5", ["j", "k", "l"]],
        ["6", ["m", "n", "o"]],
        ["7", ["p", "q", "r", "s"]],
        ["8", ["t", "u", "v"]],
        ["9", ["w", "x", "y", "z"]],
    ]);

    // 這個做法是從解答區抄來的，但也只有beat 72%
    let combinations: string[] = [""];

    for (let i = 0; i < digits.length; i++) {

        let updateCombinations: string[] = [];
        for (let j = 0; j < combinations.length; j++) {
            for (let k = 0; k < digitMap.get(digits[i])!.length; k++) {
                updateCombinations.push(combinations[j] + digitMap.get(digits[i])![k])
            }
        }
        combinations = updateCombinations;
    }

    // 以下是我想的比較花俏的方法？需要計算總量跟餘數相關操作，可能就多了時間

    // let amount = 1;
    // for (let i = 0; i < digits.length; i++) {
    //     amount *= digitMap.get(digits[i])!.length;
    // }
    // const combinations = Array(amount);
    //
    // let candidate: string;
    // let id: number;
    // let options: string[];
    // let choice: number;
    // for (let i = 0; i < amount; i++) {
    //     candidate = "";
    //     id = i;
    //     for (let j = 0; j < digits.length; j++) {
    //         options = digitMap.get(digits[j])!;
    //         choice = id % options.length;
    //         id = Math.floor(id / options.length);
    //         candidate += options[choice];
    //     }
    //     combinations[i] = candidate;
    // }

    return combinations;
};
