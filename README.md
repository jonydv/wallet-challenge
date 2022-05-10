# wallet-challenge

I left the .env in this repository to test the app, with the DB connection an API URL

### Back-end

1. Go to /back
2. npm install
3. npm run start:dev

### Front-end

1. Go to /front
2. npm install
3. npm run start

### Back-end .env example
1. In back/ root put an .env file with this variables
2. MONGO_URI=mongodb+srv://admin:cwaasQamWuTRdJgj@cluster0.z1tdf.mongodb.net/wallet?retryWrites=true&w=majority || Your db mongo url
3. API_KEY=********************* || Etherscan Api Key
4. API_URL=https://api.etherscan.io/api

5. CRYPTO_COMPARE_API_KEY=3e98f30a3a937f91e2cc943a4d77f9abe1c7d8123a27f31d495825af336621a7
6. CRYPTO_COMPARE_URL=https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR

### Front-end .env example
1. In front/ root put an .env file with this variables
2. REACT_APP_BACK_URL=http://localhost:4000 || Your back url
