/*
 * Brainrex API
 * Provides anomaly detection and natural language processing technlogies to blockchain developers.
 *
 * OpenAPI spec version: 1.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Brainrex);
  }
}(this, function(expect, Brainrex) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Brainrex.LanguageApi();
  });

  describe('(package)', function() {
    describe('LanguageApi', function() {
      describe('languageGetCryptoEntities', function() {
        it('should call languageGetCryptoEntities successfully', function(done) {
          // TODO: uncomment, update parameter values for languageGetCryptoEntities call
          /*
          var text = new Brainrex.Text();
          text.text = "";

          instance.languageGetCryptoEntities(text, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('languageGetGeneralSentiment', function() {
        it('should call languageGetGeneralSentiment successfully', function(done) {
          // TODO: uncomment, update parameter values for languageGetGeneralSentiment call and complete the assertions
          /*
          var text = new Brainrex.Text();
          text.text = "";

          instance.languageGetGeneralSentiment(text, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('languageGetPriceSentiment', function() {
        it('should call languageGetPriceSentiment successfully', function(done) {
          // TODO: uncomment, update parameter values for languageGetPriceSentiment call and complete the assertions
          /*
          var text = new Brainrex.Text();
          text.text = "";

          instance.languageGetPriceSentiment(text, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
