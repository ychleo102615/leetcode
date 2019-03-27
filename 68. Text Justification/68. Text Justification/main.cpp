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
            
            ans.push_back(setLine(words, wordsCount, takeIn, maxWidth));
            wordsCount += takeIn;
        }
        
        return ans;
    }
    
    string setLine(vector<string>& words, int wordsCount, int takeIn, int& maxWidth){
        string line;
        
        bool isLastLine = false;
        if(wordsCount + takeIn == words.size()){
            isLastLine = true;
        }
        
        if(takeIn == 1 || isLastLine){
            
            // Won't do special space distribution here
            line += words[wordsCount];
            for(int i = 1; i < takeIn; i++){
                line += ' ' + words[wordsCount+i];
            }
            line += string(maxWidth - line.length(), ' ');
        }
        else{
            int leftSpaceLen = maxWidth;
            for(int i = 0; i < takeIn; i++){
                leftSpaceLen -= words[wordsCount+i].length();
            }
            int intervalNum = takeIn - 1;

            int eachSpaceLen = leftSpaceLen / intervalNum;
            leftSpaceLen %= intervalNum;
            
            line += words[wordsCount];
            for(int i = 1; i < takeIn; i++){
                if(leftSpaceLen > 0){
                    line += ' ';
                    leftSpaceLen--;
                }
                line += string(eachSpaceLen, ' ') + words[wordsCount+i];
            }
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
    vector<string> words5{"Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"};
    Solution s;
    vector<string> ans = s.fullJustify(words5, 20);
    for(int i=0;i<ans.size();i++){
        cout << "--" << ans[i] << "--" << endl;
    }
    return 0;
}
