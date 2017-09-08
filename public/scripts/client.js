console.log('client-side source');

function readyNow () {
    console.log('hey');

    $("#startGame").on('click', gameStart)
    $('#submitGuesses').on('click', guessNum)

    $.ajax({
        method: 'GET',
        url: '/',
        success: function(res){
            console.log('page load');
        }
    });
}

function gameStart(){
    ourData = {
        gameMode: $(':selected').val(),
        firstPlayer: $('#Player1').val(),
        secondPlayer: $('#Player2').val(),
        thirdPlayer: $('#Player3').val(),
        fourthPlayer: $('#Player4').val()
    };

    $.ajax({
        method: 'POST',
        url: '/setup',
        data: ourData,
        success: function(response){
            console.log(response);
            $('setup').hide();
            $('newGame').show();
            //ourData();
        }
    });}


function guessNum(){
    console.log(
        ourGuesses = {
        player1: $('#p1').val(),
        player2: $('#p2').val(),
        player3: $('#p3').val(),
        player4: $('#p4').val(),
    })

    $.ajax({
        method: 'POST',
        url: '/guess',
        data: ourGuesses,
        success: function(response){
            console.log(response);
            $('setup').hide();
            $('newGame').show();
        }
    })

}
$(document).ready(readyNow);