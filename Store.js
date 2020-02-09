function StaffMember(name, discountPercent) {
    this.name = name[0].toLowerCase() + name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("sally", 5);
var bob = new StaffMember("bob", 10);
var arhum = new StaffMember("arhum", 20);

var cashRegister = {
    total: 0,
    lastTransactionAmount: 0,
    add: function(itemCost) {
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item, quantity) {
        switch (item) {
            case "eggs":
                this.add(0.98 * quantity);
                break;
            case "milk":
                this.add(1.23 * quantity);
                break;
            case "magazine":
                this.add(4.99 * quantity);
                break;
            case "chocolate":
                this.add(0.45 * quantity);
                break;
        }
        return true;
    },
    voidLastTransaction: function() {
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    applyStaffDiscount: function(employee) {
        this.total -= (this.total * (window[employee].discountPercent / 100))
    }
};

var time1 = new Date()
if (time1 < 12) {
  time1 = "morning"
} else {
  time1 = "evening"
}
var askName = prompt("Good " + time1 + "! What is your name?")
while (askName.length < 2) {
  var askName = prompt("Oops, that doesn't look like a name. Try again.")
}
var cont = confirm("Hello "+ askName +". Are you ready to shop?")
while (cont) {
    var askUser = prompt("Choose your function:\n1. A to Add Item\n2. E for Employee Discount\n3. V to Void Transaction\n6. C to Checkout\n5. X to Close").toUpperCase()
    if (askUser === "A") {
        var itemName = prompt("What item would you like?", "Eggs, Milk, Magazine, Chocolate").toLowerCase()
        var itemNum = prompt("How many?")
        cashRegister.scan(itemName, itemNum)
        var cont = confirm("Your total bill is $" + cashRegister.total.toFixed(2) + ". Would you like anything else?")
    }
    else if (askUser === "E") {
        var name1 = prompt("Please enter you name").toLowerCase()
        while (name1 !== StaffMember.name) {
          var name1 = prompt("Sorry, that name is not in our database. Would you care to try again?")
        }
        cashRegister.applyStaffDiscount(name1)
        alert("Your total bill is $" + cashRegister.total.toFixed(2) + ".")
    }
    else if (askUser === "V") {
        cashRegister.voidLastTransaction()
        alert("Your previous transaction has been voided. Your total bill is $" + cashRegister.total.toFixed(2) + " now.")
    }
    else if (askUser === "C") {
        confirm("You total bill is $" + cashRegister.total.toFixed(2) +  ". Please pay that amount to the cashier.")
        var bye = alert("Thank you for shopping with us. We hope to see you again! Goodbye!")
        cont = confirm("Is there anything else you'd like to do?")

    }
    else if (askUser === "X") {
        cont = false
    }
    if (cont === false) {
        alert("We hope you had a good time. Have a nice day!")
    }
}