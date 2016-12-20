window.jQuery = require('../../node_modules/jquery/dist/jquery.min.js')
require('../../node_modules/uikit/dist/js/uikit.min.js')
require('../../node_modules/uikit/dist/js/components/sticky.min.js')
require('../../node_modules/uikit/dist/js/components/lightbox.min.js')


jQuery(document).ready(function($) {
  $('[data-blok-form]').on('submit', function(event) {
    event.preventDefault()

    jQuery(event.currentTarget).html('Loading...')

    storyblok.sendEmail($(event.currentTarget).serialize(),
      function(data) {
        jQuery(event.currentTarget).html('Message sent successfully')
      },
      function(data) {
        jQuery(event.currentTarget).html('Something went wrong. Please try again.')
      })
  })
})
