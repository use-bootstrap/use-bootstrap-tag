/* eslint-disable no-alert */
import { onMount } from 'solid-js'
import prism from 'prismjs'
import codeBasic from '../code/basic.html.txt?raw'
import codeMax from '../code/max.html.txt?raw'
import codeSeparator from '../code/separator.html.txt?raw'
import codeDuplicate from '../code/duplicate.html.txt?raw'
import codeTransform from '../code/transform.html.txt?raw'
import codeDisabled from '../code/disabled.html.txt?raw'
import codeLabel from '../code/label.html.txt?raw'
import codeSizing from '../code/sizing.html.txt?raw'
import codeValidation from '../code/validation.html.txt?raw'
import codeMethods from '../code/methods.html.txt?raw'
import codeVariant from '../code/variant.html.txt?raw'
import codePosition from '../code/position.html.txt?raw'
import UseBootstrapTag from '../../lib/use-bootstrap-tag'

export default function Demo() {
  onMount(() => {
    prism.highlightAll()
    document.querySelectorAll('input:not([id])').forEach((inputElement) => {
      UseBootstrapTag(inputElement as HTMLInputElement)
    })
    UseBootstrapTag(document.getElementById('example-label') as HTMLInputElement)
    const example = UseBootstrapTag(document.getElementById('example') as HTMLInputElement)
    document.getElementById('addValue-string')?.addEventListener('click', () => {
      example.addValue('react')
    })
    document.getElementById('addValue-string-with-separator')?.addEventListener('click', () => {
      example.addValue('vue,svelte')
    })
    document.getElementById('addValue-array')?.addEventListener('click', () => {
      example.addValue(['solid', 'qwik'])
    })
    document.getElementById('removeValue-string')?.addEventListener('click', () => {
      example.removeValue('react')
    })
    document.getElementById('removeValue-string-with-separator')?.addEventListener('click', () => {
      example.removeValue('vue,svelte')
    })
    document.getElementById('removeValue-array')?.addEventListener('click', () => {
      example.removeValue(['solid', 'qwik'])
    })
    document.getElementById('getValue')?.addEventListener('click', () => {
      alert(example.getValue())
    })
    document.getElementById('getValues')?.addEventListener('click', () => {
      alert(JSON.stringify(example.getValues()))
    })
    document.querySelectorAll('form').forEach((form) => {
      if (form.classList.contains('needs-validation')) {
        form.addEventListener('submit', (event) => {
          event.preventDefault()
          event.stopPropagation()
          if (form.checkValidity()) {
            const input = form.querySelector('input[name]') as HTMLInputElement
            alert(input.value)
          }
          form.classList.add('was-validated')
        })
      }
    })
  })

  return (
    <div>
      <h2 class="fw-bold mb-4">Demo</h2>
      <div class="row g-4">
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="basic-preview-tab" data-bs-toggle="tab" data-bs-target="#basic-preview-tab-pane" type="button" role="tab" aria-controls="basic-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="basic-code-tab" data-bs-toggle="tab" data-bs-target="#basic-code-tab-pane" type="button" role="tab" aria-controls="basic-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Basic</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="basic-preview-tab-pane" role="tabpanel" aria-labelledby="basic-preview-tab">
                  <div class="vstack gap-3">
                    <input type="text" class="form-control" value="html,css,js" />
                    <input type="text" class="form-control" placeholder="Add a tag then press comma or Enter" />
                  </div>
                </div>
                <div class="tab-pane" id="basic-code-tab-pane" role="tabpanel" aria-labelledby="basic-code-tab">
                  <pre><code class="language-html">{codeBasic}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="max-preview-tab" data-bs-toggle="tab" data-bs-target="#max-preview-tab-pane" type="button" role="tab" aria-controls="max-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="max-code-tab" data-bs-toggle="tab" data-bs-target="#max-code-tab-pane" type="button" role="tab" aria-controls="max-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Max limit</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="max-preview-tab-pane" role="tabpanel" aria-labelledby="max-preview-tab">
                  <input type="text" class="form-control" placeholder="Enter tags (max 3)" data-ub-tag-max="3" />
                </div>
                <div class="tab-pane" id="max-code-tab-pane" role="tabpanel" aria-labelledby="max-code-tab">
                  <pre><code class="language-html">{codeMax}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="separator-preview-tab" data-bs-toggle="tab" data-bs-target="#separator-preview-tab-pane" type="button" role="tab" aria-controls="separator-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="separator-code-tab" data-bs-toggle="tab" data-bs-target="#separator-code-tab-pane" type="button" role="tab" aria-controls="separator-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Custom separator</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="separator-preview-tab-pane" role="tabpanel" aria-labelledby="separator-preview-tab">
                  <input type="text" class="form-control" placeholder="Add a tag then press space or Enter" data-ub-tag-separator=" " />
                </div>
                <div class="tab-pane" id="separator-code-tab-pane" role="tabpanel" aria-labelledby="separator-code-tab">
                  <pre><code class="language-html">{codeSeparator}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="duplicate-preview-tab" data-bs-toggle="tab" data-bs-target="#duplicate-preview-tab-pane" type="button" role="tab" aria-controls="duplicate-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="duplicate-code-tab" data-bs-toggle="tab" data-bs-target="#duplicate-code-tab-pane" type="button" role="tab" aria-controls="duplicate-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Allow duplicates</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="duplicate-preview-tab-pane" role="tabpanel" aria-labelledby="duplicate-preview-tab">
                  <input type="text" class="form-control" value="html,css,js,js" data-ub-tag-duplicate />
                </div>
                <div class="tab-pane" id="duplicate-code-tab-pane" role="tabpanel" aria-labelledby="duplicate-code-tab">
                  <pre><code class="language-html">{codeDuplicate}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="transform-preview-tab" data-bs-toggle="tab" data-bs-target="#transform-preview-tab-pane" type="button" role="tab" aria-controls="transform-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="transform-code-tab" data-bs-toggle="tab" data-bs-target="#transform-code-tab-pane" type="button" role="tab" aria-controls="transform-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Transform tags</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="transform-preview-tab-pane" role="tabpanel" aria-labelledby="transform-preview-tab">
                  <input type="text" class="form-control" value="HTML,CSS,JS" data-ub-tag-transform="input => input.toUpperCase()" />
                </div>
                <div class="tab-pane" id="transform-code-tab-pane" role="tabpanel" aria-labelledby="transform-code-tab">
                  <pre><code class="language-html">{codeTransform}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="disabled-preview-tab" data-bs-toggle="tab" data-bs-target="#disabled-preview-tab-pane" type="button" role="tab" aria-controls="disabled-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="disabled-code-tab" data-bs-toggle="tab" data-bs-target="#disabled-code-tab-pane" type="button" role="tab" aria-controls="disabled-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Disabled</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="disabled-preview-tab-pane" role="tabpanel" aria-labelledby="disabled-preview-tab">
                  <input type="text" class="form-control" value="html,css,js" disabled />
                </div>
                <div class="tab-pane" id="disabled-code-tab-pane" role="tabpanel" aria-labelledby="disabled-code-tab">
                  <pre><code class="language-html">{codeDisabled}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="label-preview-tab" data-bs-toggle="tab" data-bs-target="#label-preview-tab-pane" type="button" role="tab" aria-controls="label-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="label-code-tab" data-bs-toggle="tab" data-bs-target="#label-code-tab-pane" type="button" role="tab" aria-controls="label-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Label</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="label-preview-tab-pane" role="tabpanel" aria-labelledby="label-preview-tab">
                  <label for="example-label" class="form-label">Click here to focus</label>
                  <input type="text" class="form-control" value="html,css,js" id="example-label" />
                </div>
                <div class="tab-pane" id="label-code-tab-pane" role="tabpanel" aria-labelledby="label-code-tab">
                  <pre><code class="language-html">{codeLabel}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="xposition-preview-tab" data-bs-toggle="tab" data-bs-target="#xposition-preview-tab-pane" type="button" role="tab" aria-controls="xposition-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="xposition-code-tab" data-bs-toggle="tab" data-bs-target="#xposition-code-tab-pane" type="button" role="tab" aria-controls="xposition-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">(x) position</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="xposition-preview-tab-pane" role="tabpanel" aria-labelledby="xposition-preview-tab">
                  <div class="vstack gap-2">
                    <input type="text" class="form-control" value="left" data-ub-tag-x-position="left" />
                    <input type="text" class="form-control" value="right (default)" data-ub-tag-x-position="right" />
                  </div>
                </div>
                <div class="tab-pane" id="xposition-code-tab-pane" role="tabpanel" aria-labelledby="xposition-code-tab">
                  <pre><code class="language-html">{codePosition}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="sizing-preview-tab" data-bs-toggle="tab" data-bs-target="#sizing-preview-tab-pane" type="button" role="tab" aria-controls="sizing-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="sizing-code-tab" data-bs-toggle="tab" data-bs-target="#sizing-code-tab-pane" type="button" role="tab" aria-controls="sizing-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Sizing</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="sizing-preview-tab-pane" role="tabpanel" aria-labelledby="sizing-preview-tab">
                  <div class="vstack gap-2">
                    <input type="text" class="form-control form-control-sm" value="html,css,js" />
                    <input type="text" class="form-control" value="html,css,js" />
                    <input type="text" class="form-control form-control-lg" value="html,css,js" />
                  </div>
                </div>
                <div class="tab-pane" id="sizing-code-tab-pane" role="tabpanel" aria-labelledby="sizing-code-tab">
                  <pre><code class="language-html">{codeSizing}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="validation-preview-tab" data-bs-toggle="tab" data-bs-target="#validation-preview-tab-pane" type="button" role="tab" aria-controls="validation-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="validation-code-tab" data-bs-toggle="tab" data-bs-target="#validation-code-tab-pane" type="button" role="tab" aria-controls="validation-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Validation</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="validation-preview-tab-pane" role="tabpanel" aria-labelledby="validation-preview-tab">
                  <form class="needs-validation vstack gap-3" novalidate>
                    <div>
                      <input type="text" class="form-control" name="tags" placeholder="Add a tag" required />
                      <div class="invalid-feedback">This field is required.</div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <button class="btn btn-secondary" type="submit">Submit</button>
                  </form>
                  <h6 class="mt-4">Server-side</h6>
                  <div class="vstack gap-3">
                    <div>
                      <input type="text" class="form-control is-invalid" placeholder="Add a tag" />
                      <div class="invalid-feedback">This field is required.</div>
                    </div>
                    <div>
                      <input type="text" class="form-control is-valid" placeholder="Add a tag" value="use,bootstrap,tag" />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="validation-code-tab-pane" role="tabpanel" aria-labelledby="validation-code-tab">
                  <pre><code class="language-html">{codeValidation}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="methods-preview-tab" data-bs-toggle="tab" data-bs-target="#methods-preview-tab-pane" type="button" role="tab" aria-controls="methods-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="methods-code-tab" data-bs-toggle="tab" data-bs-target="#methods-code-tab-pane" type="button" role="tab" aria-controls="methods-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Methods</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="methods-preview-tab-pane" role="tabpanel" aria-labelledby="methods-preview-tab">
                  <div class="vstack gap-3">
                    <input type="text" class="form-control" value="html,css,js" id="example" />
                    <div class="hstack gap-3 flex-wrap">
                      <button class="btn btn-sm btn-success" type="button" id="addValue-string">
                        <code class="text-white">addValue('react')</code>
                      </button>
                      <button class="btn btn-sm btn-success" type="button" id="addValue-string-with-separator">
                        <code class="text-white">addValue('vue,svelte')</code>
                      </button>
                      <button class="btn btn-sm btn-success" type="button" id="addValue-array">
                        <code class="text-white">addValue(['solid', 'qwik'])</code>
                      </button>
                      <button class="btn btn-sm btn-warning" type="button" id="removeValue-string">
                        <code class="text-black">removeValue('react')</code>
                      </button>
                      <button class="btn btn-sm btn-warning" type="button" id="removeValue-string-with-separator">
                        <code class="text-black">removeValue('vue,svelte')</code>
                      </button>
                      <button class="btn btn-sm btn-warning" type="button" id="removeValue-array">
                        <code class="text-black">removeValue(['solid', 'qwik'])</code>
                      </button>
                      <button class="btn btn-sm btn-info" type="button" id="getValue">
                        <code class="text-black">getValue()</code>
                      </button>
                      <button class="btn btn-sm btn-info" type="button" id="getValues">
                        <code class="text-black">getValues()</code>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="methods-code-tab-pane" role="tabpanel" aria-labelledby="methods-code-tab">
                  <pre><code class="language-html">{codeMethods}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-4">
          <div class="card h-100">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="variant-preview-tab" data-bs-toggle="tab" data-bs-target="#variant-preview-tab-pane" type="button" role="tab" aria-controls="variant-preview-tab-pane" aria-selected="true">Preview</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link" id="variant-code-tab" data-bs-toggle="tab" data-bs-target="#variant-code-tab-pane" type="button" role="tab" aria-controls="variant-code-tab-pane" aria-selected="false">Code</button></li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Variants</h5>
              <div class="tab-content">
                <div class="tab-pane show active" id="variant-preview-tab-pane" role="tabpanel" aria-labelledby="variant-preview-tab">
                  <div class="vstack gap-2">
                    <input type="text" class="form-control" value="html,css,js" data-ub-tag-variant="primary" />
                    <input type="text" class="form-control" value="html,css,js" data-ub-tag-variant="success" />
                    <input type="text" class="form-control" value="html,css,js" data-ub-tag-variant="danger" />
                    <input type="text" class="form-control" value="html,css,js" data-ub-tag-variant="warning" />
                    <input type="text" class="form-control" value="html,css,js" data-ub-tag-variant="info" />
                    <input type="text" class="form-control" value="html,css,js" data-ub-tag-variant="dark" />
                    <input type="text" class="form-control" value="html,css,js" data-ub-tag-variant="light" />
                  </div>
                </div>
                <div class="tab-pane" id="variant-code-tab-pane" role="tabpanel" aria-labelledby="variant-code-tab">
                  <pre><code class="language-html">{codeVariant}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between gap-3 mt-4">
        <a href="/install" class="btn btn-link link-body-emphasis text-decoration-none border d-inline-flex flex-column align-items-start w-50">
          <span class="text-body-secondary small">Previous page</span>
          Install
        </a>
        <a href="/api" class="btn btn-link link-body-emphasis text-decoration-none border d-inline-flex flex-column align-items-end w-50">
          <span class="text-body-secondary small">Next page</span>
          API
        </a>
      </div>
    </div>
  )
}
