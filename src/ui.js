/* eslint react/react-in-jsx-scope: 0, react/display-name: 0 */
'use strict'
const { h, Text } = require('ink') // eslint-disable-line no-unused-vars
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'Website',
    url: 'https://tech-ooitanojohn.vercel.app/',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/ooitanojohn',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/ooitanojohn',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/ooitanojohn',
  },
  {
    label: 'diary',
    url: 'https://jaco-blo.vercel.app',
  },
  {
    label: 'Quit',
    action() {
      process.exit() // eslint-disable-line no-process-exit,unicorn/no-process-exit
    },
  },
]

module.exports = () => (
  <div>
    <br />⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    <div>
  <br />
      <Text>I’m a vanila developer.</Text>
      <br />
      <Text>Like: cute, keyboard, art.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
