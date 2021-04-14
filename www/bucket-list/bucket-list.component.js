'use strict';

// Register `bucketList` component, along with its associated controller and template
angular.
  module('bucketList').
  component('bucketList', {
    templateUrl: 'bucket-list/bucket-list.template.html',
    controller: ['$ionicPopup','$http', function BucketListController($ionicPopup, $http) {
      var self = this;

      self.orderProp = 'deadline';

      $http.get('items/items.json').then(function(response) {
        self.wishes = response.data;
      });

      self.details = function(title){
        var tempTitle, tempDesc, tempDeadline, tempPhoto;
        for (var i = 0; i < self.wishes.length; i++) {
          if (self.wishes[i].title == title) {
            tempTitle = self.wishes[i].title;
            tempDesc = self.wishes[i].description;
            tempDeadline = self.wishes[i].deadline;
            tempPhoto = self.wishes[i].photo;
          }
        }
        $ionicPopup.alert({
          title:'<img class="full-image rounded" src="img/' + tempPhoto + '">',
          template:
          '<h3>'+tempTitle+'</h3>'+
          '<p class="italic">Deadline : '+tempDeadline+'</p>'+
          '<p>'+tempDesc+'</p>',
          cssClass:'popUp'
        })
      };
    }
  ]
});
