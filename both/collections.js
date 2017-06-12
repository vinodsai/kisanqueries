CallCenterQueries = new Mongo.Collection('CallCenterQueries');

CallCenterQueries.allow({
  insert: function() {
    return false;
  }
});

CallCenterQueries.deny({

});
