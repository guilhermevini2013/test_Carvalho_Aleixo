const {JSDOM} = require('jsdom');

function formater_products(html) {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const results = [...document.querySelectorAll('div[data-component-type="s-search-result"]')];

    return results.map(result => {
        // Recover Title
        const titleEl = result.querySelector('div[data-cy="title-recipe"] h2');
        const name_product = titleEl ? titleEl.textContent.trim() : null;

        // Recover Price
        const priceWholeEl = result.querySelector('.a-price-whole');
        const priceFractionEl = result.querySelector('.a-price-fraction');
        let price = null;
        if (priceWholeEl) {
            price = priceWholeEl.textContent.trim();
            if (priceFractionEl) {
                price += ',' + priceFractionEl.textContent.trim();
            }
        }
        // Recover Rating
        const ratingEl = result.querySelector('i[data-cy="reviews-ratings-slot"] > span.a-icon-alt');
        const rating = ratingEl ? ratingEl.textContent.trim() : null;

        // Recover reviews
        const reviewsEl = result.querySelector('a[href*="customerReviews"] > span.a-size-base.s-underline-text');
        const number_reviews = reviewsEl ? reviewsEl.textContent.trim() : null;

        // Recover url image
        const imageEl = result.querySelector('img.s-image');
        const image_url = imageEl ? imageEl.getAttribute('src') : null;

        return {
            name_product,
            price,
            rating,
            number_reviews,
            image_url,
        };
    });
}

module.exports = formater_products;
