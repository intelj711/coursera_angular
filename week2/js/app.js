(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.provider('ShoppingList', ShoppingListProvider)
.config(Config);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var list1 = this;

	list1.itemsToBuy = ShoppingListCheckOffService.getToBuyItems();
	
	list1.moveItem = function (itemIndex) {
		ShoppingListCheckOffService.moveItem(itemIndex);
		if (list1.itemsToBuy.length < 1) {
    		list1.emptyMessage = "Everything is bought!";
    	}
	}
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var list2 = this;

	try {
		list2.itemsBought = ShoppingListCheckOffService.getBoughtItems();
	} catch (error) {
/*	if (list2.itemsBought.length = 0) {
		list2.emptyMessage = "Nothing Bought Yet.";
	}*/
	}
}

function ShoppingListCheckOffService() {
	var service = this;

	// List of shopping items
  	var itemsToBuy = [
  		{ name: "cookies", quantity: 10 },
  		{ name: "bread", quantity: 5 },
  		{ name: "milk", quantity: 6 }
  	];
  	var itemsBought = [];

  	service.getToBuyItems = function () {
    	return itemsToBuy;
	};

	service.getBoughtItems = function () {
  		return itemsBought;
  	}

	service.moveItem = function (itemIndex) {
		var itemName = itemsToBuy[itemIndex].name;
		var itemQuantity = itemsToBuy[itemIndex].quantity;			
		console.log(itemName, itemQuantity);
		var item = {
			name: itemName,
			quantity: itemQuantity		
		};
    	itemsBought.push(item);
	  	itemsToBuy.splice(itemIndex, 1);
  	};


}

}) ();