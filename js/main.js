var MultiplesApp = function() {
  'use strict';

  var CONST = {
    maxNumber: 144
  };

  var FIELD = {
    elementList: document.getElementById('number-list'),
    elementListItem: null
  };

  var init = function() {

    FIELD.elementListItem = generateList(FIELD.elementList, CONST.maxNumber);

    Array.prototype.forEach.call(FIELD.elementListItem, function(element, index) {
      element.addEventListener('click', handleNumberClick);
    });

  };

  var generateList = function(element, max) {
    for (var i = 0; i < max; i++) {
      var listItem = document.createElement('li');
      listItem.dataset.value = i + 1;
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

      var array = [];

      for (var i = 0; i <= CONST.maxNumber; i++) {
        var remainder = i % elementValue;
        if (remainder === 0) {
          array.push(i)
        }
      }

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
