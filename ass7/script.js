

let inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

function getCategory(price) {
    if (price <= 100) return "Budget";
    else if (price <= 200) return "Standard";
    else return "Premium";
}

const calculateTotal = items =>
    items.reduce((sum, item) => sum + item.price, 0);

function addProduct(name, price) {
    if (!name || price <= 0 || !Number.isFinite(price)) {
        console.log("Invalid product details!");
        return;
    }

    switch (getCategory(price)) {
        case "Budget":
        case "Standard":
        case "Premium":
            inventory.push({ name, price });
            break;
    }
}

function analyzeInventory() {
    let output = "<h3>Inventory Roster</h3>";

    inventory.forEach(item => {
        output += `<div class="product">
            Item: ${item.name} ($${item.price}) ->
            <span class="badge">${getCategory(item.price)}</span>
        </div>`;
    });

    const total = calculateTotal(inventory);
    const affordable = inventory.filter(item => item.price < 200);
    const report = inventory.map(item =>
        `${item.name.toUpperCase()}: $${item.price}`
    );

    output += `<h3>Financial Analytics</h3>
        <p>Total Inventory Value: $${total.toFixed(2)}</p>
        <p>Affordable Items (Under $200): ${
            JSON.stringify(affordable.map(item => item.name))
        }</p>
        <p>Formatted Report: ${JSON.stringify(report)}</p>`;

    document.getElementById("output").innerHTML = output;
}

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const price = Number(document.getElementById("price").value);

    if (!name || !Number.isFinite(price) || price <= 0) {
        alert("Enter a valid product name and positive price.");
        return;
    }

    addProduct(name, price);
    document.getElementById("productForm").reset();
    analyzeInventory();
});

document.getElementById("analyze").addEventListener("click", analyzeInventory);

analyzeInventory();