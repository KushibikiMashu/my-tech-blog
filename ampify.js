'use strict';

const recursive = require('recursive-readdir');
const fs = require('fs');
const ampify = require('ampifyjs');
const sass = require('node-sass');
const config = require('./config');

const GA_TRACKING_ID = config.googleAnalyticsId;

//  The director that we will be creating an amp verion of.
//  Creating an amp version ultimately means creating an 'amp'
//  directory in that with amp versions of each file from the source.
const inputDir = 'public/amp';

// This is where we will populate the last of files to convert
const filesToConvert = [];

// Get a list of all the files in the public directory. But ignore the amp dir
recursive(inputDir, [], (err, files) => {
  // Files is an array of file paths. Lets just get the html files
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    // Only select files that end in '.html'.
    if (file.endsWith('.html')) {
      filesToConvert.push(file);
    }
  }

  // For each file, modify it to add the amp page reference and then create the amp
  // version
  // eslint-disable-next-line no-restricted-syntax
  for (const fileToConvert of filesToConvert) {
    const urlPath = fileToConvert.replace(inputDir, ''); // No inputDir in the URL
    const contents = fs.readFileSync(fileToConvert, 'utf8');
    // Add the amp url link to the top of the page then Save the file
    fs.writeFileSync(fileToConvert, ampify(contents, urlPath, ($) => {
      /** ************************************************************************************
       * Replace certain elements on the page for AMP specifically
       ************************************************************************************ */
      $('amp-iframe').attr('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox');
      $('amp-iframe').attr('layout', 'responsive');
      $('amp-video').attr('layout', 'responsive');
      $('amp-video').attr('height', '270');
      $('amp-video').attr('width', '450');
      $('amp-img').attr('layout', 'responsive');
      $('amp-img').attr('height', '270');
      $('amp-img').attr('width', '450');

      // Google Analytics
      $('head').append('<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>');
      $('amp-analytics').remove();
      $('body').prepend(`<amp-analytics type="googleanalytics" id="analytics1">\
        <script type="application/json">{"vars": {"account": "${GA_TRACKING_ID}"},"triggers": {"trackPageview": {"on": "visible","request": "pageview"}}}</script>\
        </amp-analytics>`);

      // *************************************************************************************
      // * STYLES
      // *************************************************************************************
      // We are using Sass so we need to get each of the styles we need
      // for the amp version of the pages and compile it to minified sass.
      const webpackStats = JSON.parse(fs.readFileSync('public/webpack.stats.json'));
      const files = webpackStats.namedChunkGroups.app.assets.filter((file) => file.endsWith('.css'));
      let css = files.map((file) => sass.renderSync({
        file: `public/${file}`,
        outputStyle: 'compressed'
      }).css.toString()).join('');
      css += sass.renderSync({ file: 'src/assets/amp/svg.scss', outputStyle: 'compressed' }).css.toString();

      // Remove all important tags since they are not permitted in amp styles
      css = css.replace(/!important/g, '');

      // Add our new style to the head as required my amp
      $('head').prepend(`<style amp-custom>${css}</style>`);

      // Gatsbyの最適化をAMP対応のために外す
      $('amp-img').removeAttr('loading');

      const tags = $('picture');

      if (tags.length > 0) {
        // pictureタグ内のsourceを削除
        tags.children('source').remove();
        // pictureタグをamp-imgタグに変更
        tags.each((_, element) => {
          const ampImg = $(element).html().trim();
          $(element).replaceWith(ampImg);
        });
      }
    }), 'utf8');
  }
  console.log('The site is now AMP ready');
});
