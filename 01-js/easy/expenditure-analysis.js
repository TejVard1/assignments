/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let temp = {};
  transactions.forEach((element) => {
    if(temp[element['category']] == undefined){
      temp[element['category']] = element['price'];
    }
    else{
      temp[element['category']] += element['price'];
    }
  })

  let output = Object.keys(temp).map((element) => {
    return {category : element, totalSpent : temp[element]};
  })
  
  return output;
}

module.exports = calculateTotalSpentByCategory;
