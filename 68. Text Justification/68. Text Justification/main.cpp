//
//  main.cpp
//  68. Text Justification
//
//  Created by 黃耀昌 on 2019/3/25.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        vector<string> ans;
        
        int wordsCount = 0;
        while(wordsCount < words.size()){
            int takeIn = 0;
            int len = 0;
            while(len <= maxWidth){
                if(wordsCount + takeIn >= words.size()){
                    break;
                    // end of the loop and outter loop
                }
                int wordLen = words[wordsCount + takeIn].length();
                if(takeIn == 0){
                    if(wordLen + len <= maxWidth){
                        len += wordLen;
                        takeIn++;
                    }
                    else{
                        cout << "error" << endl;
                        return ans;
                        break;
                    }
                }
                else if(len + wordLen < maxWidth){
                    len += 1 + wordLen;
                    takeIn++;
                }
                else{
                    break;
                }
            }
            
            ans.push_back(setLine(words, wordsCount, takeIn));
            wordsCount += takeIn;
        }
        
        return ans;
    }
    
    string setLine(vector<string>& words, int wordsCount, int takeIn){
        string line;
        
        // TODO: adjust to leetcode's needs
        for(int i = 0; i < takeIn; i++){
            line += words[wordsCount+i] + ' ';
        }
        return line;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    vector<string> words{"This", "is", "an", "example", "of", "text", "justification."};
    vector<string> words2{"What","must","be","acknowledgment","shall","be"};
    vector<string> words3{"Science","is","what","we","understand","well","enough","to","explain",
        "to","a","computer.","Art","is","everything","else","we","do"};
    vector<string> words4{"appleapple", "appleapple", "apple", "pinee", "appleapple"};
    Solution s;
    s.fullJustify(words4, 10);
    return 0;
}
