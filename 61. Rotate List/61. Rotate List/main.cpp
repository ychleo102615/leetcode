//
//  main.cpp
//  61. Rotate List
//
//  Created by 黃耀昌 on 2019/3/14.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if(head == NULL){
            return NULL;
        }
        if(k==0){
            return head;
        }
        ListNode *ptr = head;
        
        int len = 1;// premise head is not a NULL
        while(ptr->next != NULL){
            ptr = ptr->next;
            len++;
        }
        ptr->next = head;
        int fowardNum = len - (k%len);
        for(int i=0;i<fowardNum;i++){
            ptr = ptr->next;
        }
        
        ListNode* temp = ptr->next;
        ptr->next = NULL;
        
        return temp;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}
