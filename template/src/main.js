{{#if_eq build "standalone"}}
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import request from 'superagent';

//shared methods
import methods from './modules/methods'

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

new Vue({
  el: '#app',
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
