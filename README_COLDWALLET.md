# Use floating eth-provider and floating frame

## eth-provider 
```
npm install eth-provider --save
```

## floating frame (v0.4.4), set gas price and gas limit in frame
```
git clone https://github.com/floating/frame

npm install

npm run prod
```

## Usage
```
const provider = require('eth-provider');
const frame = provider('frame');

await frame.request({method: 'eth_sendTransaction', params: [tx]});
```