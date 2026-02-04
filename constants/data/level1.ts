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
        content: `print("Hello, World!")`,
        explanation:
            'The print() function is used to display output on the screen.',
    },

    // 3️⃣ VARIABLES
    {
        id: 'l1-3',
        title: 'Variables',
        description: 'Store data in variables.',
        type: 'lesson',
        isCompleted: false,
        content: `name = "Alice"
age = 20
print(name)
print(age)`,
        explanation:
            'Variables store values. Python automatically understands the data type.',
    },

    // 4️⃣ DATA TYPES
    {
        id: 'l1-4',
        title: 'Data Types',
        description: 'Different types of data.',
        type: 'lesson',
        isCompleted: false,
        content: `x = 10
y = 3.14
z = "Python"`,
        explanation:
            'Integers, floats, and strings are common data types in Python.',
    },

    // 5️⃣ COMMENTS
    {
        id: 'l1-5',
        title: 'Comments',
        description: 'Write notes inside code.',
        type: 'lesson',
        isCompleted: false,
        content: `# This is a comment
print("Hello")`,
        explanation:
            'Comments start with # and are ignored by Python.',
    },

    // 6️⃣ BASIC MATH
    {
        id: 'l1-6',
        title: 'Basic Math Operations',
        description: 'Perform calculations.',
        type: 'lesson',
        isCompleted: false,
        content: `a = 10
b = 5
print(a + b)
print(a * b)`,
        explanation:
            'Python supports arithmetic operations like +, -, *, and /.',
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
