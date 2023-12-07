/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max_number = numbers[0];
    numbers.forEach((element) => {
        if(element > max_number) max_number = element;
    })
    return max_number;
}

module.exports = findLargestElement;