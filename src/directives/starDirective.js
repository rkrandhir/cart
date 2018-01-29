myApp.directive('starDirective', function(){
   return {
       restrict: 'E', /* ECMA: Element ClassName Comment Attribute */
       replace: true, /*it will remove <starDirective> tag in view source;
                       replace method replaces the custom element instead of wrapping it in our directive call.*/
       template: `
        <div class='starRating rating{{item.rating}}'></div>
       `
   }
});