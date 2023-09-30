import { useState, useEffect } from 'react'
import {marked} from 'marked';
//import {GlobalStyles} from "@mui/material";

const App = () => {
//  let sy =`<div></div>`;
   let stt =`# Welcome to my React Markdown Previewer!
\`\`<div></div>\`\`

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`


## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, between 2 backticks.


// this is multi-line code:


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
;
  
  const [message, setMessage] = useState(stt);
   
  function  loadData (){document.getElementById('preview').innerHTML =  marked.parse(message);}
useEffect(() => {
      loadData();
   },); 
  
    const [out, setOut] = useState('');

  const handleChange = event => {
   
    setMessage(event.target.value);
   document.getElementById('preview').innerHTML =  marked.parse(event.target.value);


  };
 

  return (
    <div className='pt-5' >
      
<div className="text-center ">    
<h1 className=" ">EDITOR</h1>  <textarea className=" col-md-6"
rows="12"

        type="text"
        id="editor"
        name="message"
        onChange={handleChange}
        value={message}
        ></textarea>

</div>
<h1 className="text-center "> PREVIEWER</h1>
<div className="d-flex justify-content-center">

       <div className="w-75 p-3 border border-secondary "   id="preview"></div>
       </div>
    </div>
  );
};
export default App
