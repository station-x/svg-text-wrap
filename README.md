For when you have a target and you want your svg to wrap like html within that. (does not hyphen-ate)

# Install

`npm install svg-text-wrap`

# Usage

```javascript
import textWrap from 'svg-text-wrap'

const text = "A really long string that you probably want to make fit"
const textArray = textWrap(text, 100, { 'letter-spacing': '1px' })

// textArray will look something like 
// [
//   "A really long string",
//   "that you probably",
//   "want to make fit"
// ]
```

see [svg-text-size](https://github.com/station-x/svg-text-size) if you'd like to work with these dimensions.
