var pc_score = 0;
var user_score = 0;
var pc_choice;
var choice;
const pc_span = document.getElementById('computer-score');
const user_span = document.getElementById('player-score');
const user_choice_img = document.getElementById('user-choice');
const pc_choice_img = document.getElementById('computer-choice');
const paper_choice = document.getElementById('paper');
const rock_choice = document.getElementById('rock');
const scissors_choice = document.getElementById('scissors');
const win_msg = document.getElementById('win');
const choice_list = document.getElementById('choice-list');
const pc_choices = ['rock', 'paper', 'scissors'];

rock_choice.addEventListener('click', function () {
    choice = 'rock';
    play();
});

paper_choice.addEventListener('click', function () {
    choice = 'paper';
    play();
});

scissors_choice.addEventListener('click', function () {
    choice = 'scissors';
    play();
});

function get_pc_choices() {
    var index = Math.floor(Math.random() * 3);
    return pc_choices[index];
}


function play() {
    pc_choice = get_pc_choices();

    if (choice == pc_choice) {
        draw();
        return;
    }

    if (choice == 'paper') {
        if (pc_choice == 'scissors')
            lose();
        else
            win();
        return;
    }

    if (choice == 'rock') {
        if (pc_choice == 'paper')
            lose();
        else
            win();
        return;
    }

    if (choice == 'scissors') {
        if (pc_choice == 'rock')
            lose();
        else
            win();
        return;
    }
}

function draw() {
    update_ul("Ха, лох ничья!");
}

function win() {
    user_score = user_score + 1;
    update_ul("Пидарас!");

}

function lose() {
    pc_score = pc_score + 1;
    update_ul("Ха, лох просрал компу!");
}
function update_ul(msg) {
    user_choice_img.src = 'rock.png';
    pc_choice_img.src = 'rock.png';
    choice_list.style.visibility = 'hidden';
    pc_choice_img.style.animation = 'pc-shake 2s ease';
    user_choice_img.style.animation = 'user-shake 2s ease';

    setTimeout(function () {
        pc_span.innerText = pc_score;
        user_span.innerText = user_score;
        pc_choice_img.src = pc_choice + ".png";
        user_choice_img.src = choice + ".png";
        win_msg.innerHTML = msg;
        choice_list.style = 'unset';
        pc_choice_img.style.animation = '';
        user_choice_img.style.animation = '';
    }, 2000)
}