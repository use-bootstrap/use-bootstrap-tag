v2.2.0
  - Added no-input-onblur option.

v2.1.1
  - Updated to bootstrap v5.3.2.
  - Small improvements.

v2.1.0
  - Added max option.

v2.0.1
  - Some rendering improvements.

v2.0.0
  - Rewrite project back to vanilla-js to improve performance and reduce size.
  - Pressing Enter is now the default action for adding a tag. Previously, users had to include an attribute option.
  - Now pressing Backspace on a focused tag deletes it and shifts focus to the previous tag, while pressing Delete deletes the tag and moves focus to the next one.
  - Fixed the tag with long text not breaking words.
  - Fixed server-side validation styles.
  - Fixed where adding existing values programmatically did not trigger a warning for duplicate tags.

v1.0.3
  - Remove placeholder when input value is not empty (native input placeholder behavior).

v1.0.2
  - Fixed lost focus after deleting the focused tag with the backspace or delete key (Firefox only).

v1.0.1
  - Fixed docs.

v1.0.0
  - Named export to default export.
  - Added transition.
  - Added variant option.
  - Added x-position option.
  - Added focusable tag, when it focused you can press backspace or delete key to remove it.
  - Fixed clicking label not focusing input.
