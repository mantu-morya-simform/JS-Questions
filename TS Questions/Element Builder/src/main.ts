// Implement ElementBuilder that allows:

/*
const div = new ElementBuilder("div")
  .addClass("container")
  .setAttribute("id", "main")
  .addChild("p", "Hello World")
  .style("color", "blue")
  .build();
  */

class ElementBuilder {
  private element: HTMLElement;
  constructor(tag: string) {
    this.element = document.createElement(tag);
  }

  addClass(className: string) {
    this.element.classList.add(className);
    return this;
  }

  setAttribute(attributeName: string, value: string) {
    this.element.setAttribute(attributeName, value);
    return this;
  }

  addChild(tageType: string, content: string) {
    let childElement = document.createElement(tageType);
    childElement.textContent = content;
    this.element.appendChild(childElement);
    return this;
  }

  style(styleType: string, styleProp: string) {
    this.element.style.setProperty(styleType, styleProp);
    return this;
  }

  build() {
    return this.element;
  }
}

const div = new ElementBuilder("div")
  .addClass("container")
  .setAttribute("id", "main")
  .addChild("p", "Hello World")
  .style("color", "blue")
  .build();

document.body.appendChild(div);
