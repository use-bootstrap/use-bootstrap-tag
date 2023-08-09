
# use-bootstrap-tag

Tag input for Bootstrap 5


## Features

- **Custom separator**: Set a specific delimiter character between tag elements.
- **Enable/disable duplicates**: Toggle the allowance of duplicate tags.
- **Custom transformation**: Define personalized modifications to input tag entries.
- **Sizing**: Adjustable sizing to match user preferences or layouts.
- **Validation**: Reflects validation states visually to align with Bootstrap's form validation feedback.
## Installation

Install use-bootstrap-tag from npm:

```bash
npm install use-bootstrap-tag
```

## Usage/Examples

After installation, you can import the library into your project as follows

```javascript
import 'use-bootstrap-tag/dist/use-bootstrap-tag.css'
import { UseBootstrapTag } from 'use-bootstrap-tag'
```

or, since it also comes with an IIFE bundle, you can insert it directly into your HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Use Bootstrap Tag demo</title>
    <link href="https://unpkg.com/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="node_modules/use-bootstrap-tag/dist/use-bootstrap-tag.min.css" rel="stylesheet">
  </head>
  <body>
    <input type="text" class="form-control" id="example">
    <script src="https://unpkg.com/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="node_modules/use-bootstrap-tag/dist/use-bootstrap-tag.min.js"></script>
  </body>
</html>
```

Once you imported the library, you can initiate it

```javascript
const example = UseBootstrapTag(document.getElementById('example'))
```


## Options

All options are embedded in attributes:

```html
data-ub-tag-separator
data-ub-tag-duplicate
data-ub-tag-transform
data-ub-tag-enter
```

```html
<input class="form-control" data-ub-tag-separator=" " data-ub-tag-duplicate data-ub-tag-transform="input => input.toUpperCase()" data-ub-tag-enter>
```
## Methods

| Name    | Params          | Returns         | Example                           |
|---------|-----------------|-----------------|-----------------------------------|
| addValue  | string \| array | void    | `example.addValue('cyan')`<br/>`example.addValue(['light', 'dark'])`    |
| removeValue  | string \| array | void    | `example.removeValue('cyan')`<br/>`example.removeValue(['light', 'dark'])`    |
| getValue  | null            | string  | `example.getValue()`  |
| getValues | null            | array   | `example.getValues()` |

## License

[MIT](./LICENSE)
