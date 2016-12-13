# angular-dropdown-directive

The project contains a scripts folder hich contains the controllers and directive. 

In order to use the custom dropdown directive, open the main.html file under views folder and inside the just enter

```
<dropdown dvlist="driverVehicleList" ng-model="selected" selected="selected">
```

Here `driverVehicleList` is a list of drivers and vehicles objects in the following format:
 
```
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
    	.
    	. 
    	.,
    	{
       		"vehicle" : {
    			id : "53L2",
    			name: "Swift Dezire",
    			imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQszuJo090uOy4FrZTsxBi8imZBtu7qnkcZhADqhWzolS83xmQxRQ"
    		}

    	},
    	.
    	.
    	.,
    	{
    		"driver" : {
    			name: "Anil Sharma",
    			contact: "+77232423",
    			imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
    		}
    	},
    	.
    	.
    	. 
    ];
```
Also the `ng-model` mentioned inside the tag is the model which will be containing the `selected` value and can be used later.

The directive can be used multiple times with same or different data but each directive must have a unique `ng-model` defined inside it.
