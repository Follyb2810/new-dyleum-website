import {FaTwitterSquare,FaTelegram,FaDiscord,FaMedium} from 'react-icons/fa'
import  * as Img from '../component/images/images'
const socialIcon =[
    {
      id:1,
      icons:<FaTwitterSquare className='social-buttons'/>,
      path:'/'
    },
    {
      id:2,
      icons:<FaDiscord className='social-buttons'/>,
      path:'/'
    },
    {
      id:3,
      icons:<FaTelegram className='social-buttons'/>,
      path:'/'
    },
    {
      id:4,
      icons:<FaMedium className='social-buttons'/>,
      path:'/'
    },
   ]
const CompanyData =[
    {
        Compnany:'Company',
        name:[
            {
                id:1,
                name:'Product',
                path:'/'
              },
              {
                id:2,
                name:"Features",
                path:'/'
              },
              {
                id:3,
                name:"Documentation",
                path:'/'
              },
              {
                id:4,
                name:'Pitch Deck',
                path:'/'
              },
              {
                id:5,
                name:'Learn',
                path:'/'
              },
        ]
     },
     
]

const CompanySupport =[
    {
        support:'Support',
        name:[
            {
                id:1,
                name:'FAGs',
                path:'/'
              },
              {
                id:2,
                name:"Contact us",
                path:'/'
              }
        ]
     }
]

const StatsData =[
{
    name:'Total User',
    num:"10K+",
    id:1
},
{
    name:'TVL',
    num:"$17,088,688",
    id:2
},
{
    name:'Total transers',
    num:"662,579",
    id:3
},
{
    name:'Blockchain',
    num:"2",
    id:4
},

]

const ProductCardData =[
    {
        id:1,
        title:'DEX',
        para:'Exchange and swap crypto easily with an intuitive and easy interface',
        btnTxt:'Discover DEX',
        img: Img.dex
    },
    {
        id:2,
        title:'AI P2P Exchange',
        para:'Connecting decentralized P2P Exchange with AI. Fostering seamless and secure transactions',
        btnTxt:'Coming Soon',
        img: Img.p2p
    },
    {
        id:3,
        title:'LeumPad',
        para:'Multichain launchpad for profitable projects during presale and IDO',
        btnTxt:'Coming Soon',
        img: Img.leum
    },
    {
        id:4,
        title:'NFTs',
        para:'Get PFP and Real Estate NFTs to customize your experience, gain priority to perks and rewards, and access to real life estate',
        btnTxt:'Coming Soon',
        img: Img.nft
    },
    {
        id:5,
        title:'DApp Evaluation Program',
        para:'Regulators make research and publicly give information on DApps to ease user stress of project research. Use the program to make informed decisions',
        btnTxt:'Coming Soon',
        img: Img.dap
    },
    {
        id:6,
        title:'DeFi Pool',
        para:'Earn regularly from investing with top cryptocurrencies',
        btnTxt:'Coming Soon',
        img: Img.defi
    },
   
]

const FeatureData =[
    {
        id:1,
        name:"Stake",
        para:'Stake tokens and earn rewards in $LEUM and stablecoins'
    },
    {
        id:2,
        name:"Liquidity Providing",
        para:'Contribute to pools, be recognised and rewarded in a flexible way'
    },
    {
        id:3,
        name:"AI Inclusion",
        para:'AI support and assistance in P2P transaction and protocol operations'
    },
    {
        id:4,
        name:"Intuitive UI and Hint",
        para:'Enjoy immersive user interface and experience'
    },
]

const FagData = [
    {
            id:1,
            ques:"What are the advantages of using Dyleum's DEX?",
            ans:'Using Dyleum\'s DEX offers several advantages, including increased security, privacy, and control over your assets. It eliminates the need for third parties, enhances liquidity through AI-powered order matching, and provides a trustless and transparent trading environment.'
    },
    {
            id:22,
            ques:"Can I trade peer-to-peer on Dyleum's DEX?",
            ans:"Using Dyleum's DEX offers several advantages, including increased security, privacy, and control over your assets. It eliminates the need for third parties, enhances liquidity through AI-powered order matching, and provides a trustless and transparent trading environment."
    },
    {
            id:1,
            ques:"What features does Dyleum's AI-powered DEX offer?",
            ans:"Using Dyleum's DEX offers several advantages, including increased security, privacy, and control over your assets. It eliminates the need for third parties, enhances liquidity through AI-powered order matching, and provides a trustless and transparent trading environment."
    },
    {
            id:1,
            ques:"What features does Dyleum's AI-powered DEX offer?",
            ans:"Using Dyleum's DEX offers several advantages, including increased security, privacy, and control over your assets. It eliminates the need for third parties, enhances liquidity through AI-powered order matching, and provides a trustless and transparent trading environment."
    },
    {
            id:1,
            ques:"Can I trade a wide range of cryptocurrencies on Dyleum's DEX?",
            ans:'Using Dyleum\'s DEX offers several advantages, including increased security, privacy, and control over your assets. It eliminates the need for third parties, enhances liquidity through AI-powered order matching, and provides a trustless and transparent trading environment.'
    },
]

const RoadMapData =[ 
     {
        phase:'Phase 1',
        task:["Ideation Stage","Team Building","Whitepaper V1", "Social Media Creation", "Website Launch","Pitch Deck" ]
     },
     {
        phase:'Phase 2',
        task:["Ideation Stage","Team Building","Whitepaper V1", "Social Media Creation", "Website Launch","Pitch Deck" ]
     },
     {
        phase:'Phase 3',
        task:["Ideation Stage","Team Building","Whitepaper V1", "Social Media Creation", "Website Launch","Pitch Deck" ]
     },
]
export {socialIcon,CompanyData,CompanySupport,StatsData,ProductCardData,FeatureData,FagData,RoadMapData}