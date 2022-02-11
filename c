[1mdiff --git a/Responsive Web Design/Documentation Page/index.html b/Responsive Web Design/Documentation Page/index.html[m
[1mdeleted file mode 100644[m
[1mindex 296cade..0000000[m
[1m--- a/Responsive Web Design/Documentation Page/index.html[m	
[1m+++ /dev/null[m
[36m@@ -1,352 +0,0 @@[m
[31m-<!DOCTYPE html>[m
[31m-<html lang="en">[m
[31m-<head>[m
[31m-    <meta charset="UTF-8">[m
[31m-    <meta http-equiv="X-UA-Compatible" content="IE=edge">[m
[31m-    <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[31m-    <link rel="stylesheet" href="style.css">[m
[31m-    <title>JavaScript Coursera Notes</title>[m
[31m-</head>[m
[31m-[m
[31m-<body>[m
[31m-[m
[31m-    <!-- on laptop/desktop this appears on the left and fixed -->[m
[31m-    <!-- use at least one media query in the page -->[m
[31m-    <nav id="navbar">[m
[31m-        <header>JavaScript Coursera Notes</header>[m
[31m-        <div id="links">[m
[31m-            <a href="#Introduction" class="nav-link">Introduction</a>[m
[31m-            <a href="#Writing_to_the_DOM" class="nav-link">Writing to the DOM</a>[m
[31m-            <a href="#variables" class="nav-link">Variables</a>[m
[31m-            <a href="#getting_elements_and_values" class="nav-link">Getting elements and valus</a>[m
[31m-            <a href="#events" class="nav-link">Events</a>[m
[31m-            <a href="#THIS" class="nav-link">THIS</a>[m
[31m-            <a href="#Arrays" class="nav-link">Arrays</a>[m
[31m-            <a href="#Looping" class="nav-link">Looping</a>[m
[31m-            <a href="#Forms" class="nav-link">Forms</a>[m
[31m-            <a href="#Simple_validation" class="nav-link">Simple validation </a>[m
[31m-            <a href="#Compare_Two_Inputs" class="nav-link">Compare Two Inputs</a>[m
[31m-            <a href="#Selecting_one_or_more_checkboxes" class="nav-link">Selecting one or more checkboxes</a>[m
[31m-            <a href="#Check_for_a_attribute" class="nav-link">Check for a attribute</a>    [m
[31m-        </div>[m
[31m-    </nav>[m
[31m-[m
[31m-    <!-- main contnent here, technical documentation -->[m
[31m-    <div id="main-doc">[m
[31m-        <!-- the sections should be min 5, have 10 p total, 5 code total -->[m
[31m-[m
[31m-        <section class="main-section">[m
[31m-            <header id="Introduction">Introduction</header>[m
[31m-            <p>A pages content is represented by the DOM and JS is used to interact with the DOM.[m
[31m-                It dose this by using API (Application Programming Interface).[m
[31m-            </p>[m
[31m-            <h4>Prompting the user</h4>[m
[31m-            <p>Some examples of pop up prompts are :</p>[m
[31m-            <pre><code>[m
[31m-            alert('HelloWorld')[m
[31m-            // creates a alert pop up message with the hello world text[m
[31m-[m
[31m-            prompt('What is your name?')[m
[31m-            // creates a alert pop up message with a input field       [m
[31m-            </code></pre>[m
[31m-        </section>[m
[31m-[m
[31m-        <section class="main-section">[m
[31m-            <header id="Writing_to_the_DOM">Writing to the DOM</header>[m
[31m-            <p>You can create a new DOM element by typing:</p>[m
[31m-            <pre><code>[m
[31m-            document.write("&lth1&gtHello World&lt/h1&gt")[m
[31m-            </code></pre>[m
[31m-            <!-- < &lt       >   &gt -->[m
[31m-            <p>You can also modify a inner HTML with:</p>[m
[31m-            <pre><code>[m
[31m-            element.inenrHTML = 'Time to learn more.'[m
[31m-[m
[31m-            document.getElementById('testIdHere').inenrHTML = 'Hello World'[m
[31m-            </code></pre>[m
[31m-            <p>Modifing the element's class:</p>[m
[31m-            <pre><code>[m
[31m-            x.className = 'open';[m
[31m-[m
[31m-        Example : [m
[31m-            function openMe() {[m
[31m-                x = document.getelementById('demo');[m
[31m-                x.className = 'open';[m
[31m-            }[m
[31m-            //this can be a onclick event and can create a close/open button [m
[31m-            </code></pre>[m
[31m-            <p>A goood way to spot bugs is a simple console.log :</p>[m
[31m-            <pre><code>[m
[31m-            console.log("Hello World!")[m
[31m-            </code></pre>[m
[31m-        </section>[m
[31m-[m
[31m-        <section class="main-section">[m
[31m-            <header id="variables">Variables</header>[m
[31m-            <p>Variables are used to store data. The anme of a variable can not start [m
[31m-                with a number.The name of a variable should be mnemonic (should have a meaning).</p>[m
[31m-            <pre><code>[m
[31m-             var meaningfulName = value;[m
[31m-             //        LHS         RHS[m
[31m-            </code></pre>[m
[31m-            <p>LHS = left hand side (variables being updated) and RHS = right hand side (new value being stored in the variable</p>[m
[31m-            <pre><code>[m
[31m-            var name = prompt('Name?')[m
[31m-            document.write(name)[m
[31m-            //this asks for a name, stores it in  var and then writes it to the DOM[m
[31m-            </code></pre>[m
[31m-        </section>[m
[31m-[m
[31m-        <section class="main-section">[m
[31m-            <header id="getting_elements_and_values">Getting elements and values</header>[m
[31m-            <pre><code>[m
[31m-            document.getElementById('testIdHere').inenrHTML = 'Hello World'[m
[31m-[m
[31m-            var links = document.getElementByTagName('a');[m
[31m-            //gets the whole node, atributes, values, all[m
[31m-            </code></pre>[m
[31m-            <p>Example of a value being writen and used to create a new element:</p>[m
[31m-            <pre><code>[m
[31m-            var name;[m
[31m-            name = prompt('Name?');[m
[31m-            document.write(name);[m
[31m-            document.write("&lth1&gt" + name + "&lt/h1&gt"  )[m
[31m-            </code></pre>[m
[31m-        </section>[m
[31m-[m
[31m-        <section class="main-section">[m
[31m-            <header id="events">Events</header>[m
[31m-            <p>An HTML event can be something the browser does, or something a user does.</p>[m
[31m-            <p>JavaScript lets you execute code when events are detected.[m
[31m-            HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.</p>[m
[31m-            <ul>Types of events (common ones):[m
[31m-                <li>onClick : The user clicks an HTML element</li>[m
[31m-                <li>onchange : An HTML element has been changed</li>[m
[31m-                <li>onmouseover : The user moves the mouse over an HTML element</li>[m
[31m-                <li>onmouseout : The user moves the mouse away from an HTML element</li>[m
[31m-                <li>onkeydown: The user pushes a keyboard key</li>[m
[31m-                <li>onload: The browser has finished loading the page</li>[m
[31m-            </ul>[m
[31m-            <pre><code>[m
[31m-            &ltbutton onclick="this.innerHTML = Date()"&gtThe time is?&lt/button&gt[m
[31m-            //when the button is clicked the inner html of that element is [m
[31m-            changed to what the date() function returns[m
[31m-            </code></pre>[m
[31m-        </section>[m
[31m-[m
[31m-        <section class="main-section">[m
[31m-            <header id="THIS">THIS</header>[m
[31m-            <p>The JavaScript this keyword refers to the object it belongs to.</p>[m
[31m-            <ul>It has different values depending on where it is used:[m
[31m-[m
[31m-                <li>In a <b>method</b>, this refers to the <b>owner object</b>.</li>[m
[31m-                <p>In the example on the top of this page, this refers to the person object.[m
[31m-                    The person object is the owner of the fullName method.</p>[m
[31m-             