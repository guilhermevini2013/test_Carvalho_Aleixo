import './product_section.css';

export function Product_section(products = []) {

    if (!products.length) {
        return `
      <section class="product-section">
        <p>search to find products.</p>
      </section>
    `;
    }

    function generateStars(ratingText) {
        if (!ratingText) return '☆☆☆☆☆';
        const rating = parseFloat(ratingText.replace(',', '.')) || 0;
        const maxStars = 5;
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
        const emptyStars = maxStars - fullStars - halfStar;

        const fullStarSymbol = '★';
        const halfStarSymbol = '☆';
        const emptyStarSymbol = '☆';

        return (
            fullStarSymbol.repeat(fullStars) +
            halfStarSymbol.repeat(halfStar) +
            emptyStarSymbol.repeat(emptyStars)
        );
    }

    const items = products.map(product => `
    <div class="product-card">
      <img src="${product.image_url}" alt="${product.name_product}" class="product-image"/>
      <div class="product-info">
        <h3 class="product-title">${product.name_product}</h3>
        <p class="product-price">R$${product.price}</p>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="reviews">${product.number_reviews} avaliações</span>
        </div>
      </div>
    </div>
  `).join('');

    return `
    <section class="product-section">
      ${items}
    </section>
  `;
}