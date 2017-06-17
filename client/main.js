import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.faqList.helpers({
  query: function(){
    if(Session.get('season')==undefined && Session.get('sector')==undefined){
      return CallCenterQueries.find();
    }
    if(Session.get('season')==undefined || Session.get('sector')==undefined){
      return CallCenterQueries.find({ $or: [ { Season: Session.get('season') }, { Sector: Session.get('sector') } ] });
    }
    else{
      return CallCenterQueries.find({ Season: Session.get('season'), Sector:  Session.get('sector') });
    }
  }
});

Template.faqList.events({
  'change #season':function(){
    var season = $('#season').val();
    Session.set('season', season);
  },
  'change #sector':function(){
    var sector = $('#sector').val();
    Session.set('sector', sector);
  }
});
