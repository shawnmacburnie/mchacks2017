// #fuckDatabases!
var actianList = {
    removeItem: 'removed item.',
    addItem: 'finished adding item',
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

var itemList = [
    'coffee',
    'donut',
    'sandwich',
    'milkshake',
]
module.exports = function (data) {
    var topics = data[0].topics
    var action = getAction(topics);
    if (action[action.length - 1] == '.') {
        return action;
    }
    var items = getItem(data[0].source_text)
    for (var i = 0; i < items.length; i++) {
        action += ' ' + items[i];
        if (i != items.length -1) {
            action += ' and'
        }
    }
    console.log(action);
    return action;
}

function getAction(topics) {
    for (topicIndex in topics) {
        for (var actionIndex in actianList) {
            if (topics[topicIndex].title == actionIndex) {
                return actianList[actionIndex];
            }
        }
    }
    return;
}

function getItem(data) {
    var items = [];
    for (i in itemList) {
        if (data.indexOf(itemList[i]) > -1) {
            items.push(itemList[i]);
        }
    }
    return items;
}
