import { For } from 'solid-js'
import { description, license, name, repository, version } from '../../../package.json'

export default function Home() {
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

  return (
    <div>
      <h3 class="fw-bold">{name}</h3>
      <p>{description}</p>
      <div class="d-flex flex-wrap gap-2">
        <For each={badges}>
          {badge => <img src={`https://img.shields.io/${badge.src}/${name}${badge.src.startsWith('bundle') ? `/${version}` : ''}`} alt={badge.alt} />}
        </For>
      </div>
      <hr />
      <h4 class="fw-bold">Features</h4>
      <ul class="text-body-secondary">
        <li><b>Custom separator</b>: Set a specific delimiter character between tag elements.</li>
        <li><b>Enable/disable duplicates</b>: Toggle the allowance of duplicate tags.</li>
        <li><b>Custom transformation</b>: Define personalized modifications to input tag entries.</li>
        <li><b>Max limit</b>: Set a maximum limit of tags that can be added.</li>
        <li><b>Sizing</b>: Adjustable sizing to match user preferences or layouts.</li>
        <li><b>Validation</b>: Reflects validation states visually to align with Bootstrap's form validationfeedback.</li>
      </ul>
      <hr />
      <h4 class="fw-bold">Repository</h4>
      <a class="link-body-emphasis" href={repository} target="_blank">{repository}</a>
      <hr />
      <h4 class="fw-bold">License</h4>
      {license}
      <div class="d-flex justify-content-between gap-3">
        <span />
        <a href="/install" class="btn btn-outline-secondary text-decoration-none border d-inline-flex flex-column align-items-end w-50">
          <span class="small">Next page</span>
          Install
        </a>
      </div>
    </div>
  )
}
