function topKFrequent(nums: number[], k: number): number[] {
    const heapArray: number[] = [];
    const frequentMap = new Map<number, number>();
    const indexMap = new Map<number, number>();

    const ref = function(index: number): number {
        return frequentMap.get(heapArray[index])!;
    }

    const updateHeap = function(index: number) {
        if (index == 0) return;
        let parent = Math.floor((index - 1) / 2);

        while (index != parent) {

            if (ref(index) > ref(parent)) {
                // swap
                const temp = heapArray[index];
                heapArray[index] = heapArray[parent];
                heapArray[parent] = temp;
                // update indexMap
                indexMap.set(heapArray[parent], parent);
                indexMap.set(heapArray[index], index);

            } else {
                break;
            }
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (frequentMap.has(nums[i])) {
            // update heap
            frequentMap.set(nums[i], frequentMap.get(nums[i])! + 1);
            updateHeap(indexMap.get(nums[i])!);
        } else {
            // insert
            frequentMap.set(nums[i], 1);
            // no need to update heap, because new element is 1, which is smallest
            heapArray.push(nums[i]);
            indexMap.set(nums[i], heapArray.length - 1);
        }
        console.log("frequent:", frequentMap);
    }


    const ans: number[] = [];
    // take k element from heap
    for (let i = 0; i < k; i++) {
        ans.push(heapArray[0]);
        heapArray[0] = heapArray[heapArray.length - 1];
        heapArray.pop();

        // sink operation of heapArray

        let index = 0;
        while (true) {
            let j = index*2 + 1; // pick left child node
            if (heapArray.length <= j) {
                break;
            }
            if (heapArray.length > j + 1) {
                // has right node
                if (ref(j) < ref(j + 1)) {
                    // use right node
                    j++;
                }
            }
            if (ref(j) <= ref(index)) {
                break;
            }
            const temp = heapArray[index];
            heapArray[index] = heapArray[j];
            heapArray[j] = temp;
            index = j;
        }

    }

    return ans;
};
