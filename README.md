# Api - 
Base tokens - https://api.buymeacrypto.com/api/tokens?network=base
optimism tokens - https://api.buymeacrypto.com/api/tokens?network=optimism
Response example - 
```[{"name":"Optimism","address":"0x","image":"https://api.buymeacrypto.com/op.png","key":"op"},{"name":"Arbitrum","address":"0x","image":"https://api.buymeacrypto.com/arb.png","key":"arb"},{"name":"Lido Dao","address":"0x","image":"https://api.buymeacrypto.com/lido.png","key":"lido"},{"name":"Wrapped Matic","address":"0x","image":"https://api.buymeacrypto.com/wmatic.png","key":"wmatic"},{"name":"USD COIN","address":"0x","image":"https://api.buymeacrypto.com/usdc.png","key":"usdc"},{"name":"Chainlink","address":"0x","image":"https://api.buymeacrypto.com/link.png","key":"link"},{"name":"WETH","address":"0x","image":"https://api.buymeacrypto.com/weth.png","key":"weth"},{"name":"Wrapped Bitcoin","address":"0x","image":"https://api.buymeacrypto.com/wbtc.png","key":"wbtc"},{"name":"Synthetix Network","address":"0x","image":"https://api.buymeacrypto.com/snx.png","key":"snx"},{"name":"WORLDCOIN","address":"0x","image":"https://api.buymeacrypto.com/wld.png","key":"wld"}]```

# strategy -
https://api.buymeacrypto.com/api/strategy 
> Reponse example - 
```[{"name":"Low Risk","images":["https://api.buymeacrypto.com/wbtc.png","https://api.buymeacrypto.com/weth.png"],"key":"low"},{"name":"Middle Risk","images":["https://api.buymeacrypto.com/lido.png","https://api.buymeacrypto.com/op.png","https://api.buymeacrypto.com/arb.png"],"key":"middle"},{"name":"Heig Risk","images":["https://api.buymeacrypto.com/wld.png","https://api.buymeacrypto.com/snx.png","https://api.buymeacrypto.com/link.png"],"faq":"Heig risk strategy","key":"heig"}]```

# faq 
 https://api.buymeacrypto.com/api/faq?msg=op msg key you are receive with tokens. 
Msg = key. Key you receive in token/strategy response.
For click on token btn you fetch request for faq with this token. I'm update faq text soon.
> Response example - 
```"Optimism (OP) is a layer-two blockchain on top of Ethereum. Optimism benefits from the security of the Ethereum mainnet and helps scale the Ethereum ecosystem by using optimistic rollups. That means transactions are trustlessly recorded on Optimism but ultimately secured on Ethereum."```
