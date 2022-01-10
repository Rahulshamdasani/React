# My First proper CSS3 Course

### Types of CSS

- <h4>inline css</h4>
  - Not so good practice
- <h4>Head section css</h4>
- <h4>External styleSheet</h4>


### Font Types (font-family)
- You can use <a href = "https://fonts.google.com/">google fonts</a> for this purpose

### Priority of Elements
- Class, pseudo class, attribute will have higher priority than div, h1 or any other element
- Id has higher priority than class or any other
- inline class has the highest priority
- If two same priority elements are written twice then the one which is towards the bottom of the file will be given priority

### Combinators
There are four types of combinators

- **_Sibling (+)_**
  - we write it as <code>h2 + p</code> this will apply the properties to all the paragraphs which immediately follow an h2 tag

- **_General Sibling (~)_**
  - we write it as <code>h2 ~ p</code> this will apply the properties to all the paragraphs which need not immediately follow an h2 tag but both of them should be at the same level.
  - It is similar to sibling but the second element need not be immediately after the first.

- **_Child (>)_**
  - we write it as <code>div > p</code> this will apply the properties to all the paragraphs which immediately follow an div tag 
  - That paragraph tag should be inside the div tag i.e. its child.

- **_Descendant / general Child ( )_**
  - we write it as <code>div  p</code> this will apply the properties to all the paragraphs which need not immediately follow a div tag 
  - p should be child to div tag.
  - It is similar to child but the second element need not be immediately after the first.
 
  

## Css Box Model
