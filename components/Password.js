class PasswordInput extends HTMLElement {
    constructor() {
        super();

        // Create a shadow DOM and attach it to the custom element
        this.attachShadow({ mode: 'open' });

        // Define the HTML structure and styles using a template literal
        this.shadowRoot.innerHTML = `
<style>
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f4;
  }

  my-password {
    width: 300px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 8px;
    box-sizing: border-box;
  }

  :host {
    display: block;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
        <h1>Enter the password to see the puzzle </h1>

      <div>
        <input type="password" placeholder="Enter your password" />
        <button type="button">Submit</button>
      </div>
    `;
    }
    attributeChangedCallback(){
        console.log("attribute changed");

    }

}

// Define the custom element using customElements.define
customElements.define('my-password', PasswordInput);

// Export the custom element class
export default PasswordInput;
