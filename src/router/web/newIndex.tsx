import PNG_1 from '../../assets/new_assets/1.png'
import logo from '../../assets/new_assets/logo.png'
import png11 from '../../assets/new_assets/1-1.png'
import png12 from '../../assets/new_assets/1-2.png'
import png13 from '../../assets/new_assets/1-3.png'
import png21 from '../../assets/new_assets/2-1.png'
import png22 from '../../assets/new_assets/2-2.png'
import png23 from '../../assets/new_assets/2-3.png'
import png91 from '../../assets/new_assets/9-1.png'
import btnImage from '../../assets/new_assets/btn.png'
import btnImage1 from '../../assets/new_assets/btn1.png'
import btnImage2 from '../../assets/new_assets/btn2.png'
import btnImage3 from '../../assets/new_assets/btn3.png'
import btnImage4 from '../../assets/new_assets/btn4.png'
import png31 from '../../assets/new_assets/3-1.png'
import png32 from '../../assets/new_assets/3-2.png'
import png33 from '../../assets/new_assets/3-3.png'
import png41 from '../../assets/new_assets/4-1.png'
import png42 from '../../assets/new_assets/4-2.png'
import png43 from '../../assets/new_assets/4-3.png'
import png44 from '../../assets/new_assets/4-4.png'
import png45 from '../../assets/new_assets/4-5.png'
import png46 from '../../assets/new_assets/4-6.png'
import png47 from '../../assets/new_assets/4-7.png'
import png51 from '../../assets/new_assets/5-1.png'
import png52 from '../../assets/new_assets/5-2.png'
import png61 from '../../assets/new_assets/6-1.png'
import png71 from '../../assets/new_assets/7-1.png'
import png72 from '../../assets/new_assets/7-2.png'
import png73 from '../../assets/new_assets/7-3.png'
import png74 from '../../assets/new_assets/7-4.png'
import png81 from '../../assets/new_assets/8-1.png'
import png82 from '../../assets/new_assets/8-2.png'
import png83 from '../../assets/new_assets/8-3.png'
import png84 from '../../assets/new_assets/8-4.png'
import png85 from '../../assets/new_assets/8-5.png'
import p1 from '../../assets/new_assets/p1.png'
import p2 from '../../assets/new_assets/p2.png'
import p3 from '../../assets/new_assets/p3.png'
import p4 from '../../assets/new_assets/p4.png'
import p5 from '../../assets/new_assets/p5.png'
import p6 from '../../assets/new_assets/p6.jpeg'
import p7 from '../../assets/new_assets/p7.png'
import p8 from '../../assets/new_assets/p8.jpg'
import p9 from '../../assets/new_assets/p9.png'
import p10 from '../../assets/new_assets/p10.png'
import p101 from '../../assets/new_assets/10-1.png'
import p102 from '../../assets/new_assets/10-2.png'
import p106 from '../../assets/new_assets/10-6.png'
import p104 from '../../assets/new_assets/10-4.png'
import p105 from '../../assets/new_assets/10-5.png'
import navigationPageRight from '../../assets/new_assets/navigation-page-right.svg'
import menuNavigation from '../../assets/new_assets/menu-navigation-2.svg'
import alertAlarmClock from '../../assets/new_assets/alert-alarm-clock.svg'

import road1 from '../../assets/new_assets/roadmap/1.png'
import road2 from '../../assets/new_assets/roadmap/2.png'
import road3 from '../../assets/new_assets/roadmap/3.png'
import road4 from '../../assets/new_assets/roadmap/4.png'
import road5 from '../../assets/new_assets/roadmap/5.png'
import road6 from '../../assets/new_assets/roadmap/6.png'
import road7 from '../../assets/new_assets/roadmap/7.png'
import road8 from '../../assets/new_assets/roadmap/8.png'
import road9 from '../../assets/new_assets/roadmap/9.png'
import road10 from '../../assets/new_assets/roadmap/10.png'
import road11 from '../../assets/new_assets/roadmap/11.png'
import road12 from '../../assets/new_assets/roadmap/12.png'
import road13 from '../../assets/new_assets/roadmap/13.png'

import use1 from '../../assets/use/1.png'
import use2 from '../../assets/use/2.png'
import use3 from '../../assets/use/3.png'
import use4 from '../../assets/use/4.png'
import use5 from '../../assets/use/5.png'
// import road12 from '../../assets/new_assets/roadmap/12.png'

import mapMark from '../../assets/new_assets/map.png'
import { useCountDown, useGetShitCoinInfoHook, useToast, useUser } from '../../helper/hook'
import { FC, useEffect, useRef, useState } from 'react'
import { getErrorMessage, getProvider, isMobile, isValidSolanaAddress } from '../../helper'
import { loginApi, officialGiveToken, officialTransferTokenForReward, queryOfficialTransferTokenRewardRule, resetFormData } from '../../helper/api'
import axios from 'axios'
import * as solanaWeb3 from "@solana/web3.js"
import * as splToken from "@solana/spl-token"
import x from './x.json'
import { Link } from 'react-router-dom'
const urlParams = new URLSearchParams(window.location.search)
const connection = urlParams.get('dev') ? new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet')) : new solanaWeb3.Connection('https://sly-hardworking-dew.solana-mainnet.quiknode.pro/f6eb1261fe38b21326f892aabef573a7fa01a80a/')
const getTokenAccountsByOwner = async (ownerPublicKey: any, mintPublicKey: any) => {
  const rewardTokenPubKeys = await connection.getTokenAccountsByOwner(ownerPublicKey, { mint: mintPublicKey }, "finalized")
  if (rewardTokenPubKeys.value.length > 0) {
    const rewardTokenPubKey = rewardTokenPubKeys.value[0].pubkey;
    return {
      tokenPubKey: rewardTokenPubKey,
      isExist: true
    }
  }
  else {
    const tokenPubKey = await splToken.getAssociatedTokenAddress(mintPublicKey, ownerPublicKey)
    return {
      tokenPubKey: tokenPubKey,
      isExist: false
    }
  }
}

const roadMaps = [
  {
    title: 'Before May 2024',
    desc: 'World was in shit. Time to fight shit with SHIT',
    icon: road1,
  },
  {
    desc: 'Gen 0 SHIT came out',
    title: 'May 2024',
    icon: road2,
  },
  {
    title: 'June 2024',
    desc: 'Gen 1 SHIT was released',
    icon: road3,
  },
  {
    desc: 'SHITSOL Campaign starts. SHIT on exchange',
    title: 'July 2024',
    icon: road4,
  },
  {
    title: 'Aug 2024',
    desc: 'first offline SHIT Party. SHIT game launch',
    icon: road5,
  },
  {
    desc: 'SHIT crypto card launch. SHIT shop official launch',
    title: 'Sep 2024',
    icon: road6,
  },
  {
    title: 'Oct 2024',
    desc: 'SHIT Wallet launch. Give a SHIT Campaign',
    icon: road7,
  },
  {
    desc: 'SHIT, the Origin Campaign',
    title: 'Nov 2024',
    icon: road8,
  },
  {
    title: 'Dec 2024',
    desc: '>90% Solana wallets are shitted',
    icon: road9,
  },
  {
    desc: 'Spread SHIT to other universes--The Multiverse SHIT Campaign',
    title: 'Q1 2025',
    icon: road10,
  },
  {
    desc: 'Making World Beautiful Campaign',
    title: 'Q2 2025',
    icon: road11,
  },
  {
    desc: 'The SHIT Hero Campaign',
    title: 'Q4 2025',
    icon: road12,
  },
  {
    desc: 'More campaigns and reward programs to be updated in Gitbook',
    title: 'Q1 2026',
    icon: road13,
  },
]
const useMaps = [
  {
    icon: use1,
    text: 'Send away a SHIT to get rid of a shit in your life. The more SHIT you send, the more shits you get rid of.'
  },
  {
    icon: use2,
    text: 'Sabotage your friend by shitting their wallet with SHIT (Blockchain is immutable! The SHIT history will stay in the wallet forever!).'
  },
  {
    icon: use3,
    text: 'Used as a reward for people to help each other and make the world beautiful.'
  },
  {
    icon: use4,
    text: 'Send someone bad SHIT to condemn them.'
  },
  {
    icon: use5,
    text: 'Send someone good SHIT to wish good luck.'
  },
]
const ambassadors = [
  {
    image: png71,
    title: "Longman",
    desc: "Born in the year of the rooster, Longman is a typical chickenshit. He holds many old Shitcoins.",
  },
  {
    image: png72,
    title: "Alesh",
    desc: "Always ready to give a SHIT, Alesh makes sure he is full of SHIT at all times.",
  },
  {
    image: png73,
    title: "Harra",
    desc: "Harra is often after the hot SHIT. She is someone who knows her SHIT.",
  },
  {
    image: png74,
    title: "Tario",
    desc: "A mild and peaceful shithead, Tario got some good SHIT up her sleeves.",
  }
]
const partnersImages = [
  {
    name: 'Bullshit',
    img: p1
  },
  {
    name: 'Chickenshit',
    img: p2
  },
  {
    name: 'Dogshit',
    img: p3
  },
  {
    name: 'Shit happens',
    img: p4
  },
  {
    name: 'Shit flies',
    img: p5
  }
]
const partnersImages2 = [
  {
    name: 'Duckshit',
    img: p6
  },
  {
    name: 'Horseshit',
    img: p7
  },
  {
    name: 'Bullshit',
    img: p9
  },
  {
    name: 'Talking shit',
    img: p8
  },
  {
    name: 'Travel shit',
    img: p10
  },
]
const links = [
  {
    img: png81,
    url: 'https://x.com/letSHITfly'
  },
  {
    img: png82,
    url: ' https://t.me/+vQ7ypgWUEO84MTk1'
  },
  {
    img: png83,
    url: 'https://www.reddit.com/r/GiveAShit/'
  },
  {
    img: png84,
    url: 'https://docs.oshit.io/'
  },
  {
    img: png85,
    url: ''
  },
]
const navLinks = [
  {
    name: "SHIT Game",
    link: 'game'
  },
  {
    name: 'SHIT Shop',
    link: 'ecommerce'
  },
  {
    name: 'SHIT Card',
    link: 'cryptocard'
  },
  {
    name: 'SHIT Com',
    link: 'com'
  },
]
const D3Svg: FC<{ progress: number }> = ({ progress }) => {
  useEffect(() => {
    init()
    return () => {
    }
  }, [])
  const init = () => {
    const d3 = window.d3
    const svg = d3.select("svg")
    const width = +svg.attr("width")
    const height = +svg.attr("height")
    var projection = d3.geoNaturalEarth1()
      .scale(width / 1.3 / Math.PI)
      .translate([width / 2, height / 2])
    svg.append("g")
      .selectAll("path")
      .data(x.features)
      .enter()
      .append("path")
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      .style("fill", () => 'rgb(197,197,197)')
      .style("stroke", () => 'rgb(197,197,197)')
    function getRandomLandCoordinates(land: any) {
      let point;
      do {
        const randomLongitude = Math.random() * 360 - 180; // Longitude range: -180 to 180
        const randomLatitude = Math.random() * 120 - 60;   // Latitude range: -60 to 60
        point = [randomLongitude, randomLatitude];
      } while (!d3.geoContains(land, point));
      return point;
    }
    // progress 
    let total = 1
    const p = progress * 100
    if (p > 0 && p < 100) total = 1 * 10
    else total = p * 100
    // p 从 0 到 100。则
    for (let i = 0; i < total; i++) {
      const randomCoords = projection(getRandomLandCoordinates({ type: "FeatureCollection", features: x.features }));
      svg.append("image")
        .attr("xlink:href", mapMark) // Replace with your image path
        .attr("x", randomCoords[0] - 15) // Adjust x position
        .attr("y", randomCoords[1] - 15) // Adjust y position
        .attr("width", 30)
        .attr("height", 30);
    }
  }
  //  屏幕宽度大于 1000 则为 800
  // 800 * 600  4:3 600:450 300:225
  const width = window.innerWidth > 1000 ? 600 : 300
  const height = window.innerWidth > 1000 ? 400 : 225
  return <svg
    className='w-[300] h-[225] md:w-[600] md:h-[400] relative' id="my_dataviz" width={width} height={height}></svg>
}
interface MessageInfo {
  show: boolean
  type: 'transfer' | 'getCoin'
  txid: string
  status: 'success' | 'fail' | 'pending'
}
const getTokenBalance = async (connection: any, publicKey: any, tokenPublicKey: any) => {
  let balance = 0;
  const accounts = await connection.getTokenAccountsByOwner(publicKey, {
    mint: tokenPublicKey,
  });
  for (let account of accounts.value) {
    const tokenAccountInfo = await connection.getParsedAccountInfo(account.pubkey);
    balance = (tokenAccountInfo.value?.data as any).parsed.info.tokenAmount.uiAmount;
  }
  return balance;
}
export const IndexScreen = () => {
  const { user, changeUser } = useUser()
  const { setToast } = useToast()
  const label = useCountDown()
  const [shwoSelectWallet, setShowSelectWallet] = useState(false)
  const [urlInvite, setUrlInvite] = useState(urlParams.get('invite') || '')
  const [toAddress, setToAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [sendMessage, setSendMessage] = useState('')
  const [tips, setTips] = useState(0) // 0 1 2
  const [showMenu, setShowMenu] = useState(false)
  const loadingRef = useRef(false)
  const { progress, accountNum } = useGetShitCoinInfoHook('3zyKg7L471V9FGb4LGMLxpygY7M8srCAzQtM1HWgCixy', 'Ab2ZsNvLAB1PZHUhBtEzKuorQxBDcaqTKsoiJgj3QTC2')
  const [message, setMessage] = useState<MessageInfo>({
    show: false,
    type: 'transfer',
    txid: '',
    status: `pending`
  })
  const callbackRef = useRef<any>(null)
  const divElement = useRef<HTMLDivElement>(null)
  const divElement2 = useRef<HTMLDivElement>(null)

  const handleLogin = async () => {
    if (!urlParams.get('dev')) {
      setToast('Coming soon', 'alert-info')
      return
    }
    if (loadingRef.current) return
    loadingRef.current = true
    setToast('Connecting wallet...', 'alert-loading')
    const provider = getProvider()
    if (provider === null) {
      loadingRef.current = false
      setShowSelectWallet(true)
      setToast('', 'alert-loading')
      return
    }
    try {
      await provider.connect()
      if (provider?.isSolflare) localStorage.setItem('solflare', 'true')
      const address = window.solana.publicKey.toString()
      const res = await loginApi(address)
      changeUser({ address, token: res.Access, inviteCode: res.inviteCode })
      setToast('', 'alert-loading')
      if (callbackRef.current) {
        callbackRef.current(res.inviteCode)
        callbackRef.current = null
      }
    } catch (err: any) {
      let text = getErrorMessage(err)
      console.log('error: ', text);
      if (text === 'Transaction cancelled') text = 'user cancelled'
      setToast(text, 'alert-error')
    }
    loadingRef.current = false
  }
  const handleLogout = () => {
    changeUser(null)
    setAmount('')
    setToAddress('')
    setSendMessage('')

  }
  const handleShare = async (e: any) => {
    const id = Number(e.currentTarget.getAttribute('data-id'))
    if (user) {
      handleShareEvent(id, user.inviteCode)
      return
    }
    callbackRef.current = (code: string) => handleShareEvent(id, code)
    await handleLogin()
  }
  const handleShareEvent = (id: number, inviteCode: string) => {
    let shareURL = window.location.origin + '?invite=' + inviteCode
    urlParams.get('dev') && (shareURL += '&dev=1')
    const text = `Meet SHIT Coin, the first Meta Coin and Soul Coin in the multiverse! Don't miss the limited offer! Get your FREE SHIT now`
    const text2 = `Meet SHIT Coin, the first Meta Coin and Soul Coin in the multiverse! Don't miss the limited offer! Get your FREE SHIT now ${shareURL}`
    switch (id) {
      case 0:
        window.FB.ui({
          method: 'share',
          href: shareURL
        }, function () { });
        break
      case 1:
        window.open(`https://x.com/intent/tweet?related=shitToken&text=${text}&url=${shareURL}`, '_blank')
        break
      case 2:
        window.open(`https://telegram.me/share/url?url=${shareURL}&text=${text}`, '_blank')
        break
      case 3:

        window.open(`https://www.reddit.com/submit?url=${shareURL}&title=${text2}`, '_blank')
        break
      case 4:
        window.open(`https://api.whatsapp.com/send?text=${text2}`, '_blank')
        break;
      case 5:
        window.open(`mailto:?body=${text2}`, '_blank')
        break;
      case 7:
        navigator.clipboard.writeText(inviteCode)
        setToast('invite code copied', 'alert-success')
        break;
      default:
        navigator.clipboard.writeText(shareURL)
        setToast('invite link copied', 'alert-success')
        break;
    }
  }
  const handleURLInvite = (e: any) => {
    setUrlInvite(e.target.value)
    const urlObject = new URL(window.location.href);
    urlObject.search = '';
    window.history.replaceState({}, document.title, urlObject.toString());
  }
  const handleGetCoin = async () => {
    if (loadingRef.current) return
    setToast('loading...', 'alert-loading')
    setMessage({ show: false, type: 'transfer', txid: '', status: 'pending' })
    loadingRef.current = true
    try {
      const params: any = { brand: 'OShit', tokenSymbol: 'OShit', nativeAccount: user?.address! }
      if (urlInvite && urlInvite !== '') params.inviteCode = urlInvite
      const res = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/reward/getTokenRewardTransactionContent', resetFormData(params))
      const userPK = new solanaWeb3.PublicKey(user?.address!)
      const balance = await connection.getBalance(userPK)
      if (balance === 0) {
        setToast('you don\'t have any SOL', 'alert-error')
      }
      else if (urlInvite === user?.inviteCode) {
        setToast('Can\'t invite yourself', 'alert-error')
      }
      else {
        const { rewardTokenAccount, decimals, rewardNativeAccount, rewardInviterInfo, dexAccount, rewardInfo, dexFeeRate } = res.data.data
        const amount = rewardInfo.amount
        const decimal = decimals
        const rewardTokenAccountMPK = new solanaWeb3.PublicKey(rewardTokenAccount)
        const rewardNativeAccountMPK = new solanaWeb3.PublicKey(rewardNativeAccount)
        const dexNativeAccountMPK = new solanaWeb3.PublicKey(dexAccount)
        const tokenMintAccount = new solanaWeb3.PublicKey(res.data.data.tokenMintAccount)
        const JWTtokn = user?.token
        const computeBudgetPriceInst = solanaWeb3.ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 1000 });
        const computeBudgetLimitInst = solanaWeb3.ComputeBudgetProgram.setComputeUnitLimit({ units: 600000 });

        const userTokenPK = await getTokenAccountsByOwner(userPK, tokenMintAccount)

        const rewardInst = splToken.createTransferCheckedInstruction(rewardTokenAccountMPK, tokenMintAccount, userTokenPK.tokenPubKey, rewardNativeAccountMPK, amount, decimal, [])
        const toDexInst = solanaWeb3.SystemProgram.transfer({ fromPubkey: userPK, toPubkey: dexNativeAccountMPK, lamports: 2250000 })

        const instructions = [computeBudgetPriceInst, computeBudgetLimitInst];
        if (!userTokenPK.isExist) {
          const associatedTokenAccountInst = splToken.createAssociatedTokenAccountInstruction(userPK, userTokenPK.tokenPubKey, userPK, tokenMintAccount)
          instructions.push(associatedTokenAccountInst);
        }
        const createUpInviteInst: any[] = []
        const rewardInviterInst: any[] = []
        if (rewardInviterInfo) {
          for (let index = 0; index < rewardInviterInfo.length; index++) {
            const ele = rewardInviterInfo[index]
            const inviterNativeAccount = new solanaWeb3.PublicKey(ele.nativeAccount)
            const inviterTokenAccount = await getTokenAccountsByOwner(inviterNativeAccount, tokenMintAccount)
            if (!inviterTokenAccount.isExist) {
              createUpInviteInst.push(splToken.createAssociatedTokenAccountInstruction(userPK, inviterTokenAccount.tokenPubKey, inviterNativeAccount, tokenMintAccount))
            }
            const rewardInst = splToken.createTransferCheckedInstruction(rewardTokenAccountMPK, tokenMintAccount, inviterTokenAccount.tokenPubKey, rewardNativeAccountMPK, ele.amount, decimal, [])
            rewardInviterInst.push(rewardInst)
          }
          console.log('rewardInviterInst-  ', rewardInviterInfo, rewardInviterInst);
        }
        instructions.push(...createUpInviteInst)
        instructions.push(...rewardInviterInst)
        instructions.push(rewardInst, toDexInst);
        const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash('finalized')
        const transaction = new solanaWeb3.Transaction({ feePayer: userPK, blockhash, lastValidBlockHeight })
        transaction.add(...instructions);
        const provider = getProvider()
        const message = transaction.compileMessage()
        const feeInLamports = await connection.getFeeForMessage(message);
        console.log('toDexInst - ', feeInLamports);
        const toDexInst2 = solanaWeb3.SystemProgram.transfer({
          fromPubkey: userPK,
          toPubkey: dexNativeAccountMPK,
          lamports: feeInLamports.value! * (dexFeeRate / 100)
        })
        const transactionReal = new solanaWeb3.Transaction({ feePayer: userPK, blockhash, lastValidBlockHeight })
        instructions[instructions.length - 1] = toDexInst2
        transactionReal.add(...instructions);
        const signedTransaction = await provider.signTransaction(transactionReal);
        const t = signedTransaction.serialize({ requireAllSignatures: false, verifySignatures: false }).toString('hex')
        const result = await officialGiveToken(t, JWTtokn!, urlInvite)
        setMessage({
          show: true,
          type: 'getCoin',
          txid: result,
          status: `pending`
        })
        setToast('', 'alert-loading')
      }

    } catch (error) {
      setToast(getErrorMessage(error), 'alert-error')
    }
    loadingRef.current = false
  }
  const handleTransfer = async () => {
    if (loadingRef.current) return
    setToast('loading...', 'alert-loading')
    setMessage({ show: false, type: 'transfer', txid: '', status: 'pending' })
    loadingRef.current = true
    if (toAddress === user?.address) {
      setToast('Can\'t transfer to yourself', 'alert-error')
      return
    }
    if (!isValidSolanaAddress(toAddress)) {
      setToast('Invalid address', 'alert-error')
      return
    }
    try {
      const userPK = new solanaWeb3.PublicKey(user?.address!)
      const balance = await connection.getBalance(userPK)
      if (balance === 0) {
        setToast('you don\'t have any SOL', 'alert-error')
      }
      else {
        const { rule, list } = await queryOfficialTransferTokenRewardRule(user?.token!, user?.address!, toAddress)
        const tokenMintAccount = new solanaWeb3.PublicKey(rule.tokenMintAccount)
        const tokenBalance = await getTokenBalance(connection, userPK, tokenMintAccount)

        if (tokenBalance < 0) {
          setToast('you don\'t have any shit tokens', 'alert-error')
        }
        else if (tokenBalance < Number(amount)) {
          setToast(`you don\'t have enough shit tokens`, 'alert-error')
        }
        else {

          const rewardTokenAccountMPK = new solanaWeb3.PublicKey(rule.rewardTokenAccount)
          const rewardNativeAccountMPK = new solanaWeb3.PublicKey(rule.rewardNativeAccount)
          const dexNativeAccountMPK = new solanaWeb3.PublicKey(rule.dexNativeAccount)
          let rewardAmount = Math.min(((parseFloat(amount) * rule.rewardRate / 100) * 10 ** rule.decimal), rule.maxRewardPerTx)
          rewardAmount = parseInt(rewardAmount.toFixed(0))
          console.log(rewardAmount);

          const computeBudgetPriceInst = solanaWeb3.ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 1000 });
          const computeBudgetLimitInst = solanaWeb3.ComputeBudgetProgram.setComputeUnitLimit({ units: 600000 });

          const toPk = new solanaWeb3.PublicKey(toAddress)
          const userTokenPK = await getTokenAccountsByOwner(userPK, tokenMintAccount)
          const toTokenAccount = await getTokenAccountsByOwner(toPk, tokenMintAccount)
          const transferInst = splToken.createTransferCheckedInstruction(
            userTokenPK.tokenPubKey, // source from token account
            tokenMintAccount, // mint
            toTokenAccount.tokenPubKey, // to token account
            userPK, // owner from native account
            Number(amount) * 10 ** rule.decimal, // amount
            rule.decimal,
            []
          )
          const rewardInst = splToken.createTransferCheckedInstruction(
            rewardTokenAccountMPK, // source reward token account
            tokenMintAccount,
            userTokenPK.tokenPubKey,
            rewardNativeAccountMPK, // owner reward native account
            rewardAmount,
            rule.decimal,
            []
          )
          const createUpInviteInst = []
          const rewardInviterInst = []
          for (let index = 0; index < list.length; index++) {
            const { address, claimRatio } = list[index];
            const inviterNativeAccount = new solanaWeb3.PublicKey(address)
            const inviterTokenAccount = await getTokenAccountsByOwner(inviterNativeAccount, tokenMintAccount)
            const inviterRewardAmount = (rewardAmount * (claimRatio / 100)).toFixed(2)
            console.log(`inviterRewardAmount ${inviterRewardAmount}`);
            console.log(rewardAmount, claimRatio, inviterRewardAmount);
            if (!inviterTokenAccount.isExist) {
              createUpInviteInst.push(splToken.createAssociatedTokenAccountInstruction(
                userPK,
                inviterTokenAccount.tokenPubKey,
                inviterNativeAccount,
                tokenMintAccount
              ))
            }
            const rewardInst = splToken.createTransferCheckedInstruction(
              rewardTokenAccountMPK, // source
              tokenMintAccount,
              inviterTokenAccount.tokenPubKey,
              rewardNativeAccountMPK, // owner
              Number(inviterRewardAmount),
              rule.decimal,
              []
            )
            rewardInviterInst.push(rewardInst)
          }
          const toDexInst = solanaWeb3.SystemProgram.transfer({
            fromPubkey: userPK,
            toPubkey: dexNativeAccountMPK,
            lamports: 2250000
          })
          const instructions = [computeBudgetPriceInst, computeBudgetLimitInst];
          instructions.push(...createUpInviteInst)
          instructions.push(...rewardInviterInst)
          if (!toTokenAccount.isExist) {
            const associatedTokenAccountInst = splToken.createAssociatedTokenAccountInstruction(
              userPK,
              toTokenAccount.tokenPubKey,
              toPk,
              tokenMintAccount)
            instructions.push(associatedTokenAccountInst);
          }
          if (sendMessage !== '') {
            instructions.push(new solanaWeb3.TransactionInstruction({
              keys: [{ pubkey: userPK, isSigner: true, isWritable: true }],
              data: Buffer.from(sendMessage, "utf-8"),
              programId: new solanaWeb3.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
            }))
          }
          instructions.push(transferInst, rewardInst, toDexInst);
          const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash('finalized')
          const transaction = new solanaWeb3.Transaction({ feePayer: userPK, blockhash, lastValidBlockHeight })
          transaction.add(...instructions);
          const provider = getProvider()
          const message = transaction.compileMessage()
          const feeInLamports = await connection.getFeeForMessage(message);
          const toDexInst2 = solanaWeb3.SystemProgram.transfer({
            fromPubkey: userPK,
            toPubkey: dexNativeAccountMPK,
            lamports: feeInLamports.value! * (rule.dexFeeRate / 100)
          })
          const transactionReal = new solanaWeb3.Transaction({ feePayer: userPK, blockhash, lastValidBlockHeight })
          instructions[instructions.length - 1] = toDexInst2
          transactionReal.add(...instructions);
          const signedTransaction = await provider.signTransaction(transactionReal);
          const t = signedTransaction.serialize({ requireAllSignatures: false, verifySignatures: false }).toString('hex')
          const result = await officialTransferTokenForReward(t, !toTokenAccount.isExist, toAddress, user?.token!)
          setMessage({ show: true, type: 'transfer', txid: result, status: `pending` })
          setToast('', 'alert-loading')
        }
      }
    } catch (error) {
      setToast(getErrorMessage(error), 'alert-error')
    }
    loadingRef.current = false
  }
  const isTailWindMD = window.innerWidth > 768
  const handleNextPage = () => {
    divElement.current?.scrollBy({ left: isTailWindMD ? 500 : 300, behavior: 'smooth' })
  }
  const handlePerPage = () => {
    divElement.current?.scrollBy({ left: -(isTailWindMD ? 500 : 300), behavior: 'smooth' })
  }
  const handlePerPage2 = () => {
    divElement2.current?.scrollBy({ left: -(isTailWindMD ? 500 : 300), behavior: 'smooth' })
  }
  const handleNextPage2 = () => {
    divElement2.current?.scrollBy({ left: isTailWindMD ? 500 : 300, behavior: 'smooth' })
  }
  return <>
    <div
      className="flex flex-col relative w-full h-full"
      style={{ backgroundImage: `url(${PNG_1})`, backgroundSize: 'contain', backgroundRepeat: 'repeat-y', overflowY: 'hidden', overflowX: 'hidden' }}
    >

      <div className='flex md:mx-4 mx-2 md:my-2 my-1 justify-center items-center'>
        <img src={logo} alt="logo" className="w-20 h-20 " />
        <div className='text-3xl md:flex hidden text-white akaya-telivigala-regular justify-center items-center'>SHIT</div>
        <div className='flex-1'></div>
        {urlParams.get('dev') ? <kbd className="kbd mr-4">DEV</kbd> : null}
        <div className='md:flex hidden'>
          {navLinks.map((item, index) => <Link key={index} to={item.link} className="btn btn-lg btn-link mx-2 text-white underline akaya-telivigala-regular">{item.name}</Link>)}
        </div>
        <img
          onClick={user ? handleLogout : handleLogin}
          src={user ? btnImage3 : btnImage}
          className='btn btn-ghost px-0 hover:bg-transparent'
          style={{ width: 206, height: 45 }}
        />
        <div className='md:hidden px-2 mx-2' onClick={() => setShowMenu(true)}>
          <img src={menuNavigation} />
        </div>
      </div>
      <div className='flex-1' style={{ backgroundRepeat: 'repeat-y', overflowY: 'auto', overflowX: 'hidden' }}>
        <div className='mx-12 md:mx-24 mt-6 md-6 md:block hidden'>
          {[{ icon: png11, title: `“Oh SHIT it's SHIT!” ― Stephen King` },
          { icon: png12, title: `“That is her SHIT in the bed!” ― John Depp` },
          { icon: png13, title: `“SHIT, meet Fan. Fan, this is SHIT.” ― David Mitchell` },
          ].map((item) => <div className='flex items-center'>
            <img src={item.icon} className='w-[20px] h-[28px] mr-[11px]' />
            <div className='text-[26px] text-white text-outline akaya-telivigala-regular'>{item.title}</div>
          </div>)}
        </div>
        <div className='mx-6 md:mx-24 md:mt-6 mt-3 md:block hidden'>
          <div className='md:text-[50px] text-[28px] text-white text-outline akaya-telivigala-regular'>Take SHIT! Give SHIT! Spread SHIT!</div>
          <div className='flex md:mt-6 mt-3'>
            <a target='_blank' href='https://t.me/letSHITfly'><img src={png21} className='md:w-[50px] md:mr-[48px] w-[40px] mr-[20px]' /></a>
            <a target='_blank' href='https://x.com/letSHITfly'><img src={png22} className='md:w-[50px] md:mr-[48px] w-[40px] mr-[20px]' /></a>
            <a target='_blank' href='https://x.com/letSHITfly'><img src={png23} className='md:w-[50px] w-[40px]' /></a>
          </div>
        </div>
        <div className='mx-6 md:mx-24 md:mt-6 mt-3 md:hidden flex'>
          <div className='md:text-[50px] text-[28px] text-white text-outline akaya-telivigala-regular'>Take SHIT!<br />Give SHIT!<br />Spread SHIT!</div>
          <div className='flex-1'> </div>
          <img src={png32} className='w-[120px] h-[120px] rocket2' />
        </div>
        <div className='flex flex-col md:flex-row md:px-0 px-6 md:mt-20 mt-10'>
          <div className='md:w-[50px] md:h-[0px] h-[30px]'></div>
          <div style={{ padding: '20px 12px', borderRadius: 35, backgroundColor: 'rgba(137,91,54,0.8)' }} className='w-full flex-1 flex flex-col relative'>
            <div style={{ fontSize: 35, color: "#392111" }} className='text-center akaya-telivigala-regular'>Take a SHIT! </div>
            <div style={{ fontSize: 22, color: "#392111", lineHeight: '22px' }} className='text-center akaya-telivigala-regular'>TS Reward: Free SHIT for <br /> everyone! </div>
            <input value={user?.address || ''} disabled type='text' placeholder='Your wallet address' className='w-full px-3 mtInput mt-[10px]' />
            <input value={urlInvite} onChange={handleURLInvite} type='text' placeholder='Referral code (optional)' className='w-full px-2 mtInput mt-[28px]' />
            <div style={{ marginTop: 20, fontSize: 20, color: "rgba(211,186,128,0.8)", lineHeight: '20px' }} className='text-center text-outline-2 akaya-telivigala-regular'>Each address can claim once with referral code.</div>
            <div className='flex-1 flex-row flex justify-center items-center'>
              <img
                onClick={user ? handleGetCoin : handleLogin}
                src={btnImage1} className='btn btn-ghost mt-[30px] px-0 hover:bg-transparent' style={{ width: 219, height: 61 }} />
              <button
                onClick={() => setTips(1)}
                className="text-[24px] mt-[10px] btn btn-link akaya-telivigala-regular text-gray-400">Rules</button>
            </div>
            <img src={png31} className='w-[135px] h-[180px] absolute top-[-58px] left-[-12px]' />
            <div className='flex absolute md:hidden right-[0px] top-[-40px]'>
              <a target='_blank' href='https://t.me/letSHITfly'><img src={png21} className='w-[32px] mr-[24px]' /></a>
              <a target='_blank' href='https://x.com/letSHITfly'><img src={png22} className='w-[32px] mr-[24px]' /></a>
              <a target='_blank' href='https://x.com/letSHITfly'><img src={png23} className='w-[32px] mr-[5px]' /></a>
            </div>
          </div>
          <div className='md:w-[50px] md:h-[0px] h-[30px]'></div>
          <div style={{ padding: '20px 12px', borderRadius: 35, backgroundColor: 'rgba(97,58,30,0.8)' }} className='w-full flex-1 relative'>
            <div style={{ fontSize: 35, color: "rgba(255,255,255,0.7)" }} className='text-center akaya-telivigala-regular'>Give a SHIT</div>
            <div style={{ fontSize: 22, color: "rgba(255,255,255,0.7)", lineHeight: '22px' }} className='text-center akaya-telivigala-regular'> GS Reward: Send SHIT to receive<br />more SHIT</div>
            <input
              value={toAddress}
              onChange={(e) => {
                if (loadingRef.current) return
                setToAddress(e.target.value)
              }}
              type='text' placeholder='Solana Address to Shit' className='w-full px-4 mtInput mt-[10px] mtInput2' />
            <input
              pattern="[0-9]*"
              inputMode="decimal"
              type="text"
              value={amount} onChange={(e) => {
                if (loadingRef.current) return
                const value = e.target.value
                const regex = /^(?:\d+(\.\d{0,3})?|)$/
                if (regex.test(value) || value === '') setAmount(value)
              }}
              placeholder='Amount' className='w-full px-4 mtInput mt-[28px] mtInput2' />
            <input
              value={sendMessage} onChange={(e) => {
                if (loadingRef.current) return
                setSendMessage(e.target.value)
              }}
              type='text' placeholder='Message to the shitted person' className='w-full px-4 mtInput mt-[28px] mtInput2' />
            <div style={{ marginTop: 20, fontSize: 20, color: "#A7968A", lineHeight: '20px' }} className='text-center text-outline-2 akaya-telivigala-regular'>Send SHIT to any wallet. Get 300% SHIT back. Check max. return Here.</div>
            <div className='flex flex-row justify-center items-center'>
              <img
                onClick={user ? handleTransfer : handleLogin}
                src={btnImage2} className='btn btn-ghost mt-[30px] px-0 hover:bg-transparent'
                style={{ width: 219, height: 61 }}
              />
              <button
                onClick={() => setTips(2)}
                className="text-[24px] mt-[10px] btn btn-link akaya-telivigala-regular text-gray-500">Rules</button>
            </div>

            <img src={png32} className='hidden md:block w-[345px] h-[326px] absolute top-[-295px] left-[210px] rocket' />
            <img src={png33} className='w-[135px] h-[180px] absolute bottom-[-60px] md:right-[-35px] right-[-58px] unresponsive-element' />
          </div>
          <div className='md:w-[50px] md:h-[0px] h-[30px]'></div>
        </div>
        <div className='md:text-[32px] text-[16px] text-white text-center text-outline  akaya-telivigala-regular md:mx-[50px] mx-[20px]'>
          You can also send SHIT by any wallet to your friend. If his address has never received SHIT before and has at least 3 transactions. You will get 200% SHIT back. Check max return Here.
        </div>
        <div className='flex flex-col md:flex-row mt-[20px]'>
          <div className='md:w-[50px] md:h-[0px]'></div>
          <div className='flex-1'>
            <div className='md:text-[32px] text-[16px] text-white text-outline  text-center akaya-telivigala-regular md:mx-[0px] mx-[10px]'>Referral Reward: Invite friends to get more SHIT</div>
            <div className='md:text-[20px] text-[14px] text-white text-outline text-center akaya-telivigala-regular md:mx-[0px] mx-[10px]'>You get 10% of all reward of your referred friend and 1% of their referred friend</div>
            <div className='flex justify-center items-center mt-[20px]'>
              {[png41, png42, png43, png44, png45, png46, png47].map((item, index) => <img onClick={handleShare} data-id={index} src={item} key={index} className={`cursor-pointer w-[40px] h-[40px] ${index === 6 ? '' : 'md:mr-[26px] mr-[15px]'}`} />)}
            </div>
          </div>
          <div className='md:w-[50px] md:h-[0px] h-[30px]'></div>
          <div className='flex-1 flex items-center justify-center'>
            <img
              data-id={7}
              onClick={handleShare}
              src={btnImage4}
              className='btn btn-ghost px-0 hover:bg-transparent ml-[30px]'
              style={{ width: 386, height: 131 }}
            />
            <div className='md:w-[50px] md:h-[0px] h-[30px]'></div>
          </div>
        </div>
        <div className='mt-[60px] md:px-[40px] px-[20px]'>
          <div className='md:text-[60px] text-[40px] text-left text-outline akaya-telivigala-regular' style={{ color: '#613A1E' }}>SHIT News</div>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1 md:mr-[50px] md:mb-[0] mb-[15px] md:rounded48 rounded24 bg-white px-[15px] md:py-[30px] py-[15px]'>
              <div className='flex items-center justify-center '>
                <img src={p101} className='md:w-[69px] md:h-[69px] w-[40px] h-[40px]' />
                <div className='flex-1 bold text-center text-[24px]'>Alan Walker</div>
                <a target="_blank" href='https://www.reddit.com/r/GiveAShit/comments/1d773fe/how_do_people_work_for_decades_why_cant_i_last/'><img src={p102} className='md:w-[69px] md:h-[69px] w-[40px] h-[40px]' /></a>
              </div>
              <div className='flex-1 text-left bold md:text-[30px] text-[24px] mt-[10px] line-clamp-1'>How do people work for decades? Why can’t I last even a few days?</div>
              <div className='flex-1 text-left md:text-[20px] text-[16px] mt-[10px] line-clamp-8'>
                I’ve been really struggling with work lately and I can’t figure out how people do it for decades. I started a new job recently, and within just a few days, I already feel like I’m at my breaking point. I’m exhausted, stressed, and dreading every morning.<br />
                I look at people who’ve been in the workforce for 20, 30, even 40 years and I can’t help but wonder: how do they do it? What’s their secret to sticking with it for so long without burning out?<br />
                Is it just me? Am I doing something wrong? I want to be able to support myself and build a career, but I don’t know how to push through this initial phase. Does anyone have any advice or personal experiences to share? How do you find the motivation and resilience to keep going?
              </div>
              <a href='https://www.reddit.com/r/GiveAShit/comments/1d773fe/how_do_people_work_for_decades_why_cant_i_last/' target='_blank' className='flex-1 text-left text-[20px] mt-[20px] underline block' style={{ color: '#000AFF' }}>Click here to direct</a>
            </div>
            <div className='flex-1 md:mr-[50px] md:mb-[0] mb-[15px] md:rounded48 rounded24 bg-white px-[15px] md:py-[30px] py-[15px]'>
              <div className='flex items-center justify-center '>
                <img src={p105} className='md:w-[69px] md:h-[69px] w-[40px] h-[40px]' style={{ borderRadius: 35 }} />
                <div className='flex-1 bold text-center text-[24px]'>Alice Tsang</div>
                <a href='https://x.com/letSHITfly/status/1800516704415727930' target='_blank'>
                  <img src={p104} className='md:w-[69px] md:h-[69px] w-[40px] h-[40px] ' style={{ borderRadius: 35 }} />
                </a>
              </div>
              <div className='flex-1 text-left md:text-[20px] text-[16px] mt-[10px] line-clamp-8'>
                42,131,355,313,000 common SHIT for circulation is released at 13:13 GMT on the National Making Life Beautiful Day. It is time to spread SHIT and make life beautiful! LetSHITfly (our newly acquired name)!
              </div>
              {/* <img src={p105} className='w-full my-[20px]' /> */}
              <a href='https://x.com/letSHITfly/status/1800516704415727930' target='_blank' className='flex-1 text-left text-[20px] mt-[20px] underline block' style={{ color: '#000AFF' }}>Click here to direct</a>
            </div>
            <div className='flex-1 md:mr-[50px] md:rounded48 rounded24 bg-white px-[15px] md:pb-[30px] pb-[15px]'>
              <div style={{ color: '#613A1E' }} className='flex-1 text-left bold md:text-[30px] text-[24px] mt-[10px]'>YOUTUBE</div>
              <div className='flex-1 text-center bold md:text-[30px] text-[24px] md:mt-[30px] mt-[20px]'>LU KALA - Love Shit</div>
              <img src={p106} className='w-full my-[20px]' />
              <a href='https://www.youtube.com/watch?v=3cNTE4E4QZg' target='_blank' className='flex-1 text-left text-[20px] mt-[20px] md:mt-[30px] underline block' style={{ color: '#000AFF' }}>Click here to direct</a>
            </div>
          </div>
        </div>
        <div className='mt-[60px] px-[20px] md:px-[40px]'>
          <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
            <div className='flex-1 md:mr-[40px] mt-[20px] md:mt-[0px]'>
              <div className='md:text-[70px] text-[32px] text-white text-outline akaya-telivigala-regular'>Project SHIT</div>
              <div className='md:text-[40px] text-[24px] text-white text-outline akaya-telivigala-regular justified-text'>Project SHIT is a community initiative aimed at getting rid of everyone’s daily SHIT, making the world beautiful and passing on the vision of SHIT. It is initiated by 32 students from Hong Kong, Singapore, Europe and the US. All SHIT will be distributed to the community through airdrops or various rewards.</div>
            </div>
            <img src={png51} className='md:w-[431px] mx-auto md:h-[507px] h-[200px] w-[170px]' />
          </div>
          <div className='flex flex-col md:flex-row mt-[50px] justify-center items-center'>
            <img src={png52} className='md:w-[312px] md:h-[426px] mx-auto h-[200px] w-[146px]' />
            <div className='flex-1 md:ml-[70px]'>
              <div className='md:text-[70px] text-[32px] text-white text-outline akaya-telivigala-regular'>OUR VISION</div>
              <div className='md:text-[40px] text-[24px] text-white text-outline akaya-telivigala-regular justified-text'>
                Spread SHIT to every wallet and every corner of the blockchain realm and beyond to make the multiverse beautiful. Every good person deserves some good SHIT, and every bad person should get some bad SHIT. Let's bring SHIT to the world and the multiverse!
                Remember, blockchain is immutable; once a wallet has been shitted, it cannot be shitless again.
                <br />
                <a target='_blank' href='https://www.youtube.com/watch?v=3cNTE4E4QZg'>https://www.youtube.com/watch?v=3cNTE4E4QZg</a>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className='relative mt-[30px] md:mt-[80px] hidden md:block'>
          <div className='absolute top w-full text-[42px] md:text-[60px] w-full px-[25px] md:px-[65px] text-center text-white text-outline akaya-telivigala-regular'>
            Use of SHIT
            <div className='text-[20px] md:text-[35px] w-full px-[25px] md:px-[65px] text-center text-white text-outline akaya-telivigala-regular'>Every SHIT is precious. With SHIT, you can:</div>
          </div>
          <img src={png61} className='w-full ' />
        </div>
        <div className='relative mt-[30px] block md:hidden'>
          <div className='w-full text-[36px] px-[25px] text-center text-white text-outline akaya-telivigala-regular'>
            Use of SHIT
            <div className='text-[16px] w-full px-[15px] text-center text-white text-outline akaya-telivigala-regular'>Every SHIT is precious. With SHIT, you can:</div>
          </div>
          <div className='flex flex-row my-[20px]'>
            <div className='flex-1'> </div>
            <div className='bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer rotate180 select-none' onClick={handlePerPage2}>
              <img src={navigationPageRight} className='w-[30px] h-[30px]' />
            </div>
            <div className='w-[60px]'></div>
            <div className='bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer select-none' onClick={handleNextPage2}>
              <img src={navigationPageRight} className='w-[30px] h-[30px]' />
            </div>
            <div className='flex-1'> </div>
          </div>
          <div className='mt-[50] w-full h-[360px] overflow-x-auto my-[20px]' ref={divElement2} >
            <div style={{ width: 300 * useMaps.length }} className='flex'>
              {useMaps.map((item, index) => {
                return <div key={index} className='w-[300px] h-[360px] mr-[50px] px-[20px] flex flex-col items-center justify-center' style={{ borderRadius: 32, backgroundColor: 'rgba(97,58,30,0.8)', marginLeft: index === 0 ? 25 : 0 }}>
                  <div
                    style={{ color: '#613A1E', backgroundColor: "#FDD074" }}
                    className='text-white text-center akaya-telivigala-regular mt-[30px]  w-[40px] h-[40px] rounded-full flex items-center justify-center mb-[0px]' >{index + 1}</div>
                  <div className='flex-1 flex items-center justify-center flex-col'>
                    <img src={item.icon} className='md:w-[200px] w-[140px] mb-[20px]' />
                    <div className='text-white text-center akaya-telivigala-regular md:text-[25px] text-[14px] mb-[20px]' >{item.text}</div>
                  </div>

                </div>
              })}
            </div>
          </div>
        </div>

        <div className='pt-[40px] pb-[30px] md:pt-[90px] md:pb-[50px] shitMapBg flex flex-col justify-center items-center'>
          <div className='md:text-[60px] text-[36px] text-center text-white text-outline akaya-telivigala-regular'>SHIT Map</div>
          <D3Svg key={progress} progress={progress} />
          <div className='md:text-[30px] text-[18px] mt-[20px] md:mx-[25px] md:text-center text-white akaya-telivigala-regular block md:flex'>
            <div className='mr-[50px]'>Total Shitted walletss:{accountNum}</div>
            <div>Solana SHIT Progress:{progress}%</div>
          </div>
        </div>
        <div className='pb-[50px] shitMapBg2 flex flex-col justify-center items-center'>
          <div className='text-[42px] md:text-[60px] w-full px-[25px] md:px-[65px] text-center text-white text-outline akaya-telivigala-regular'>SHITokenomics</div>
          <div className='flex md:flex-row flex-col px-[25px] md:px-[65px]'>
            <div>
              <img src={png91} className='md:w-[500px]' />
              <div className='md:text-[36px] text-[16px] md:text-center text-outline akaya-telivigala-regular' style={{ color: '#CE942F' }}>
                {
                  !isTailWindMD ? <div className='mt-[20px]'>Supply 42T <a style={{ textDecoration: 'underline' }} target='_blank' href='https://docs.oshit.io/tokenomic'>Token Details</a><br /></div> :
                    <>
                      Supply 42T<br />
                      <a style={{ textDecoration: 'underline' }} target='_blank' href='https://docs.oshit.io/tokenomic'>Token Details</a><br />
                    </>
                }
              </div>
            </div>
            <div className='md:flex-1 md:ml-[50px]'>
              <div className='md:text-[36px] text-[16px] text-left text-white text-outline akaya-telivigala-regular'>
                Created by the Community, for the Community
              </div>
              <div className='md:text-[36px] text-[14px] text-left text-white text-outline akaya-telivigala-regular flex items-center md:mt-[70px] mt-[20px] '>
                <div style={{ backgroundColor: '#FFA509' }} className='md:w-[38px] md:h-[38px] w-[24px] h-[24px] md:rounded-xl rounded-md mr-[10px]'></div>
                95% Community Campaign Reward
              </div>
              <div className='md:text-[36px] text-[14px] text-left text-white text-outline akaya-telivigala-regular flex items-center mt-[20px] md:mt-[0px]' >
                <div style={{ backgroundColor: '#895B36' }} className='md:w-[38px] md:h-[38px] w-[24px] h-[24px] md:rounded-xl rounded-md mr-[10px]'></div>
                3% Ecosystem Partnership Reward
              </div>
              <div className='md:text-[36px] text-[14px] text-left text-white text-outline akaya-telivigala-regular flex items-center mb-[30px] md:mb-[70px] mt-[15px] md:mt-[0px]'>
                <div style={{ backgroundColor: '#937A51' }} className='md:w-[38px] md:h-[38px] w-[24px] h-[24px] md:rounded-xl rounded-md mr-[10px]'></div>
                2% Tech Development Reward
              </div>
            </div>
          </div>
        </div>
        <div className='pt-[30px] md:pt-[65px]'>
          <div className='flex items-center justify-center px-[20px] md:px-[65px]'>
            <div className='text-[36px] md:text-[60px] text-center text-white text-outline akaya-telivigala-regular'>Roadmap</div>
            <div className='flex-1'></div>
            <div className='bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer rotate180 select-none' onClick={handlePerPage}>
              <img src={navigationPageRight} className='w-[30px] h-[30px]' />
            </div>
            <div className='w-[60px]'></div>
            <div className='bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer select-none' onClick={handleNextPage}>
              <img src={navigationPageRight} className='w-[30px] h-[30px]' />
            </div>
          </div>
          <div className='mt-[50] w-full md:h-[450px] h-[360px] overflow-x-auto mt-[35px]' ref={divElement}>
            <div style={{ width: (isTailWindMD ? 500 : 300) * roadMaps.length }} className='flex'>
              {roadMaps.map((item, index) => {
                return <div key={index} className='md:w-[500px] w-[300px] md:h-[450px] mr-[50px] px-[20px] flex flex-col justify-center items-center' style={{ borderRadius: 32, backgroundColor: 'rgba(97,58,30,0.8)', marginLeft: index === 0 ? 25 : 0 }}>
                  <div className='text-white text-center akaya-telivigala-regular mb-[20px] mt-[20px] md:text-[40px] text-[24px]' >{item.title}</div>
                  <img src={item.icon} className='md:w-[200px] w-[140px] mb-[20px]' />
                  <div className='text-white text-center akaya-telivigala-regular md:text-[25px] text-[14px] mb-[20px]' >{item.desc}</div>
                </div>
              })}
            </div>
          </div>
          <div className='md:text-[60px] text-[32px] md:mt-[100px] mt-[50px] text-center text-white text-outline akaya-telivigala-regular'>Ambassadors</div>
          <div className='md:text-[42px] text-[24px] mx-[20px] md:mx-[25px] text-center text-white akaya-telivigala-regular'>They are the head of SHIT aka Shitheads. These Shitheads are your contact <br />point for all shitty matters.</div>
          <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-y-6 gap-x-8 mx-6 mt-6 mb-[80px]">
            {ambassadors.map((item, index) => {
              return <div key={index} className="w-full min-h-[280px] rounded-xl border-2 border-[#613A1E] flex md:flex-row flex-col justify-center items-center">
                <img src={item.image} className='w-[160px] md:ml-[26px] md:mt-[0px] mt-[20px]' style={{ borderRadius: 80 }} />
                <div className='flex-1 mx-[26px] md:mb-[0px] mb-[10px]'>
                  <div className='md:text-[45px] text-[24px] text-white akaya-telivigala-regular'>{item.title}</div>
                  <div className='md:text-[30px] text-[16px] text-white akaya-telivigala-regular'>{item.desc}</div>
                </div>
              </div>
            })}
          </div>
        </div>
        <div className='px-[30px] pt-[40px] pb-[100px] PartnersbBg'>
          <div className='md:text-[50px] text-[32px] text-center text-white text-outline akaya-telivigala-regular'>SHIT Partners</div>
          <div className='flex md:flex-row flex-col justify-between items-center'>
            {partnersImages.map((item, index) => {
              return <div key={index} className={`mb-[20px] md:mb-[0] flex-1 ${index !== 4 ? 'md:mr-[20px]' : ''}`}>
                <img src={item.img} className='md:w-full w-[200px]' style={{ borderRadius: 10 }} />
                <div className='md:text-[30px] text-[24px] md:mt-[20px] text-white text-center akaya-telivigala-regular'>{item.name}</div>
              </div>
            })}
          </div>
          <div className='flex md:flex-row flex-col justify-between items-center md:mt-[20px]'>
            {partnersImages2.map((item, index) => {
              return <div key={index} className={`mb-[20px] md:mb-[0] flex-1 ${index !== 4 ? 'md:mr-[20px]' : ''}`}>
                <img src={item.img} className='md:w-full w-[200px]' style={{ borderRadius: 10 }} />
                <div className='md:text-[30px] text-[24px] md:mt-[20px] text-white text-center akaya-telivigala-regular'>{item.name}</div>
              </div>
            })}
          </div>
        </div>
        <div className='px-[30px] pt-[40px] pb-[40px] tailBg flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center'>
            {links.map((item, index) => {
              return <a href={item.url} key={index} target='_blank' >
                <img src={item.img} style={{ width: 60, height: 60, marginRight: links.length - 1 === index ? 0 : 48 }} />
              </a>
            })}
          </div>
          <div className='mt-[13px] text-white text-center akaya-telivigala-regular text-size-[18px]'>Join Our SHIT community for the latest update and enjoy the SHIT!</div>
          <div className='mt-[20px] flex flex-col md:flex-row w-full justify-center items-center'>
            <div className='mt-[20px] text-white akaya-telivigala-regular text-size-[20px]'>Address: The Whole Mansion, 640 Toadstool <br />Town, Selausaun 92440, Centaurus A</div>
            <div className='flex-1'></div>
            <div className='mt-[20px] text-white akaya-telivigala-regular text-size-[20px]'>©2024 All SHIT Reserved</div>
          </div>
        </div>
      </div>
      <div className='fixed right-[20px] md:top-[120px] md:bottom-auto bottom-[20px]'>
        <div role="alert" className="alert alert-error ustify-center items-center gradient">
          <img src={alertAlarmClock} className="w-[30px] hidden md:block" />
          <div className='akaya-telivigala-regular'>
            <div>SHIT Launching Soon!</div>
            <div>{label}</div>
          </div>
        </div>
      </div>
      {shwoSelectWallet ? <div className='fixed w-full h-full right-0 bottom-0 top-0 bottom-0 bg-black/[0.5] flex flex-col'>
        <div className='bg-white shadow-xl p-4'>
          <div className='fahkwang-semibold text-xl text-center'>Select Wallet</div>
          <div className='flex justify-center items-center mt-4 flex-col md:flex-row'>
            <button onClick={() => {
              if (isMobile) {
                const url = window.location.href
                window.open(`https://phantom.app/ul/browse/${url}?ref=${url}`, "_blank")
              }
              else {
                window.open('https://phantom.app/', "_blank")
              }
            }} className='btn btn-outline md:mr-4 md:mb-0 mb-4 md:w-auto w-full'>
              <img src="https://play-lh.googleusercontent.com/obRvW02OTYLzJuvic1ZbVDVXLXzI0Vt_JGOjlxZ92XMdBF_i3kqU92u9SgHvJ5pySdM" alt="wallet" className="w-6 h-6 mx-auto bg-gray-100 rounded-full" />
              <div className='flex-1'>Phantom</div>
            </button>
            <button onClick={() => {
              if (isMobile) {
                const buildUrl = (path: string, params: URLSearchParams) => `https://solflare.com/ul/${path}?${params.toString()}`;
                const params = new URLSearchParams({
                  ref: "https://solflare.com"
                });
                const url = buildUrl(`v1/browse/${encodeURIComponent(window.location.href)}`, params);
                window.open(url, "_blank")
              }
              else window.open('https://solflare.com/', "_blank")
            }} className='btn btn-outline md:w-auto w-full'>
              <img src="https://lh3.googleusercontent.com/P9bO3Lk7VIiHjUUScXowxbXw3oHmrnS_tdImZqUFXYm7dmRTseE2rUax9HXqvSXTpesIldsSh5wlXYQSFdyF0-GZmw=s120" alt="wallet" className="w-6 h-6 mx-auto bg-gray-100 rounded-full" />
              <div className='flex-1'>Solflare</div>
            </button>
          </div>
        </div>
        <div onClick={() => setShowSelectWallet(false)} className='flex-1 cursor-pointer bg-gray w-full'></div>
      </div> : null}
      {showMenu ? <div className='fixed w-full h-full right-0 bottom-0 top-0 bottom-0 bg-black/[0.5] flex flex-col'>
        <div className='bg-white shadow-xl p-2'>
          <div className='flex justify-center items-center mt-2 flex-col'>
            {navLinks.map((item, index) => <Link key={index} to={item.link} className='btn mb-2 w-full'>{item.name}</Link>)}
          </div>
        </div>
        <div onClick={() => setShowMenu(false)} className='flex-1 cursor-pointer bg-gray w-full'></div>
      </div> : null}
      {tips !== 0 ? <div className='fixed w-full h-full right-0 bottom-0 top-0 bottom-0 bg-black/[0.5] flex flex-col'>
        <div className='bg-white shadow-2xl p-4'>
          <div className='akaya-telivigala-regular text-3xl text-center'>{tips === 1 ? 'Take a SHIT!' : 'Give a SHIT'}</div>
          {
            tips !== 1 ?
              <div className='mt-4 akaya-telivigala-regular text-xl'>
                Send SHIT on <a style={{ color: 'blue', textDecoration: 'underline' }} href='https://oshit.io/' target='_blank'>https://oshit.io/</a> to a valid address (has at least 3 transactions before and no SHIT transaction) to get 300% SHIT back. E.g. When you send 100 SHIT, you get 300 back to your wallet, capped at 1500.
                Send SHIT on <a style={{ color: 'blue', textDecoration: 'underline' }} href='https://oshit.io/' target='_blank'>https://oshit.io/</a> to any other address and get 200% SHIT back.
                E.g. when you send 100 SHIT, you get 200 back to your wallet, capped at 500.
                Detailed Rules of the Campaign <a style={{ color: 'blue', textDecoration: 'underline' }} href='https://docs.oshit.io/campaigns/shit-sol-wallet-campaign' target='_blank'>https://docs.oshit.io/campaigns/shit-sol-wallet-campaign</a>
              </div> : <div className='mt-4 akaya-telivigala-regular text-xl'>
                Claim 500 FREE SHIT every two minutes. If you have a referral code or link, you can claim a one-time super reward of 1500 SHIT and establish a referral relationship with the referrer. Click the "Generate Referral Code" button on the website to create and send an invitation link to others. You will receive 10% of all rewards earned by your invited friend throughout the campaign and 1% of all rewards earned by their referees.
              </div>
          }
        </div>
        <div onClick={() => setTips(0)} className='flex-1 cursor-pointer bg-gray w-full'></div>
      </div> : null}
      {
        message.show ? <div
          className="fixed right-4 top-4 py-4 bg-white rounded-lg shadow-md px-4">
          <div className='text-xl akaya-telivigala-regular'>check your transaction on solana explorer</div>
          <div className='mt-3 flex flex-row'>
            <div className='flex-1'></div>
            <button onClick={() => window.open(`https://explorer.solana.com/tx/${message.txid}`, "_blank")} className='akaya-telivigala-regular btn btn-sm btn-outline btn-primary'>Check</button>
            <button onClick={() => setMessage({ show: false, type: 'transfer', txid: '', status: 'pending' })} className='akaya-telivigala-regular btn btn-sm btn-outline ml-2 btn-neutral'>Close</button>
          </div>
        </div> : null
      }
    </div>
  </>
}