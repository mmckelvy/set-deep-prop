const test = require('tape')
const { inspect } = require('util')

const setObject = require('../set-object')

test('setObject', function(t) {
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

  setObject(obj, ['order', 'customer', 'name'], 'Bill Johnson')

  t.equal(
    obj.order.customer.name,
    'Bill Johnson',
    'Should set a deeply nested key / val'
  )

  t.end()
})

test('setObject', function(t) {
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

  setObject(obj, ['order', 'items', 0, 'fruit'], 'pear')

  t.equal(
    obj.order.items[0].fruit,
    'pear',
    'Should work for arrays'
  )

  t.end()
})

test('setObject', function(t) {
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

  setObject(obj, ['order', 'items', 1, 'regions', 1, 'state'], 'Alabama')

  t.equal(
    obj.order.items[1].regions[1].state,
    'Alabama',
    'Should work for objects nested in arrays'
  )

  t.end()
})
