'use strict'

const { sanitizor } = use('Validator')

const Database = use('Database')

const BasicHook = exports = module.exports = {}

BasicHook.link = async (objectInstance) => {
  if (objectInstance.title) {
    if (!objectInstance.link)
      objectInstance.link = sanitizor.slug(objectInstance.title)
  }
}

BasicHook.setForeignOne = async (objectInstance) => {
  await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')
}

BasicHook.setForeignZero = async (objectInstance) => {
  await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
}
