import type library from './lib/use-bootstrap-tag'

declare global {
  interface Window {
    UseBootstrapTag: typeof library
  }
  const UseBootstrapTag: typeof library
}
