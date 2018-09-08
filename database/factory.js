'use strict'

const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('Langs/Langs', async (faker, i, data) => {
  return Array.isArray(data) ? data[i] : data
})

Factory.blueprint('Auths/User', async (faker, i, data) => {
  return Array.isArray(data) ? data[i] : data
})
