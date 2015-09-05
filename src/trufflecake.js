(function (){
  'use strict';

  angular.module('ngTruffleCake', []).

  directive('truffleCake', function(){
    return {
      restrict: 'AE',
      template: '<div class="col-lg-4">' + 
            '<select class="form-control" data-ng-model="selectedMonth" data-ng-options="month as month.Name for month in trufflecake.Months">' + 
            '<option value="">Select A Month</option>'+
            '</select>' +
            '</div>' +
            '<div class="col-lg-4">' +
            '<select class="form-control" data-ng-model="selectedDay" data-ng-options="day for day in trufflecake.Days()">' +
            '<option value="">Select A Day</option>' +
            '</select>' +
            '</div>' +
            '<div class="col-lg-4">' +
            '<select class="form-control" data-ng-model="selectedYear" data-ng-options="year for year in trufflecake.Years()">' +
            '<option value="">Select A Year</option>' +
            '</select>' +
            '</div>', 
      link: function(scope, element, attrs){
        var range = null;

        if(attrs.tcYearRange){
          range = attrs.tcYearRange;
        }

        scope.trufflecake = {
          Months: [
            {'Name': 'January', 'Value': '1'},
            {'Name': 'February', 'Value': '2'},
            {'Name': 'March', 'Value': '3'},
            {'Name': 'April', 'Value': '4'},
            {'Name': 'May', 'Value': '5'},
            {'Name': 'June', 'Value': '6'},
            {'Name': 'July', 'Value': '7'},
            {'Name': 'August', 'Value': '8'},
            {'Name': 'September', 'Value': '9'},
            {'Name': 'October', 'Value': '10'},
            {'Name': 'November', 'Value': '11'},
            {'Name': 'December', 'Value': '12'},
          ],
          // Depending on the year + month, return the number
          // of days
          Days: function() {
            var currentYear = new Date().getFullYear();
            var year = scope.selectedYear ? scope.selectedYear : currentYear - 18;
            var month = scope.selectedMonth ? scope.selectedMonth.Value : 1;

            var num = new Date(parseInt(year), parseInt(month), 0).getDate();
            var days = [];
            for(var i = 1; i <= num; i++) {
              days.push(String(i)); 
            }
            return days;
          },
          // Grab current date and generate exact date of
          // legal age (18)
          Years: function(){
            var currentDate = new Date();
            var legalYear = (currentDate.getFullYear() - 18);
            var legalMonth = currentDate.getMonth();
            var legalDay = currentDate.getDate();

            //Legal age of 18 as of today's date
            var legalAgeDate = new Date(legalYear, legalMonth, legalDay);
            var years = [];
            for(var i=0; i<attrs.tcYearRange; i++){
              years.push(legalAgeDate.getFullYear()-i);
            }
            return years;
          }
        };

      }
    };
  });
})();
