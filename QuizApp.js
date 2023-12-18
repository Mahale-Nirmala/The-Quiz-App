



var quizAppData = [{
    "id": 1, "answer": 3, "question": "Which was not one of Voldemort's Horcruxes?",
    "options": ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"]
},
{
    "id": 2, "answer": 1, "question": "Which of these are not one of Hagrid's many pets?",
    "options": ["Grawp", "Fluffy", "Aragog", "Noberta"]
},
{
    "id": 3, "answer": 3, "question": "Which class did Severus Snape always want to teach?",
    "options": ["Potions", "Charms", "Defense Against Dark Arts", "Transfiguration"]
},
{
    "id": 4, "answer": 3, "question": "Which Hogwarts house did Moaning Myrtle belong in?",
    "options": ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
},
{
    "id": 5, "answer": 2, "question": "What class did Neville end up teaching at Hogwarts?",
    "options": ["Astronomy", "Herbology", "Charms", "Muggle Studies"]
}]

var ans_elemet = {};

function loadQuestion() {

    for (var i = 0; i < quizAppData.length; i++) {

        // -------------------------print questions----------------------

        var div_block = document.getElementById('question-option-div');

        var questionDiv = document.createElement('div');
        questionDiv.className = 'individual-div'

        var questions_Div = document.createElement('div');
        questions_Div.id = 'q_' + i;

        var question = document.createElement('p');
        question.innerHTML = 'Q.' + (i + 1) + ' ' + quizAppData[i]['question'];
        question.id = 'question_id'
        questions_Div.appendChild(question);
        questionDiv.appendChild(questions_Div);


        // -------------------------print options----------------------
        for (var k = 0; k < quizAppData[i]['options'].length; k++) {
            console.log(quizAppData[i]['options'].length)

            var option_input = document.createElement('input');
            option_input.type = 'radio';
            option_input.className = "input_radio";
            option_input.name = questions_Div.id;
            option_input.id = 'option_' + i + '_' + k;
            option_input.setAttribute('value', k);
            // console.log(questions_Div.id);
            var option_label = document.createElement('label');
            option_label.innerHTML = quizAppData[i]['options'][k] + '<br><br>'
            option_label.id = 'optn-lbl';
            option_label.setAttribute('for', 'option_' + i + '_' + k);

            questionDiv.appendChild(option_input);
            questionDiv.appendChild(option_label);
            div_block.appendChild(questionDiv);

        }
        ans_elemet[questions_Div.id] = quizAppData[i]["answer"];
    }
}
loadQuestion();

function calculate_score() {
    var score = 0;
    let input_class = document.querySelectorAll('.input_radio');         // ------> querySelectorAll returns an Array..... 
    var user_answer = {};
    // input_class.forEach((e) => {
    //     if(e.checked) {
    //         selected_Ans = e.id;
    // console.log(selected_Ans);
    //     }
    // });
    console.log(input_class.length);
    for (let i = 0; i < input_class.length; i++) {
        if (input_class[i].type == "radio") {
            if (input_class[i].checked) {
                user_answer[input_class[i].name] = Number(input_class[i].value) + 1;
            }
        }
    }
    if (Object.keys(ans_elemet).length == Object.keys(user_answer).length) {
        for (k = 0; k < Object.keys(ans_elemet).length; k++) {

            if (user_answer['q_' + k] == ans_elemet['q_' + k]) {
                score = score + 1;
            }
        }
        document.getElementById('score').innerHTML = score;
    }
    console.log((ans_elemet));
console.log(Object.keys(user_answer))
console.log(user_answer);
}
























