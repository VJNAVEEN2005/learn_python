export const level2Lessons = [
    // 1️⃣ CONDITIONALS
    {
        id: 'l2-1',
        title: 'Conditionals',
        description: 'Making decisions in code.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Control Flow',
                explanation: 'Control flow allows you to decide which code runs and how many times it runs based on conditions. Without it, code simply runs from top to bottom.',
                content: `x = 10\nif x > 5:\n    print("x is greater than 5")`,
            },
            {
                title: 'The If Statement',
                explanation: 'The `if` statement checks a condition. If the condition is True, the indented block of code runs. If it is False, the block is skipped.',
                content: `age = 18\nif age >= 18:\n    print("Vote!")`,
            },
            {
                title: 'If-Else',
                explanation: 'What if you want to do something else when the condition is False? Use `else`. It catches anything that isn\'t caught by the `if`.',
                content: `num = 3\nif num % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")`,
            },
            {
                title: 'Elif Statement',
                explanation: '`elif` stands for "else if". It allows you to check for multiple conditions in a sequence. As soon as one is True, its code runs, and the rest are skipped.',
                content: `score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("C")`,
            },
        ],
    },
    {
        id: 'l2-1q',
        title: 'Conditionals Check',
        type: 'question',
        questions: [
            {
                question: 'Which keyword starts a conditional statement?',
                options: ['check', 'when', 'if', 'loop'],
                correctIndex: 2,
            },
            {
                question: 'When does the `else` block execute?',
                options: ['Always', 'When if is true', 'When if is false', 'Never'],
                correctIndex: 2,
            },
            {
                question: 'How do you check multiple conditions?',
                options: ['else', 'elif', 'check', 'multi'],
                correctIndex: 1,
            },
        ],
    },

    // 2️⃣ LOOPS
    {
        id: 'l2-2',
        title: 'Loops',
        description: 'Repeating actions.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'The For Loop',
                explanation: 'A `for` loop is used to iterate over a sequence (like a list or range of numbers). It repeats the code block for each item in the sequence.',
                content: `for i in range(3):\n    print(i)\n# Prints 0, 1, 2`,
            },
            {
                title: 'The While Loop',
                explanation: 'A `while` loop keeps running as long as its condition is True. Be careful! If the condition never becomes False, you get an infinite loop.',
                content: `count = 1\nwhile count <= 3:\n    print(count)\n    count += 1`,
            },
        ],
    },
    {
        id: 'l2-2q',
        title: 'Loops Check',
        type: 'question',
        questions: [
            {
                question: 'Which loop is best when you know how many times to repeat?',
                options: ['while', 'until', 'for', 'infinite'],
                correctIndex: 2,
            },
            {
                question: 'A while loop runs until...',
                options: ['It hits 10', 'The condition is False', 'The condition is True', 'User stops it'],
                correctIndex: 1,
            },
        ],
    },

    // 3️⃣ LOOP CONTROL
    {
        id: 'l2-3',
        title: 'Loop Control',
        description: 'Break and Continue.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Break Statement',
                explanation: 'The `break` statement stops the loop immediately, even if the loop condition is still True. It "breaks" out of the loop.',
                content: `for i in range(10):\n    if i == 5:\n        break\n    print(i)`,
            },
            {
                title: 'Continue Statement',
                explanation: 'The `continue` statement skips the rest of the current iteration and jumps back to the start of the loop for the next item.',
                content: `for i in range(5):\n    if i == 2:\n        continue\n    print(i)\n# Skips 2`,
            },
        ],
    },
    {
        id: 'l2-3q',
        title: 'Control Check',
        type: 'question',
        questions: [
            {
                question: 'What does `break` do?',
                options: ['Restarts loop', 'Exits loop', 'Skips iteration', 'Updates variable'],
                correctIndex: 1,
            },
            {
                question: 'What does `continue` do?',
                options: ['Stops loop', 'Skips to next iteration', 'Breaks code', 'Nothing'],
                correctIndex: 1,
            },
        ],
    },

    // 🏁 FINAL QUIZ
    {
        id: 'l2-final',
        title: 'Quiz: Control Flow',
        description: 'Test your control flow knowledge.',
        type: 'quiz',
        isCompleted: false,
    },
];

export const level2Quizzes = {
    'l2-final': [
        {
            question: 'What is the output of range(3)?',
            options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'],
            correctIndex: 1,
        },
        {
            question: 'Which statement is used to handle the "everything else" case?',
            options: ['elif', 'also', 'else', 'default'],
            correctIndex: 2,
        },
        {
            question: 'Can you nest if statements inside loops?',
            options: ['No', 'Yes', 'Only while loops', 'Only for loops'],
            correctIndex: 1,
        },
    ],
};
