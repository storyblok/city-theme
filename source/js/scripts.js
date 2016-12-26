window.jQuery = require('../../node_modules/jquery/dist/jquery.min.js')
require('../../node_modules/uikit/dist/js/uikit.min.js')
require('../../node_modules/uikit/dist/js/components/sticky.min.js')
require('../../node_modules/uikit/dist/js/components/lightbox.min.js')


jQuery(document).ready(function() {
  jQuery('[data-blok-form]').on('submit', function(event) {
    event.preventDefault()

    var formData = jQuery(event.currentTarget).serialize()
    jQuery(event.currentTarget).html('Loading...')

    storyblok.sendEmail(formData,
      function(data) {
        jQuery(event.currentTarget).html('Message sent successfully')
      },
      function(data) {
        jQuery(event.currentTarget).html('Something went wrong. Please try again.')
      })
  })
})
