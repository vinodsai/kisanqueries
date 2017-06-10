import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.faqList.helpers({
  query: function(){
    return CallCenterQueries.find({ Season: Session.get('season'), Sector:  Session.get('sector') });
  }
});

Template.faqList.events({
  'click #season':function(e){
    e.preventDefault();
    var season = $('#season').val();
    Session.set('season', season);
  },
  'click #sector':function(){
    var sector = $('#sector').val();
    Session.set('sector', sector);
  }
});
