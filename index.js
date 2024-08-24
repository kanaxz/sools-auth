const { HasMany } = require('sools-modeling/types')
const User = require('./User')
const Identity = require('./Identity')


Identity.properties({
  user: {
    type: User,
  }
})

User.properties({
  identities: {
    type: HasMany.of(Identity)
  }
})

module.exports = {
  User,
  Identity,
}