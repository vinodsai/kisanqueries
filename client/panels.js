Template.panels.helpers({
  count: function(){
    return CallCenterQueries.find().count();
  },
  countKharif: function(){
    return CallCenterQueries.find({Season:'KHARIF'}).count();
  },
  countJayad: function(){
    return CallCenterQueries.find({Season:'JAYAD'}).count();
  },
  countRabi: function(){
    return CallCenterQueries.find({Season:'RABI'}).count();
  }
});
