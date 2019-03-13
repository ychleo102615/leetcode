//
//  main.cpp
//  60. Permutation Sequence
//
//  Created by 黃耀昌 on 2019/3/13.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <vector>
#include <cmath>

using namespace std;

class Solution {
public:
    string getPermutation(int n, int k) {
        if(n==1)
            return "1";
        string ans;
        vector<bool> used(n+1, false);
        vector<double> fact;
        factorial(fact, n);
        
        // This is pretty tricky, I want to use the system count from 0 to n!-1 instead of 1 to n!
        k--;
        
        for(int i=n;i>0;i--){
            int chose = k/fact[i-1];
//            k %= fact[i-1];
            k = fmod(k, fact[i-1]);
            
            int offset = 1;// used[0] won't be needed
            int j=0;
            while(j<=chose){
                if(used[j+offset] == true){
                    offset++;
                }
                else{
                    j++;
                }
            }
            j--;
            ans += to_string(offset+j);
            used[offset+j] = true;
        }
        
        
        return ans;
    }
    
    void factorial(vector<double> &fact, int n){
        fact.assign(n, -1);
        fact[1] = 1;
        for(int i=2;i<n;i++){
            fact[i] = fact[i-1] * i;
        }
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    int n = 1;
    for(int i=1;i<=n;i++){
        cout << s.getPermutation(n, i) << endl;
    }
    return 0;
}
