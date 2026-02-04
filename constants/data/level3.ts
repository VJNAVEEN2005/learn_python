export const level3Lessons = [
    // 1️⃣ INTRO TO DATA STRUCTURES
    {
        id: 'l3-1',
        title: 'What are Data Structures?',
        description: 'Store multiple values efficiently.',
        type: 'lesson',
        isCompleted: false,
        content: `numbers = [1, 2, 3]
print(numbers)`,
        explanation:
            'Data structures allow you to store and organize multiple values in a single variable.',
    },

    // 2️⃣ LISTS
    {
        id: 'l3-2',
        title: 'Lists',
        description: 'Store ordered collections.',
        type: 'lesson',
        isCompleted: false,
        content: `fruits = ["apple", "banana", "cherry"]
print(fruits)`,
        explanation:
            'Lists are ordered, mutable collections that can store multiple values.',
    },

    // 3️⃣ LIST INDEXING
    {
        id: 'l3-3',
        title: 'List Indexing',
        description: 'Access elements using index.',
        type: 'lesson',
        isCompleted: false,
        content: `fruits = ["apple", "banana", "cherry"]
print(fruits[0])`,
        explanation:
            'List indexing starts from 0. fruits[0] returns the first element.',
    },

    // 4️⃣ LIST METHODS
    {
        id: 'l3-4',
        title: 'List Methods',
        description: 'Modify lists using methods.',
        type: 'lesson',
        isCompleted: false,
        content: `numbers = [1, 2, 3]
numbers.append(4)
print(numbers)`,
        explanation:
            'List methods like append(), remove(), and pop() help modify list contents.',
    },

    // 5️⃣ TUPLES
    {
        id: 'l3-5',
        title: 'Tuples',
        description: 'Immutable collections.',
        type: 'lesson',
        isCompleted: false,
        content: `point = (10, 20)
print(point)`,
        explanation:
            'Tuples are ordered but immutable, meaning their values cannot be changed.',
    },

    // 6️⃣ SETS
    {
        id: 'l3-6',
        title: 'Sets',
        description: 'Store unique values.',
        type: 'lesson',
        isCompleted: false,
        content: `numbers = {1, 2, 2, 3}
print(numbers)`,
        explanation:
            'Sets store unique values and automatically remove duplicates.',
    },

    // 7️⃣ DICTIONARIES
    {
        id: 'l3-7',
        title: 'Dictionaries',
        description: 'Store key-value pairs.',
        type: 'lesson',
        isCompleted: false,
        content: `student = {"name": "Alice", "age": 20}
print(student["name"])`,
        explanation:
            'Dictionaries store data in key-value pairs and allow fast access using keys.',
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
    'l3-q1': [
        {
            question: 'What is a data structure?',
            options: [
                'A function',
                'A way to store multiple values',
                'A loop',
                'A condition',
            ],
            correctIndex: 1,
        },
    ],

    'l3-q2': [
        {
            question: 'Which data structure is ordered and mutable?',
            options: ['Tuple', 'Set', 'List', 'Dictionary'],
            correctIndex: 2,
        },
    ],

    'l3-q3': [
        {
            question: 'What is the index of the first element in a list?',
            options: ['1', '0', '-1', 'None'],
            correctIndex: 1,
        },
    ],

    'l3-q4': [
        {
            question: 'Which method adds an element to a list?',
            options: ['add()', 'insert()', 'append()', 'push()'],
            correctIndex: 2,
        },
    ],

    'l3-q5': [
        {
            question: 'Which data structure does NOT allow duplicates?',
            options: ['List', 'Tuple', 'Set', 'Dictionary'],
            correctIndex: 2,
        },
    ],

    'l3-final': [
        {
            question: 'Which data structure stores key-value pairs?',
            options: ['List', 'Tuple', 'Set', 'Dictionary'],
            correctIndex: 3,
        },
        {
            question: 'Which data structure is immutable?',
            options: ['List', 'Set', 'Tuple', 'Dictionary'],
            correctIndex: 2,
        },
        {
            question: 'How do you access a value in a dictionary?',
            options: [
                'dict.value',
                'dict(key)',
                'dict[key]',
                'dict->key',
            ],
            correctIndex: 2,
        },
    ],
};

