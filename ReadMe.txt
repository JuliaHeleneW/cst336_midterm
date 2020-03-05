CST 336 midterm - Julia Werner

Question #1:

a. List all possible ways to apply a CSS style into an HTML page and what are their precedence order.

Ways to apply CSS style:
1. In-line style as part of a tag: <div style="color:red;></div>
2. Style tags within the header of the document: <style> div{ color:red;}</style>
3. External style sheet: <link  href="css/styles.css" rel="stylesheet">

Precedence: (highest to lowest)
1.In-line style
2. Style tags
3. External style sheets

b. What is the difference between margin and padding in box model?
The margin is outside of the border of the box, while the padding is inside of the border. Both padding and margin are transparent, but the padding clears the area around a content, 
while the margin clears the area outside of the border.

Question #2:

a.What is the difference between "!=" and "!==" in JavaScript language?
!= checks if two objects are not equal to each other, but converts the type before doing so.
!== checks if two objects are not equal to each other as well, but it does not convert the type beforehand, so this expression will already be true if the type of two objects is different.

b.What is the value of the variable statement? false
var isTrue="false"; 
var isNum="NaN"; 
var msg="eval"; 
var isNeeded = "undefined"&&(!isTrue); //false
var statement = !(!(isNeeded&&msg)||!(isTrue&&isNeeded)&&isTrue);
statement=!(!(false)||!(false)&&false)=!(true||true&&false)=!(true||false)=!true=false
The value of the variable statement is false.

Question #3:
What is the output of the following snippet?
The output is:
1,2 //first log: splice function takes everything after 1,2 and a1 is left with 1,2
//nothing for second print: slice would start at index 2, but 0nly indices 0 and 1 are in a1, so there is nothing to print.

Question #4: Draw the DOM of the following model:
<html>
<head>
    <title>My page</title>
</head>
<body>
    <img width="100px" height="100px" src="myImage.jpg">
    <p><span>My name</span> and My Info<p>
</body>
</html>

html
|
|_head
|  |_title
|
|_body
|   |_img
|   |_p
|     |_span





