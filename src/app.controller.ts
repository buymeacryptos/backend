import { Controller, Get,Post,Req,Param, Query, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

const api = 'https://www.api.buymeacrypto.com/'

const BaseTokens = [
  {name: 'Optimism', address: '0x', image: `${api}op.png`, key: 'op'},
  {name: 'Arbitrum', address: '0x', image: `${api}arb.png`,key: 'arb'},
  {name: 'Lido Dao', address: '0x', image: `${api}lido.png`,key: 'lido'},
  {name: 'Wrapped Matic', address: '0x', image: `${api}wmatic.png`,key: 'wmatic'},
  {name: 'USD COIN', address: '0x', image: `${api}usdc.png`,key: 'usdc'},
  {name: 'Chainlink', address: '0x', image: `${api}link.png`,key: 'link'},
  {name: 'WETH', address: '0x', image: `${api}weth.png`, key: 'weth'},
  {name: 'Wrapped Bitcoin', address: '0x', image: `${api}wbtc.png`,key: 'wbtc'},
  {name: 'Synthetix Network', address: '0x', image: `${api}snx.png`,key: 'snx'},
  {name: 'WORLDCOIN', address: '0x', image: `${api}wld.png`,key: 'wld'},
]
const OpTokens = [
  {name: 'Optimism', address: '0x', image: `${api}op.png`},
  {name: 'Arbitrum', address: '0x', image: `${api}arb.png`},
  {name: 'Lido Dao', address: '0x', image: `${api}lido.png`},
  {name: 'Wrapped Matic', address: '0x', image: `${api}wmatic.png`},
  {name: 'USD COIN', address: '0x', image: `${api}usdc.png`},
  {name: 'Chainlink', address: '0x', image: `${api}link.png`},
  {name: 'WETH', address: '0x', image: `${api}weth.png`},
  {name: 'Wrapped Bitcoin', address: '0x', image: `${api}wbtc.png`},
  {name: 'Synthetix Network', address: '0x', image: `${api}snx.png`},
  {name: 'WORLDCOIN', address: '0x', image: `${api}wld.png`},
]
const strategy = [
  {
    name: 'Low Risk',
    images: [
      `${api}wbtc.png`,`${api}weth.png`
    ],
    key: 'low'
  },{
    name: 'Middle Risk',
    images: [
      `${api}lido.png`,`${api}op.png`,`${api}arb.png`
    ],
    key: 'middle'
  },{
    name: 'Heig Risk',
    images: [
      `${api}wld.png`,`${api}snx.png`,`${api}link.png`
    ],
    faq: 'Heig risk strategy',
    key: 'heig'
  },
]
const FAQ = {
  op: "Optimism (OP) is a layer-two blockchain on top of Ethereum. Optimism benefits from the security of the Ethereum mainnet and helps scale the Ethereum ecosystem by using optimistic rollups. That means transactions are trustlessly recorded on Optimism but ultimately secured on Ethereum.",
  wbtc: 'WBTC is an ERC-20 token on the Ethereum blockchain that is pegged to Bitcoin (BTC). WBTC is backed one-to-one with Bitcoin. Before WBTC, the only way to use Bitcoin in a financial transaction was through centralized entities, like centralized exchanges (CEXs).',
  weth: 'ETH is the original token created on the Ethereum blockchain, while WETH is an ERC-20 token created to make it easier to trade ETH or convert it into other cryptocurrencies.',
  link: 'LINK tokens are used to pay node operators for retrieving data for smart contracts and also for deposits placed by node operators as required by contract creators.',
  usdc: 'USDC is a fully-reserved stablecoin, which is a type of cryptocurrency, or digital asset. Unlike other cryptocurrencies that fluctuate in price, USDC is designed to maintain price equivalence to the U.S. dollar.',
  wmatic: 'MATIC tokens are used to govern and secure the Polygon network and pay transaction fees. Polygon uses a modified proof-of-stake consensus mechanism to efficiently operate the platform.',
  lido: 'Lido is a multi-platform staking solution that allows users to access the benefits of staking their crypto without fully locking their tokens. In Proof of Stake (PoS) networks, users can lock their digital assets through staking to participate in the consensus process and continue adding blocks to the blockchain.8',
  arb: 'The Arbitrum token, $ARB, is the native ERC-20 compatible governance token for the Arbitrum blockchain. ',
  wld: 'a token providing utility and giving users a say over the direction of the Worldcoin protocol. WLD is the first token to be globally and freely distributed to people just for being a unique individual.',
  satoshi: 'Satoshi',
  staregy: 'Strategy',
  refuel: 'Refuel'
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tokens')
  async getTokens(@Query() query:any) {
    switch (query.network) {
      case "base": 
          return BaseTokens
        case "optimism":
          return OpTokens
        default: 
          return "Invalid network"
      }
  }

  @Get('strategy')
  async getStrategy() {
    return strategy
  }
  
  @Get('faq')
  async getFAQ(@Query() request: any) {
    return FAQ[request.msg]
  }
}

