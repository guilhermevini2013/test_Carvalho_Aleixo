const express = require('express');
const router = express.Router();

const validator_scrape = require('../middlewares/validators/amazon_products_routers_validator');
const getAmazonProducts = require('../service/amazon/amazon_service');
const formater_products = require('../service/amazon/data_formater');

router.get('/scrape', validator_scrape(), async (req, res) => {
    const keyword = req.query.keyword;
    const number_page = req.query.page;

    try {

        const content = await getAmazonProducts(keyword, number_page);
        const formatted = formater_products(content);
        res.json(formatted);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
