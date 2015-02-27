//Custom elements Simple Example
//
//
// Creates an object based in the HTML Element prototype
var myElement = Object.create(HTMLElement.prototype);

// Fires when an instance of the element is created
myElement.createdCallback = function() {
  var value = this.getAttribute('attr1');
  this.attributeChangedCallback('attr1', '', value);
};

// Fires when an instance was inserted into the document
myElement.attachedCallback = function() {};

// Fires when an instance was removed from the document
myElement.detachedCallback = function() {};

// Fires when an attribute was added, removed, or updated
myElement.attributeChangedCallback = function(attr, oldVal, newVal) {
  this.innerHTML = 'Time: ' +  newVal;
};

document.registerElement('exemple-one', {
    prototype: myElement
});

function change(){
  var elem = document.querySelector('exemple-one');
  elem.setAttribute('attr1',  '' + new Date().getTime());
}
