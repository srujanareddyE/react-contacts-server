const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 'srujana',
      name: 'srujana enduri',
      handle: '@SrujanaReddyE',
      avatarURL: config.origin + '/srujana.jpg'
    },
    {
      id: 'reddy',
      name: 'Sujju Reddy',
      handle: '@SrujanaReddyE',
      avatarURL: config.origin + '/dp.jpg'
    },
    {
      id: 'enduri',
      name: 'Enduri srujana',
      handle: '@SrujanaReddyE',
      avatarURL: config.origin + '/srujana.jpg'
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
