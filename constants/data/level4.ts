export const level4Lessons = [
    // 1️⃣ FUNCTIONS BASICS
    {
        id: 'l4-1',
        title: 'Functions Basics',
        description: 'Define and call functions.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'What are Functions?',
                explanation: 'Functions are reusable blocks of code that perform a specific task. They help keep your code organized and avoid repetition.',
                content: `def greet():\n    print("Hello!")`,
            },
            {
                title: 'Calling a Function',
                explanation: 'Defining a function doesn\'t run it! You must "call" it by using its name followed by parentheses.',
                content: `def greet():\n    print("Hello!")\n\ngreet() # Calls the function`,
            },
        ],
    },
    {
        id: 'l4-1q',
        title: 'Function Check',
        type: 'question',
        questions: [
            {
                question: 'Which keyword defines a function?',
                options: ['func', 'define', 'def', 'function'],
                correctIndex: 2,
            },
            {
                question: 'How do you call a function named "test"?',
                options: ['test', 'call test', 'test()', 'run test'],
                correctIndex: 2,
            },
        ],
    },

    // 2️⃣ PARAMETERS & RETURN
    {
        id: 'l4-2',
        title: 'Parameters & Return',
        description: 'Pass data and get results.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Parameters',
                explanation: 'Parameters allow you to pass specific values (arguments) into a function so it can work with different data.',
                content: `def greet(name):\n    print("Hello", name)\n\ngreet("Alice")\ngreet("Bob")`,
            },
            {
                title: 'Return Values',
                explanation: 'A function can send a value back to where it was called using `return`. This result can be stored in a variable.',
                content: `def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result) # Prints 8`,
            },
        ],
    },
    {
        id: 'l4-2q',
        title: 'Input/Output Check',
        type: 'question',
        questions: [
            {
                question: 'What are values passed to a function called?',
                options: ['Returns', 'Arguments', 'Loops', 'Globals'],
                correctIndex: 1,
            },
            {
                question: 'Which keyword sends a result back?',
                options: ['back', 'output', 'return', 'send'],
                correctIndex: 2,
            },
        ],
    },

    // 3️⃣ SCOPE & DEFAULTS
    {
        id: 'l4-3',
        title: 'Scope & Defaults',
        description: 'Advanced function concepts.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Default Parameters',
                explanation: 'You can provide a default value for a parameter. If the caller doesn\'t pass a value, the default is used.',
                content: `def greet(name="User"):\n    print("Hello", name)\n\ngreet() # Prints "Hello User"`,
            },
            {
                title: 'Variable Scope',
                explanation: 'Variables created inside a function are "local" (only exist there). Variables outside are "global".',
                content: `x = 10 # Global\n\ndef show():\n    y = 5 # Local\n    print(y)\n\nshow()`,
            },
        ],
    },
    {
        id: 'l4-3q',
        title: 'Advanced Check',
        type: 'question',
        questions: [
            {
                question: 'Where can a local variable be accessed?',
                options: ['Everywhere', 'Inside its function', 'Outside function', 'In other files'],
                correctIndex: 1,
            },
            {
                question: 'When is a default parameter used?',
                options: ['Always', 'Never', 'When no argument is passed', 'When argument is None'],
                correctIndex: 2,
            },
        ],
    },

    // 🏁 FINAL QUIZ
    {
        id: 'l4-final',
        title: 'Quiz: Functions',
        description: 'Test your function knowledge.',
        type: 'quiz',
        isCompleted: false,
    },
];

export const level4Quizzes = {
    'l4-final': [
        {
            question: 'What happens if a function does not return a value?',
            options: ['Error', 'Returns 0', 'Returns None', 'Returns False'],
            correctIndex: 2,
        },
        {
            question: 'Can a function call another function?',
            options: ['Yes', 'No', 'Only if defined before', 'Only if global'],
            correctIndex: 0,
        },
        {
            question: 'Which is correct syntax for a function?',
            options: ['function myFunc:', 'def myFunc[]:', 'def myFunc():', 'func myFunc():'],
            correctIndex: 2,
        },
    ],
};
