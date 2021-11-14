let items = ['item 1' ,'item 2' , 'item 3' , 'item 4' , 'item 5'];


let list = document.querySelector('#myList');

items.forEach(function(item){

    createItem(item);

});

list.addEventListener("click", function(item){
    if (item.target.tagName=='LI') {
        item.target.classList.toggle('checked');
        ToogleDeleteButton();

        
    }
});

function ToogleDeleteButton() {
    let checkList = document.querySelectorAll('.list-group-item.checked');
    //console.log(checkList.length);

    if(checkList.length > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    }else{
        document.querySelector('#deleteAll').classList.add('d-none');

    }
    
}

document.querySelector("#deleteAll").onclick= function(){
    let elements = document.querySelectorAll(".checked");
    //console.log(element.length);
    elements.forEach(function(item){
        item.style.display="none";
    });
}


document.querySelector('#btnCreate').onclick = function(){
    
    let item = document.querySelector('#textItem').value;
    console.log(item);

    if(!item){
        alert('Lütfen yapılcak iş bilgisi giriniz !');
        return;
    }else{
        createItem(item);
    }
};

function createItem(item){
    let li = document.createElement('li');
    let text = document.createTextNode(item);
   
   
    li.className="list-group-item" ;
    li.appendChild(text);
    list.appendChild(li);
    
   
   
    let span = document.createElement('span');
    let textSpan = document.createTextNode("\u00D7");
   
    span.className="close";
    span.appendChild(textSpan);
    li.appendChild(span);
   
   
    
   span.onclick = function(){
       let parentLi = this.parentElement;
       parentLi.style.display = 'none';
       parentLi.classList.remove('checked');
}

}

