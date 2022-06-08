module.exports = {
    // For AES, this is always 16
    IV_LENGTH: 16,
    LOG_LEVEL: 'debug',

    ENVIRONMENT: {
        TESTING: 'testing',
        LOCAL: 'local',
        DEV: 'dev',
        PRODUCTION: 'production'
    },
    TWELVE_DATA: {
        WEB_SOCKET_URL: 'wss://ws.twelvedata.com/v1'
    },
    CHART_CRYPTO: 'crypto',
    CHART_STOCK: 'stock',
    CHART_FOREX: 'forex',
    CHART_FUTURE: 'future',
    CHART_OPTION: 'option',
    CHART_SANDBOX: 'sandbox',
    CHART_QUOTES: 'quotes',
    VALID_HISTORICAL_RANGE: ['1D', '1M', '3M', '6M', '1Y', 'YTD', '5Y', 'MAX', 'YTD', '1MM', '5D', '5DM'],
    VALID_STOCK_TYPES: ['STOCK', 'FOREX', 'FUTURE', 'CRYPTO'],
    STOCK_TYPES: ['FOREX', 'FUTURE', 'CRYPTO']
};

