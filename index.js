const newImage = function(imgName,imgSrc, posX, posY){
    imgName = document.createElement('img')
    imgName.src = imgSrc
    imgName.style.position = 'fixed'
    imgName.style.left = posX
    imgName.style.bottom = posY
    document.body.append(imgName)
    imgName.addEventListener('dblclick', function(){
        imgName.remove()
    })
}

newImage('greenCharacter','assets/green-character.gif','100px','100px')
newImage('pinTree','assets/pine-tree.png','450px','200px')
newImage('tree','assets/tree.png','200px', '300px')
newImage('pillar','assets/pillar.png','350px', '100px')
newImage('crate','assets/crate.png','150px', '200px')
newImage('well','assets/well.png','500px', '425px')
newImage('sword','assets/sword.png','500px','405px')
newImage('shield','assets/sheild.png','165px','185px')
newImage('staff','assets/staff.png','600px','100px')
sword.position = 'fixed'

sword.addEventListener('click', function(){
    sword.remove()
})


/*
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png '
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

*/