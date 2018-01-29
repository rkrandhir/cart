myApp.factory('addItemService',function(){
    var itemAdded = {};
    itemAdded.list = [];
    itemAdded.totalPrice = 0;
    itemAdded.addToCart = function(item){
        itemAdded.list.push(item);
        itemAdded.totalPrice = Math.ceil(itemAdded.totalPrice) + Math.ceil(item.price);
    }
    itemAdded.deleteItem = function(item){
        let indx = itemAdded.list.indexOf(item);
        if (indx != -1) {
            itemAdded.list.splice(indx, 1);
            itemAdded.totalPrice = Math.ceil(itemAdded.totalPrice) - Math.ceil(item.price);
        }
    }
    return itemAdded;
});

/*
# Created this service to hold the items added to the cart.
# It is always better to have our data stored in services rather than controller.
*/