# set-deep-prop
Sets the value for a deeply nested object or array.

## Example
```
const setDeepProp = require('set-deep-prop')

const obj = {
  order: {
    number: 123,
    items: [
      {
        sku: 1,
        description: 'shirt',
      },
      {
        sku: 2,
        description: 'pants'
      }
    ]
  }
}

setDeepProp(obj, ['order', 'items', 1, 'description'], 'hat')
console.log(obj.order.items[1].description) // 'hat'

```

## Installation
```
npm install --save set-deep-prop
```

## Test
```
npm test
```

## License
MIT
