app.controller('mainCtrl', function($scope, $firebaseObject) {
  // connect firebase
  var ref = firebase.database().ref();
  // sync as object and 3 way data binding
  var syncObject = $firebaseObject(ref); //$firebaseObject(ref) gets the data in json
  syncObject.$bindTo($scope, "days");

  $scope.reset = function() {
    ref.set({
      monday: {
        name: 'Monday',
        slots: {
          900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
            booked: false
          },
          500: {
            time: '5:00pm',
            booked: false
          },
          700: {
            time: '7:00pm',
            booked: false
          }
    	  }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
            booked: false
          },
          500: {
            time: '5:00pm',
            booked: false
          },
          700: {
            time: '7:00pm',
            booked: false
          }
    	  }
      },
      wednesday: {
        name: 'Wednesday',
        slots: {
          900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
            booked: false
          },
          500: {
            time: '5:00pm',
            booked: false
          },
          700: {
            time: '7:00pm',
            booked: false
          }
    	  }
      }
    });
  };
});
