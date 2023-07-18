import {FaTwitterSquare,FaTelegram,FaDiscord,FaMedium} from 'react-icons/fa'
import  * as Img from '../component/images/images'
import file from '../component/images/file/dyleum-Pitch-deck.pdf'
const socialIcon =[
    {
      id:1,
      icons:<FaTwitterSquare className='social-buttons'/>,
      path:'https://twitter.com/dyleum_com'
    },
    {
      id:2,
      icons:<FaDiscord className='social-buttons'/>,
      path:'https://discord.com/invite/4fZPgqxdpE'
    },
    {
      id:3,
      icons:<FaTelegram className='social-buttons'/>,
      path:'https://t.me/dyleum'
    },
    {
      id:4,
      icons:<FaMedium className='social-buttons'/>,
      path:'https://dyleum.medium.com/'
    },
   ]
const CompanyData =[
    {
        Compnany:'Company',
        name:[
            {
                id:1,
                name:'Product',
                path:'#product'
              },
              {
                id:2,
                name:"Features",
                path:'#feature'
              },
              {
                id:3,
                name:"Documentation",
                path:'https://dyleum.gitbook.io/'
              },
              {
                id:4,
                name:'Pitch Deck',
                path:file
              },
              {
                id:5,
                name:'Learn',
                path:'#'
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
                name:'FAQs',
                path:'#fag'
              },
              {
                id:2,
                name:"Contact us",
                path:'mailto:info@dyleum.com'
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
        img: Img.dex,
        pathToProduct:'https://testnet.dyleum.com/'
    },
    {
        id:2,
        title:'AI P2P Exchange',
        para:'Connecting decentralized P2P Exchange with AI. Fostering seamless and secure transactions',
        btnTxt:'Coming Soon',
        img: Img.p2p,
        pathToProduct:'https://p2p.dyleum.com/'
    },
    {
        id:3,
        title:'LeumPad',
        para:'Multichain launchpad for profitable projects during presale and IDO',
        btnTxt:'Coming Soon',
        img: Img.leum,
        pathToProduct:'#'
    },
    {
        id:4,
        title:'NFTs',
        para:'Get PFP and Real Estate NFTs to customize your experience, gain priority to perks and rewards, and access to real life estate',
        btnTxt:'Coming Soon',
        img: Img.nft,
        pathToProduct:'#'
    },
    {
        id:5,
        title:'DApp Evaluation Program',
        para:'Regulators make research and publicly give information on DApps to ease user stress of project research. Use the program to make informed decisions',
        btnTxt:'Coming Soon',
        img: Img.dap,
        pathToProduct:'#'
    },
    {
        id:6,
        title:'DeFi Pool',
        para:'Earn regularly from investing with top cryptocurrencies',
        btnTxt:'Coming Soon',
        img: Img.defi,
        pathToProduct:'#'
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
            ans:"Yes, Dyleum's DEX facilitates peer-to-peer (P2P) transactions, enabling direct trading between users. This model promotes transparency, efficiency, and eliminates the reliance on centralized servers."
    },
    {
            id:1,
            ques:"How does Dyleum ensure the security of transactions?",
            ans:"Dyleum utilizes an escrow smart contract to verify and facilitate transactions, mitigating the risk of fraud or scams. Funds are held securely in an escrow account until both parties confirm the completion of the transaction."
    },
    {
            id:1,
            ques:"What features does Dyleum's AI-powered DEX offer?",
            ans:"Dyleum's AI technology enhances the trading experience by fast transaction, providing intelligent order matching, liquidity aggregation, and efficient trade execution. Prioritizes user privacy and inclusivity also."
    },
    {
            id:1,
            ques:"Can I trade a wide range of cryptocurrencies on Dyleum's DEX?",
            ans:'Yes, Dyleum\'s DEX supports the trading of a diverse range of cryptocurrencies. Unlike centralized exchanges that may limit token availability, Dyleum offers inclusivity and allows for trading any compatible digital asset.'
    },
]

const RoadMapData =[ 
     {
        phase:'Phase 1',
        task:["Ideation Stage","Team Building","Whitepaper V1", "Social Media Creation", "Website Launch","Pitch Deck" ]
     },
     {
        phase:'Phase 2',
        task:["Smart Contract Deployment","Community Campaigns","Collaborations"," Community Building","DEX V1 Launch","Testnet on Nautilus","Mainnet on Nautilus" ]
     },
     {
        phase:'Phase 3',
        task:["Marketing","Presale and Fundraising","Staking and Farming Live","Marketing","P2P Design","P2P Development","Beta Launch" ]
     },
]

const PartnerData =[
    {
      id:1,
      img:Img.part,
      name:'Core Guard'
    },
    {
      id:2,
      img:Img.part2,
      name:'Zebec Protocol'
    },
    {
      id:3,
      img:Img.part3,
      name:'Nautilius Chain'
    },
    {
      id:3,
      img:Img.part4,
      name:'Galador'
    },
    {
      id:3,
      img:Img.Shield,
      name:'Shield Protocol'
    },
]

const AboutData =[
  {
    title:'WHO WE ARE',
    subt:'Get to know  us',
    p:'Dyleum is a leading AI-powered decentralized exchange that empowers users to trade cryptocurrencies securely and efficiently.With a focus on user control, Web3 simplicity, fast transactions, intelligent order matching, and trust through escrow smart contracts Enjoy seamless trading experience.'

  }
]

const Phase1 = [
  {
    phase:'Phase 1',
    task:["Ideation Stage","Team Building","Whitepaper V1", "Social Media Creation", "Website Launch","Pitch Deck" ]
 },
]
const Phase2 = [
  {
    phase:'Phase 2',
    task:["Smart Contract Deployment","Community Campaigns","Collaborations"," Community Building","DEX V1 Launch","Testnet on Nautilus","Mainnet on Nautilus" ]
 }
]
const Phase3 = [
  {
    phase:'Phase 3',
    task:["Marketing","Presale and Fundraising","Staking and Farming Live","Marketing","P2P Design","P2P Development","Beta Launch" ]
 },
]
export {socialIcon,CompanyData,CompanySupport,
  StatsData,ProductCardData,FeatureData,FagData,
  RoadMapData,PartnerData,AboutData,
  Phase1,Phase2,Phase3
}