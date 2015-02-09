'use strict';

describe('Unit: angularSlideshow', () => {
  var html = '<div angular-slideshow></div>',
      $compile,
      $rootScope;

  beforeEach(angular.mock.module('dmachat.angularSlideshow'));

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  it('should contain an image', () => {
    $compile(html)($rootScope);
    $rootScope.$digest();
    expect($rootScope.imageList.length).toBeGreaterThan(0);
  });
});
