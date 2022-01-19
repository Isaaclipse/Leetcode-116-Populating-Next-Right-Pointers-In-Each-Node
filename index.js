/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  // Start with a base case:
    if (root == null) return root;
  // Create a new node to move down the left side of the tree
    let leftNode = Node();
    leftNode = root;
  // Traverse down the left side using a while loop based on the condition that the leftNode is not null
    while (leftNode.left != null) {
  // Define a head variable 
        let head = Node(); 
  // Set the head equal to a leftNode
        head = leftNode;
  //  Do a second traversal, based on the condition that the current head is not null
        while (head != null) {
  // set the next pointer using the head node, left pointer, and next pointer to move right
            head.left.next = head.right;
 //  set the following next right pointer, but first check if there is a head.next
            if (head.next != null) {
//   set the following next right pointer
                head.right.next = head.next.left;
            }
// Move head over to make sure you set all of the nodes in the same level so you set the pointers correctly
            head = head.next;
        }
// set the leftNode its left child to move it down the tree
        leftNode = leftNode.left;
    }
// Lastly return root (the original tree)
    return root;
};

// Runtime: O(n) because we are accessing every node in the tree.