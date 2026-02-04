export const level5Lessons = [
    // 1️⃣ STRINGS BASICS
    {
        id: 'l5-1',
        title: 'String Operations',
        description: 'Manipulate text.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Introduction',
                explanation: 'Strings are sequences of characters. You can access individual characters using indexing, just like lists.',
                content: `text = "Hello"\nprint(text[0]) # Prints "H"`,
            },
            {
                title: 'Slicing',
                explanation: 'Slicing allows you to get a substring (a part of the string) by specifying a start and end index.',
                content: `text = "Python"\nprint(text[0:2]) # Prints "Py"`,
            },
            {
                title: 'Methods',
                explanation: 'Strings come with useful methods like `upper()`, `lower()`, and `replace()` to modify the text.',
                content: `text = "hello"\nprint(text.upper()) # "HELLO"`,
            },
        ],
    },
    {
        id: 'l5-1q',
        title: 'String Check',
        type: 'question',
        questions: [
            {
                question: 'What does index 0 represent in a string?',
                options: ['Last character', 'First character', 'Length', 'Middle'],
                correctIndex: 1,
            },
            {
                question: 'Which method makes text uppercase?',
                options: ['uppercase()', 'toUpper()', 'upper()', 'cap()'],
                correctIndex: 2,
            },
        ],
    },

    // 2️⃣ FORMATTING
    {
        id: 'l5-2',
        title: 'String Formatting',
        description: 'Insert variables into text.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'F-Strings',
                explanation: 'F-strings are the easiest way to format strings. Just put an `f` before the quotes and wrap variables in curly braces `{}`.',
                content: `name = "Alice"\nprint(f"Hello {name}")`,
            },
        ],
    },
    {
        id: 'l5-2q',
        title: 'Format Check',
        type: 'question',
        questions: [
            {
                question: 'Which character starts an f-string?',
                options: ['f', 'F', 's', 'format'],
                correctIndex: 0,
            },
            {
                question: 'How do you insert a variable?',
                options: ['(var)', '[var]', '{var}', '<var>'],
                correctIndex: 2,
            },
        ],
    },

    // 3️⃣ FILES
    {
        id: 'l5-3',
        title: 'File Operations',
        description: 'Read and Write files.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Reading Files',
                explanation: 'To read a file, use the `open()` function with mode "r". The `read()` method retrieves the content.',
                content: `file = open("data.txt", "r")\ncontent = file.read()\nprint(content)\nfile.close()`,
            },
            {
                title: 'Writing Files',
                explanation: 'To write to a file, open it with mode "w". Be careful: this overwrites existing content!',
                content: `file = open("new.txt", "w")\nfile.write("Hello File")\nfile.close()`,
            },
        ],
    },
    {
        id: 'l5-3q',
        title: 'File Check',
        type: 'question',
        questions: [
            {
                question: 'Which mode is for reading?',
                options: ['w', 'r', 'a', 'x'],
                correctIndex: 1,
            },
            {
                question: 'Which mode creates a new file for writing?',
                options: ['r', 'a', 'w', 'read'],
                correctIndex: 2,
            },
        ],
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
    'l5-final': [
        {
            question: 'What does split() do?',
            options: ['Joins strings', 'Splits string into list', 'Removes characters', 'Nothing'],
            correctIndex: 1,
        },
        {
            question: 'Which method serves to replace text?',
            options: ['swap()', 'change()', 'replace()', 'switch()'],
            correctIndex: 2,
        },
        {
            question: 'Always remember to ___ a file after opening.',
            options: ['save', 'close', 'delete', 'check'],
            correctIndex: 1,
        },
    ],
};
