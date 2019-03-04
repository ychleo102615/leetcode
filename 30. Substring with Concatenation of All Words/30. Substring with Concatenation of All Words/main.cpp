//
//  main.cpp
//  30. Substring with Concatenation of All Words
//
//  Created by 黃耀昌 on 2019/2/11.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <string>
#include <map>
#include <algorithm>

using namespace std;

class Solution {
public:
    int wordLen = 0;
    int targetLen = 0;
    map<string,vector<int>> candidate2;
    
    vector<int> findSubstring(string s, vector<string>& words) {
        vector<int> ans;
        candidate2.clear();
        
        
        if(words.size()<=0){
            return ans;
        }
        wordLen = words[0].length();
        targetLen = wordLen*words.size();
        if(s.length()<targetLen)
            return ans;
        
        for(int i=0;i<words.size();i++){
            
            if(candidate2.find(words[i]) != candidate2.end())
                continue;
            
            int lastPos = 0;
            candidate2.insert(make_pair(words[i], vector<int>()));
            while((lastPos = s.find(words[i], lastPos)) != string::npos){
                candidate2.at(words[i]).push_back(lastPos);
                lastPos++;
            }
        }
        

        for(map<string,vector<int>>::iterator it=candidate2.begin(); it!=candidate2.end();it++){
//            vector<string> wordsCopy = words;
//            wordsCopy.erase(find(wordsCopy.begin(),wordsCopy.end(), it->first));
            for(int j=0;j< it->second.size(); j++){
                vector<string> wordsCopy = words;
                wordsCopy.erase(find(wordsCopy.begin(),wordsCopy.end(), it->first));
                
                if(it->second[j]+targetLen > s.length())
                    break;
                if(isCancatenate(s, it->second[j]+wordLen, wordsCopy)){
                    ans.push_back(it->second[j]);
                }
            }
        }
        

        
        return ans;
    }
    
    bool isCancatenate(string s, int ptr, vector<string> &words){
        
        vector<string>::iterator it;
        while(words.size()>0){
            if(ptr+wordLen > s.length())
                return false;
            
            string next = s.substr(ptr,wordLen);
            it = find(words.begin(),words.end(),next);
            if(it == words.end())
                return false;
            else{
                words.erase(it);
                ptr += wordLen;
            }
        }
        return true;
        
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
//    vector<string> words{"word","good","best","good"};
    vector<string> words{"foo","bar"};
    
    Solution s;
//    s.findSubstring("wordgoodgoodgoodbestword",words);
    s.findSubstring("barfoothefoobarman", words);
    return 0;
}
