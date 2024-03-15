var boxes = document.querySelectorAll('.box');
var cards = document.querySelectorAll('.card');

boxes.forEach(box => dragging(box));

cards.forEach(card => {
    var atached = [];
    dragging(card, atached);
});

function dragging(box, atached) {
    box.addEventListener('mousedown', () => {
        box.classList.add('dragging');

        boxes.forEach(otherBox => {
            if(otherBox !== box) {
                otherBox.style.zIndex = 0;
            }
            if(otherBox.classList.contains('dragging')) {
                otherBox.style.zIndex = 1;
            }
        })

        onmousemove = (e) => {
            if(!box.classList.contains('dragging')) return;

            let mouseX = e.clientX - box.offsetWidth / 2;
            let mouseY = e.clientY - box.offsetHeight / 2;

            box.style.left = mouseX + 'px';
            box.style.top = mouseY + 'px';
            

            cards.forEach(card => {
                if (colide(box, card) && card !== box ) {

                    if(card.classList.contains('card') && box.classList.contains('box')) {
                        box.classList.remove('dragging');
                        atached.push(card);
                        atached.push(box);

                        console.log(atached);

                        box.classList.remove('dragging');
                        box.classList.add('attached');
                        box.style.left = boxPosition();
                        box.style.top = null;
                        box.style.bottom = '-40%';
                        card.append(box)
                        
                        function boxPosition() {
                            // let boxIndex = atached.indexOf(box);
                            // let boxPosition = boxIndex * 40;

                            // return boxPosition + '%';
                        }

                        
                    }
                }
            })
        }

        onmouseup = () => {
            box.classList.remove('dragging');
            onmousemove = null;
            onmouseup = null;
        }
    });
}

function colide(box1, box2) {
    return box1.offsetLeft < box2.offsetLeft + box2.offsetWidth &&
        box1.offsetLeft + box1.offsetWidth > box2.offsetLeft &&
        box1.offsetTop < box2.offsetTop + box2.offsetHeight &&
        box1.offsetTop + box1.offsetHeight > box2.offsetTop
}