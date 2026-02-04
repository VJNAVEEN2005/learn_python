export const level8Lessons = [
    // 1️⃣ PROJECT 1: CALCULATOR
    {
        id: 'l8-1',
        title: 'Mini Project: Calculator',
        description: 'Build a calculator.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Goal',
                explanation: 'We will build a simple calculator that takes two numbers and performs addition, subtraction, multiplication, and division.',
                content: `a = 10\nb = 5\nprint(a + b)`,
            },
            {
                title: 'The Code',
                explanation: 'We define variable `a` and `b`, then print the results of different mathematical operations.',
                content: `a = 10\nb = 5\nprint("Sum:", a + b)\nprint("Difference:", a - b)\nprint("Product:", a * b)\nprint("Division:", a / b)`,
            },
        ],
    },
    {
        id: 'l8-1q',
        title: 'Calculator Check',
        type: 'question',
        questions: [
            {
                question: 'Which operator is used for division?',
                options: ['*', '%', '/', '#'],
                correctIndex: 2,
            },
            {
                question: 'If a=10 and b=5, what is a - b?',
                options: ['15', '5', '50', '2'],
                correctIndex: 1,
            },
        ],
    },

    // 2️⃣ PROJECT 2: NUMBER GUESSING
    {
        id: 'l8-2',
        title: 'Mini Project: Guessing Game',
        description: 'Guess the secret number.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Goal',
                explanation: 'The computer has a secret number, and the user has to guess it. We compare the guess with the secret.',
                content: `secret = 7\nguess = 7\nif guess == secret:\n    print("Win!")`,
            },
            {
                title: 'The Code',
                explanation: 'We use an `if-else` statement to check if the user\'s input matches the secret number.',
                content: `secret = 7\nguess = int(input("Guess: "))\nif guess == secret:\n    print("Correct!")\nelse:\n    print("Wrong!")`,
            },
        ],
    },
    {
        id: 'l8-2q',
        title: 'Game Check',
        type: 'question',
        questions: [
            {
                question: 'Which statement checks if the guess is correct?',
                options: ['if', 'else', 'for', 'while'],
                correctIndex: 0,
            },
            {
                question: 'How do you check equality?',
                options: ['=', '==', '===', 'equals'],
                correctIndex: 1,
            },
        ],
    },

    // 3️⃣ PROJECT 3: TO-DO LIST
    {
        id: 'l8-3',
        title: 'Mini Project: To-Do List',
        description: 'Manage tasks with lists.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Goal',
                explanation: 'We want to store a list of tasks that we need to do. A Python `list` is perfect for this.',
                content: `tasks = []`,
            },
            {
                title: 'The Code',
                explanation: 'We create an empty list and use `append()` to add tasks to it. Then we print the list to see our tasks.',
                content: `tasks = []\ntasks.append("Learn Python")\ntasks.append("Build project")\nprint(tasks)`,
            },
        ],
    },
    {
        id: 'l8-3q',
        title: 'To-Do Check',
        type: 'question',
        questions: [
            {
                question: 'Which data structure stores the tasks?',
                options: ['List', 'Dictionary', 'Tuple', 'Set'],
                correctIndex: 0,
            },
            {
                question: 'Which method adds a task?',
                options: ['add()', 'push()', 'append()', 'insert()'],
                correctIndex: 2,
            },
        ],
    },

    // 4️⃣ PROJECT 4: QUIZ APP
    {
        id: 'l8-4',
        title: 'Mini Project: Quiz App',
        description: 'Ask questions and score points.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Goal',
                explanation: 'We will ask the user a question. If they answer correctly, we increase their score.',
                content: `score = 0`,
            },
            {
                title: 'The Code',
                explanation: 'We check the answer using `if`. If it matches, we assume a correct answer and increment `score` by 1 using `+=`.',
                content: `score = 0\nanswer = input("2+2? ")\nif answer == "4":\n    score += 1\nprint("Score:", score)`,
            },
        ],
    },
    {
        id: 'l8-4q',
        title: 'Quiz App Check',
        type: 'question',
        questions: [
            {
                question: 'How do you increase the score by 1?',
                options: ['score++', 'score += 1', 'score = 1', 'score + 1'],
                correctIndex: 1,
            },
            {
                question: 'What function gets user input?',
                options: ['get()', 'input()', 'ask()', 'scan()'],
                correctIndex: 1,
            },
        ],
    },

    // 🏁 FINAL QUIZ
    {
        id: 'l8-final',
        title: 'Quiz: Mini Projects',
        description: 'Test your project understanding.',
        type: 'quiz',
        isCompleted: false,
    },
];

export const level8Quizzes = {
    'l8-final': [
        {
            question: 'Mini projects help you to?',
            options: ['Memorize syntax', 'Apply concepts', 'Avoid coding', 'Only read'],
            correctIndex: 1,
        },
        {
            question: 'Which project uses input from user?',
            options: ['Calculator', 'Guessing Game', 'To-Do List', 'All of the above'],
            correctIndex: 3,
        },
        {
            question: 'After completing mini projects, you should feel?',
            options: ['Confused', 'Confident', 'Bored', 'Finished forever'],
            correctIndex: 1,
        },
    ],
};
