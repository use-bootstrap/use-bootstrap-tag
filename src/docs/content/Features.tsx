export function Features() {
  return (
    <>
      <h2 className="fw-bold">Features</h2>
      <ul className="text-body-secondary">
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
          : Reflects validation states visually to align with Bootstrap's form validation feedback.
        </li>
      </ul>
    </>
  )
}
