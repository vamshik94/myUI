angular.module('adminApp',[]).controller('user-control',function($scope) {
            // body...
            $scope.userdata =
            [
                {
                    sno:'',
                    fname:'vamshi',
                    lname:'krishna',
                    age:23,
                    gender:'male'
                },
                {
                    sno:'',
                    fname:'sai',
                    lname:'varun',
                    age:24,
                    gender:'male'
                },
                {
                    sno:'',
                    fname:'bindu',
                    lname:'srisailapu',
                    age:22,
                    gender:'female'
                }
                ];
        });