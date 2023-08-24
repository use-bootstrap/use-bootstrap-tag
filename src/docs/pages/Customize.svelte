<script lang="ts">
  import { onMount } from 'svelte'
  import prism from 'prismjs'

  onMount(() => {
    prism.highlightAll()
  })
</script>

<div>
  <h2 class="fw-bold mb-4">Customize</h2>
  <p>
    Assuming you’re using a package manager like npm, you’ll have a file
    structure that looks like this:
  </p>
  <pre><code class="language-bash"
      >your-project/
├── scss/
│   └── custom.scss
└── node_modules/
│   └── bootstrap/
│       ├── js/
│       └── scss/
│   └── use-bootstrap-tag/
│       ├── dist/
│       └── scss/
└── index.html</code
    ></pre>
  <p>
    In your <code>custom.scss</code>, you’ll import Bootstrap’s source Sass
    files. You have two options: include all of Bootstrap, or pick the parts you
    need.
  </p>
  <pre><code class="language-css"
      >// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/use-bootstrap-tag/scss/use-bootstrap-tag";

// Then add additional custom code here</code
    ></pre>
  <pre><code class="language-css"
      >// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets (including any separate color mode stylesheets)
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 6. Optionally include any other parts as needed
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "../node_modules/bootstrap/scss/utilities/api";

// 8. Include use-bootstrap-tag
@import "../node_modules/use-bootstrap-tag/scss/use-bootstrap-tag";

// 9. Add additional custom code here</code
    ></pre>
  <p>
    By default, use-bootstrap-tag inherits its style from default bootstrap
    style, so anything you change in bootstrap automatically changes
    use-bootstrap-tag style as well. Read more about customize bootstrap styles
    at <a
      href="https://getbootstrap.com/docs/5.3/customize/sass/"
      target="_blank">https://getbootstrap.com/docs/5.3/customize/sass/</a
    >.
  </p>
  <div class="d-flex justify-content-between gap-3 mt-4">
    <a
      href="/api"
      class="btn btn-link link-body-emphasis text-decoration-none border d-inline-flex flex-column align-items-start w-50"
    >
      <span class="text-body-secondary small">Previous page</span>
      API
    </a>
  </div>
</div>
