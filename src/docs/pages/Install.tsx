import { onMount } from 'solid-js'
import prism from 'prismjs'
import codeInstall from '../code/install.html.txt?raw'
import codeImport from '../code/import.js.txt?raw'
import codeIife from '../code/iife.html.txt?raw'

export default function Install() {
  onMount(() => {
    prism.highlightAll()
  })

  return (
    <div>
      <h2 class="fw-bold mb-4">Install</h2>
      <p>Install from npm:</p>
      <pre><code class="language-bash">{codeInstall}</code></pre>
      <p>After installation, you can import the library into your project as follows:</p>
      <pre><code class="language-javascript">{codeImport}</code></pre>
      <p>or, since it also comes with an IIFE bundle, you can insert it directly into your HTML:</p>
      <pre><code class="language-html">{codeIife}</code></pre>
      <div class="d-flex justify-content-between gap-3">
        <a href="/" class="btn btn-outline-secondary text-decoration-none border d-inline-flex flex-column align-items-start w-50">
          <span class="small">Previous page</span>
          Home
        </a>
        <a href="/demo" class="btn btn-outline-secondary text-decoration-none border d-inline-flex flex-column align-items-end w-50">
          <span class="small">Next page</span>
          Demo
        </a>
      </div>
    </div>
  )
}
