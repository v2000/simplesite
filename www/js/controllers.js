angular.module('starter.controllers', ['firebase','ionic'])



.controller('AppCtrl', function($scope, $state, $ionicModal, $timeout) {
console.log('AppCtrl AppCtrl AppCtrl');
var fb = new Firebase("https://sverigeru.firebaseio.com/playlists");
fb.set([

{
"id": 1,
"firmname"     : "Första företaget",
"firmkind"     : "butik",
"firmadress"   : "Nordlinds väg 95, 217 73 Malmö",
"firminfo"     : {"telefon"        : "0768855",
                  "site"           : "www.nova.se",
                  "logo"           : "https://sverigeru.firebaseapp.com/res/img/logo1.jpg",
                  "opentime"       : "10.00-15.00",
                  "opentimeholiday": "12.00- 13.00",
                  "info"           : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat ligula eu iaculis tincidunt. Praesent eget volutpat massa. Proin id pulvinar mauris. Duis sollicitudin felis suscipit risus facilisis, vel porttitor eros ullamcorper. Mauris sollicitudin sodales rutrum. Maecenas eu velit quis dolor mattis bibendum. Vivamus et egestas nunc. Sed consequat finibus orci sit amet sollicitudin. Suspendisse potenti. Vestibulum vitae pretium mauris. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean et lobortis sem. Sed accumsan efficitur mi eu sodales. Fusce nec justo ut augue vehicula egestas eu placerat ex. Nam vitae turpis at est ultricies faucibus aliquam."}
},

{
"id": 2,
"firmname"     : "Andra firman",
"firmkind"     : "restaurang",
"firmadress"   : "Gamla vägen 1, 275 61 Blentarp",
"firminfo"     : {"telefon"        : "0763333",
                  "site"           : "www.nova.se",
                  "logo"           : "https://sverigeru.firebaseapp.com/res/img/logo2.jpg",
                  "opentime"       : "10.00-17.00",
                  "opentimeholiday": "12.00- 15.00",
                  "info"           : "Praesent eget massa odio. Duis vitae tellus lectus. Curabitur condimentum tortor non augue maximus porttitor. Integer venenatis a lorem quis gravida. Nullam ligula dui, ultricies vel enim eget, ullamcorper accumsan ipsum. Phasellus malesuada nulla non quam facilisis convallis. Pellentesque blandit viverra ex, nec porta diam malesuada ac. Mauris feugiat venenatis iaculis. Donec gravida nibh nec tellus aliquet cursus. Donec in condimentum urna. Nullam quis arcu mi. In vestibulum commodo elit."}
},
{
"id": 3,
"firmname"     : "Tredje företag",
"firmkind"     : "restaurang",
"firmadress"   : "Stora Södergatan 6, 222 23 Lund",
"firminfo"     : {"telefon"        : "0763333",
                  "site"           : "www.nova.se",
                  "logo"           : "https://sverigeru.firebaseapp.com/res/img/logo3.jpg",
                  "opentime"       : "09.00-15.00",
                  "opentimeholiday": "10.00- 13.00",
                  "info"           : "Praesent hendrerit, neque sed lobortis eleifend, lectus nulla mattis lacus, vel scelerisque ante libero in diam. Phasellus nec ligula fringilla, convallis quam in, ornare odio. Curabitur pulvinar dapibus elit id scelerisque. Pellentesque varius nisl mattis libero ultrices, vitae luctus tellus pulvinar. Vivamus tellus arcu, sollicitudin ac dapibus et, eleifend id."}
},
{
"id": 4,
"firmname"     : "Fjärde företag",
"firmkind"     : "butik",
"firmadress"   : "Borgmästaregatan 11, 371 35 Karlskrona",
"firminfo"     : {"telefon"        : "0763333",
                  "site"           : "www.nova.se",
                  "logo"           : "https://sverigeru.firebaseapp.com/res/img/logo4.jpg",
                  "opentime"       : "10.00-16.00",
                  "opentimeholiday": "10.00- 15.00",
                  "info"           : "Nullam et fermentum est. Vivamus gravida commodo ligula, in scelerisque lorem euismod ac. Sed eget ultricies orci. Sed congue, orci ut scelerisque cursus, quam dolor blandit enim, et iaculis velit tortor id augue. Aliquam quis sodales orci. Sed sit amet mauris nec erat ornare tempor. Vivamus semper id urna ut tempor. Quisque consectetur dapibus dignissim. Quisque fringilla libero massa, eu rhoncus risus blandit non. Nunc suscipit a orci sollicitudin sagittis. Aenean nec congue neque. Donec sem nisi, finibus lacinia consequat vel, semper vel nunc. Maecenas fermentum, magna et vestibulum hendrerit, ex ex varius augue, quis scelerisque nibh sem vel justo. In rutrum orci non sem aliquam varius. Mauris rhoncus vulputate."}
},
{
"id": 5,
"firmname"     : "Femte företag",
"firmkind"     : "restaurang",
"firmadress"   : "Hallströmsgatan 7, 593 31 Västervik",
"firminfo"     : {"telefon"        : "0763333",
                  "site"           : "www.nova.se",
                  "logo"           : "https://sverigeru.firebaseapp.com/res/img/logo5.jpg",
                  "opentime"       : "08.00-17.00",
                  "opentimeholiday": "10.00- 15.00",
                  "info"           : "Proin venenatis, sem at ullamcorper lacinia, felis quam consequat purus, non ultrices turpis purus nec purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum eu hendrerit erat. Donec eu ante non orci pharetra pharetra id eget erat. In sem est, mattis non erat eu, mollis tincidunt erat. Maecenas nisl orci, aliquam nec elementum eget, iaculis quis nibh. Sed gravida, dui sed congue finibus, erat nisi finibus nisl, at semper neque eros."}
}
]);


	$scope.toggleLeft = function() {
	    $ionicSideMenuDelegate.toggleLeft();
	  };

})






.controller('FirmlistsCtrl', function($scope, $state, $firebase, $ionicLoading, $rootScope) {
   console.log('FirmlistsCtrl FirmlistsCtrl FirmlistsCtrl');
    $scope.loading = $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 200
  });

  var ref = new Firebase('https://sverigeru.firebaseio.com/playlists');
  $scope.playlists = $firebase(ref);
  console.log("$scope.playlists",$scope.playlists);

  $scope.playlists.$on("loaded", function() {
    console.log("Data loaded!");
    $rootScope.firms=$scope.playlists;
    console.log("$rootScope.firms[0].firmadress",$rootScope.firms[0].firmadress);
    $ionicLoading.hide();
  })

})





.controller('FirmlistCtrl', function($scope, $state, $stateParams, $firebase, $ionicLoading, $rootScope) {
  console.log('FirmlistCtrl FirmlistCtrl FirmlistCtrl');
  $scope.error = '';

  $scope.loading = $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 200
  });

  console.log('playlistId: ' + $stateParams.firmlistId);
  console.log("$stateParams",$stateParams);
  //$rootScope.firmlistId=$stateParams.firmlistId;
  var ref = new Firebase('https://sverigeru.firebaseio.com/playlists/' + ($stateParams.firmlistId-1));
  $scope.playlist = $firebase(ref);

  if(!$scope.playlist.firmname)
  {
    console.log("Error!");
    $scope.error = 'Oops! Something went wrong ... try again';
    $ionicLoading.hide();
  }
  else
  {
    $scope.playlist.$on("loaded", function() {
      $ionicLoading.hide();
    })
  }

})






.controller('MapCtrl', function($scope, $state, $stateParams, $firebase, $ionicLoading, $rootScope) {
 console.log('MapCtrl MapCtrl MapCtrl');
  var geocoder;
  geocoder = new google.maps.Geocoder();

   $scope.mapCreated = function(map) {
    $scope.map = map;
    getLatLngByAddress(map);
  };


function getLatLngByAddress(map) {
  $scope.map = map;
  var address = $rootScope.firms[0].firmadress;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


})






//it is will be controller for map that show one marker on alive google map (if person click to picture with map)
.controller('MapOneFirmCtrl', function($scope, $state, $stateParams, $firebase, $ionicLoading, $rootScope) {
  console.log('MapOneFirmCtrl MapOneFirmCtrl MapOneFirmCtrl');

  var geocoder;
  geocoder = new google.maps.Geocoder();

   $scope.mapCreated = function(map) {
    $scope.map = map;
    getLatLngByAddress(map);
  };


function getLatLngByAddress(map) {
  $scope.map = map;
  var address = $rootScope.firms[0].firmadress;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


})






.controller('SingleMapCtrl', function($scope, $stateParams, $firebase, $ionicLoading, $rootScope) {
console.log('SingleMapCtrl SingleMapCtrl SingleMapCtrl');

console.log('$stateParams.firmlistId', $stateParams);

var id=$stateParams.firmlistId;
  var geocoder;
  geocoder = new google.maps.Geocoder();

   $scope.mapCreated = function(map) {
    $scope.map = map;
    getLatLngByAddress(map);
    console.log("mapCreated mapCreated mapCreated");
  };


function getLatLngByAddress(map) {
  console.log("getLatLngByAddress getLatLngByAddress getLatLngByAddress");
  $scope.map = map;
  var address = $rootScope.firms[id-1].firmadress;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


})