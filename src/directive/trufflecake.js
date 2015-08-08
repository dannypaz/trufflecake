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

				if(attrs.tcYearRange)
					range = attrs.tcYearRange;

				scope.trufflecake = {};

				scope.trufflecake.Months = [
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
				];

				scope.trufflecake.Days = function () {
					var currentYear = new Date();
					var year = parseInt((currentYear.getFullYear() - 18), 10);
					if(scope.selectedYear)
						year = parseInt(scope.selectedYear, 10);
					var month = parseInt(1,10);
					if(scope.selectedMonth){
						month = parseInt(scope.selectedMonth.Value, 10);
					}
					var num = new Date(year, month, 0).getDate();
					var i;
					var days = [];
					for (i = 1; i <= num; i++) {
						days.push(String(i)); 
					}
					return days;
				};

				scope.trufflecake.Years = function(){
					var currentYear = new Date();
					//Legal age of 18 as of today's date
					var legalAgeYear = new Date(currentYear.getFullYear() - 18, currentYear.getMonth(), currentYear.getDate());
					var years = [];
					for(var i=0; i<attrs.tcYearRange; i++){
						years.push(legalAgeYear.getFullYear()-i);
					}
					return years;
				};
			}
		}
	});
})();