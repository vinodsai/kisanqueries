Template.queriesKharif.onRendered(function () {
  Session.set('sector', undefined);
  Session.set('category', undefined);
});

Template.queriesKharif.events({
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

Template.queriesKharif.helpers({
  kharifQuery: function(){
    if(Session.get('sector')==undefined && Session.get('category')==undefined){
      return CallCenterQueries.find({Season: 'KHARIF'});
    }
    if(Session.get('sector')==undefined || Session.get('category')==undefined){
      return CallCenterQueries.find({Season:'KHARIF', $or: [ { Sector: Session.get('sector') }, { Category: Session.get('category') }] });
    }
    else{
      return CallCenterQueries.find({ Sector: Session.get('sector'), Category:  Session.get('category'), Season: 'KHARIF' });
    }
  },
  result: function(){
    if(Session.get('sector')==undefined && Session.get('category')==undefined){
      return CallCenterQueries.find({Season: 'KHARIF'}).count();
    }
    if(Session.get('sector')==undefined || Session.get('category')==undefined){
      return CallCenterQueries.find({Season:'KHARIF', $or: [ { Sector: Session.get('sector') }, { Category: Session.get('category') } ] }).count();
    }
    else{
      return CallCenterQueries.find({ Sector: Session.get('sector'), Category:  Session.get('category'), Season: 'KHARIF'}).count();
    }
  }
});
