```javascript
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

function showProducts() {
    let output = "-- All Products (forEach) --\n";

    products.forEach(p => {
        output += `Item: ${p.name} - Price: $${p.price}\n`;
    });

    document.getElementById("output").textContent = output;
}

function showFiltered() {
    const result = products.filter(p => p.price < 50);
    document.getElementById("output").textContent =
        "-- Products Under $50 --\n" + JSON.stringify(result, null, 2);
}

function showMapped() {
    const result = products.map(p =>
        `${p.name.toUpperCase()} costs $${p.price}`
    );

    document.getElementById("output").textContent =
        "-- Product Tags (map) --\n" + JSON.stringify(result, null, 2);
}

