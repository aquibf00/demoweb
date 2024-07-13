import { PublicKey } from "@solana/web3.js";
import * as solanaWeb3 from "@solana/web3.js"

export function getErrorMessage(error: any | string): string {
  if (typeof error === 'string') {
    return error
  } else {
    return error.message || error.msg || error.error || error.toString()
  }
}


export const getProvider = () => {
  if ('phantom' in window) {
    const provider = window.phantom?.solana
    if (provider?.isPhantom) return provider
  }
  // check solflare 
  if ('solflare' in window) {
    const provider = window.solflare
    if (provider?.isSolflare) {
      window.solana = provider
      return provider
    }
  }
  return null
};

export const hideMidChars = (str: string, head = 6, tail = 4) => {
  return str.slice(0, head) + '...' + str.slice(-tail)
}

export const checkHasNativeAccount = async (pk: PublicKey) => {
  try {
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));
    const accountInfo = await connection.getAccountInfo(pk);
    const SYSTEM_PROGRAM_ID = solanaWeb3.SystemProgram.programId.toString();
    const isNativeAccount = accountInfo?.owner.toString() === SYSTEM_PROGRAM_ID;
    return isNativeAccount;
  } catch (err) {
    return false;
  }
}

export function isValidSolanaAddress(address: string) {
  try {
    const publicKey = new PublicKey(address);
    return PublicKey.isOnCurve(publicKey);
  } catch (error) {
    return false;
  }
}

export const isMobile = /Mobile/.test(navigator.userAgent)