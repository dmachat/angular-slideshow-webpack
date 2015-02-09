/**
 *
 * angularSlideshow: An angular slideshow demo
 *
 * @author Drew Machat <drew@alleyinteractive.com>
 * @url http://github.com/dmachat/angular-slideshow
 */

/**
 * @ngdoc module
 * @name Slideshow
 * @description angularSlideshow: An angular slideshow demo
 * @example
 * <doc: example>
 *   <doc: source>
 *     <script>
 *       var app = angular.module('myApp', 'dmachat.angularSlideshow']);
 *     </script>
 *     <div angular-slideshow
 *       data="myData"
 *       >
 *     </div>
 *   </doc: source>
 * </doc: example>
 */

'use strict';

// Define the module and add dependencies
angular

  .module('dmachat.angularSlideshow', [])

  // Use snake case when defining the directive in markup
  // @example
  // <angular-slideshow data="myData" />
  .directive('angularSlideshow', directive);

import './directive.scss';

// ngtemplate-loader fills the template cache after the module runs
import './directive.html';

function directive() {
  return {
    // The directive template string
    templateUrl: 'directive/directive.html',

    // The directive controller
    controller: controller,

    // Localize the controller in the template to avoid scope
    // @example
    // <span>{{ vm.activeIndex }}</span>
    controllerAs: 'vm',

    // If you had isolate scope values, bind them to the controller this
    //bindToController: true
  };
}

function controller() {
  /* jshint validthis: true */
  var vm = this,
      imageUrl = 'http://lorempixel.com/200/200';

  vm.imageList = [
    imageUrl
  ];

  vm.newUrl = imageUrl;
  vm.activeIndex = 0;
  vm.addUrl = function(newUrl) {
    vm.imageList.push(newUrl); 
    vm.activeIndex++;
  };
}
