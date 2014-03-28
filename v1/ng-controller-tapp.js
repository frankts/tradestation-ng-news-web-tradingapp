var ngTradingapp = angular.module('TradingApp', []);

ngTradingapp.controller('NewsListCtrl', function NewsListCtrl($scope) {
  $scope.newsitems = TradingApp.News.items();
  $scope.positions = TradingApp.Positions.items();

  $(TradingApp.News).bind("onUpdate", function(ev, headline) {
   $scope.$apply(TradingApp.News.items());
  });

  $(TradingApp.Positions).bind("onUpdate", function(ev, reason, positionID) {
   $scope.$apply(TradingApp.Positions.items());
  });

  $(TradingApp.Positions).bind("onRemove", function(ev, positionID) {
  $scope.$apply(TradingApp.Positions.items());
  });

  $(TradingApp.Positions).bind("onRealtimeUpdate", function(ev, reason, positionID, positionItem) {
     TradingApp.Positions.delegates().extend(positionID, positionItem);
     $scope.$apply(TradingApp.Positions.items());
  });

});

ngTradingapp.controller('AccountListCtrl', function AccountListCtrl($scope) {
  $scope.accounts = TradingApp.Accounts.items();

  $(TradingApp.Accounts).bind("onUpdate", function(ev, reason, accountID) {
  $scope.$apply(TradingApp.Accounts.items());
  });

  $(TradingApp.Accounts).bind("onRealtimeUpdate", function(ev, reason, accountID, accountItem) {
    TradingApp.Accounts.delegates().extend(accountID, accountItem);
  $scope.$apply(TradingApp.Accounts.items());
  });

});