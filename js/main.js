var MultiplesApp = function() {
  'use strict';

  var MAX_NUMBER = 144;

  var FIELD = {
    elementList: document.getElementById('number-list'),
    elementListItem: null
  };

  var init = function() {

    // setup UI
    FIELD.elementListItem = generateList(FIELD.elementList, MAX_NUMBER);

    // bind UI events
    Array.prototype.forEach.call(FIELD.elementListItem, function(element, index) {
      element.addEventListener('click', handleNumberClick);
    });

  };

  var generateList = function(element, max) {
    for (var i = 0; i < max; i++) {
      var listItem = document.createElement('li');
      listItem.setAttribute('data-value', i + 1);
      var text = document.createTextNode(i + 1);

      listItem.appendChild(text);
      element.appendChild(listItem);
    }

    return element.children;
  };

  var handleNumberClick = function(event) {
    if (event.target.classList.contains('active')) {

      Array.prototype.forEach.call(FIELD.elementListItem, function(element, index) {
        element.classList.remove('active');
      });

    } else {
      var elementValue = event.target.getAttribute('data-value');

      // create array of multiples
      var array = [];
      for (var i = 0; i <= MAX_NUMBER; i++) {
        var remainder = i % elementValue;
        if (remainder === 0) {
          array.push(i)
        }
      }

      // add class to <li>s that have a data-value listed in the array
      Array.prototype.forEach.call(FIELD.elementListItem, function(element, index) {
        if (array.indexOf(parseInt(element.getAttribute('data-value'))) != -1) {
          element.classList.add('active');
        }
      });

    }

  };

  return {
    init: init
  };
}();

MultiplesApp.init();
