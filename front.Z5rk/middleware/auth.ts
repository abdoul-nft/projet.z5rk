import { Middleware } from '@nuxt/types'

const auth: Middleware = ({ store, redirect }) => {
  if(!store.state.user) {
    redirect('/connect-wallet')
  }
}

export default auth