export const level6Lessons = [
    // 1️⃣ INTRO TO ERRORS
    {
        id: 'l6-1',
        title: 'What are Errors?',
        description: 'Understand mistakes in programs.',
        type: 'lesson',
        isCompleted: false,
        content: `print("Start")
print(10 / 0)
print("End")`,
        explanation:
            'Errors are problems that stop a program from running correctly. The above code causes a runtime error.',
    },

    // 2️⃣ TYPES OF ERRORS
    {
        id: 'l6-2',
        title: 'Types of Errors',
        description: 'Different kinds of errors.',
        type: 'lesson',
        isCompleted: false,
        content: `# Syntax Error
# print("Hello"

# Runtime Error
print(10 / 0)`,
        explanation:
            'Syntax errors occur due to incorrect code structure. Runtime errors occur while the program is running.',
    },

    // 3️⃣ TRY & EXCEPT
    {
        id: 'l6-3',
        title: 'Try and Except',
        description: 'Handle errors safely.',
        type: 'lesson',
        isCompleted: false,
        content: `try:
    x = int("abc")
except:
    print("An error occurred")`,
        explanation:
            'The try-except block prevents the program from crashing when an error occurs.',
    },

    // 4️⃣ MULTIPLE EXCEPT BLOCKS
    {
        id: 'l6-4',
        title: 'Multiple Except Blocks',
        description: 'Handle different errors.',
        type: 'lesson',
        isCompleted: false,
        content: `try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
except ValueError:
    print("Invalid value")`,
        explanation:
            'You can handle specific errors using multiple except blocks.',
    },

    // 5️⃣ FINALLY BLOCK
    {
        id: 'l6-5',
        title: 'Finally Block',
        description: 'Code that always runs.',
        type: 'lesson',
        isCompleted: false,
        content: `try:
    file = open("data.txt")
except:
    print("Error opening file")
finally:
    print("Done")`,
        explanation:
            'The finally block always runs, whether an error occurs or not.',
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
    'l6-q1': [
        {
            question: 'What is an error?',
            options: [
                'A loop',
                'A function',
                'A problem that stops program execution',
                'A variable',
            ],
            correctIndex: 2,
        },
    ],

    'l6-q2': [
        {
            question: 'Which error occurs due to incorrect syntax?',
            options: [
                'Runtime error',
                'Logical error',
                'Syntax error',
                'Value error',
            ],
            correctIndex: 2,
        },
    ],

    'l6-q3': [
        {
            question: 'Which block handles errors?',
            options: ['try', 'catch', 'handle', 'error'],
            correctIndex: 0,
        },
    ],

    'l6-q4': [
        {
            question: 'Which block always runs?',
            options: ['try', 'except', 'else', 'finally'],
            correctIndex: 3,
        },
    ],

    'l6-final': [
        {
            question: 'Which keyword is used to handle errors?',
            options: ['error', 'except', 'handle', 'fail'],
            correctIndex: 1,
        },
        {
            question: 'What happens if an error is not handled?',
            options: [
                'Program continues',
                'Program crashes',
                'Error is ignored',
                'Code is skipped',
            ],
            correctIndex: 1,
        },
        {
            question: 'Which error occurs when dividing by zero?',
            options: [
                'ValueError',
                'TypeError',
                'ZeroDivisionError',
                'SyntaxError',
            ],
            correctIndex: 2,
        },
    ],
};
