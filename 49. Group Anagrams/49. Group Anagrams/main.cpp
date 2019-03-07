//
//  main.cpp
//  49. Group Anagrams
//
//  Created by 黃耀昌 on 2019/3/7.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

/*
 最上面的code是參考於leetcode討論區https://leetcode.com/problems/group-anagrams/discuss/234618/Fast-C%2B%2B-group-by-counting-and-group-by-sorting-solutions-w-explanations
 
 速度遠快於我下面寫的兩種，如此的速度差異我猜大概是因為當在處理過長的string的時候
 用histogram這種資料結構去記錄每一個字母有幾個的方法，是相當快速簡單的，
 相比於用multiset跟實際讓他去跑sort字串。
 
 稍微紀錄一下，map的key element好像不能是vector<int>這種東西，的確可以使用的話會變得很複雜。上面網址的作者高竿的地方就在於他想到了wstirng來代替使用vector<int>吧。
 */

#include <iostream>
#include <vector>
#include <set>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<multiset<char>> words;
        vector<vector<string>> ans;
        vector<string> index;
        
        unordered_map<wstring, vector<string>>map;
        
        for(string& s : strs){
            wstring count(26, 0);
            for(char c : s){
                count[c-'a']++;
            }
            map[count].push_back(move(s));
        }
        
        for(auto &m : map){
            ans.push_back(move(m.second));
        }
        
//        for(int i=0;i<strs.size();i++){
//            string temp = strs[i];
//            sort(temp.begin(), temp.end());
//            bool found = false;
//
//            for(int j=0;j<ans.size();j++){
//                if(temp == index[j]){
//                    ans[j].push_back(strs[i]);
//                    found = true;
//                    break;
//                }
//            }
//            if(!found){
//                ans.push_back(vector<string>(1,strs[i]));
//                index.push_back(temp);
//            }
//        }
        
//        for(int i=0;i<strs.size();i++){
//            multiset<char> temp;
//            multiset<char>::iterator it;
//            it = temp.insert(strs[i][0]);
//            for(int j=1;j<strs[i].length();j++){
//                it = temp.insert(it,strs[i][j]);
//            }
//
//            bool found = false;
//            for(int k=0;k<words.size();k++){
//                if(words[k] == temp){
//                    found = true;
//                    ans[k].push_back(strs[i]);
//                    break;
//                }
//            }
//            if(!found){
//                words.push_back(temp);
//                ans.push_back(vector<string>(1,strs[i]));
//            }
//        }
        
        return ans;
    }
    
    void countSort(){
        
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    string t = "apple";
    string s = "penapple";
    cout << strspn(s.c_str(), t.c_str()) << endl;
    Solution ss;
    vector<string> strs;
    strs.push_back("app");
    strs.push_back("ppa");
    strs.push_back("tea");
    ss.groupAnagrams(strs);
    return 0;
}
