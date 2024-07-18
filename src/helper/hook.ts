import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { UserContext } from '../store/user'
import { ToastContext } from '../store/toast'
import * as solanaWeb3 from "@solana/web3.js"
export const useUser = () => {
  const { user, changeUser } = useContext(UserContext)
  return { user, changeUser }
}

export const useToast = () => {
  const { setToast } = useContext(ToastContext)
  return { setToast }
}




export const useGetShitCoinInfoHook = (coin: string, user: string) => {
  const [totalSupply, setTotalSupply] = useState(0)
  const [currentIssued, setCurrentIssued] = useState(0)
  const [accountNum, setAccountNum] = useState(0)
  const timeRef = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    getMint()
    return () => {
      if (timeRef.current) clearTimeout(timeRef.current)
    }
  }, [])
  const getMint = async () => {
    const connection = new solanaWeb3.Connection('https://sly-hardworking-dew.solana-mainnet.quiknode.pro/f6eb1261fe38b21326f892aabef573a7fa01a80a/')
    const mintAddress = new solanaWeb3.PublicKey(coin)
    const result: any = await connection.getParsedAccountInfo(mintAddress)
    const result1: any = await connection.getTokenLargestAccounts(mintAddress);
    const accounts = result1.value;
    const { decimals, supply } = result.value?.data?.parsed?.info
    const totalSupply = supply / Math.pow(10, decimals);
    const currentIssued = accounts.reduce((sum: any, account: any) => {
      const address = account.address.toString();
      if (address !== user) {
        return sum + (account.amount / Math.pow(10, decimals));
      }
      return sum
    }, 0);
    setTotalSupply(totalSupply)
    setCurrentIssued(currentIssued)
    setAccountNum(accounts.length - 1)
    timeRef.current = setTimeout(() => {
      getMint()
    }, 60000)
  }
  const progress = totalSupply !== 0 ? Number(((currentIssued / totalSupply) * 100).toFixed(10)) : 0
  return { totalSupply, currentIssued, progress, accountNum }
}

export const useCountDown = () => {
  const [time, setTime] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  })

  const isLaunched = useMemo(() => Object.values(time).some(value => value <= 0), [time])

  useEffect(() => {
    const timeRef = setInterval(() => {
      const now = new Date()
      const target = new Date('2024-07-15T17:00:00+08:00')
      const diff = target.getTime() - now.getTime()
      const day = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const second = Math.floor((diff % (1000 * 60)) / 1000)
      setTime({ day, hour, minute, second })
    }, 1000)
    return () => {
      clearInterval(timeRef)
    }
  }, [])


  const label = useMemo(() => {
    const daylabel = time.day > 1 ? 'days' : 'day'
    const hoursLabel = time.hour > 1 ? 'hours' : 'hour'
    const minutesLabel = time.minute > 1 ? 'minutes' : 'minute'
    const secondsLabel = time.second > 1 ? 'seconds' : 'second'

    const hoursStr = time.hour
    const minutesStr = time.minute
    const secondsStr = time.second
    
    if (isLaunched) {
      return null
    }

    if (time.day === 0) {
      return `${hoursStr} ${hoursLabel} ${minutesStr} ${minutesLabel} ${secondsStr} ${secondsLabel}`
    }
    return `${time.day} ${daylabel} ${hoursStr} ${hoursLabel} ${minutesStr} ${minutesLabel} ${secondsStr} ${secondsLabel}`
  }, [time])

  return {
    isLaunched,
    label
  }
}