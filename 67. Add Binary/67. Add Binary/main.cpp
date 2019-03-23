//
//  main.cpp
//  67. Add Binary
//
//  Created by 黃耀昌 on 2019/3/23.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    string addBinary(string a, string b) {
        
        int carry = 0;
        int ptrA = a.length()-1;
        int ptrB = b.length()-1;
        
        if(ptrA < ptrB){
            swap(ptrA, ptrB);
            swap(a,b);
        }
        
        while(ptrB >= 0){
            if(carry != b[ptrB]-'0'){
                if(a[ptrA] == '1'){
                    a[ptrA] = '0';
                    carry = 1;
                }
                else{
                    a[ptrA] = '1';
                    carry = 0;
                }
            }
            // else do nothing for a[ptrA] and carry didn't change
            
            ptrA--;
            ptrB--;
        }
        
        for(;ptrA>=0;ptrA--){
            if(carry == 1){
                if(a[ptrA] == '1'){
                    a[ptrA] = '0';
                }
                else{
                    a[ptrA] = '1';
                    carry = 0;
                    break;
                }
            }
            else{
                break;
            }
        }
        
        if(carry == 1)
            a = '1' + a;
        
        return a;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    cout << s.addBinary("11111", "1") << endl;
    return 0;
}
