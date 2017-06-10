CallCenterQueries = new Mongo.Collection('CallCenterQueries');

CallCenterQueries.allow({
  insert: function() {
    return true;
  }
});

CallCenterQueries.deny({

});
