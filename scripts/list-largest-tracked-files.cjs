const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const out = execSync('git ls-files', { encoding: 'utf8' })
const files = out.split(/\r?\n/).filter(Boolean)

const rows = []
for (const f of files) {
  const p = path.join(process.cwd(), f)
  if (!fs.existsSync(p)) continue
  const s = fs.statSync(p).size
  rows.push({ f, mb: s / 1024 / 1024 })
}

rows.sort((a, b) => b.mb - a.mb)
for (const r of rows.slice(0, 30)) {
  console.log(`${r.mb.toFixed(2)} MB\t${r.f}`)
}
