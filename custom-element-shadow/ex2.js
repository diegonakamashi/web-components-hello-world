//Custom elements + Shadow DOM
//
//
// Creates an object based in the HTML Element prototype
var myElement = Object.create(HTMLElement.prototype);

// Fires when an instance of the element is created
myElement.createdCallback = function() {

  var shadow = this.createShadowRoot();
  shadow.innerHTML = "<div id='shadow'></div>";

};

// Fires when an instance was inserted into the document
myElement.attachedCallback = function() {};

// Fires when an instance was removed from the document
myElement.detachedCallback = function() {};

// Fires when an attribute was added, removed, or updated
myElement.attributeChangedCallback = function(attr, oldVal, newVal) {
  this.shadowRoot.querySelector('#shadow').innerHTML = newVal;
};

document.registerElement('exemple-two', {
    prototype: myElement
});

function change(){
  var elem = document.querySelector('exemple-two');
  elem.setAttribute('attr1',  '' + new Date().getTime());
}

function tryQueryShadow(){
  var shadow = document.querySelector('#shadow');

  alert('Try to query Shadow. Success: ' + !!shadow);
}
