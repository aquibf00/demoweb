import { createContext } from "react"
export type ToastType = "alert-error" | "alert-success" | "alert-warning" | "alert-info" | "alert-loading"
interface ToastValue {
    text: string
    type: "alert-error" | "alert-success" | "alert-warning" | "alert-info" | "alert-loading"
    setToast: (text: string, type?: "alert-error" | "alert-success" | "alert-warning" | "alert-info" | "alert-loading") => void
}

const TOAST_DEF_STATE: ToastValue = {
    text: '',
    type: 'alert-error',
    setToast: () => { },
}

export const ToastContext = createContext(TOAST_DEF_STATE)