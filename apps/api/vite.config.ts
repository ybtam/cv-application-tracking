/// <reference types="vitest" />

import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      enabled: true,
      exclude: [
        ...configDefaults.exclude,
        "**/html/**",
        "**/src/index.ts",
        "**/test/utils/**",
      ],
      provider: 'istanbul',
      reporter: ['html'],
      reportsDirectory: '.coverage'
    },
    reporters: ['html']
  }
})
