// #fuckDatabases!
var actianList = [
    'removeItem',
    'addItem',
    'finishOrder',
    'cancelOrder',
    'findItemCost',
    'findTotalCost',
    'listColdOptions',
    'listDeals',
    'listDrinkOptions',
    'listFoodOptions',
    'listHotOptions',
    'listMyItems',
    'listOptions',

];

var itemList = {
    coffee: {
        price: 1.99
    },
    
}
module.exports = function (data) {
    var topics = data[0].topics
    var action = getAction(topics);
    console.log(action);
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