class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


// unique values
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    let i = 0;
    let p = 0;
    const track: number[] = [];

    inorder.reverse();
    postorder.reverse();
    /*
        * 左中右 -> 右中左
        * 左右中 -> 中右左
        * */
    function appeared(): boolean {
        if (track.length == 0) {
            return false;
        }
        if (i >= inorder.length) {
            return false;
        }

        return track[track.length - 1] == inorder[i];

    }
    function createTree(): TreeNode | null {
        if (p >= postorder.length || i>= inorder.length) {
            return null;
        }

        const node = new TreeNode(postorder[p]);
        // console.log("建立", postorder[p], " with ", inorder[i])

        if (postorder[p] == inorder[i]) {
            // 不可能沒有中間節點，所以相同時代表沒有右子樹
            // 右中左
            // x
            // 中右左
            //   x
            p++;
            i++;
            if (appeared()) {
                track.pop();
                i++
                // console.log("相同，且出現過，不建立左子樹")
                return node;
            } else {
                // 建立左子樹
                // console.log("相同，建立左子樹")
                node.left = createTree();
                // console.log("建立完成")
            }
        } else {
            track.push(postorder[p]);
            p++;
            // console.log("不相同，建立右子樹")
            node.right = createTree();
            // console.log("建立完成")
            if (appeared()) {
                track.pop();
                i++;
                // console.log("不相同，且出現過，不建立左子樹")
                return node;
            }
            // console.log("不相同，建立左子樹")
            node.left = createTree();
            // console.log("建立完成")
        }
        return node;
    }

    return createTree();
}

