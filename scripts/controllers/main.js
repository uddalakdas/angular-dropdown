'use strict';

/**
 * @ngdoc function
 * @name angularDropdownApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDropdownApp
 */
angular.module('angularDropdownApp')
  .controller('MainCtrl', function ($scope) {
    //$scope.selected1 = undefined;
    $scope.driverVehicleList = [
    	{
    		"driver" : {
    			name: "Rishi Das",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L2016P",
    			name: "Maruti 800",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
    		"driver" : {
    			name: "Steve Johnson",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L321",
    			name: "Maruti Alto",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
    		"driver" : {
    			name: "Mark Robinson",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L4512",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
       		"vehicle" : {
    			id : "53L2",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
    		"driver" : {
    			name: "Anil Sharma",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		}
    	},
    	{
    		"driver" : {
    			name: "Mark Robinson",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L4512",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
    		"driver" : {
    			name: "Mark Robinson",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L4512",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
    		"driver" : {
    			name: "Mark Robinson",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L4512",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
    		"driver" : {
    			name: "Mark Robinson",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L4512",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
    		"driver" : {
    			name: "Mark Robinson",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L4512",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
    		"driver" : {
    			name: "Mark Robinson",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L4512",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
    		"driver" : {
    			name: "Mark Robinson",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L4512",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	{
    		"driver" : {
    			name: "Mark Robinson",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		},
    		"vehicle" : {
    			id : "L4512",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	}
    ]
  });
