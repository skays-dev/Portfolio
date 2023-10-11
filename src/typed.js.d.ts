declare module 'typed.js' {
    class Typed {
        constructor(element: string | Element, options: TypedOptions);
        destroy(): void;
    }

    interface TypedOptions {
        strings: string[];          // An array of strings to type out.
        startDelay: number;         // Delay before starting typing (in milliseconds).
        typeSpeed: number;          // Typing speed (in milliseconds per character).
        backSpeed: number;          // Backspacing speed (in milliseconds per character).
        backDelay: number;          // Delay before starting to backspace (in milliseconds).
        loop: boolean;              // Whether to loop the animation.

        // Add other options as needed:
        // repeat: boolean;         // Whether to repeat the animation.
        // showCursor: boolean;     // Whether to show the blinking cursor.
        // cursorChar: string;      // The character for the blinking cursor.
        // attr: string;            // The HTML attribute to set the text.
        // contentType: 'html' | 'text'; // The type of content (HTML or plain text).
        // ... add more options as per the 'typed.js' documentation.
    }

    export default Typed;
}
