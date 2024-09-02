// let nums = [3, 0, 1];

// function findMissingNumber(nums) {
//     let n = nums.length;
//     let expectedSum = (n * (n + 1)) / 2;
    
//     const actualSum = nums.reduce((acc, num) => acc + num, 0);
    
//     return expectedSum - actualSum;
// }
// console.log(findMissingNumber(nums)); // Output: 2


// //2nd answer


// let Array1 = [1, 2, 3, 4, 5];

// function reverseArray(arr) {
    
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversed.push(arr[i]);
//     }
//     return reversed;
//   }
//   let reversedArray = reverseArray(Array1);
//   console.log(Array1);
  
//   console.log(reversedArray); 
  
  
//   //3rd answer

//   let arr = [0, 1, 2, 4]; // Missing number is 3

//   function findMissingNumber(arr) {
//     let n = arr.length;
//     let Sumexpected = (n * (n + 1)) / 2;
//     let actualSum = arr.reduce((sum, num) => sum + num, 0);
//     return Sumexpected - actualSum;
//   }
//   console.log(arr);
  
//   console.log(findMissingNumber(arr));

//   //4th answer

//   let numbers = [10, 5, 20, 8, 12];

//   function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         throw new Error("Array must contain at least two elements.");
//     }

//     let largesum = -Infinity;
//     let secondLargest = -Infinity;

//     for (let num of arr) {
//         if (num > largesum) {
//             secondLargest = largesum;
//             largesum = num;
//         } else if (num > secondLargest && num < largesum) {
//             secondLargest = num;
//         }
//     }

//     if (secondLargest === -Infinity) {
//         throw new Error("No distinct second largest element.");
//     }

//     return secondLargest;
// }
// console.log(numbers);

// console.log(findSecondLargest(numbers));

//5th answer

// let Array3 = [2, 3, 4, 4, 5, 5, 6, 6, 7, 7];

// function removeDuplicates(arr) {
//     if (arr.length === 0) return 0;
  
//     let uniqueIndex = 0;
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] !== arr[uniqueIndex]) {
//         uniqueIndex++;
//         arr[uniqueIndex] = arr[i];
//       }
//     }
  
//     return uniqueIndex + 1;
//   }
  
//   let newLength = removeDuplicates(Array3);
//   console.log(`length total no.: ${newLength}`);
//   console.log(`array3: ${Array3.slice(0, newLength)}`);  


//6th answer

// let array = [1, 2, 3, 4, 5];
// let steps = 0;
// let rotatedArray = rotateArrayRight(array, steps);

// function rotateArrayRight(arr, steps) {
//     const n = arr.length;
//     if (n === 0) return arr;
//     steps = steps % n;
//     return arr.slice(-steps).concat(arr.slice(0, -steps));
// }
// console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]

//7th answer

// let array1 = [1, 2, 6, 4, 5];
// let array2 = [4, 5, 6, 7, 8];
// let commonnumber = findCommonElements(array1, array2);

// /**
//   @param {Array} arr1 
//   @param {Array} arr2 
//   @returns {Array}
//  */
// function findCommonElements(arr1, arr2) {
//     return arr1.filter(value => arr2.includes(value));
// }

// console.log(  array1  ,  array2);

// console.log(commonnumber); // Output: [6,4,5]

//8th answer

// let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function maxSubArraySum(arr) {
//     if (arr.length === 0) return 0;
//     let maxSoFar = arr[0]; // Initialize with the first element
//     let maxEndingHere = arr[0]; // Initialize with the first element

//     for (let i = 1; i < arr.length; i++) {
//         maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
//         maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }

//     return maxSoFar;
// }
// console.log(maxSubArraySum(array)); // Output: 6 (for subarray [4, -1, 2, 1])

//9th answer

// let array1 = [1, 3, 5, 7];
// let array2 = [2, 4, 6, 8];

// function mergeSortedArrays(arr1, arr2) {
//     let merged = [];
//     let i = 0;
//     let j = 0;

//     // Merge the arrays while there are elements in both
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             merged.push(arr1[i]);
//             i++;
//         } else {
//             merged.push(arr2[j]);
//             j++;
//         }
//     }

//     // Add remaining elements from arr1, if any
//     while (i < arr1.length) {
//         merged.push(arr1[i]);
//         i++;
//     }

//     // Add remaining elements from arr2, if any
//     while (j < arr2.length) {
//         merged.push(arr2[j]);
//         j++;
//     }

//     return merged;
// }
// let result = mergeSortedArrays(array1,array2);
// console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


//10th answer

// let nums = [1, 4, 4, 3, 2, 3, 4];

// function majorityElement(nums) {
//     let candidate = nums[0];
//     let count = 1;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === candidate) {
//             count++;
//         } else {
//             count--;
//             if (count === 0) {
//                 candidate = nums[i];
//                 count = 1;
//             }
//         }
//     }

//     return candidate;
// }

// console.log(majorityElement(nums)); // Output: 4

//11th answer

// let arr = [0, 1, 0, 3, 12];

// function moveoneToEnd(arr) {
//     let nonZeroes = arr.filter(num => num !== 0);
//     let ones = arr.length - nonZeroes.length;
//     return nonZeroes.concat(Array(ones).fill(1));
// }

// console.log(moveoneToEnd(arr)); // Output: [1, 3, 12, 1, 1]

//12th answer

// let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// function maxProduct(arr) {
//     if (arr.length < 2) {
//         throw new Error('Array must contain at least two elements.');
//     }
//     arr.sort((a, b) => b - a);
//     let sort1 = arr[0] * arr[1];
//     let sort2 = arr[arr.length - 1] * arr[arr.length - 2];
//     return Math.max(sort1, sort2);
// }
// console.log(maxProduct(array));  // Output will be the maximum product of any two numbers


//13th answer

// let nums = [-2, 1, -3, 4, 6, 2, 1, -5];

// function maxSubArraySum(nums) {
//     if (nums.length === 0) return 0;

//     let maxCurrent = nums[0];
//     let maxGlobal = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
//         maxGlobal = Math.max(maxGlobal, maxCurrent);
//     }

//     return maxGlobal;
// }
// console.log(maxSubArraySum(nums)); // Output:13

//14th answer

// let array = [2, 3, 8, 6, 1];

// function countInversions(arr) {
//     let inversionCount = 0;
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] > arr[j]) {
//                 inversionCount++;
//             }
//         }
//     }

//     return inversionCount;
// }
// let inversionCount = countInversions(array);
// console.log('Number of inversions:', inversionCount);


//15th answer

// let arr = [2, 4, -1, 1];

// function findSmallestMissingPositive(nums) {
//     let positives = new Set(nums.filter(num => num > 0));

//     let missing = 1;
//     while (positives.has(missing)) {
//         missing++;
//     }

//     return missing;
// }
// console.log(findSmallestMissingPositive(arr)); // Output: 3

//16th answer

// function isPalindrome(str) {
//     // Normalize the string by removing non-alphanumeric characters and converting to lowercase
//     const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

//     // Check if the cleaned string reads the same forwards and backwards
//     return cleanStr === cleanStr.split('').reverse().join('');
//   }
  
//   console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
//   console.log(isPalindrome("Not a palindrome")); // false


//17th answer


// function firstNonRepeatingCharacter(str) {
//     const charCount = {};
    
//     // Count occurrences of each character
//     for (const char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }
    
//     // Find the first character with a count of 1
//     for (const char of str) {
//       if (charCount[char] === 1) {
//         return char;
//       }
//     }
    
//     return null; // Return null if no non-repeating character is found
//   }
  
//   console.log(firstNonRepeatingCharacter("rrggee")); // 's'
//   console.log(firstNonRepeatingCharacter("repeats")); // 'r'
//   console.log(firstNonRepeatingCharacter("crime")); // 'c'
  
  
//18th answer

// function longestCommonPrefix(strs) {
//     if (strs.length === 0) return '';

//     // Start by assuming the prefix is the first string
//     let prefix = strs[0];

//     // Compare the assumed prefix with each string
//     for (let i = 1; i < strs.length; i++) {
//         // Update the prefix by comparing with each string
//         while (strs[i].indexOf(prefix) !== 0) {
//             // Reduce the prefix by one character from the end
//             prefix = prefix.substring(0, prefix.length - 1);
//             // If the prefix is empty, no common prefix exists
//             if (prefix === '') return '';
//         }
//     }
    
//     return prefix;
// }

// const strings = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strings)); // Output: "fl"


//19th answer
  
// function areAnagrams(str1, str2) {
//     // Helper function to clean and sort a string
//     function cleanAndSort(str) {
//         return str
//             .toLowerCase()                        // Convert to lowercase
//             .replace(/[^a-z0-9]/g, '')           // Remove non-alphanumeric characters
//             .split('')                           // Split into array of characters
//             .sort()                              // Sort the characters
//             .join('');                           // Join characters back into a string
//     }

//     // Clean and sort both strings
//     const sortedStr1 = cleanAndSort(str1);
//     const sortedStr2 = cleanAndSort(str2);

//     // Compare the sorted strings
//     return sortedStr1 === sortedStr2;
// }

// // Example usage
// console.log(areAnagrams("Listen", "Silent")); // true
// console.log(areAnagrams("Hello", "World"));   // false


//20th answer

function countVowelsAndConsonants(str) {
    // Define vowels (both uppercase and lowercase)
    const vowels = 'aeiouAEIOU';
    
    // Initialize counters
    let vowelCount = 0;
    let consonantCount = 0;

    // Convert the string to lowercase for easier comparison
    str = str.toLowerCase();

    // Iterate over each character in the string
    for (let char of str) {
        // Check if the character is a letter
        if (char >= 'a' && char <= 'z') {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

// Example usage:
const result = countVowelsAndConsonants("Hello World!");
console.log(result); // Output: { vowels: 3, consonants: 7 }
