//
//  main.cpp
//  24. Swap Nodes in Pairs
//
//  Created by 黃耀昌 on 2019/2/7.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>

struct ListNode {
    int val;
    ListNode *next;    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        
        ListNode* ptr, *ptr2, *temp, *last;
        ListNode unusedEntity(INT_MIN);
        last = &unusedEntity;
        last->next = ptr = head;
        
        while(ptr){
            if(!(ptr2 = ptr->next))
                break;
            
//            ptr2 = ptr->next;
            
            temp = last->next;
            last->next = ptr->next;
            ptr->next = ptr2->next;
            ptr2->next = temp;
            
            last = ptr;
            ptr = ptr->next;
//
//            temp = ptr;
//            last->next = ptr->next;
////            temp->next = temp->next->next;
//            ptr->next = last->next->next;
//            last->next->next = temp;
//
//            last = temp;
//            ptr = last->next;
        }
        
        return unusedEntity.next;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}
