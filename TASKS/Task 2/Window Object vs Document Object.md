# ***Difference between Window and Object in JavaScript***


| **Document** | **Window** | 
| :---------------------:  | :---------------------:|
|The document object represents a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document or just document.|The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created.|
|It is loaded after the loading window because the window contains a document.|It is loaded before the document because window container document.|
|It is the root element of the document object model.|The window is the global element for all objects, functions, etc.|
|It is an object of window.|It is an object of the browser.|
|We can not access windows objects properties inside the document.|We can access document object properties inside the window.|
| logically:  document:{ properties} |logically: window:{document:{properties}}|
|Example: document.title will return the title of the document|Example: window.document.title will return the title of the document.|