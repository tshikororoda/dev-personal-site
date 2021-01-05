# HTML5 - CSS - JAVASCRIPT

### HTML DOCUMENT STRUCTURE

```` html
<!-- Folder: hds/hds.index.html -->

<!DOCTYPE html> <!-- document declaration -->
<html dir="ltr" lang="en">
	<head>
<!--
 _______________________________________________________________________________________
|																						|			
|					[ Document header related tags here ]								|
|_______________________________________________________________________________________|

-->
		<meta charset    ="utf-8" />
		<meta http-equiv ="X-UA-Compatible"	content="IE=edge" />
		<meta name		 ="viewport"		content="width=device-width; initial-scale=1.0" />

		<title> Document Appropriate Skelton </title>

			<!--
				[ CSS ]
			-->

		<link	rel   ="stylesheet"
				type  ="text/css"
				href  ="./assets/css/style.main.css"
				media ="screen" />

		<link	rel	 ="shortcut icon"
				type ="image/ico"
				href ="./favicon.ico" />

	</head>
<body>
<!--
 _______________________________________________________________________________________
|																						|			
|					[ Document body related tags here ]									|
|_______________________________________________________________________________________|

-->
	<header role="tda-main-header">
		<span id="brand"> &#39;Document Appropriate Skelton&#39; </span>
	</header>

	<main id="tda-main-content">
		<section>
			<h3> Welcome to HTML </h3>
			<p> This is the document structure. </p>
		</section>
	<main>

	<footer id="tda-main-footer">
		<span id="tda-copyright">&#169;</span>
	</footer>

<!--
 _______________________________________________________________________________________
|                                                                                       |
|                            [ JavaScript external ]                                    |
|                                                                                       |
|_______________________________________________________________________________________|

-->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
		<script src="assets/js/main.js"></script>

	</body>
</html>
````
A typical HTML document will have the following structure:

	1. Document declaration
	2. Document root tag
	3. Document head and its related tags
	4. Document body and its related tags

We will be study the *&lt;head&gt;* and *&lt;body&gt;* related tags in subsequent section. but before we go any futher, let's just look at what is document declaration.

	The <!DOCTYPE> declaration tag is used by the web browser to understand the version of the HTML used in the document. There are many other declaration types which can be used in HTML document depending on what version of HTML is being used. Current version of HTML is 5 and it makes use of the following declaration: <!DOCTYPE html>.

### HTML Tags

HTML is a markup language and makes use of various tags to format the content. These tags are enclosed within angle braces *&lt;Tag Name&gt;*. Except few tags, most of the tags have their corresponding closing tags. For example, *&lt;html&gt;* has its closing tag *&lt;/html&gt;* and *&lt;body&gt;* tag has its closing tag *&lt;/body&gt;* tag etc.

Above HTML document stracture uses the following tags

| Tags 		     | Description |
| -------------- | ----------- |
|`<!DOCTYPE...>` | This tag defines the document type and HTML version. |
|`<html>`        | This tag encloses the complete HTML document and mainly comprises of document header which is represented by `<head>...</head>` and document body which is represented by `<body>...</body>` tags. |
| `<head>`  | This tag represents the document's header which can keep other HTML tags like `<title>, <link>` etc. |
| `<title>` | The `<title>` tag is used inside the `<head>` tag to mention the document title. |
| `<body>`  | This tag represents the document's body which keeps other HTML tags like `<h1>, <div>, <p>`   etc. |
| `<h1>`    | This tag represents the heading. |
| `<p>`     | This tag represents a paragraph. |

*`Last modified: 2021-01-05, time: 11:32AM`*

***

## ADDING CSS ON HTML DOCUMENT STRUCTURE

### How to associate style sheet to an HTML document?
	1. Inline   css - We apply css syntax using style attribute on an element.
	2. Embedded css - We apply css syntax using <style> element. This tag is <Head> related tag.
	3. External css - We apply css syntax on a separate text file with .css extension.
		- We include on HTML document file using <link> tag. or
		- We include on HTML document file using @Import url("");.

### CSS overriding
	- Inline style sheet takes highest priority becouse it override Embedded and External style sheet.
	- Embedded style sheet override External style sheet.
	- External style sheet takes low priority.

### CSS Syntax is made of three parts
	- Selector - An element at which css rule will be applied.
	- Property - An element attribute (All HTML attribute are converted into CSS properties).
	- Value    - Value assigned to the property.

### How to applied style rule to an element?

#### Type selector

```` CSS
	/* Select and applied style rule at all level 2 heading */
	h2 {

	}

	/* Grouping selector */
	h1, h2, h3, h4, h5, h6 {

	}
````

#### Universal selector

````CSS
	/* Select and applied style rule at all element */
	* {

	}
````

#### Descendant selector

````CSS
	/* Select and applied style rule to <a> element only when it lies within div ul li */
	div ul li a {

	}
````

#### Id selector

````CSS
	/* Select and applied style rule to the element with id attribute set to tda-main-header */
	#tda-main-header {

	}

	/* Select and applied style rule to the <h2> element with id attribute set to tda-main-header */
	h2#tda-main-header {

	}

	/* Select and applied style rule to the <h2> element when <h2> lies within an element with id attribute set to tda-main-header  */
	#tda-main-header h2 {

	}

	/* We can also combined various id selector */

````

#### Class selector

````CSS
	/* Select and applied style rule to the element with class attribute set to clear */
	.clear {

	}

	/* Select and applied style rule to the <h1> element with class attribute set to clear class */
	h1.clear {

	}

	/* Select and applied style rule to the <h2> element when <h2> element lies within an element with class attribute set to a clear class  */
	.clear h2 {

	}

	/* We can also combined various class selector */

````

#### Child selector

````CSS
	/* Select and applied style rule to <div> element if <div> is direct child of <body> element. */
	body > div {

	}
````

#### Attribute selector

````CSS
	/* Select and applied style rule to <input> element with attribute type set to text */
	input[type="text"] {

	}

````
*`Last modified: 2021-01-05, time: 11:40AM`*
***
## ADDING JAVASCRIPT ON HTML DOCUMENT STRUCTURE

#### *How to place JavaScript in an HTML document?*

```` html

	<!-- JavaScript placed in the <head> element section. -->
	<head>
		<script>
			alert("javascript placed in the <head> element");
		</script>
	</head>

	<!-- JavaScript placed in the <body> element section. -->
	<body>
		<script>
			document.write("javascript placed in the <body> element");
		</script>
	<body>

	<!-- External javascript souce file -->
	<script src="./js/main.js"></script>
````
#### *How to access element in the DOM?*

| Get by 	      | Selector syntax | Method	              |
| --------------- | --------------- | ----------------------- |
| ID			  | #tda-copyright	| getElementById()        |
| Class			  | .tda-copyright	| getElementByClassName() |
| Tag/element	  |	p(any element)	| getElementByTagName()   |
| Single selector | id/class/tag	| querySelector()         |
| All selector	  | id/class/tag	| querySelectorAll()      |

JavaScript code:
```` js
// assets/js/main.js

	const byId         = document.getElementById('tda-copyright');
	const byClass      = document.getElementByClassName('tda-copyright');
	const byTag        = document.getElementByClassName('p');
	const queryById    = document.querySelector('#tda-copyright');
	const queryByClass = document.querySelectorAll('.tda-copyright');

	// Adding CSS using JavaScript
	byId.style.backgroundColor = 'yellow';
	byId.style.fontSize = '26pt';
	byId.style.color = 'blue';

````
HTML code:
```` html
// index.html

	<div id="tda-copyright"> Access this by ID </div>

	<div class="tda-copyright"> Access this by class </div>
	<div class="tda-copyright"> Access this by class </div>

	<!-- Accessing by Tag/element -->
	<p> By element </p>

````

#### How to *run* JavaScript `functions` when the document is loaded?

`Program:` This program get the current year and display the obtained results to copyright statement.

Pseudo code:

	Create function called thisYear().
	Declare local variable (within the function)  currentDate, year, thisYear and tdaCopyright.
	Implimate the object Date() using keyword new.
	Get the current year.
	Create a text node.
	Get/select an element where output message shoud be append to.
	Append/insert the output results to the select element.
	Print the text string appended only with slateblue color.

```` js

	"use strict";

	function thisYear(){

		let currentDate, year, tdaCopyright, thisYear; // Declaring variables

		currentDate = new Date(); // Create an object for Date()
		year        = currentDate.getFullYear(); // Get the current year
		thisYear    = document.createTextNode(year); // Create text node

		tdaCopyright = document.querySelector('#tda-copyright'); // Get/select the element to insert content into
		tdaCopyright.parentNode.insertBefore(thisYear, tdaCopyright); //  Insert current year into an element selected

			/* CSS */
		tdaCopyright.parentNode.style.color = 'slateblue'; // print text in slateblue color only.
	}


	// Run this functions when the document is loaded
	window.onload = function()	{ // #01

		thisYear();
	}

/*
 The code below does the same thing #01 does.

// Run this functions when the document is loaded
	window.onload(

		thisYear()
	);2
*/    

````
```` html
	<span id="tda-copyright">&#169;</span>
````  
