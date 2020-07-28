class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               background-color: cornflowerblue;
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 16px;
           }

           .jumbotron {
            font-size: 70px;
            padding: 60px;
            height: 300px;
            background-color: #00c8eb;
            text-align: center;
            color: white;
            background-position: center center;
        
            font-family: 'Caveat Brush', cursive;
         }


       </style>
       <div class="jumbotron">
       <h2>Movie Finder</h2>
       </div>`;
    }
}

customElements.define("app-bar", AppBar);