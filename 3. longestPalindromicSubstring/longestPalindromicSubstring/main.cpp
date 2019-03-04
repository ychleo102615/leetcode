//
//  main.cpp
//  longestPalindromicSubstring
//
//  Created by 黃耀昌 on 2019/1/24.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>

class Solution {
public:
    std::string longestPalindrome(std::string s) {
        
        int longestL=0, longestLength = 0;
        int length = s.length();
        
        for(int i=0;i<length;i++){
            
            int maxLength = (i<length/2)?2*i:2*(length-i);
            if(longestLength > maxLength)
                break;
            
            int leftBound, rightBound, candidateLeft=0, candidateRight=0;
            leftBound = i-1;
            rightBound = i+1;
            
            while(leftBound>=0 && rightBound < length){
                if(s.at(leftBound) == s.at(rightBound)){
                    candidateLeft = leftBound;
                    candidateRight = rightBound;
                }
                else
                    break;
                
                leftBound--;
                rightBound++;
            }
            
            int leftBound2, rightBound2, candidateLeft2=0, candidateRight2=0;
            leftBound2 = i;
            rightBound2 = i+1;
            
            while(leftBound2>=0 && rightBound2 < length){
                if(s.at(leftBound2) == s.at(rightBound2)){
                    candidateLeft2 = leftBound2;
                    candidateRight2 = rightBound2;
                }
                else
                    break;
                
                leftBound2--;
                rightBound2++;
            }
            
            if(candidateRight - candidateLeft + 1 > longestLength){
                longestL = candidateLeft;
                longestLength = candidateRight - candidateLeft + 1;
            }
            else if(candidateRight2 - candidateLeft2 + 1 > longestLength){
                longestL = candidateLeft2;
                longestLength = candidateRight2 - candidateLeft2 + 1;
            }
        }
        
        return s.substr(longestL, longestLength);
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    std::string test = "abcdcba", test2 = "aabbcccddddd";
    Solution s;
    std::cout << s.longestPalindrome(test) << std::endl;
    std::cout << s.longestPalindrome(test2) << std::endl;
    
    
    return 0;
}
