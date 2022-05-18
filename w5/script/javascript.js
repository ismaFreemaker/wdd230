// this is the javascript file for the book of mormon example. 

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");





button.addEventListener('click', function () {
    
    const itemContent = input.value;
    if (input.value != ""){
        
        input.value = '';
        
        const listItem = document.createElement("li");
        const listSpan = document.createElement("span");
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("delete-btn");
        
        listItem.appendChild(listSpan); //appending the span to the <li>
        listSpan.textContent = itemContent; //filling the span with content
        
        listItem.appendChild(deleteBtn); //appending the button to the <li>
        deleteBtn.textContent = `Remove ${itemContent}`;  //filling the button with content

        
        list.appendChild(listItem);  //appending the <li> to the <ul>
        
        
        deleteBtn.addEventListener('click', function () {
            list.removeChild(listItem);
        });
        input.focus();
    }
});






