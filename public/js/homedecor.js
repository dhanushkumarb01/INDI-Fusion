document.addEventListener("DOMContentLoaded", () => {
    loadDecorProducts();
  });
  
  async function loadDecorProducts() {
    try {
      const response = await fetch("./JSON/homedecor.json");
      const data = await response.json();
  
      const productElements = document.querySelectorAll(".shopgrid .product");
  
      data.forEach((product, index) => {
        if (index < productElements.length) {
          const productElement = productElements[index];
          const productImage = productElement.querySelector("img");
          const productInfo = productElement.querySelector(".d1in");
  
          // Update image source and alt text
          productImage.src = product.image;
          productImage.alt = product.name;
  
          // Populate product details
          productInfo.innerHTML = `
            <p class="red">${product.artist}</p>
            <p>${product.name}</p>
            <p>(USD) $${product.price.toFixed(2)}</p>
          `;
        }
      });
    } catch (error) {
      console.error("Error loading JSON:", error);
    }
  }