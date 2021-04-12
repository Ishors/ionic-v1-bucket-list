'use strict';

// Register `bucketList` component, along with its associated controller and template
angular.
  module('bucketList').
  component('bucketList', {
    templateUrl: 'bucket-list/bucket-list.template.html',
    controller: ['$ionicPopup', function BucketListController($ionicPopup) {
      var wishList =[
        {id: 1, title: "Sauter en parachute", description: "Sauter en parachute accompagné puis apprendre à le faire solo", dueDate: 2021, photo: "sauter-en-parachute.png", completed: false},
        {id: 2, title: "Chiens de traîneaux", description: "Le must serait dans les pays du Nord, sinon les pyrénées c'est pas mal aussi", dueDate: 2022, photo: "chiens-de-traîneaux.png", completed: false},
        {id: 3, title: "Voir une aurore boréale", description: "Aucune description", dueDate: 2050, photo: "voir-une-aurore-boreale.png", completed: false},
        {id: 4, title: "Travailler en Antarctique", description: "Pour une durée de 12 à 18 mois loin de tout", dueDate: 2027, photo: "travailler-en-antarctique.png", completed: false},
        {id: 5, title: "Monter ma marque", description: "Oyats vie", dueDate: 2022, photo: "monter-ma-marque.png", completed: false},
        {id: 6, title: "Visiter l'Islande", description: "Faire le tour de l'île en van en 2 semaines", dueDate: 2025, photo: "visiter-lislande.png", completed: false},
        {id: 7, title: "Road-trip Italie du Nord", description: "En van", dueDate: 2023, photo: "road-trip-italie-du-nord.png", completed: false},
        {id: 8, title: "Voyage Amérique du Sud", description: "Salar et compagnie, me voilà !", dueDate: 2023, photo: "voyage-amerique-du-sud.png", completed: false},
        {id: 9, title: "Vivre dans les bois", description: "Laisse tomber le kiff interdimentionnel", dueDate: 2070, photo: "vivre-dans-les-bois.png", completed: false}
      ];
      this.wishes = wishList.sort(function(a, b) {
        return a.dueDate - b.dueDate;
      });

      this.notWishes = {title: "Seems like there is no matching item in your bucket list"};

      this.details = function(title){
        var tempTitle, tempDesc, tempDueDate, tempPhoto;
        for (var i = 0; i < this.wishes.length; i++) {
          if (this.wishes[i].title == title) {
            tempTitle = this.wishes[i].title;
            tempDesc = this.wishes[i].description;
            tempDueDate = this.wishes[i].dueDate;
            tempPhoto = this.wishes[i].photo;
          }
        }
        $ionicPopup.alert({
          /*title: '<div class="item bg">' +
            '<h2>' + tempTitle + '</h2>' +
            '<p>' + tempDueDate + '</p></div>',
          template: '<div class="item item-body">' +
            '<img class="full-image" src="img/' + tempPhoto + '">' +
            '<p>' + tempDesc + '</p></div>'*/
          title:'<img class="full-image rounded" src="img/' + tempPhoto + '">',
          template:
          '<h3>'+tempTitle+'</h3>'+
          '<p class="italic">Deadline : '+tempDueDate+'</p>'+
          '<p>'+tempDesc+'</p>',
          /*buttons: [
            {
              text: 'Cancel',
            },
            {
              text: 'Save',
            }
          ],*/
          cssClass:'popUp'
        })
      };
      this.infoClicked = false;
      
      this.info = function(){
        this.infoClicked = !this.infoClicked;
      }
    }
  ]
});
