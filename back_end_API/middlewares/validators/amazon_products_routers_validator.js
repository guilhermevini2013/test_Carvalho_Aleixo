const { validationResult, query } = require('express-validator');

function validator_scrape() {
    return [
        query('keyword').notEmpty().withMessage('Query keyword not found.'),
        query('page').optional().isInt({ min: 1 }).withMessage('Query page should be >= 1'),

        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        }
    ];
}

module.exports = validator_scrape;
