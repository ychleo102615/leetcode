//
//  main.cpp
//  23. Merge k Sorted Lists
//
//  Created by 黃耀昌 on 2019/2/6.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <map>
#include <queue>
#include <algorithm>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        ListNode unusedEntity(INT_MAX);
        ListNode* ptr = &unusedEntity;
        
        typedef pair<int,int> pairIL;
        
//        multimap<int ,int> sortedPos;
        priority_queue<pairIL, vector<pairIL>, greater<pairIL>> sortedPos;
        
        
        for(int k=0;k<lists.size();k++){
            
            if(lists[k]!=NULL){
//                sortedPos.insert(make_pair(lists[k]->val, k));
                sortedPos.push(make_pair(lists[k]->val, k));
            }
        }
        
        while(!sortedPos.empty()){
//            int leastPos = sortedPos.begin()->second;
            int leastPos = sortedPos.top().second;
            ptr->next = lists[leastPos];
            lists[leastPos] = lists[leastPos]->next;
            ptr = ptr->next;
            
//            sortedPos.erase(sortedPos.begin());
            sortedPos.pop();
            if(lists[leastPos] != NULL){
//                sortedPos.insert(make_pair(lists[leastPos]->val, leastPos));
                sortedPos.push(make_pair(lists[leastPos]->val, leastPos));
            }
        }
        
        return unusedEntity.next;
    }
};

int main(int argc, const char * argv[]) {
    const int listNum = 5;
    ListNode entitys[listNum] = {10,2,3,1,-10};
    vector<ListNode*> lists;
    for(int i=0;i<listNum;i++){
        lists.push_back(&entitys[i]);
    }
    Solution s;
    s.mergeKLists(lists);
    return 0;
}
