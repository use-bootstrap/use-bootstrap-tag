import { onMount } from 'solid-js'
import prism from 'prismjs'
import { name } from '../../../package.json'
import codeCustomizeStructure from '../code/customize-structure.txt?raw'
import codeCustomizeA from '../code/customize-a.scss.txt?raw'
import codeCustomizeB from '../code/customize-b.scss.txt?raw'

export default function Customize() {
  onMount(() => {
    prism.highlightAll()
  })

  return (
    <div>
      <h2 class="fw-bold mb-4">Customize</h2>
      <p>Assuming you’re using a package manager like npm, you’ll have a file structure that looks like this:</p>
      <pre><code class="language-bash">{codeCustomizeStructure}</code></pre>
      <p>In your <code>custom.scss</code>, you’ll import Bootstrap’s source Sass files. You have two options: include all of Bootstrap, or pick the parts you need.</p>
      <pre><code class="language-css">{codeCustomizeA}</code></pre>
      <pre><code class="language-css">{codeCustomizeB}</code></pre>
      <p>By default, {name} inherits its style from default bootstrap style, so anything you change in bootstrap automatically changes {name} style as well.</p>
      <p>Read more about customize bootstrap styles at <a class="text-break" href="https://getbootstrap.com/docs/5.3/customize/sass/" target="_blank">https://getbootstrap.com/docs/5.3/customize/sass/</a>.</p>
      <div class="d-flex justify-content-between gap-3 mt-4">
        <a href="/api" class="btn btn-link link-body-emphasis text-decoration-none border d-inline-flex flex-column align-items-start w-50">
          <span class="text-body-secondary small">Previous page</span>
          API
        </a>
      </div>
    </div>
  )
}
