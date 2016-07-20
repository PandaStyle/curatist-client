<template>
    <div v-if="$loadingRouteData">Loading ...</div>

    <div class="search-view grid">


        <span class="whatareyoulooking">What are you looking for?</span>
        <div id="test"></div>

    </div>

</template>

<script type="text/babel">

    export default {
        name: 'SearchView',

        data () {

        },


        ready () {
            var myCallback = function() {
                if (document.readyState == 'complete') {
                    // Document is ready when CSE element is initialized.
                    // Render an element with both search box and search results in div with id 'test'.
                    google.search.cse.element.render(
                            {
                                div: "test",
                                tag: 'search'
                            });
                } else {
                    // Document is not ready yet, when CSE element is initialized.
                    google.setOnLoadCallback(function() {
                        // Render an element with both search box and search results in div with id 'test'.
                        google.search.cse.element.render(
                                {
                                    div: "test",
                                    tag: 'search'
                                });
                    }, true);
                }
            };

// Insert it before the CSE code snippet so that cse.js can take the script
// parameters, like parsetags, callbacks.
            window.__gcse = {
                parsetags: 'explicit',
                callback: myCallback
            };

            (function() {
                var cx = '014240080729319046247:j34cutf-yao';
                var gcse = document.createElement('script');
                gcse.type = 'text/javascript';
                gcse.async = true;
                gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(gcse, s);
            })();
        }
    }
</script>

<style lang="sass">

    .whatareyoulooking {
        text-align: left;
    }

    .gsc-control-cse {
        background-color: transparent !important;
        border: none !important;
    }

    .gsc-webResult.gsc-result, .gsc-results .gsc-imageResult {
        background-color: transparent !important;
        border: none !important;
        text-align: left !important;
    }

    .gs-web-image-box, .gs-promotion-image-box {
        text-align: left !important;
        width: 250px !important;
    }

    .gs-web-image-box img.gs-image, .gs-promotion-image-box img.gs-promotion-image {
        max-width: 200px !important;
        max-height: 1240px !important;
        width: 100% !important;
        height: auto !important;
    }

    .gs-per-result-labels {
        display: none;
    }

    .gsc-input input {
        background: none repeat scroll 0% 0% transparent !important;
        padding: 10px 6px !important;
    }

    .gs-title, .gs-title a, .gs-title b {
        font-weight: bold !important;
        font-size: 20px !important;
        text-decoration: none !important;

        font-weight: 700 !important;
        font-size: 24px !important;

    }

    .gsc-tabsArea {
        display: none !important;
    }

    .gs-webResult .gs-snippet, .gs-imageResult .gs-snippet, .gs-fileFormatType {
        padding-top: 5px !important;
        font-size: 15px !important;

        font-weight: 700 !important;
        color: #968f8f !important;
    }

    .gsc-url-bottom {

        font-weight: 700 !important;
    }

    .gsc-refinementsArea, .gsc-above-wrapper-area {
        border-bottom: none !important;
    }

    .gsc-refinementsArea {
        padding-bottom: 15px !important;
        padding-top: 20px !important;

    }

    .cse .gsc-cursor-box, .gsc-cursor-box {
        border-top: none !important;
    }

    .gsc-results .gsc-cursor-box .gsc-cursor-page {
        background-color: transparent !important;
    }

    .cse input.gsc-search-button, input.gsc-search-button {
        height: 40px !important;
    }

    .gsc-search-button {
        padding-left: 10px !important;
    }

    .gsc-url-bottom {
        padding-top: 5px !important;
    }

    form.gsc-search-box {
        margin: 0 auto !important;
        max-width: 600px !important;
    }







  @media only screen and (max-width: 500px) {
      .gsc-table-cell-snippet-close, .gs-promotion-text-cell {
          display: none;
      }
      .gs-web-image-box, .gs-promotion-image-box {
          width: 100%;
      }
  }


    @import "../styles/searchview.scss";
</style>



