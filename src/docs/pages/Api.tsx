import { onMount } from 'solid-js'
import prism from 'prismjs'

export default function Api() {
  onMount(() => {
    prism.highlightAll()
  })

  return (
    <div>
      <h2 class="fw-bold mb-4">API</h2>
      <div class="table-responsive">
        <table class="table table-bordered" style="max-width: 600px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Params</th>
              <th>Returns</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>addValue</code></td>
              <td class="text-nowrap"><code>string | array</code></td>
              <td><code>void</code></td>
              <td>
                <pre class="mb-1"><code class="language-javascript">example.addValue('react')</code></pre>
                <pre class="mb-1"><code class="language-javascript">example.addValue('vue,svelte')</code></pre>
                <pre class="mb-0"><code class="language-javascript">example.addValue(['solid', 'qwik'])</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>removeValue</code></td>
              <td><code>string | array</code></td>
              <td><code>void</code></td>
              <td>
                <pre class="mb-1"><code class="language-javascript">example.removeValue('react')</code></pre>
                <pre class="mb-1"><code class="language-javascript">example.removeValue('vue,svelte')</code></pre>
                <pre class="mb-0"><code class="language-javascript">example.removeValue(['solid', 'qwik'])</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>getValue</code></td>
              <td><code>null</code></td>
              <td><code>string</code></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">example.getValue()</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>getValues</code></td>
              <td><code>null</code></td>
              <td><code>array</code></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">example.getValues()</code></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-between gap-3 mt-4">
        <a href="/demo" class="btn btn-link link-body-emphasis text-decoration-none border d-inline-flex flex-column align-items-start w-50">
          <span class="text-body-secondary small">Previous page</span>
          Demo
        </a>
        <a href="/customize" class="btn btn-link link-body-emphasis text-decoration-none border d-inline-flex flex-column align-items-end w-50">
          <span class="text-body-secondary small">Next page</span>
          Customize
        </a>
      </div>
    </div>
  )
}
