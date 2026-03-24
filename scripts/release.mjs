#!/usr/bin/env node
/**
 * Release Helper Script
 *
 * Usage:
 *   node scripts/release.mjs             # Interactive mode
 *   node scripts/release.mjs --dry-run   # Preview without changes
 *   node scripts/release.mjs --major     # Bump major version
 *   node scripts/release.mjs --minor     # Bump minor version
 *   node scripts/release.mjs --patch     # Bump patch version
 */

import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { argv } from 'process'

const isDryRun = argv.includes('--dry-run')
const bumpType = argv.includes('--major')
  ? 'major'
  : argv.includes('--minor')
    ? 'minor'
    : argv.includes('--patch')
      ? 'patch'
      : null

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'))
const currentVersion = packageJson.version

console.log('\n🚀 Release Helper')
console.log('==================')
console.log(`Current version: ${currentVersion}`)
console.log(`Mode: ${isDryRun ? 'DRY RUN' : 'LIVE'}\n`)

if (isDryRun) {
  console.log('🔍 Dry run mode - no changes will be made\n')
}

if (!bumpType) {
  console.log('Select bump type:')
  console.log('  --major  : Breaking changes (1.0.0 → 2.0.0)')
  console.log('  --minor  : New features (1.0.0 → 1.1.0)')
  console.log('  --patch  : Bug fixes (1.0.0 → 1.0.1)')
  console.log('\nOr use: npm run release (recommended)\n')
  process.exit(0)
}

console.log(`Bump type: ${bumpType}\n`)

const bumppArgs = [`--${bumpType}`]
if (isDryRun) bumppArgs.push('--dry-run')
bumppArgs.push('--commit', '--push', '--tag')

const command = `npx bumpp ${bumppArgs.join(' ')}`

console.log(`Running: ${command}\n`)

if (!isDryRun) {
  try {
    execSync(command, { stdio: 'inherit' })
    console.log('\n✅ Release created successfully!')
    console.log('\n📝 Next steps:')
    console.log('   1. GitHub Actions will automatically:')
    console.log('      - Run lint, typecheck, and build')
    console.log('      - Generate changelog')
    console.log('      - Create GitHub Release')
    console.log('      - Deploy to Vercel (production)\n')
  } catch (error) {
    console.error('\n❌ Release failed')
    process.exit(1)
  }
}
