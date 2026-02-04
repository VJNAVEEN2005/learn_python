export const level3Lessons = [
    // 1️⃣ LISTS
    {
        id: 'l3-1',
        title: 'Lists',
        description: 'Ordered, mutable collections.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Introduction to Lists',
                explanation: 'Lists are one of the most used data structures in Python. They store multiple items in a single variable, are ordered, and changeable (mutable).',
                content: `fruits = ["apple", "banana", "cherry"]\nprint(fruits)`,
            },
            {
                title: 'Accessing Elements',
                explanation: 'You can refer to items in a list by their index. Remember, Python lists are 0-indexed, meaning the first item is at position 0.',
                content: `fruits = ["apple", "banana", "cherry"]\nprint(fruits[0]) # Prints "apple"\nprint(fruits[-1]) # Prints "cherry"`,
            },
            {
                title: 'List Methods',
                explanation: 'Python lists have built-in methods. `append()` adds an item to the end, while `pop()` removes an item from a specific position.',
                content: `numbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)\nnumbers.pop(0)\nprint(numbers)`,
            },
        ],
    },
    {
        id: 'l3-1q',
        title: 'Lists Check',
        type: 'question',
        questions: [
            {
                question: 'What is the index of the first element in a list?',
                options: ['1', '0', '-1', 'None'],
                correctIndex: 1,
            },
            {
                question: 'Which method adds an element to the end of a list?',
                options: ['add()', 'insert()', 'append()', 'push()'],
                correctIndex: 2,
            },
            {
                question: 'Are lists mutable (changeable)?',
                options: ['No', 'Yes', 'Only numbers', 'Only strings'],
                correctIndex: 1,
            },
        ],
    },

    // 2️⃣ TUPLES & SETS
    {
        id: 'l3-2',
        title: 'Tuples & Sets',
        description: 'Immutable and unique collections.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Tuples',
                explanation: 'Tuples are like lists, but they are immutable. Once created, you cannot change their values. They use parentheses `()`.',
                content: `point = (10, 20)\nprint(point[0])`,
            },
            {
                title: 'Sets',
                explanation: 'Sets are unordered collections of *unique* items. They use curly braces `{}`. Duplicate values are automatically removed.',
                content: `numbers = {1, 2, 2, 3}\nprint(numbers) # Prints {1, 2, 3}`,
            },
        ],
    },
    {
        id: 'l3-2q',
        title: 'Collection Check',
        type: 'question',
        questions: [
            {
                question: 'Which data structure is immutable?',
                options: ['List', 'Set', 'Tuple', 'Dictionary'],
                correctIndex: 2,
            },
            {
                question: 'Which data structure does NOT allow duplicates?',
                options: ['List', 'Tuple', 'Set', 'Dictionary'],
                correctIndex: 2,
            },
        ],
    },

    // 3️⃣ DICTIONARIES
    {
        id: 'l3-3',
        title: 'Dictionaries',
        description: 'Key-Value pairs.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Introduction',
                explanation: 'Dictionaries store data in key-value pairs. They are unordered, changeable, and indexed. You use keys to access values.',
                content: `student = {"name": "Alice", "age": 20}\nprint(student)`,
            },
            {
                title: 'Accessing Values',
                explanation: 'You access the value associated with a specific key by placing the key inside square brackets `[]`.',
                content: `student = {"name": "Alice", "age": 20}\nprint(student["name"])`,
            },
        ],
    },
    {
        id: 'l3-3q',
        title: 'Dictionary Check',
        type: 'question',
        questions: [
            {
                question: 'How do you access a value in a dictionary?',
                options: ['dict.value', 'dict(key)', 'dict[key]', 'dict->key'],
                correctIndex: 2,
            },
            {
                question: 'Dictionaries store data as...',
                options: ['Lists', 'Key-Value pairs', 'Tuples', 'Single values'],
                correctIndex: 1,
            },
        ],
    },

    // 🏁 FINAL QUIZ
    {
        id: 'l3-final',
        title: 'Quiz: Data Structures',
        description: 'Test your data structure knowledge.',
        type: 'quiz',
        isCompleted: false,
    },
];

export const level3Quizzes = {
    'l3-final': [
        {
            question: 'Which bracket is used for Lists?',
            options: ['()', '{}', '[]', '<>'],
            correctIndex: 2,
        },
        {
            question: 'Which collection is unordered?',
            options: ['List', 'Tuple', 'Set', 'String'],
            correctIndex: 2,
        },
        {
            question: 'Can a tuple be changed after creation?',
            options: ['Yes', 'No', 'Sometimes', 'If empty'],
            correctIndex: 1,
        },
    ],
};

