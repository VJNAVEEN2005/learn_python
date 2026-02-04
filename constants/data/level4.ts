export const level4Lessons = [
    // 1️⃣ INTRO TO FUNCTIONS
    {
        id: 'l4-1',
        title: 'What are Functions?',
        description: 'Reusable blocks of code.',
        type: 'lesson',
        isCompleted: false,
        content: `def greet():
    print("Hello!")`,
        explanation:
            'Functions are blocks of code that perform a specific task and can be reused multiple times.',
    },

    // 2️⃣ CALLING A FUNCTION
    {
        id: 'l4-2',
        title: 'Calling a Function',
        description: 'Execute a function.',
        type: 'lesson',
        isCompleted: false,
        content: `def greet():
    print("Hello!")

greet()`,
        explanation:
            'A function runs only when it is called using its name followed by parentheses.',
    },

    // 3️⃣ FUNCTION PARAMETERS
    {
        id: 'l4-3',
        title: 'Function Parameters',
        description: 'Pass data to functions.',
        type: 'lesson',
        isCompleted: false,
        content: `def greet(name):
    print("Hello", name)

greet("Alice")`,
        explanation:
            'Parameters allow you to pass values into a function.',
    },

    // 4️⃣ RETURN VALUES
    {
        id: 'l4-4',
        title: 'Return Statement',
        description: 'Get values back from functions.',
        type: 'lesson',
        isCompleted: false,
        content: `def add(a, b):
    return a + b

result = add(3, 5)
print(result)`,
        explanation:
            'The return statement sends a value back to the caller.',
    },

    // 5️⃣ DEFAULT PARAMETERS
    {
        id: 'l4-5',
        title: 'Default Parameters',
        description: 'Provide default values.',
        type: 'lesson',
        isCompleted: false,
        content: `def greet(name="User"):
    print("Hello", name)

greet()
greet("Bob")`,
        explanation:
            'Default parameters are used when no argument is provided.',
    },

    // 6️⃣ VARIABLE SCOPE
    {
        id: 'l4-6',
        title: 'Variable Scope',
        description: 'Local vs global variables.',
        type: 'lesson',
        isCompleted: false,
        content: `x = 10

def show():
    x = 5
    print(x)

show()
print(x)`,
        explanation:
            'Variables inside a function are local, while variables outside are global.',
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
    'l4-q1': [
        {
            question: 'What is a function?',
            options: [
                'A data type',
                'A reusable block of code',
                'A loop',
                'A condition',
            ],
            correctIndex: 1,
        },
    ],

    'l4-q2': [
        {
            question: 'How do you call a function?',
            options: [
                'function name',
                'function{}',
                'function()',
                'call function',
            ],
            correctIndex: 2,
        },
    ],

    'l4-q3': [
        {
            question: 'What are parameters?',
            options: [
                'Values returned by function',
                'Values passed to function',
                'Function names',
                'Loops',
            ],
            correctIndex: 1,
        },
    ],

    'l4-q4': [
        {
            question: 'Which keyword sends a value back?',
            options: ['send', 'print', 'return', 'output'],
            correctIndex: 2,
        },
    ],

    'l4-q5': [
        {
            question: 'What is variable scope?',
            options: [
                'Variable type',
                'Where variable can be accessed',
                'Variable value',
                'Variable size',
            ],
            correctIndex: 1,
        },
    ],

    'l4-final': [
        {
            question: 'Which keyword defines a function?',
            options: ['func', 'define', 'def', 'function'],
            correctIndex: 2,
        },
        {
            question: 'What happens if a function has no return?',
            options: [
                'Error',
                'Returns 0',
                'Returns None',
                'Returns false',
            ],
            correctIndex: 2,
        },
        {
            question: 'Which variable is accessible everywhere?',
            options: ['Local', 'Temporary', 'Global', 'Private'],
            correctIndex: 2,
        },
    ],
};
