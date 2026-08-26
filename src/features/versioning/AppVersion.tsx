import { version } from './version.json'

export const AppVersion = () => (
  <sup className="text-center font-code text-xs">v{version}</sup>
)
