
function countOrderItems() {

  //create a prompt for your order
  const order = prompt(`Enter your order, please seperate by commas!`);

  //convert to an array
  const items = order.split(",");

  // empty object to hold the count
  const itemCounts = {};

  // create a loop to loop through the items 
  for (let i = 0; i < items.length; i++) {

   
    const item = items[i].trim(); 
    /*removes spaces from the order form. Added this .trim 
    because when I was entering order items it would count them 
    as two seperate items if an accidental space was added*/

    if (itemCounts[item]) {
      itemCounts[item]++; //if item exists then the count goes up one
    } else {
      itemCounts[item] = 1; // if item doesnt exist the count becomes one
    }
  }

  return itemCounts;
}

const orderCounts = countOrderItems();
console.log(orderCounts);


