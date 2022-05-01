//constants
const input=document.querySelector('input') as HTMLInputElement
const submit=document.querySelector('input[type="submit"]') as HTMLButtonElement
const row= document.querySelector('.row') as HTMLDivElement
const info=document.querySelector('.info') as HTMLDivElement
const displayClear=document.querySelector('.clear-items') as HTMLDivElement 
//functions 
function createItem(e:Event){
    e.preventDefault()
   const commodity=input.value
   if(commodity){
    info.style.display='none'
   const div=document.createElement('div')
   div.classList.add('item')
    div.innerHTML=` <div class="wrap">
    <p>${commodity.split('')[0].toUpperCase()+commodity.slice(1,).toLowerCase() }</p>
</div>
<div class="wrap">
    <button id="edit">📝</button>
    <button id="del">🗑️</button>
</div>`
    row.appendChild(div)
    input.value=''
    displayClearButton()
}
else{
    info.style.display='block'
}
}

function displayClearButton(){
    const items=document.querySelectorAll('.item') as NodeListOf<HTMLElement>
    if(items.length>0){
        displayClear.style.display='block'
    }
    else{
        displayClear.style.display='none'
    }
}

function clearAllItems(){
    row.innerHTML=''
    displayClear.style.display='none'
}

function operationButtons(e:Event){
    const target=e.target as HTMLElement
    const itemId=target.parentNode?.parentNode as HTMLElement
    if(target && target.id==='del'){     
        itemId.remove()
        displayClearButton()  
    }
    else if(target && target.id==='edit'){
        const input=document.querySelector('input') as HTMLInputElement
        const paragraph=itemId.querySelector('p') as HTMLParagraphElement
        input.value=`${paragraph.textContent}`
        itemId.remove()
        displayClearButton()  
    }        
}
//events
submit.addEventListener('click', createItem)

displayClear.addEventListener('click', clearAllItems)

row.addEventListener('click',operationButtons)



    


