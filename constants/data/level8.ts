export const level8Lessons = [
    // 1️⃣ INTRO TO MINI PROJECTS
    {
        id: 'l8-1',
        title: 'Introduction to Mini Projects',
        description: 'Apply everything you learned.',
        type: 'lesson',
        isCompleted: false,
        content: `print("Welcome to Mini Projects!")`,
        explanation:
            'Mini projects help you apply Python concepts in real-world scenarios and build confidence.',
    },

    // 2️⃣ PROJECT 1: CALCULATOR
    {
        id: 'l8-2',
        title: 'Mini Project: Calculator',
        description: 'Build a simple calculator.',
        type: 'lesson',
        isCompleted: false,
        content: `a = 10
b = 5
print("Sum:", a + b)
print("Difference:", a - b)
print("Product:", a * b)
print("Division:", a / b)`,
        explanation:
            'This project uses variables, math operations, and print statements.',
    },

    // 3️⃣ PROJECT 2: NUMBER GUESSING GAME
    {
        id: 'l8-3',
        title: 'Mini Project: Number Guessing Game',
        description: 'Use loops and conditions.',
        type: 'lesson',
        isCompleted: false,
        content: `secret = 7
guess = int(input("Enter a number: "))

if guess == secret:
    print("Correct!")
else:
    print("Wrong guess")`,
        explanation:
            'This project uses input, if-else conditions, and comparison operators.',
    },

    // 4️⃣ PROJECT 3: TO-DO LIST (CONSOLE)
    {
        id: 'l8-4',
        title: 'Mini Project: To-Do List',
        description: 'Manage tasks using lists.',
        type: 'lesson',
        isCompleted: false,
        content: `tasks = []
tasks.append("Learn Python")
tasks.append("Build a project")
print(tasks)`,
        explanation:
            'This project uses lists and basic data manipulation.',
    },

    // 5️⃣ PROJECT 4: SIMPLE QUIZ APP
    {
        id: 'l8-5',
        title: 'Mini Project: Quiz App',
        description: 'Combine logic and questions.',
        type: 'lesson',
        isCompleted: false,
        content: `score = 0

answer = input("What is 2 + 2? ")
if answer == "4":
    score += 1

print("Score:", score)`,
        explanation:
            'This project combines variables, conditions, and user input.',
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
    'l8-q1': [
        {
            question: 'Why are mini projects important?',
            options: [
                'They are optional',
                'They apply real concepts',
                'They replace theory',
                'They are only for experts',
            ],
            correctIndex: 1,
        },
    ],

    'l8-q2': [
        {
            question: 'Which project uses lists?',
            options: [
                'Calculator',
                'Guessing Game',
                'To-Do List',
                'Quiz App',
            ],
            correctIndex: 2,
        },
    ],

    'l8-final': [
        {
            question: 'Mini projects help you to?',
            options: [
                'Memorize syntax',
                'Apply concepts practically',
                'Avoid coding',
                'Only read code',
            ],
            correctIndex: 1,
        },
        {
            question: 'Which project uses input from user?',
            options: [
                'Calculator',
                'Guessing Game',
                'To-Do List',
                'All of the above',
            ],
            correctIndex: 3,
        },
        {
            question: 'After completing mini projects, you should feel?',
            options: [
                'Confused',
                'Confident',
                'Bored',
                'Finished forever',
            ],
            correctIndex: 1,
        },
    ],
};
