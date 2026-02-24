1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   getElementById()Gets an element with a specific id.

   getElementsByClassName()Returns all elements of a class as a collection.

   querySelector()Returns the first matching element using a CSS selector.

   querySelectorAll()Returns all matching elements using a CSS selector.

2. How do you create and insert a new element into the DOM?
   const div = document.createElement("div");
   div.innerText = "Hello";
   document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?
   Event bubbling means that the event is first triggered on the target element, then goes to parent, body and document.


4. What is Event Delegation in JavaScript? Why is it useful?
   Handle child elements by placing an event listener on the parent element.
   This improves performance and makes dynamically added elements work.


5. What is the difference between preventDefault() and stopPropagation() methods?
   Handle child elements by placing an event listener on the parent element.
   This improves performance and makes dynamically added elements work.
