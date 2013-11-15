var root = this;

$('domready', function(){
  root.SampleModel = Backbone.Model.extend();

  root.SampleCollection = Backbone.Collection.extend({
    model: SampleModel
  , url: '/home'
  });
});

