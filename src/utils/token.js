import Cookies from 'js-cookie'

const TokenKey = 'hsdn_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getIdentityToken() {
  return Cookies.get('identity')
}

export function setIdentityToken(identity) {
  return Cookies.set('identity', identity)
}

export function removeIdentityToken() {
  return Cookies.remove('identity')
}
