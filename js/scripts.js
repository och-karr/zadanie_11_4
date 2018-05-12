function Phone(brand, price, color) {  //funkcja konstruujaca
	this.brand = brand;     //parametry
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() { // funkcja prototypowa - metoda printInfo
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}


var iPhone6S = new Phone("Apple", 2250, "silver"); //obiekty na podstawie funkcji konstruujacej
var samsungGalaxyS6 = new Phone("Samsung", 1494, "black");
var onePlusOne = new Phone("OnePlus", 1728, "white");

iPhone6S.printInfo(); //wywolanie metody printInfo dla obiektow
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();