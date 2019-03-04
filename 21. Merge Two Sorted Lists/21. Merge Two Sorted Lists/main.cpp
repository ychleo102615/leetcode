//
//  main.cpp
//  21. Merge Two Sorted Lists
//
//  Created by 黃耀昌 on 2019/2/4.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *sortedList = NULL;
        ListNode unusedEntity(0);
        ListNode *ptr = sortedList = &unusedEntity;
        
        while(l1 != NULL && l2 != NULL){
            if(l1->val < l2->val){
                ptr->next = l1;
                l1 = l1->next;
            }
            else{
                ptr->next = l2;
                l2 = l2->next;
            }
            ptr = ptr->next;
            
        }
        
        if(l1 == NULL){
            ptr->next = l2;
        }
        else{
            ptr->next = l1;
        }
        
        return sortedList->next;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}
