var boxes = document.querySelectorAll('.box');
var cards = document.querySelectorAll('.card');
document.addEventListener('contextmenu', (e) => e.preventDefault());

const container = document.querySelector('.container');

boxes.forEach(box => dragging(box));

cards.forEach(card => {
    dragging(card);
});

function dragging(box) {
    box.addEventListener('mousedown', (e) => {
        if(e.button !== 0) {
            if(box.classList.contains('attached')) {
                box.classList.remove('attached');

                let leftPosition = box.parentElement.parentElement.style.left;
                let topPosition = box.parentElement.parentElement.style.top;

                leftPosition = parseInt(leftPosition) - 300;
                topPosition = parseInt(topPosition);

                box.parentElement.parentElement.parentElement.append(box);

                box.style.left = leftPosition + 'px';
                box.style.top = topPosition + 'px';
            }
            return
        }

        if(box.classList.contains('dragging')) return;
        if(box.classList.contains('attached')) return;
        box.classList.add('dragging');

        boxes.forEach(otherBox => {
            if(otherBox !== box) {
                otherBox.style.zIndex = 0;
            }
            if(otherBox.classList.contains('dragging')) {
                otherBox.style.zIndex = 5;
            }
        });

        cards.forEach(otherCard => {
            if(otherCard !== box) {
                otherCard.style.zIndex = 0;
            }
            if(otherCard.classList.contains('dragging')) {
                otherCard.style.zIndex = 1;
            }      
        })

        onmousemove = (e) => {
            if(!box.classList.contains('dragging')) return;

            let mouseX = e.clientX - box.offsetWidth / 2;
            let mouseY = e.clientY - box.offsetHeight / 2;

            box.style.left = mouseX + 'px';
            box.style.top = mouseY + 'px';

            cards.forEach(card => {

                if(colideWindow(box || card)) {
                    return
                }

                if (colide(box, card) && card !== box ) {
                    card.classList.add('onHover');
                    box.classList.add('onHover');

                    if(box.classList.contains('attached')) return;
                    onmouseup = () => {

                        if(!card.classList.contains('onHover') && !box.classList.contains('onHover')) {
                            box.classList.remove('dragging');
                            return
                        }

                        box.classList.remove('dragging');
                        onmousemove = null;
                        onmouseup = null;

                        if(card.classList.contains('card') && box.classList.contains('box')) {
                            box.classList.remove('dragging');
    
                            box.classList.remove('dragging');
                            box.classList.add('attached');
    
                            box.style.left = null;
                            box.style.top = null;
                            card.querySelector('.card-container').append(box)

                            card.classList.remove('onHover');
                            box.classList.remove('onHover');
                        }
                    }
                } else {
                    card.classList.remove('onHover');
                    box.classList.remove('onHover');
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

function colideWindow(box) {
    let windowSize = container.getBoundingClientRect();

    let boxWidth = box.offsetWidth;
    let boxHeight = box.offsetHeight;

    let boxSize = {
        left: box.offsetLeft,
        top: box.offsetTop,
        right: box.offsetLeft + boxWidth,
        bottom: box.offsetTop + boxHeight
    }

    if(boxSize.left < 0 || boxSize.top < 0 || boxSize.right > windowSize.width || boxSize.bottom > windowSize.height) {
        
        if(boxSize.left < 0) {
            box.style.left = 0 + 'px';
        }
        if(boxSize.top < 0) {
            box.style.top = 0 + 'px';
        }
        if(boxSize.right > windowSize.width) {
            box.style.left = windowSize.width - boxWidth + 'px';
        }
        if(boxSize.bottom > windowSize.height) {
            box.style.top = windowSize.height - boxHeight + 'px';
        }

        
        return true
    }



    return false
    



}