import codeBasic from '../code/basic.html.txt'
import codePlaceholder from '../code/placeholder.html.txt'
import codeSeparator from '../code/separator.html.txt'
import codeDuplicate from '../code/duplicate.html.txt'
import codeTransform from '../code/transform.html.txt'
import codeEnter from '../code/enter.html.txt'
import codeDisabled from '../code/disabled.html.txt'
import codeSizing from '../code/sizing.html.txt'
import codeValidation from '../code/validation.html.txt'
import codeMethods from '../code/methods.html.txt'

export function Example() {
  return (
    <>
      <h2 className="fw-bold mb-4">Example</h2>
      <div className="row g-5" id="masonry-row">
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="basic-preview-tab" data-bs-toggle="tab" data-bs-target="#basic-preview-tab-pane" type="button" role="tab" aria-controls="basic-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="basic-code-tab" data-bs-toggle="tab" data-bs-target="#basic-code-tab-pane" type="button" role="tab" aria-controls="basic-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Basic</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="basic-preview-tab-pane" role="tabpanel" aria-labelledby="basic-preview-tab">
                  <input type="text" className="form-control" defaultValue="red,green,blue" />
                </div>
                <div className="tab-pane" id="basic-code-tab-pane" role="tabpanel" aria-labelledby="basic-code-tab">
                  <pre><code className="language-html">{codeBasic}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="placeholder-preview-tab" data-bs-toggle="tab" data-bs-target="#placeholder-preview-tab-pane" type="button" role="tab" aria-controls="placeholder-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="placeholder-code-tab" data-bs-toggle="tab" data-bs-target="#placeholder-code-tab-pane" type="button" role="tab" aria-controls="placeholder-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Placeholder</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="placeholder-preview-tab-pane" role="tabpanel" aria-labelledby="placeholder-preview-tab">
                  <input type="text" className="form-control" placeholder="Add a color then press comma" />
                </div>
                <div className="tab-pane" id="placeholder-code-tab-pane" role="tabpanel" aria-labelledby="placeholder-code-tab">
                  <pre><code className="language-html">{codePlaceholder}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="separator-preview-tab" data-bs-toggle="tab" data-bs-target="#separator-preview-tab-pane" type="button" role="tab" aria-controls="separator-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="separator-code-tab" data-bs-toggle="tab" data-bs-target="#separator-code-tab-pane" type="button" role="tab" aria-controls="separator-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Custom separator</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="separator-preview-tab-pane" role="tabpanel" aria-labelledby="separator-preview-tab">
                  <input type="text" className="form-control" placeholder="Add a color then press space" data-ub-tag-separator=" " />
                </div>
                <div className="tab-pane" id="separator-code-tab-pane" role="tabpanel" aria-labelledby="separator-code-tab">
                  <pre><code className="language-html">{codeSeparator}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="duplicate-preview-tab" data-bs-toggle="tab" data-bs-target="#duplicate-preview-tab-pane" type="button" role="tab" aria-controls="duplicate-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="duplicate-code-tab" data-bs-toggle="tab" data-bs-target="#duplicate-code-tab-pane" type="button" role="tab" aria-controls="duplicate-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Allow duplicates</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="duplicate-preview-tab-pane" role="tabpanel" aria-labelledby="duplicate-preview-tab">
                  <input type="text" className="form-control" defaultValue="red,red,green,green,blue" data-ub-tag-duplicate />
                </div>
                <div className="tab-pane" id="duplicate-code-tab-pane" role="tabpanel" aria-labelledby="duplicate-code-tab">
                  <pre><code className="language-html">{codeDuplicate}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="transform-preview-tab" data-bs-toggle="tab" data-bs-target="#transform-preview-tab-pane" type="button" role="tab" aria-controls="transform-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="transform-code-tab" data-bs-toggle="tab" data-bs-target="#transform-code-tab-pane" type="button" role="tab" aria-controls="transform-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Transform tags</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="transform-preview-tab-pane" role="tabpanel" aria-labelledby="transform-preview-tab">
                  <input type="text" className="form-control" defaultValue="RED,GREEN,BLUE" data-ub-tag-transform="input => input.toUpperCase()" />
                </div>
                <div className="tab-pane" id="transform-code-tab-pane" role="tabpanel" aria-labelledby="transform-code-tab">
                  <pre><code className="language-html">{codeTransform}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="enter-preview-tab" data-bs-toggle="tab" data-bs-target="#enter-preview-tab-pane" type="button" role="tab" aria-controls="enter-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="enter-code-tab" data-bs-toggle="tab" data-bs-target="#enter-code-tab-pane" type="button" role="tab" aria-controls="enter-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Add tag when pressing Enter</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="enter-preview-tab-pane" role="tabpanel" aria-labelledby="enter-preview-tab">
                  <input type="text" className="form-control" data-ub-tag-enter placeholder="Add a tag, then press comma or Enter" />
                </div>
                <div className="tab-pane" id="enter-code-tab-pane" role="tabpanel" aria-labelledby="enter-code-tab">
                  <pre><code className="language-html">{codeEnter}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="disabled-preview-tab" data-bs-toggle="tab" data-bs-target="#disabled-preview-tab-pane" type="button" role="tab" aria-controls="disabled-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="disabled-code-tab" data-bs-toggle="tab" data-bs-target="#disabled-code-tab-pane" type="button" role="tab" aria-controls="disabled-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Disabled</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="disabled-preview-tab-pane" role="tabpanel" aria-labelledby="disabled-preview-tab">
                  <input type="text" className="form-control" defaultValue="red,green,blue" disabled />
                </div>
                <div className="tab-pane" id="disabled-code-tab-pane" role="tabpanel" aria-labelledby="disabled-code-tab">
                  <pre><code className="language-html">{codeDisabled}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="sizing-preview-tab" data-bs-toggle="tab" data-bs-target="#sizing-preview-tab-pane" type="button" role="tab" aria-controls="sizing-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="sizing-code-tab" data-bs-toggle="tab" data-bs-target="#sizing-code-tab-pane" type="button" role="tab" aria-controls="sizing-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Sizing</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="sizing-preview-tab-pane" role="tabpanel" aria-labelledby="sizing-preview-tab">
                  <div className="vstack gap-2">
                    <input type="text" className="form-control form-control-sm" defaultValue="red,green,blue" />
                    <input type="text" className="form-control" defaultValue="red,green,blue" />
                    <input type="text" className="form-control form-control-lg" defaultValue="red,green,blue" />
                  </div>
                </div>
                <div className="tab-pane" id="sizing-code-tab-pane" role="tabpanel" aria-labelledby="sizing-code-tab">
                  <pre><code className="language-html">{codeSizing}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="validation-preview-tab" data-bs-toggle="tab" data-bs-target="#validation-preview-tab-pane" type="button" role="tab" aria-controls="validation-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="validation-code-tab" data-bs-toggle="tab" data-bs-target="#validation-code-tab-pane" type="button" role="tab" aria-controls="validation-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Validation</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="validation-preview-tab-pane" role="tabpanel" aria-labelledby="validation-preview-tab">
                  <form className="needs-validation vstack gap-3" noValidate>
                    <div>
                      <input type="text" className="form-control" name="tags" placeholder="Add a tag" data-ub-tag-enter required />
                      <div className="invalid-feedback">This field is required.</div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                  </form>
                </div>
                <div className="tab-pane" id="validation-code-tab-pane" role="tabpanel" aria-labelledby="validation-code-tab">
                  <pre><code className="language-html">{codeValidation}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="methods-preview-tab" data-bs-toggle="tab" data-bs-target="#methods-preview-tab-pane" type="button" role="tab" aria-controls="methods-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="methods-code-tab" data-bs-toggle="tab" data-bs-target="#methods-code-tab-pane" type="button" role="tab" aria-controls="methods-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Methods</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="methods-preview-tab-pane" role="tabpanel" aria-labelledby="methods-preview-tab">
                  <div className="vstack gap-3">
                    <input type="text" className="form-control" defaultValue="red,green,blue" id="example" />
                    <div className="hstack gap-3 flex-wrap">
                      <button className="btn btn-sm btn-secondary" type="button" id="addValue1">
                        <code className="text-white">addValue('cyan')</code>
                      </button>
                      <button className="btn btn-sm btn-secondary" type="button" id="addValue2">
                        <code className="text-white">addValue(['light', 'dark'])</code>
                      </button>
                      <button className="btn btn-sm btn-secondary" type="button" id="removeValue1">
                        <code className="text-white">removeValue('cyan')</code>
                      </button>
                      <button className="btn btn-sm btn-secondary" type="button" id="removeValue2">
                        <code className="text-white">removeValue(['light', 'dark'])</code>
                      </button>
                      <button className="btn btn-sm btn-secondary" type="button" id="getValue">
                        <code className="text-white">getValue()</code>
                      </button>
                      <button className="btn btn-sm btn-secondary" type="button" id="getValues">
                        <code className="text-white">getValues()</code>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="methods-code-tab-pane" role="tabpanel" aria-labelledby="methods-code-tab">
                  <pre><code className="language-html">{codeMethods}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
