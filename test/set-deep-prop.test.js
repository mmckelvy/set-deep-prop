const test = require('tape')

const setDeepProp = require('../set-deep-prop')

test('setDeepProp', function(t) {
  const obj = {
    order: {
      number: 243,
      customer: {
        name: 'John Smith',
        email: 'j@smith.com',
        city: 'LA'
      },
      items: [
        {
          fruit: 'apple',
          color: 'red',
          regions: [
            {
              state: 'Washington',
              city: 'Redmond'
            },
            {
              state: 'Maine',
              city: 'Portland'
            }
          ]
        },
        {
          fruit: 'grape',
          color: 'purple',
          regions: [
            {
              state: 'California',
              city: 'Sonoma'
            },
            {
              state: 'Oregon',
              city: 'Willamette'
            }
          ]
        }
      ]
    }
  }

  setDeepProp(obj, ['order', 'customer', 'name'], 'Bill Johnson')

  t.equal(
    obj.order.customer.name,
    'Bill Johnson',
    'Should set a deeply nested object'
  )

  t.end()
})

test('setDeepProp', function(t) {
  const obj = {
    order: {
      number: 243,
      customer: {
        name: 'John Smith',
        email: 'j@smith.com',
        city: 'LA'
      },
      items: [
        {
          fruit: 'apple',
          color: 'red',
          regions: [
            {
              state: 'Washington',
              city: 'Redmond'
            },
            {
              state: 'Maine',
              city: 'Portland'
            }
          ]
        },
        {
          fruit: 'grape',
          color: 'purple',
          regions: [
            {
              state: 'California',
              city: 'Sonoma'
            },
            {
              state: 'Oregon',
              city: 'Willamette'
            }
          ]
        }
      ]
    }
  }

  setDeepProp(obj, ['order', 'items', 0, 'fruit'], 'pear')

  t.equal(
    obj.order.items[0].fruit,
    'pear',
    'Should work with objects nested in arrays'
  )

  t.end()
})

test('setDeepProp', function(t) {
  const obj = {
    order: {
      number: 243,
      customer: {
        name: 'John Smith',
        email: 'j@smith.com',
        city: 'LA'
      },
      items: [
        {
          fruit: 'apple',
          color: 'red',
          regions: [
            {
              state: 'Washington',
              city: 'Redmond'
            },
            {
              state: 'Maine',
              city: 'Portland'
            }
          ]
        },
        {
          fruit: 'grape',
          color: 'purple',
          regions: [
            {
              state: 'California',
              city: 'Sonoma'
            },
            {
              state: 'Oregon',
              city: 'Willamette'
            }
          ]
        }
      ]
    }
  }

  setDeepProp(obj, ['order', 'items', 1, 'regions', 1, 'state'], 'Alabama')

  t.equal(
    obj.order.items[1].regions[1].state,
    'Alabama',
    'Should work for objects nested in arrays'
  )

  t.end()
})

test('setDeepProp', function(t) {
  const obj = {
    order: {
      number: 243,
      customer: {
        name: 'John Smith',
        email: 'j@smith.com',
        city: 'LA'
      },
      items: [
        'apple',
        'pear',
        'banana'
      ]
    }
  }

  setDeepProp(obj, ['order', 'items', 1], 'orange')

  t.equal(
    obj.order.items[1],
    'orange',
    'Should work for array props'
  )

  t.end()
})
