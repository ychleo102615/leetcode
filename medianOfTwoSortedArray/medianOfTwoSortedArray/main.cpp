//
//  main.cpp
//  medianOfTwoSortedArray
//
//  Created by 黃耀昌 on 2019/1/23.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <algorithm>

class Solution {
public:
    double findMedianSortedArrays(std::vector<int>& nums1, std::vector<int>& nums2) {
        
        std::vector<int> arrayA = nums1, arrayB = nums2;
        if(arrayA.size() > arrayB.size()){
            arrayA = nums2;
            arrayB = nums1;
        }
        
        int m, n, i, j;
        
        // i, j 代表的是在各自的array中，left part的數量，也可視作是分界點
        
        m = arrayA.size();
        n = arrayB.size();
        int iMax = m;
        int iMin = 0;
        
        while(iMax >= iMin){
            i = (iMax + iMin)/2;
            j = getJ(i, m, n);
            
            if(iMax != 0 && arrayA[i-1] > arrayB[j]){
                // i 要變小
                iMax = i - 1;
            }
            else if(iMin != m && arrayB[j-1] > arrayA[i]){
                // i 要變大
                iMin = i + 1;
            }
            else{
                // i 找到了
                int leftMax, rightMin;
                
                if(i == 0){
                    // left part only has arrayB
                    leftMax = arrayB[j-1];
                }
                else if(j == 0){
                    // left part only has arrayA
                    leftMax = arrayA[i-1];
                }
                else{
                    leftMax = std::max(arrayA[i-1], arrayB[j-1]);
                }
                
                if((m+n)%2 > 0){
                    return leftMax;
                }
                else{
                    if(i == m){
                        // arrayA are all in part left -> part right only has arrayB
                        rightMin = arrayB[j];
                    }
                    else if(j == n){
                        // arrayB are all in part left -> part right only hass arrayA
                        rightMin = arrayA[i];
                    }
                    else
                        rightMin = std::min(arrayA[i], arrayB[j]);
                    return (float)(leftMax + rightMin)/2;
                }
                
                return -1;
            }
        }
        
        
        return -1;
    }
    
    int getJ(int i, int m, int n){
        if((m+n)%2 == 0){
            return (m+n)/2 - i;
        }
        else{
            // make left part and right part have intersection, so left max would also be median
            return (m+n+1)/2 - i;
        }
    }
};


int main(int argc, const char * argv[]) {
    
    std::vector<int> nums1, nums2;
    nums1 = {1,2,3,4,5};
    nums2 = {6,7,8,9,10};
    
    Solution solution;
    
    std::cout << solution.findMedianSortedArrays(nums1, nums2) << std::endl;;
    
    return 0;
}

