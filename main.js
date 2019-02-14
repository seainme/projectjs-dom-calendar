var olga = function (selector) {
    var el;
  
    var obj = {
      // 1
      get(selector) {
        if (el) return el;
        return document.querySelector(selector);
      },
      // 2
      add(elem) {
        var newEl = document.createElement(elem);
        el.appendChild(newEl);
        return this;
      },
      // 3
      delete() {
        el.parentNode.removeChild(el);
      },
      // 4
      changeAttrs(newAttrs) {
        for (var attr in newAttrs) {
          el.setAttribute(attr, newAttrs[attr]);
        };
        return this;
      },
      changeText(newText) {
        el.textContent = newText;
        return this;
      },
      changeHtml(newHtml) {
        el.innerHTML = newHtml;
        return this;
      },
      changeStyle(newStyles) {
        for (var style in newStyles) {
          el.style[style] = newStyles[style];
        };
        return this;
      },
      // 5
      getParent() {
        el = el.parentNode;
        return this;
      },
      getPrevious() {
        el = el.previousElementSibling;
        return this;
      },
      getNext() {
        el = el.nextElementSibling;
        return this;
      },
      getChildren() {
        return el.children;
      }
    };
  
    el = obj.get(selector);
    return obj;
  }


