// Test :: Build
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-framework: build', function() {
  describe('build', function() {
    var style = `
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should build', function() {
      expect(output.css.length).to.exist;
    });
  });

  describe('publish', function() {
    var style = `
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should only be compiled once', function() {
      var $o = output.$('.tx-h1');

      expect($o.selectors.length).to.equal(1);
    });
  });
});
