//
//  main.cpp
//  ZigZagConversion
//
//  Created by 黃耀昌 on 2019/1/26.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <math.h>

class Solution {
public:
    std::string convert(std::string s, int numRows) {
        
        if(numRows == 1) return s;
        int cycleNum = (numRows - 2)*2 + 2;
        std::string rows[numRows];
        int strPtr = 0;
        
        for(int i=0; i < ceil((float)s.length()/cycleNum); i++){
            for(int j=0;j<cycleNum;j++){
                
                int row;
                if(j < numRows-1){
                    row = j;
                }
                else{
                    row = cycleNum - j;
                }
                
                rows[row] += s.at(strPtr);
                strPtr++;
                if(strPtr >= s.length())
                    break;
            }
        }
        std::string sumString;
        for(int i=0;i<numRows;i++){
            sumString += rows[i];
        }
        
        return sumString;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    
    std::cout<< s.convert("ab", 2) << std::endl;
    
    return 0;
}
