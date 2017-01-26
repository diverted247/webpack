import Vue from 'vue'
import App from './App'
import request from 'superagent';



//shared methods
import methods from './modules/methods'

//shared services
import services from './modules/services'

//shared model data
import model from './modules/model'

var app = {}
app.model = model;
app.services = services;
app.methods = methods;
window.app = app;

request.get( '/static/meetup.json' ).end(function(err, res){
    if( err ){
      console.log( err );
      return;
    }else{
      var result = JSON.parse( res.text );
      console.log( result );
      model.members = result.results;
    }
});


//start root Vue...
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})