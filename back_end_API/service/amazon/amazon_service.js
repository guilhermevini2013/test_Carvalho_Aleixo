const axios = require('axios');

const config_header = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/114.0.0.0 Safari/537.36',
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
}

async function getAmazonProducts(keyword, page) {
    try {
        const response = await axios.get(`https://www.amazon.com.br/s?k=${keyword}&page=${page}`, {
            headers: config_header
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error searching products: ${error.message}`);
    }
}

module.exports = getAmazonProducts;
