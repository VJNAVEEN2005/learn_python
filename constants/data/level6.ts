export const level6Lessons = [
    // 1️⃣ UNDERSTANDING ERRORS
    {
        id: 'l6-1',
        title: 'Understanding Errors',
        description: 'What stops your code?',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'What are Errors?',
                explanation: 'Errors are problems that stop a program from running correctly. Instead of crashing silently, Python tells you what went wrong.',
                content: `print("Start")\nprint(10 / 0) # Error!\nprint("End")`,
            },
            {
                title: 'Types of Errors',
                explanation: 'Syntax Errors happen when code is written incorrectly (like missing a colon). Runtime Errors happen while code is running (like dividing by zero).',
                content: `# Syntax Error\n# if True\n\n# Runtime Error\nprint(10 / 0)`,
            },
        ],
    },
    {
        id: 'l6-1q',
        title: 'Error Check',
        type: 'question',
        questions: [
            {
                question: 'Which error stops the program while it is running?',
                options: ['Syntax Error', 'Runtime Error', 'Typo Error', 'Logic Error'],
                correctIndex: 1,
            },
            {
                question: 'What happens when a Syntax Error occurs?',
                options: ['Program runs partly', 'Program executes then crashes', 'Program does not start', 'Nothing'],
                correctIndex: 2,
            },
        ],
    },

    // 2️⃣ HANDLING ERRORS
    {
        id: 'l6-2',
        title: 'Handling Errors',
        description: 'Try and Except.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Try and Except',
                explanation: 'To prevent crashes, use `try` and `except`. Put risky code in `try`. If it fails, the `except` block runs instead of crashing.',
                content: `try:\n    print(10 / 0)\nexcept:\n    print("Something went wrong")`,
            },
            {
                title: 'Specific Errors',
                explanation: 'You can catch specific errors like `ZeroDivisionError` or `ValueError` to handle different situations differently.',
                content: `try:\n    x = int("abc")\nexcept ValueError:\n    print("That's not a number!")`,
            },
        ],
    },
    {
        id: 'l6-2q',
        title: 'Handler Check',
        type: 'question',
        questions: [
            {
                question: 'Which block contains the risky code?',
                options: ['except', 'try', 'catch', 'finally'],
                correctIndex: 1,
            },
            {
                question: 'Which block runs if an error occurs?',
                options: ['try', 'except', 'else', 'stop'],
                correctIndex: 1,
            },
        ],
    },

    // 3️⃣ ADVANCED HANDLING
    {
        id: 'l6-3',
        title: 'Advanced Handling',
        description: 'Finally and cleanup.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'The Finally Block',
                explanation: 'The `finally` block runs NO MATTER WHAT. It runs whether there was an error or not. It\'s great for cleanup, like closing files.',
                content: `try:\n    print("Working...")\nexcept:\n    print("Error!")\nfinally:\n    print("Done!")`,
            },
        ],
    },
    {
        id: 'l6-3q',
        title: 'Cleanup Check',
        type: 'question',
        questions: [
            {
                question: 'When does the `finally` block run?',
                options: ['Only on error', 'Only on success', 'Always', 'Never'],
                correctIndex: 2,
            },
        ],
    },

    // 🏁 FINAL QUIZ
    {
        id: 'l6-final',
        title: 'Quiz: Error Handling',
        description: 'Test your error handling knowledge.',
        type: 'quiz',
        isCompleted: false,
    },
];

export const level6Quizzes = {
    'l6-final': [
        {
            question: 'Which keyword handles exceptions?',
            options: ['catch', 'except', 'handle', 'stop'],
            correctIndex: 1,
        },
        {
            question: 'What is 10/0?',
            options: ['0', '10', 'Infinity', 'ZeroDivisionError'],
            correctIndex: 3,
        },
        {
            question: 'Which block is best for closing files?',
            options: ['end', 'close', 'finally', 'quit'],
            correctIndex: 2,
        },
    ],
};
