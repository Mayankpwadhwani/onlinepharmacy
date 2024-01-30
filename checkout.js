document.addEventListener("DOMContentLoaded", function () {
    const checkoutButton = document.getElementById("checkout-button");
    const shippingForm = document.getElementById("shipping-form");
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart data from local storage

    // Function to calculate the total price of items in the cart
    function calculateTotalPrice() {
        return cart.reduce((total, item) => total + item.price, 0);
    }

    // Function to update the order summary on the checkout page
    function updateOrderSummary() {
        const orderSummary = document.getElementById("order-summary");
        orderSummary.innerHTML = ""; // Clear existing content

        cart.forEach((item) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Price: Rs.${item.price}/-</p>
            `;
            orderSummary.appendChild(cartItem);
        });

        const totalElement = document.createElement("div");
        totalElement.classList.add("total");
        totalElement.innerHTML = `<p>Total: Rs.${calculateTotalPrice()}/-</p>`;
        orderSummary.appendChild(totalElement);
    }

    // Initial update of the order summary
    updateOrderSummary();

    checkoutButton.addEventListener("click", function () {
        // Simulate a payment process (Replace with your payment logic)
        alert("Payment Successful! Thank you for your order.");

        // Clear the cart after successful payment (You can customize this part)
        localStorage.removeItem("cart");
        cart.length = 0;

        // Clear the form after successful payment (You can customize this part)
        shippingForm.reset();

        // Update the order summary after clearing the cart
        updateOrderSummary();
    });
});
