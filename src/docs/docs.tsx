/* @refresh reload */
import { render } from 'solid-js/web'
import 'bootstrap/js/dist/tab'
import prism from 'prismjs'
import App from './App'
import '@fontsource/hind-siliguri/latin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'prismjs/themes/prism-tomorrow.min.css'
import '../lib/use-bootstrap-tag.scss'
import './docs.scss'

prism.manual = true

const target = document.getElementById('app')!
target.innerHTML = ''

render(() => <App />, target)
