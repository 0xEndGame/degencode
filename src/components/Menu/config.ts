import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://spookyswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://spookyswap.finance/',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
     label: 'Bridge',
     icon: 'PoolIcon',
     href: '/pools',
   },
   {
     label: 'DegenClub',
     icon: 'TicketIcon',
   href: '/lottery',
   },
   {
     label: 'Degenz NFT',
     icon: 'NftIcon',
     href: '/nft',
   },
   {
    label: 'Audits',
    icon: 'NftIcon',
    href: '',
  },
  {
    label: 'Partnership',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Charts ',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Chart',
        href: 'https://dx.app/app/v3/defipresale?saleID=23&chain=Fantom',
      },
    ],
  },
  {
    label: 'Docs',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://gitbook.animeswapdefi.com/animeswapdefi.com/animeswapdefi-projects/waifuswapdefi',
      },
    ],
  },
]

export default config
