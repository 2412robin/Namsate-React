import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElement(render)

const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React"
);

console.log(heading);
//JSX - HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS) -PARCEL -Babel
//JSX =>   Babel transpiles it to react.creacteElement =>ReactElemet-JS object =>HtmlElement(render)
// const jsxHeading = <h1 className="heading"> Namaste React using JSX</h1>;
// console.log(jsxHeading);
// const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);




// when there is more line of codes we can also write like this 
// const jsxHeading = (<h1 className="heading">
//      Namaste React using JSX
//      kjshkajhskjh
//      asjhdjsh
//      <p>
//         kjhdkajsdk
//         ksjhdkshd
//      </p>
//      </h1>
// );

const Title = () =>(
    <h1 className="head">
        Namaste react using JSX</h1>
);
// react functional comcponet

const HeadingComponet =() => (
 <div id="container">
    <Title/>
    {
        // we can write any JS code in this ANY JS Code!!!
    }
    <h1 className="heading"> Namsate REact Component !</h1>
 </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet/>);
