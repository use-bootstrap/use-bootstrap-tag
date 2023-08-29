import 'bootstrap/js/dist/tab'
import prism from 'prismjs'
import Docs from './docs.svelte'
import '@fontsource/hind-siliguri/latin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'prismjs/themes/prism-tomorrow.min.css'
import '../lib/use-bootstrap-tag.scss'
import './docs.scss'

prism.manual = true

const target = document.getElementById('app')!
target.innerHTML = ''

const app = new Docs({
  target,
})

export default app
