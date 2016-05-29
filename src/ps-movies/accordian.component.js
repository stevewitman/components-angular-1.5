(function() {
  "use strict";

  var module = angular.module("psMovies");

  module.component("accordian", {
    transclude: true,
    template: "<div class='panel-group' ng-transclude></div>"
  });

  module.component("accordianPanel", {
    transclude: true,
    template: "<div class='panel panel-default'>" +
                "<div class='panel-body' ng-transclude>" +
                "</div>" +
              "</div>"
  });
}());
