import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.faqList.helpers({
  query:function(){
    return CallCenterQueries.find();
  }
});

Template.faqList.events({
  'click #october':function(){
    Router.go('queries', {season: 'KHARIF'});
  },
  'click #december':function(){
    Router.go('queries', {season: 'JAYAD'});
  }
});
