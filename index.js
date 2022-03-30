/**************************** 
 *  +Create Background Tiles
****************************/
function tile(tileSrc,posLeft, posBottom, Width, height){
    for(let h = 0; h < height; h++)
        {
            for(let w = 0; w < Width; w++){
                newImage('bgTile',tileSrc,posLeft + (w*100), posBottom + (h*100))
            }
        }
}
/**************************** 
 *  +Create Image Function
****************************/
function newImage (imgName,imgSrc, posLeft, posBottom){
    let element = document.createElement('img')
    //element.name = imgName
    element.src = imgSrc
    element.style.position = 'fixed'
    element.style.left = posLeft +'px'
    element.style.bottom = posBottom +'px'
    document.body.append(element)
    return element
}
/**************************** 
 *  +Create Item Function
****************************/
function newItem (itemName,itemSrc, posLeft, posBottom){
    let item = newImage(itemName,itemSrc,posLeft,posBottom)
    item.addEventListener('dblclick', function(){
        item.remove()
    })
}
/**************************** 
 *  +Generate Background
****************************/
let horizon = window.innerHeight * .66
let skyHeight = window.innerHeight - horizon
let grassHeight = horizon

tile('assets/sky.png', 0, horizon,window.innerWidth/100, skyHeight/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, grassHeight/100)
/**************************** 
 *  +New Images
****************************/
newImage('greenCharacter','assets/green-character.gif','100','100')
newImage('pinTree','assets/pine-tree.png','450','200')
newImage('tree','assets/tree.png','200', '300')
newImage('pillar','assets/pillar.png','350', '100')
newImage('crate','assets/crate.png','150', '200')
newImage('well','assets/well.png','500', '425')
/**************************** 
 *  +New items
****************************/
newItem('sword','assets/sword.png','500','405')
newItem('shield','assets/sheild.png','165','185')
newItem('staff','assets/staff.png','600','100')
