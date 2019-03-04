//
//  main.cpp
//  twoSum
//
//  Created by 黃耀昌 on 2019/1/21.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <deque>
#include <map>

int main(int argc, const char * argv[]) {
    
    //int nums[] = {3, 5, 2, -4, 8, 11};
    std::deque<int> nums = {3, 5, 2, -4, 8, 11};
    int target = 7;
    
    for(int i=0;i<nums.size();i++){
        for(int j=i;j<nums.size();j++){
            if(nums[i] + nums[j] == target){
                std::cout << "find " << i << " " << j << std::endl;
            }
        }
    }
    
    std::map<int,int> checkTable;
    for(int i=0;i<nums.size();i++){
        if(i!=0){
            int complement = target-nums[i];
            if(checkTable.find(target-nums[i]) != checkTable.end()){
                std::cout << "find: " << i << " and " << checkTable.at(complement) << std::endl;
            }
        }
        checkTable.insert(std::pair<int,int>(nums[i],i));
    }
    
    return 0;
}


//http://mropengate.blogspot.com/2015/12/cc-map-stl.html
