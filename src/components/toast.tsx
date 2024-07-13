import { FC, useContext, useRef, useEffect } from 'react'
import { ToastContext } from '../store/toast'
interface ToastProps {

}
export const Toast: FC<ToastProps> = () => {
    const { text, type, setToast } = useContext(ToastContext)
    const timeRef = useRef<any>(null)
    useEffect(() => {
        return () => {
            if (timeRef.current) {
                clearTimeout(timeRef.current)
                timeRef.current = null
            }
        }
    }, [])
    useEffect(() => {
        if (text && text !== '') {
            if (timeRef.current) {
                clearTimeout(timeRef.current)
                timeRef.current = null
            }
            if (type === 'alert-loading') return
            timeRef.current = setTimeout(() => {
                setToast('')
                timeRef.current = null
            }, 3000)
        }
    }, [text, type])
    return text && text !== '' ? <div className="toast toast-top toast-center">
        <div className={`alert ${type}`}>
            {
                type === 'alert-loading' ? <span className="loading loading-sm loading-spinner mr-2"></span> : null
            }
            <span>{text}</span>
        </div>
    </div> : null
}