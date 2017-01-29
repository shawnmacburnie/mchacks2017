// #fuckDatabases!
var actianList = {
    removeItem: 'removed item.',
    addItem: 'finished adding item.',
    finishOrder: 'finished order.',
    cancelOrder: 'cancelled order.',
    findItemCost: 'the cost of that item is',
    findTotalCost: 'the total cost is',
    listColdOptions: 'the cold items are',
    listDrinkOptions: 'the drink options are',
    listFoodOptions: 'the food options are',
    listHotOptions: 'the hot items are',
    listMyItems: 'your items are',
    listOptions: 'You can either order some food or you can order something to drink.',
};

var itemList = {
    coffee: {
      price: 1.99
    },
		donut: {
			price: 0.99
		},
		sandwich: {
			price: 4.99
		},
		milkshake: {
			price: 2.99
		}

}
module.exports = function (data) {
    var topics = data[0].topics
    var action = getAction(topics);
    console.log(action);
    return {
        action: action
    }
    // var items = getItems(topics);
}

function getAction(topics) {
    for (topicIndex in topics) {
        for (var actionIndex in actianList) {
            if (topics[topicIndex].title == actianList[actionIndex]) {
                return actianList[actionIndex];
            }
        }
    }
    return;
}
function getItem(data) {
    var items = [];
    for (topicIndex in topics) {
        for (var actionIndex in actianList) {
            if (topics[topicIndex].title == actianList[actionIndex]) {
                items.push(actianList[actionIndex]);
            }
        }
    }
    return items;
}
