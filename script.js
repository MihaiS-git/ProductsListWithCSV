fetch("products.csv")
    .then((response) => response.text())
    .then((data) => {
        const lines = data.split("\n");
        const productContainer = document.getElementById(
            "product-list-container"
        );

        lines.forEach((line) => {
            const columns = line.split(",");
            const productImg = columns[0];
            const productName = columns[1];
            const productPrice = columns[2];

            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `<img src="./img/${productImg}" alt="image"><h3>${productName}</h3><p>Price: ${productPrice}</p>`;

            productContainer.appendChild(productElement);
        });
    });
