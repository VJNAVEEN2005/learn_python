export const level1Lessons = [
    // 1️⃣ INTRO
    {
        id: 'l1-1',
        title: 'What is Python?',
        description: 'Introduction to Python programming.',
        type: 'lesson',
        isCompleted: false,
        content: `print("Python is easy to learn!")`,
        explanation:
            'Python is a popular programming language known for its simple syntax and readability. It is widely used in web development, data science, automation, and AI.',
    },

    // 2️⃣ HELLO WORLD
    {
        id: 'l1-2',
        title: 'Hello, World!',
        description: 'Your first Python program.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Introduction',
                explanation: 'The print() function is the most basic way to communicate with your computer. It tells Python to display whatever is inside the parentheses on the screen.',
                content: `print("Hello, World!")`,
            },
            {
                title: 'Quotes in Python',
                explanation: 'In Python, you can use either single quotes (\') or double quotes (") to create strings (text). Just make sure you start and end with the same type!',
                content: `print('Single quotes work!')\nprint("Double quotes too!")`,
            },
            {
                title: 'Multiple Items',
                explanation: 'You can print multiple items at once by separating them with a comma. Python will automatically add a space between them for you.',
                content: `print("Hello", "Python!")`,
            }
        ]
    },

    // 3️⃣ VARIABLES
    {
        id: 'l1-3',
        title: 'Variables',
        description: 'Store data in variables.',
        type: 'lesson',
        isCompleted: false,
        content: `name = "Alice"\nage = 20\nprint(name)\nprint(age)`,
        explanation:
            'Variables are like containers that store values. You give them a name using the equals sign (=). Python is smart enough to know what kind of data you are storing.',
    },
    {
        id: 'l1-3q',
        title: 'Variable Checks',
        type: 'question',
        questions: [
            {
                question: 'Which is the correct way to create a variable named "x" with the value 5?',
                options: ['x == 5', 'variable x = 5', 'x = 5', 'set x to 5'],
                correctIndex: 2,
            },
            {
                question: 'What will print(name) display if name = "Bob"?',
                options: ['name', 'Bob', '"name"', 'Error'],
                correctIndex: 1,
            }
        ]
    },

    // 4️⃣ DATA TYPES
    {
        id: 'l1-4',
        title: 'Data Types',
        description: 'Different types of data.',
        type: 'lesson',
        isCompleted: false,
        content: `x = 10\ny = 3.14\nz = "Python"`,
        explanation:
            'Everything in Python has a type. Whole numbers are Integers (int), numbers with decimals are Floats, and text is called a String (str).',
    },
    {
        id: 'l1-4q',
        title: 'Data Type Checks',
        type: 'question',
        questions: [
            {
                question: 'What type of data is the number 42?',
                options: ['String', 'Float', 'Integer', 'Boolean'],
                correctIndex: 2,
            },
            {
                question: 'What type of data is "Hello"?',
                options: ['Integer', 'String', 'Float', 'List'],
                correctIndex: 1,
            }
        ]
    },

    // 5️⃣ COMMENTS
    {
        id: 'l1-5',
        title: 'Comments',
        description: 'Write notes inside code.',
        type: 'lesson',
        isCompleted: false,
        content: `# This is a comment\nprint("Hello")`,
        explanation:
            'Comments are notes for humans. They start with a # and Python completely ignores them when running your code.',
    },

    // 6️⃣ BASIC MATH
    {
        id: 'l1-6',
        title: 'Basic Math Operations',
        description: 'Perform calculations.',
        type: 'lesson',
        isCompleted: false,
        content: `a = 10\nb = 5\nprint(a + b)\nprint(a * b)`,
        explanation:
            'Python can be used like a calculator. It supports addition (+), subtraction (-), multiplication (*), and division (/).',
    },
    {
        id: 'l1-6q',
        title: 'Math Check',
        type: 'question',
        questions: [
            {
                question: 'What is the symbol for multiplication in Python?',
                options: ['x', '+', '*', '^'],
                correctIndex: 2,
            }
        ]
    },

    // 🏁 FINAL QUIZ
    {
        id: 'l1-final',
        title: 'Quiz: Python Basics',
        description: 'Final test for Level 1.',
        type: 'quiz',
        isCompleted: false,
    },
];

export const level1Quizzes = {
    'l1-q1': [
        {
            question: 'Python is mainly known for?',
            options: [
                'Complex syntax',
                'Speed only',
                'Simplicity and readability',
                'Hardware programming',
            ],
            correctIndex: 2,
        },
    ],
    'l1-q2': [
        {
            question: 'Which function is used to display output?',
            options: ['show()', 'log()', 'print()', 'write()'],
            correctIndex: 2,
        },
    ],
    'l1-q3': [
        {
            question: 'Which is a valid variable assignment?',
            options: [
                'int x = 10',
                'x := 10',
                'x = 10',
                'declare x = 10',
            ],
            correctIndex: 2,
        },
    ],
    'l1-q4': [
        {
            question: 'Which data type is "Python"?',
            options: ['Integer', 'Float', 'String', 'Boolean'],
            correctIndex: 2,
        },
    ],
    'l1-final': [
        {
            question: 'Which function is used to output text?',
            options: ['echo()', 'print()', 'log()', 'write()'],
            correctIndex: 1,
        },
        {
            question: 'How do you create a variable?',
            options: ['var x = 5', 'int x = 5', 'x = 5', 'declare x = 5'],
            correctIndex: 2,
        },
        {
            question: 'Which character starts a comment?',
            options: ['//', '/*', '#', '--'],
            correctIndex: 2,
        },
    ],
};
