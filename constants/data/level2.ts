export const level2Lessons = [
    // 1️⃣ INTRO TO CONTROL FLOW
    {
        id: 'l2-1',
        title: 'What is Control Flow?',
        description: 'Control the execution of your program.',
        type: 'lesson',
        isCompleted: false,
        content: `x = 10

if x > 5:
    print("x is greater than 5")`,
        explanation:
            'Control flow allows you to decide which code runs and how many times it runs based on conditions.',
    },

    // 2️⃣ IF STATEMENT
    {
        id: 'l2-2',
        title: 'If Statement',
        description: 'Run code based on conditions.',
        type: 'lesson',
        isCompleted: false,
        content: `age = 18

if age >= 18:
    print("You are eligible to vote")`,
        explanation:
            'The if statement runs a block of code only when its condition is true.',
    },

    // 3️⃣ IF-ELSE
    {
        id: 'l2-3',
        title: 'If-Else Statement',
        description: 'Choose between two paths.',
        type: 'lesson',
        isCompleted: false,
        content: `num = 3

if num % 2 == 0:
    print("Even number")
else:
    print("Odd number")`,
        explanation:
            'The else block runs when the if condition is false.',
    },

    // 4️⃣ ELIF
    {
        id: 'l2-4',
        title: 'Elif Statement',
        description: 'Check multiple conditions.',
        type: 'lesson',
        isCompleted: false,
        content: `marks = 75

if marks >= 90:
    print("Grade A")
elif marks >= 60:
    print("Grade B")
else:
    print("Grade C")`,
        explanation:
            'elif allows checking multiple conditions in sequence.',
    },

    // 5️⃣ FOR LOOP
    {
        id: 'l2-5',
        title: 'For Loop',
        description: 'Repeat code a fixed number of times.',
        type: 'lesson',
        isCompleted: false,
        content: `for i in range(5):
    print(i)`,
        explanation:
            'A for loop is used to iterate over a sequence of values.',
    },

    // 6️⃣ WHILE LOOP
    {
        id: 'l2-6',
        title: 'While Loop',
        description: 'Repeat code while a condition is true.',
        type: 'lesson',
        isCompleted: false,
        content: `count = 1

while count <= 3:
    print(count)
    count += 1`,
        explanation:
            'A while loop keeps running as long as its condition is true.',
    },

    // 7️⃣ BREAK & CONTINUE
    {
        id: 'l2-7',
        title: 'Break and Continue',
        description: 'Control loop execution.',
        type: 'lesson',
        isCompleted: false,
        content: `for i in range(5):
    if i == 3:
        break
    print(i)`,
        explanation:
            'break stops the loop completely, while continue skips the current iteration.',
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
    'l2-q1': [
        {
            question: 'What does control flow do?',
            options: [
                'Styles the program',
                'Controls execution order',
                'Stores data',
                'Prints output',
            ],
            correctIndex: 1,
        },
    ],

    'l2-q2': [
        {
            question: 'Which keyword is used for a condition?',
            options: ['for', 'while', 'if', 'print'],
            correctIndex: 2,
        },
    ],

    'l2-q3': [
        {
            question: 'When does else run?',
            options: [
                'When if is true',
                'Always',
                'When if is false',
                'Before if',
            ],
            correctIndex: 2,
        },
    ],

    'l2-q4': [
        {
            question: 'Which loop is used when the number of iterations is known?',
            options: ['while', 'repeat', 'for', 'loop'],
            correctIndex: 2,
        },
    ],

    'l2-q5': [
        {
            question: 'What does break do in a loop?',
            options: [
                'Skips one iteration',
                'Stops the loop',
                'Restarts the loop',
                'Pauses execution',
            ],
            correctIndex: 1,
        },
    ],

    'l2-final': [
        {
            question: 'Which keyword checks multiple conditions?',
            options: ['if', 'else', 'elif', 'when'],
            correctIndex: 2,
        },
        {
            question: 'Which loop runs while a condition is true?',
            options: ['for', 'while', 'do-while', 'repeat'],
            correctIndex: 1,
        },
        {
            question: 'What does continue do?',
            options: [
                'Stops the loop',
                'Skips current iteration',
                'Ends program',
                'Repeats loop forever',
            ],
            correctIndex: 1,
        },
    ],
};
