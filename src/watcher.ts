const fs = require('fs')
const filewatcher = require('filewatcher')
const sharp = require('sharp')

function requireUncached(module) {
  delete require.cache[require.resolve(module)]
  return require(module)
}

function generateTheme() {
  const { base, schema, svg } = requireUncached('./theme')
  fs.writeFile('themes/prescient-color-theme.json', schema(base), (err) => err && console.log(err))

  delete base.colors.black
  delete base.colors.transparent
  sharp(Buffer.from(svg(base).trim()), { density: 400 })
    .png()
    .toFile('assets/dots.png')
  console.log('assets saved ...')
}

const watcher = filewatcher()
watcher.add('src/theme.ts')

watcher.on('change', function (file) {
  console.log(`${file} modified`)
  generateTheme()
})

generateTheme()
