export const level5Lessons = [
    // 1️⃣ INTRO TO STRINGS
    {
        id: 'l5-1',
        title: 'What are Strings?',
        description: 'Work with text data.',
        type: 'lesson',
        isCompleted: false,
        content: `text = "Hello Python"
print(text)`,
        explanation:
            'Strings are sequences of characters used to represent text in Python.',
    },

    // 2️⃣ STRING INDEXING & SLICING
    {
        id: 'l5-2',
        title: 'String Indexing & Slicing',
        description: 'Access parts of a string.',
        type: 'lesson',
        isCompleted: false,
        content: `word = "Python"
print(word[0])
print(word[1:4])`,
        explanation:
            'String indexing starts from 0. Slicing allows extracting a portion of a string.',
    },

    // 3️⃣ STRING METHODS
    {
        id: 'l5-3',
        title: 'String Methods',
        description: 'Modify and analyze strings.',
        type: 'lesson',
        isCompleted: false,
        content: `text = "hello world"
print(text.upper())
print(text.replace("world", "Python"))`,
        explanation:
            'String methods like upper(), lower(), replace(), and split() help manipulate text.',
    },

    // 4️⃣ STRING FORMATTING
    {
        id: 'l5-4',
        title: 'String Formatting',
        description: 'Insert variables into strings.',
        type: 'lesson',
        isCompleted: false,
        content: `name = "Alice"
age = 20
print(f"My name is {name} and I am {age}")`,
        explanation:
            'f-strings allow easy and readable string formatting.',
    },

    // 5️⃣ READING FILES
    {
        id: 'l5-5',
        title: 'Reading Files',
        description: 'Read data from files.',
        type: 'lesson',
        isCompleted: false,
        content: `file = open("data.txt", "r")
print(file.read())
file.close()`,
        explanation:
            'Files can be opened in read mode to access their contents.',
    },

    // 6️⃣ WRITING FILES
    {
        id: 'l5-6',
        title: 'Writing Files',
        description: 'Write data to files.',
        type: 'lesson',
        isCompleted: false,
        content: `file = open("data.txt", "w")
file.write("Hello File")
file.close()`,
        explanation:
            'Files opened in write mode allow you to write data into them.',
    },

    // 🏁 FINAL QUIZ
    {
        id: 'l5-final',
        title: 'Quiz: Strings & Files',
        description: 'Test your strings and files knowledge.',
        type: 'quiz',
        isCompleted: false,
    },
];

export const level5Quizzes = {
    'l5-q1': [
        {
            question: 'What is a string?',
            options: [
                'A number',
                'A collection of characters',
                'A loop',
                'A file',
            ],
            correctIndex: 1,
        },
    ],

    'l5-q2': [
        {
            question: 'What does word[0] return?',
            options: [
                'Last character',
                'First character',
                'Whole string',
                'Error',
            ],
            correctIndex: 1,
        },
    ],

    'l5-q3': [
        {
            question: 'Which method converts text to uppercase?',
            options: ['upper()', 'capitalize()', 'toUpper()', 'big()'],
            correctIndex: 0,
        },
    ],

    'l5-q4': [
        {
            question: 'Which syntax is used for f-strings?',
            options: [
                `'"{}"'.format()`,
                'f"{}"',
                '"%"',
                'concat()',
            ],
            correctIndex: 1,
        },
    ],

    'l5-q5': [
        {
            question: 'Which mode is used to read a file?',
            options: ['w', 'a', 'r', 'x'],
            correctIndex: 2,
        },
    ],

    'l5-final': [
        {
            question: 'Which method replaces part of a string?',
            options: ['change()', 'replace()', 'swap()', 'update()'],
            correctIndex: 1,
        },
        {
            question: 'Which function opens a file?',
            options: ['open()', 'read()', 'file()', 'load()'],
            correctIndex: 0,
        },
        {
            question: 'Which mode is used to write a file?',
            options: ['r', 'a', 'w', 'rw'],
            correctIndex: 2,
        },
    ],
};
