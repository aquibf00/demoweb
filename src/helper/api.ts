import bs58 from 'bs58'
import axios from "axios"
import { getProvider } from "."

interface HttpMsg<T> {
  count: number
  data: T
  code: number
  msg: string
  version: null | number
}

export const BaseAPI = 'https://testnet.oshit.io/meme/api/v1/sol'

export const axiosInstance = axios.create({
  baseURL: BaseAPI,
  timeout: 45 * 1000,
})

interface dataProps {
  [key: string]: any
}

export const resetFormData = (data: dataProps | undefined) => {
  const formData = new URLSearchParams();
  data && Object.keys(data).forEach(key => {
    formData.append(key, data[key])
  });
  return formData
}

export const commonApi = async <T>(method: string, url: string, data?: any, ct?: any, isFormData = true, _header = {}): Promise<HttpMsg<T>> => {
  const commonHeader = {}
  try {
    const user = localStorage.getItem('user-1')
    const _user = user && JSON.parse(user)
    const token = _user && _user['token']
    const header = { headers: Object.assign(commonHeader, token ? { 'Authorization': 'Bearer ' + token } : {}, _header) }
    const fetch = method === 'get' ? axiosInstance.get : axiosInstance.post
    const signalObj = ct ? ct : new AbortController();
    const _data = data && isFormData ? resetFormData(data).toString() : data && !isFormData ? data : {}
    const config = { signal: signalObj.signal, ...header }
    const res = method === 'get' ? await fetch<HttpMsg<any>>(url, config) : await fetch<HttpMsg<any>>(url, _data, config)
    if (res.status === 200) {
      if (res.data.code === 0 || res.data.code === 200 || res.data.code === 559) return res.data
      else throw new Error(res.data.msg)
    }
    else {
      throw new Error(res.statusText)
    }

  }
  catch (error: any) {
    throw error
  }
}


export const loginApi = async (address: string) => {
  const provider = getProvider()
  const nonce = new Date().getTime()
  // const urlParams = new URLSearchParams(window.location.search)
  // const invite = urlParams.get('invite')
  let message = `I am login OShit for token OShit with my address ${address} with nonce ${nonce}`
  // if (invite && invite.length > 0) message += ` inviteCode ${invite}`
  const encodedMessage = new TextEncoder().encode(message)
  const signedMessage = await provider.signMessage(encodedMessage, "utf8")
  const params: any = {
    brand: 'OShit',
    tokenSymbol: 'OShit',
    nativeAccount: address,
    nonce,
    sign: bs58.encode(signedMessage.signature)
  }
  // if (invite && invite.length > 0) {
  //   params['inviteCode'] = invite
  // }
  const formData = resetFormData(params)
  const res = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/auth/loginWithNativeAccount', formData)
  const headers = { 'Authorization': 'Bearer ' + res.data.data.Access }
  const shareRes = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/auth/queryNativeAccountInfo', {}, { headers })
  res.data.data.inviteCode = shareRes.data.data.inviteCode
  return res.data.data
}
export const officialGiveToken = async (encodedTx: string, auth: string, icode?: string) => {
  const urlParams = new URLSearchParams(window.location.search)
  const inviteCode = icode || urlParams.get('invite')
  const params: any = {
    brand: 'OShit',
    chain: 'SOL',
    tokenSymbol: 'OShit',
    encodedTx
  }
  if (inviteCode) params.inviteCode = inviteCode
  const formData = resetFormData(params)
  const headers = { 'Authorization': 'Bearer ' + auth }
  const res = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/reward/officialGiveToken', formData, { headers })
  if (res.data.code !== 0) throw new Error(res.data.msg)
  return res.data.data
}
export const officialTransferTokenForReward = async (encodedTx: string, isNeedCreateTokenAccount: boolean, toNativeAddress: string, auth: string, _?: string) => {

  const formData = resetFormData({
    brand: 'OShit',
    tokenSymbol: 'OShit',
    encodedTx,
    isNeedCreateTokenAccount,
    toNativeAddress
  })
  const headers = { 'Authorization': 'Bearer ' + auth }
  const res = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/reward/officialTransferTokenForReward ', formData, { headers })
  if (res.data.code !== 0) throw new Error(res.data.msg)
  return res.data.data
}

export const queryOfficialTransferTokenRewardRule = async (auth: string, address: string, toAddress: string) => {
  const formData = resetFormData({ brand: 'OShit', tokenSymbol: 'OShit' })
  const isAccountMatchUnofficialTransferRewardRule = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/reward/queryAccountMatchUnofficialTransferRewardRule', resetFormData({ brand: 'OShit', nativeAccount: toAddress, tokenSymbol: 'OShit', }), { headers: { 'Authorization': 'Bearer ' + auth } })
  const queryOfficialTransferTokenRewardRuleRes = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/reward/queryOfficialTransferTokenRewardRule', formData, { headers: { 'Authorization': 'Bearer ' + auth } })
  const querySolTransferRewardDistributionRes = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/invite/querySolTransferRewardDistribution', formData, { headers: { 'Authorization': 'Bearer ' + auth } })
  const formData1 = resetFormData({
    brand: 'OShit',
    tokenSymbol: 'OShit',
    level: querySolTransferRewardDistributionRes.data.data.level
  })
  const querySolTransferRewardClaimRes = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/invite/querySolTransferRewardClaim', formData1, { headers: { 'Authorization': 'Bearer ' + auth } })
  const formData2 = resetFormData({
    brand: 'OShit',
    tokenSymbol: 'OShit',
    depth: querySolTransferRewardDistributionRes.data.data.level
  })
  const recursiveQueryUpInviterRecordsRes = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/invite/recursiveQueryUpInviterRecords', formData2, { headers: { 'Authorization': 'Bearer ' + auth } })
  // claims
  const claims = querySolTransferRewardClaimRes.data.data
  claims.sort((a: any, b: any) => a.level - b.level)
  const inviteRecords = recursiveQueryUpInviterRecordsRes.data.data
  const arr: any = []
  if (inviteRecords) {
    for (let index = 0; index < inviteRecords.length; index++) {
      const element = inviteRecords[index];
      if (element.inviteeNativeAccount === address) {
        arr.push({
          address: element.inviterNativeAccount,
          level: 1,
          claimRatio: claims[0].claimRatio
        })
        break
      }
    }
    // 寻找直系邀请人的邀请人
    console.log('----', inviteRecords);
    console.log('----', claims);
    if (arr.length > 0 && claims.length > 1) {
      for (let index = 0; index < inviteRecords.length; index++) {
        const element = inviteRecords[index];
        if (element.inviteeNativeAccount === arr[0].address) {
          arr.push({
            address: element.inviterNativeAccount,
            level: 2,
            claimRatio: claims[1].claimRatio
          })
          break
        }
      }
    }
  }
  if (isAccountMatchUnofficialTransferRewardRule.data.data) {
    queryOfficialTransferTokenRewardRuleRes.data.data.rewardRate = queryOfficialTransferTokenRewardRuleRes.data.data.rewardValidAddressRate
    queryOfficialTransferTokenRewardRuleRes.data.data.maxRewardPerTx = queryOfficialTransferTokenRewardRuleRes.data.data.maxValidAddressRewardPerTx
  }
  return {
    rule: queryOfficialTransferTokenRewardRuleRes.data.data,
    list: arr,
  }
}
export const recursiveQueryDownInviteRecords = async (auth: string) => {
  const formData = resetFormData({ depth: 1 })
  const res = await axios.post('https://testnet.oshit.io/meme/api/v1/sol/invite/recursiveQueryDownInviteeRecords', formData, { headers: { 'Authorization': 'Bearer ' + auth } })
  if (res.data.code !== 0) throw new Error(res.data.msg)
  return res.data.data
}