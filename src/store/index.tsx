import { useEffect, useState } from "react";
import { User, UserContext } from "./user";
import { ToastContext, ToastType } from "./toast";
import { Toast } from "../components";
import { getProvider } from "../helper";

interface Props {
  children?: React.ReactNode
}
export const Provider: React.FC<Props> = ({ children }) => {
  const [init, setInit] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    getUser()
  }, [])
  const getUser = async () => {
    const provider = getProvider()
    let flag = provider?.isSolflare ? false : true
    if (provider?.isSolflare) {
      flag = localStorage.getItem('solflare') === 'true'
    }
    if (provider && flag) {
      try {
        const f = await provider.connect({ onlyIfTrusted: true })
        if (f) {
          if (provider?.isSolflare) localStorage.setItem('solflare', 'true')
          const result = localStorage.getItem('user-1')
          const oldRes = result ? JSON.parse(result) : null
          
          const address = window.solana.publicKey.toString()
          if (address === oldRes?.address) {
            const nowTs = new Date().getTime()
            if (oldRes.ts && nowTs - oldRes.ts > 1000 * 60 * 60 * 24 * 7) {
              localStorage.removeItem('user-1')
              changeUser(null)
              return
            }
            changeUser({ address, inviteCode: oldRes.inviteCode, token: oldRes.token })
          }
        }

      } catch (error) {
        console.log(error);
      }
      setInit(true)
    }
    else {
      setInit(true)
    }
  }
  const changeUser = (user: User | null) => {
    setUser(user)
    if (user) localStorage.setItem('user-1', JSON.stringify({
      ...user,
      ts: new Date().getTime()
    }))
    else localStorage.removeItem('user-1')
  }
  const [text, setText] = useState('')
  const [type, setType] = useState<ToastType>('alert-error')
  const setToast = (text: string, type: ToastType = 'alert-error') => {
    setText(text)
    setType(type)
  }
  return <UserContext.Provider value={{ user, changeUser }}>
    <ToastContext.Provider value={{ text, type, setToast }}>
      {init ? children : <div className="flex items-center justify-center h-screen bg-gray-100">
        <span className="loading loading-bars loading-lg"></span>
      </div>}
      <Toast />
    </ToastContext.Provider>
  </UserContext.Provider>
}