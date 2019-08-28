module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
          content: [
              './dist/*.html'
          ],
          defaultExtractor: content => content.match(/[A-Za-z)-9-_:/]+/g) || []
      })
    ]
  }