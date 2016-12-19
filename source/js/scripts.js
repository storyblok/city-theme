window.jQuery = require('../../node_modules/jquery/dist/jquery.min.js')
require('../../node_modules/uikit/dist/js/uikit.min.js')
require('../../node_modules/uikit/dist/js/components/sticky.min.js')
require('../../node_modules/uikit/dist/js/components/lightbox.min.js')


jQuery(document).ready(function($) {
  $('[data-blok-form]').on('submit', function(event) {
    event.preventDefault()
    storyblok.sendEmail($(event.currentTarget).serialize(), function(data) {
      console.log(data)
    }, function(data) {
      console.log(data)
    })
  })
})
