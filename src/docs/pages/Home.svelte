<script lang="ts">
  import { description, license, name, repository } from '../../../package.json'

  const badges = [
    {
      src: 'npm/v',
      alt: 'version',
    },
    {
      src: 'bundlephobia/minzip',
      alt: 'minified + gzip',
    },
    {
      src: 'npm/dm',
      alt: 'downloads per month',
    },
    {
      src: 'npm/types',
      alt: 'types',
    },
  ]
</script>

<div>
  <h3 class="fw-bold">{name}</h3>
  <p>{description}</p>
  <div class="d-flex flex-wrap gap-2">
    {#each badges as badge}
      <img
        src={`https://img.shields.io/${badge.src}/${name}`}
        alt={badge.alt}
      />
    {/each}
  </div>
  <hr />
  <h5 class="fw-bold">Features</h5>
  <ul class="text-body-secondary">
    <li>
      <b>Custom separator</b>
      : Set a specific delimiter character between tag elements.
    </li>
    <li>
      <b>Enable/disable duplicates</b>
      : Toggle the allowance of duplicate tags.
    </li>
    <li>
      <b>Custom transformation</b>
      : Define personalized modifications to input tag entries.
    </li>
    <li>
      <b>Sizing</b>
      : Adjustable sizing to match user preferences or layouts.
    </li>
    <li>
      <b>Validation</b>
      : Reflects validation states visually to align with Bootstrap's form validation
      feedback.
    </li>
  </ul>
  <hr />
  <h5 class="fw-bold">Repository</h5>
  <a class="link-body-emphasis" href={repository} target="_blank"
    >{repository}</a
  >
  <hr />
  <h5 class="fw-bold">License</h5>
  {license}
  <div class="d-flex justify-content-between gap-3">
    <span />
    <a
      href="/install"
      class="btn btn-link link-body-emphasis text-decoration-none border d-inline-flex flex-column align-items-end w-50"
    >
      <span class="text-body-secondary small">Next page</span>
      Install
    </a>
  </div>
</div>
