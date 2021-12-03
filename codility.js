// Write a function given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A. 
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Assume that:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Complexity:
// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

function solution(A) {
    var set = new Set();
    for (var i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            set.add(A[i]);
        }
    }
    for (var i = 1; i < A.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return A.length + 1;
}

// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].

// let bigNum = BigInt(20);
// console.log(bigNum.toString(2));
// // Expected output is "10100"


function solution(N) {
    var binary = N.toString(2);
    var max = 0;
    var count = 0;
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            count++;
        } else {
            if (count > max) {
                max = count;
            }
            count = 0;
        }
    }
    return max;
}

// There are N stacks of coins, numbered from 0 to N−1. The Kth stack has A[K] coins. In one move we can pick two coins from any stack we choose, put the first coin away and place the second coin on the adjacent stack (either to the left or to the right of the original stack).

// What is the maximum number of coins that can be accumulated in a single stack?

// Write a function:

//function solution(A);

// that, given an array A of N integers, recording the heights of the stacks, returns the maximum number of coins that can be accumulated in one stack after performing any number of moves as described above.

// Examples:

// 1. Given A = [2, 3, 1, 3], the function should return 5. A possible sequence of moves is: [2, 3, 1, 3] → [0, 4, 1, 3] → [0, 4, 2, 1] → [0, 5, 0, 1].

// 2. Given A = [3, 7, 0, 5], the function should return 9. A possible sequence of moves is: [3, 7, 0, 5] → [1, 8, 0, 5] → [1, 8, 1, 3] → [1, 8, 2, 1] → [1, 9, 0, 1].

// 3. Given A = [1, 1, 1, 1, 1], the function should return 1. No move can be performed.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..200,000];
// each element of array A is an integer within the range [0..100,000,000].

// a funtion that returns value of incorrectly colored rows
function solution(today, limit){
    var countIncorrect = 0;
    var countCorrect = 0;
    for (var i = 0; i < today.length; i++) {
        if (today[i] > limit) {
            countIncorrect++;
        } else {
            countCorrect++;
        }
    }
}
