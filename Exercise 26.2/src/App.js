import React from 'react';

const Programming = () => ( React.createElement(
			  	"section", {id: "coding"}, 
            React.createElement("h1", null, "Created functional stateless component using Fat Arrow"),

            React.createElement("h3", null, "Definition of Arrow Functions:"),
            React.createElement("p", null, "When we create components using functions in React, it is possible to use arrow functions for a shorter syntax. Arrow functions in JavaScript do not keep track of the 'this' keyword. While building simple components we do not need the 'this' keyword, hence arrow functions are an acceptable syntax for creating components when 'this' is not in scope."),

            React.createElement("h3", null, "Programming Languages"),
            React.createElement("ul", {className: "coding"},
	    React.createElement("li", null, "Java"),
	    React.createElement("li", null, "Python"),
	    React.createElement("li", null, "PHP"))
				)
			)

export default function App() {
    return Programming()
       
}
