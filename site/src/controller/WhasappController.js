class WhasappController {

    constructor() {

        console.log('Funcionando');

        this.loadElementsPrototype();

        this.loadElements();

    }


    loadElements() { // cargar o tomar todos los elementos

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {
            this.el[Format.getCamelCase(element.id)] = element;
        });

    }


    loadElementsPrototype() { // asignar estilos a los elementos 

        Element.prototype.hide = function() {
            this.style.display = 'none';
            return this;
        }

        Element.prototype.show = function() {
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggle = function() {
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        Element.prototype.on = function (events, fn) {
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn);
                return this;
            });
        }

        Element.prototype.css = function(styles) {
            for (let name in style) {
                this.style[name] = style[name];
                return this;
            }
        }

        Element.prototype.addClass = function(name) {
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function(name) {
            this.classList.remove(name);
            return this;
        }

        Element.prototype.toogleClass = function(name) {
            this.classList.toogle(name);
            return this;
        }

        Element.prototype.hasClass = function(name) {
            return this.classList.contains(name); // boolean
        }

    }

}