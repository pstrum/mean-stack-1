// Organize and share code around out app
(function () {

  "use strict";

  angular.module("intellyApp").service("BlogsService", ["$http", function ($http) {

    var urlRoot = "/api/blog-post";

    var Blog = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $http.get(urlRoot + "/" + id);
        } else {
          return $http.get(urlRoot);
        }
      },
      update: function (model) {
        return $http.put(urlRoot + "/" + model._id, model);
      },
      create: function (model) {
        return $http.post(urlRoot, model);
      },
      delete: function (model) {
        return $http.delete(urlRoot + "/" + model._id);
      }
    };
    return Blog;
  }]);
}());
