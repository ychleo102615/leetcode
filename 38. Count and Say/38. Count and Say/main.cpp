//
//  main.cpp
//  38. Count and Say
//
//  Created by 黃耀昌 on 2019/2/20.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
    
public:
    vector<string> terms;
    string countAndSay(int n) {
        if(terms.size()==0){
            terms.assign(30, "");
            terms[0] = "1";
        }
 
        for(int i=1;i<n;i++){
            if(terms[i].length() == 0){
                terms[i] = countSay(i);
            }
        }
        
        return terms[n-1];
    }
    
    string countSay(int n){
        string last = terms[n-1];
        string thisTerm = "";
        
        int count = 0;
        for(int i=0;i<last.length()-1;i++){
            if(last[i]==last[i+1]){
                count++;
            }
            else{
                thisTerm.append(to_string(count+1)+last[i]);
                count = 0;
            }
        }
        thisTerm.append(to_string(count+1)+last[last.length()-1]);
        
        return thisTerm;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    
    cout << s.countAndSay(10) << endl;
    
    return 0;
}
