'use strict';

// Register `header` component, along with its associated controller and template
angular.
  module('header').
  component('header', {
    templateUrl: 'header/header.template.html',

    controller: ['$ionicPopup','$rootScope','$http', function BucketListController($ionicPopup, $rootScope, $http) {
      var self = this;
      self.currentDate = new Date();

      self.newWish = function(){
        var $scope = $rootScope.$new();

        $scope.data = {};
        var myPopup = $ionicPopup.show({
          title:'<h3>Add a new item to your list</h3>',
          template:
            "<div class='list list-inset'>"+
              "<label class='item item-input'>"+
                "<input type='text' ng-model='data.title' placeholder='Title' required>"+
              "</label>"+
              "<label class='item item-input'>"+
                "<input type='number' ng-model='data.deadline' min='"+this.currentDate.getFullYear()+"' placeholder='Deadline' required>"+
              "</label>"+
              "<label class='item item-input'>"+
                "<input type='text' ng-model='data.description' placeholder='Description' required>"+
              "</label>"+
            "</div>",
          scope: $scope,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Add',
              type: 'button-positive',
              onTap: function(e) {
                if (!$scope.data.title || !$scope.data.deadline || !$scope.data.description) {
                   //don't allow the user to close unless he enters model...
                   e.preventDefault();
                } else {
                  var newItem = {
                    id: 32,
                    title: $scope.data.title,
                    description: $scope.data.description,
                    deadline: $scope.data.deadline,
                    photo: "32.png",
                    completed: false
                  }

                   return newItem;
                }
              }
            }
          ]
        });
        myPopup.then(function(res) {
          if (res !== undefined){
            console.log('Tapped!', res);

            /*var post = $http({
              method: "POST",
              url: "items/items.json",
              data: JSON.stringify(res),
              headers: { "Content-Type": "application/json" }
              });*/
  
            $http.post('items/items.json', JSON.stringify(res), {"Content-Type": "application/json"}).then(function(response) {
              $ionicPopup.alert({
                title: 'WORKING'
              });
            }, function(response){
              $ionicPopup.alert({
                  title: 'NOT WORKING'
              });
            });
          }

        });
      };
    }]
  });