<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Quiz</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f5f5f5;
        }

        #quiz-container {
            max-width: 600px;
            margin: auto;
            padding: 30px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            background-color: white;
        }

        #quiz-question {
            font-size: 20px;
            margin-bottom: 20px;
            font-weight: bold;
            color: #333;
        }

        input[type="radio"] {
            margin-right: 10px;
        }

        label {
            margin-right: 30px;
            cursor: pointer;
            display: inline-block;
            padding: 5px 0;
        }

        #submit-answer {
            display: block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        #submit-answer:hover {
            background-color: #0056b3;
        }

        #feedback {
            margin-top: 20px;
            font-size: 18px;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
        }

        .correct {
            color: #155724;
            background-color: #d4edda;
            border: 1px solid #c3e6cb;
        }

        .incorrect {
            color: #721c24;
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <div id="quiz-container">
        <p id="quiz-question">What is 2 + 2?</p>
        <div>
            <input type="radio" id="choice1" name="quiz" value="4">
            <label for="choice1">4</label><br>
            <input type="radio" id="choice2" name="quiz" value="22">
            <label for="choice2">22</label><br>
            <input type="radio" id="choice3" name="quiz" value="3">
            <label for="choice3">3</label>
        </div>
        <button id="submit-answer">Submit Answer</button>
        <p id="feedback"></p>
    </div>
    
    <script>
        // Function Declaration
        function checkAnswer() {
            // Identify the Correct Answer
            const correctAnswer = "4";
            
            // Retrieve the User's Answer
            const selectedRadio = document.querySelector('input[name="quiz"]:checked');
            
            // Check if an answer was selected
            if (!selectedRadio) {
                document.getElementById('feedback').textContent = "Please select an answer!";
                document.getElementById('feedback').className = "incorrect";
                return;
            }
            
            const userAnswer = selectedRadio.value;
            
            // Compare the User's Answer with the Correct Answer
            if (userAnswer === correctAnswer) {
                document.getElementById('feedback').textContent = "Correct! Well done.";
                document.getElementById('feedback').className = "correct";
            } else {
                document.getElementById('feedback').textContent = "That's incorrect. Try again!";
                document.getElementById('feedback').className = "incorrect";
            }
        }
        
        // Add an Event Listener to the Submit Button
        document.getElementById('submit-answer').addEventListener('click', checkAnswer);
    </script>
</body>
</html>
