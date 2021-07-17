import viteSSR from 'vite-ssr/react/entry-server'
import { resolvePropsRoute } from './utils'

export { ClientOnly, useContext } from 'vite-ssr/react/entry-server'

export default function (App, { routes, base, ...options }, hook) {
  return {
    resolve: (url) => resolvePropsRoute(routes, url, base),
    render: viteSSR(App, { routes, base, ...options }, hook),
  }
}
