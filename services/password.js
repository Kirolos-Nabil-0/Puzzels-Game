function PasswordElemt() {
    const passwordElement = document.querySelector("my-password");

    // Check if the passwordElement is found before accessing its properties
    if (passwordElement) {
        const inputElement = passwordElement.shadowRoot.querySelector("input");
        const buttonElement = passwordElement.shadowRoot.querySelector("button");

        return {
            passwordElement,
            inputElement,
            buttonElement,
        };
    } else {
        console.error("my-password element not found");
        return null;
    }
}

export default PasswordElemt;
