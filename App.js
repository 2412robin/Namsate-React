import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement( "h1", {id:"heading"} ,"Hello World React!");
const preant = React.createElement("div", {id:"preant"} ,
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"im tag hiiii"),
React.createElement("h2",{},"im 2 namasteeeee")
]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"im tag h1"),
React.createElement("h2",{},"im  Anushka dodke")
])
]

)

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(preant);
