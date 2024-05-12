function maxArea(height: number[]): number {
    let maxArea = 0;

    let left = 0;
    let right = height.length - 1;
    let area = 0;

    while (left < right) {
        if (height[right] < height[left]) {
            area = (right - left) * height[right];
            right--;
        } else {
            area = (right - left) * height[left];
            left++;
        }
        if (area > maxArea) {
            maxArea = area;
        }
    }

    return maxArea;
};
