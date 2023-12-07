/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
