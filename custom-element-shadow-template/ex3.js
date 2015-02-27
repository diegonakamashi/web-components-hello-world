//Custom elements + Shadow DOM + template
//
//
// Creates an object based in the HTML Element prototype
var myElement = Object.create(HTMLElement.prototype);

// Fires when an instance of the element is created
myElement.createdCallback = function() {
  var template = document.querySelector('#templ');
  var clone = document.importNode(template.content, true);
  var shadow = this.createShadowRoot();
  shadow.appendChild(clone);

};

// Fires when an instance was inserted into the document
myElement.attachedCallback = function() {};

// Fires when an instance was removed from the document
myElement.detachedCallback = function() {};

// Fires when an attribute was added, removed, or updated
myElement.attributeChangedCallback = function(attr, oldVal, newVal) {
  this.shadowRoot.querySelector('p').innerHTML = newVal;
};

document.registerElement('exemple-three', {
    prototype: myElement
});

function change(){
  var elem = document.querySelector('exemple-three');
  elem.setAttribute('attr1',  '' + new Date().getTime());
}

function tryQueryShadow(){
  var shadow = document.querySelector('#shadow');

  alert('Try to query Shadow. Success: ' + !!shadow);
}
