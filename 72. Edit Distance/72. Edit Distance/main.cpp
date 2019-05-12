//
//  main.cpp
//  72. Edit Distance
//
//  Created by 黃耀昌 on 2019/5/11.
//  Copyright © 2019 黃耀昌. All rights reserved.
//

/*
    這次的題目離上一題隔了很久了，中間去參加connect jobs的日本面試全滅之後心情上蠻不想練習code的。不過這禮拜算是心情上比較好了一點又開始了。

    下面有兩種方法。
    上面的版本是參考leetcode討論區的，幾乎照抄。
    下面的版本是我自己寫的，用遞迴，耗時太久。

    source tree testing
*/

#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    int minDistance(string word1, string word2) {
        int lenA = word1.length();
        int lenB = word2.length();
        vector<vector<int>> dp(lenA + 1, vector<int>(lenB + 1, 0));


        for(int i = 1; i <= lenA; i++){
            dp[i][0] = i;
        }
        for(int j = 1; j <= lenB; j++){
            dp[0][j] = j;
        }


        for(int i=1; i<= lenA; i++){
            for(int j=1; j<= lenB; j++){
                if(word1[i-1] == word2[j-1]){
                    dp[i][j] = dp[i-1][j-1];
                }
                else{
                    dp[i][j] = min(min(dp[i][j-1], dp[i-1][j]), dp[i-1][j-1]) + 1;
                }
            }
        }

        for(int i=0;i<=lenA;i++){
            for(int j=0;j<=lenB;j++){
                cout << dp[i][j];
            }
            cout << endl;
        }

        int ans = dp[lenA][lenB];
        cout << ans << endl;
        return ans;
    }


    int minDistance2(string word1, string word2) {
        int maxStep = max(word1.length(), word2.length());
        int minStep = getSteps(word1, word2, maxStep);
        cout << minStep << endl;
        return minStep;
    }
    
    int getSteps(string word1, string word2, int maxStep){
        int lenA = word1.length();
        int lenB = word2.length();
        int leastStep = lenA - lenB;
        if (leastStep < 0){
            leastStep *= -1;
        }

        if(leastStep > maxStep){
            return -1;
        }
        
        if(lenB == 0){
            if(lenA == 0){
                // end of searching
                return 0;
            }
            else{
                if(lenA <= maxStep){
                    // delete all left in word1
                    return lenA;
                }
                else{
                    return -1;
                }
            }
        }
        int steps = 0;
        
        if(lenA > 0){
            if(word1[0] == word2[0]){
                string w1 = word1.substr(1);
                string w2 = word2.substr(1);
                steps = getSteps(w1, w2, maxStep);
                
                return steps;
            }
            else{
                int stepInsert, stepDelete, stepReplace;
                
                stepReplace = getSteps(word1.substr(1), word2.substr(1), maxStep - 1);
                stepInsert = getSteps(word1, word2.substr(1), maxStep - 1);
                stepDelete = getSteps(word1.substr(1), word2, maxStep - 1);
                
                // string msg = "no";
                steps = INT_MAX;
                if(stepInsert >= 0){
                    steps = stepInsert;
                    // msg = "insert, ";
                }
                
                if(stepDelete >= 0 && steps > stepDelete){
                    steps = stepDelete;
                    // msg = "delete, ";
                }
                
                if(stepReplace >= 0 && steps > stepReplace){
                    steps = stepReplace;
                    // msg = "replace, ";
                }
                
                if(steps == INT_MAX){
                    return -1;
                }
                else{
                    return steps + 1;
                }
            }
        }
        else{
            if(lenB <= maxStep){
                // insert left words in word2
                return lenB;
            }
            else{
                return -1;
            }
        }
        
        return 0;
    }
};


int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    Solution s;
   s.minDistance("apple", "pineapple");
   s.minDistance("apple", "pen");
   s.minDistance("horse", "ros");
   s.minDistance("intention", "execution");
    s.minDistance("ab", "bb");
    return 0;
}
