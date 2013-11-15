var root = this;

$('domready', function(){
  root.SampleView = Backbone.View.extend({
    id: 'div_from_inside_the_view'
  , initialize: function(collection){
      this.collection = collection;
    }
  , events: {
      'click #update_1' : 'updateModel',
    }
  , render: function(){
      var self = this
        , models = self.collection.models;

      $.each(models, function(i, model){
        self.$el.append('<input type="text" value="' + model.get('name') + '" id="input_' + model.get('id') + '">' + ' <input type="button" value="Update" id="update_' + model.get('id') + '">');
      });

      return self
    }
  , updateModel: function(e){
      var self = this
        , model = self.collection.models[0];

      model.save({ 'name': $('#input_1').val() }, {
        success: function(data){
          console.log(data);
        }
      });
    }
  });
});
