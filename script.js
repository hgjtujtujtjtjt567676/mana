class Shop {
    constructor() {
        this.itemNames = [];
        this.costs = [];
        this.count = 0;
    }

    addItem(itemName, cost) {
        if (this.itemNames.includes(itemName)) {
            return "Item already exists.";
        } else {
            this.itemNames.push(itemName);
            this.costs.push(cost);
            this.count++;
            return "Item added successfully.";
        }
    }

    getTotalCost() {
        return this.costs.reduce((total, cost) => total + cost, 0);
    }

    removeItem(itemName) {
        const index = this.itemNames.indexOf(itemName);
        if (index > -1) {
            this.itemNames.splice(index, 1);
            this.costs.splice(index, 1);
            this.count--;
            return `Item '${itemName}' removed.`;
        } else {
            return `Item '${itemName}' not found.`;
        }
    }

    displayItems() {
        if (this.count === 0) {
            return "No items added.";
        } else {
            let displayText = "Shop Inventory:<br>";
            for (let i = 0; i < this.count; i++) {
                displayText += `<div class="inventory-item">`;
                displayText += `Code Of The Item: ${this.itemNames[i]}<br>`;
                displayText += `Cost Of The Item: ${this.costs[i]}<br>`;
                displayText += `</div>`;
            }
            return displayText;
        }
    }
}

const shop = new Shop();

function addItem() {
    const itemName = prompt("Enter item code:");
    const cost = parseFloat(prompt("Enter item cost:"));
    if (!isNaN(cost)) {
        const result = shop.addItem(itemName, cost);
        document.getElementById('output').innerHTML = result;
    } else {
        document.getElementById('output').innerHTML = "Invalid cost entered.";
    }
}

function displaySum() {
    const totalCost = shop.getTotalCost();
    document.getElementById('output').innerHTML = `Total cost: ${totalCost}`;
}

function removeItem() {
    const itemName = prompt("Enter item code to remove:");
    const result = shop.removeItem(itemName);
    document.getElementById('output').innerHTML = result;
}

function displayItems() {
    const items = shop.displayItems();
    document.getElementById('output').innerHTML = items;
}
