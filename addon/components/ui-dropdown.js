import Ember from 'ember';
import Base from '../mixins/base';
import DataAttributes from '../mixins/data-attributes';

export default Ember.Component.extend(Base, DataAttributes, {
  module: 'dropdown',
  classNames: [ 'ui', 'dropdown' ],
  tagName: 'div',

  didInsertElement() {
    this._super(...arguments);
    var selected = this.get('selected');
    if (typeof selected !== "undefined" && selected !== null) {
      this.set('boundValue', 'selected');
      this.execute('set selected', this.getSelected(selected));
    }

    var value = this.get('value');
    if (typeof value !== "undefined" && value !== null) {
      Ember.deprecate('Bind to selected on ui-dropdown instead of value as semantic doesn\'t update the display when the value is set', false);
      this.set('boundValue', 'value');
      this.execute('set value', this.getValue(value));
    }
  },
  
  getSelected(selected) {
    return selected;
  },
  
  getValue(value) {
    return value;
  },

  _onChange: function(value/*, text, $element*/) {
    this.set(this.get('boundValue') || 'selected', value);
  }
});
