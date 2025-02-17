interface Url {
  readonly screen: string
  readonly user: string
  readonly login: string
  readonly subscribe: string
  readonly unsubscribe: string
  readonly flow: string
  readonly tariff: string
  readonly tariffCurrent: string
}
export const $url: Url = {
  screen:'/public/screen',
  user:'/public/user',
  login:'/public/login',
  subscribe: '/user/subscribe',
  unsubscribe: '/user/unsubscribe',
  flow: '/user/flow/save',
  tariff: '/user/tariff',
  tariffCurrent: '/user/tariff/current',
}
