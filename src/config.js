module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://localhost/english_school',
    OXFORD_API_ADDRESS: 'https://od-api.oxforddictionaries.com/api/v2/',
    OXFORD_API_KEY: process.env.OXFORD_API_KEY,
    OXFORD_API_ID: process.env.OXFORD_API_ID,
}