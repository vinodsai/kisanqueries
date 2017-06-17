Template.queriesRabi.onRendered(function () {
  Session.set('sector', undefined);
  Session.set('category', undefined);
});
Template.queriesRabi.events({
  'change #sector':function(){
    var sector = $('#sector').val();
    Session.set('sector', sector);
    console.log(sector);
  },
  // 'change #blockname':function(){
  //   var blockname = $('#blockname').val();
  //   Session.set('blockname', blockname);
  //   console.log(blockname);
  // },
  'change #category':function(){
    var category = $('#category').val();
    Session.set('category', category);
    console.log(category);
  }
});

Template.queriesRabi.helpers({
  jayadQuery: function(){
    if(Session.get('sector')==undefined && Session.get('category')==undefined){
      return CallCenterQueries.find({Season: 'RABI'});
    }
    if(Session.get('sector')==undefined || Session.get('category')==undefined){
      return CallCenterQueries.find({Season:'RABI', $or: [ { Sector: Session.get('sector') }, { Category: Session.get('category') }] });
    }
    else{
      return CallCenterQueries.find({ Sector: Session.get('sector'), Category:  Session.get('category'), Season: 'RABI' });
    }
  },
  result: function(){
    if(Session.get('sector')==undefined && Session.get('category')==undefined){
      return CallCenterQueries.find({Season: 'RABI'}).count();
    }
    if(Session.get('sector')==undefined || Session.get('category')==undefined){
      return CallCenterQueries.find({Season:'RABI', $or: [ { Sector: Session.get('sector') }, { Category: Session.get('category') } ] }).count();
    }
    else{
      return CallCenterQueries.find({ Sector: Session.get('sector'), Category:  Session.get('category'), Season: 'RABI'}).count();
    }
  }
});
