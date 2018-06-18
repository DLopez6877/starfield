$(document).ready(function() {
    let numberOfStars = 200;
    let stars = [];
    let canvasHeight = $('#starfield').height();
    let canvasWidth = $('#starfield').width();

    class Star {
        constructor(guid) {
            this.guid = guid;
            this.size = randomNumber(10, 3);;
        }
    }

    function populateStar() {
        let posX = randomNumber(canvasWidth, 0);
        let posY = randomNumber(canvasHeight, 0);
        var guid = newGuid();
        let newStar = new Star(guid);
        stars.push(newStar);
        $('#starfield').append('<div class="star" id="' +
                                guid + 
                                '"></div>');
        $('.star').last().css({'top': posY, 'left': posX, 'width': newStar.size, 'height': newStar.size});
    }

    function randomNumber(max, min) {
        return Math.floor(Math.random() * max) + min;
    }

    function changeStars() {
        let amount = 10;
        for (let i = 0; i < amount; i++) {
            stars.pop();
            $('.star').first().remove();
            populateStar();
        }
    }

    function newGuid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    for (let i = 0; i < numberOfStars; i++) {
        populateStar();
    }
    
    let run = setInterval(function(){
        changeStars();
    }, 100);

    $(window).resize(function() {
        canvasHeight = $('#starfield').height();
        canvasWidth = $('#starfield').width();
    });
});
