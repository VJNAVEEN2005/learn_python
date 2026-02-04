export const level7Lessons = [
    // 1️⃣ OOP FUNDAMENTALS
    {
        id: 'l7-1',
        title: 'OOP Fundamentals',
        description: 'Classes and Objects.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'What is OOP?',
                explanation: 'Object-Oriented Programming (OOP) allows you to model real-world things using "objects" that contain both data and functions.',
                content: `class Cat:\n    pass`,
            },
            {
                title: 'Classes and Objects',
                explanation: 'A Class is a blueprint (like a cookie cutter). An Object is what you create from that blueprint (the cookie).',
                content: `class Cat:\n    name = "Whiskers"\n\nmy_cat = Cat()\nprint(my_cat.name)`,
            },
        ],
    },
    {
        id: 'l7-1q',
        title: 'OOP Check',
        type: 'question',
        questions: [
            {
                question: 'What is a Class?',
                options: ['An instance', 'A blueprint', 'A variable', 'A loop'],
                correctIndex: 1,
            },
            {
                question: 'What is an Object?',
                options: ['A function', 'A blueprint', 'An instance of a class', 'A list'],
                correctIndex: 2,
            },
        ],
    },

    // 2️⃣ INITIALIZATION
    {
        id: 'l7-2',
        title: 'Initialization',
        description: 'The __init__ method.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'The __init__ Method',
                explanation: 'The `__init__` method helps set up an object when it is created. It\'s often called the "constructor".',
                content: `class Cat:\n    def __init__(self, name):\n        self.name = name\n\nc = Cat("Luna")\nprint(c.name)`,
            },
            {
                title: 'Self',
                explanation: '`self` refers to the specific object being created/used. It helps Python distinguish between "this cat\'s name" and "that cat\'s name".',
                content: `class Cat:\n    def meow(self):\n        print("Meow!")`,
            },
        ],
    },
    {
        id: 'l7-2q',
        title: 'Init Check',
        type: 'question',
        questions: [
            {
                question: 'What runs when an object is created?',
                options: ['__str__', '__init__', 'setup()', 'start()'],
                correctIndex: 1,
            },
            {
                question: 'What does `self` refer to?',
                options: ['The class', 'The object itself', 'Global variables', 'Nothing'],
                correctIndex: 1,
            },
        ],
    },

    // 3️⃣ ADVANCED OOP
    {
        id: 'l7-3',
        title: 'Advanced OOP',
        description: 'Inheritance & Encapsulation.',
        type: 'lesson',
        isCompleted: false,
        pages: [
            {
                title: 'Inheritance',
                explanation: 'Inheritance lets a new class (Child) use code from an existing class (Parent). A Dog IS-A Animal.',
                content: `class Animal:\n    def speak(self):\n        print("...")\n\nclass Dog(Animal):\n    pass`,
            },
            {
                title: 'Encapsulation',
                explanation: 'Encapsulation is about keeping some data private (hidden) so it can\'t be messed up from outside.',
                content: `class User:\n    def __init__(self):\n        self._secret = "hidden"`,
            },
        ],
    },
    {
        id: 'l7-3q',
        title: 'Advanced Check',
        type: 'question',
        questions: [
            {
                question: 'Inheritance allows code...',
                options: ['Deletion', 'Reuse', 'Hiding', 'Slowing'],
                correctIndex: 1,
            },
            {
                question: 'Encapsulation is for...',
                options: ['Protecting data', 'Sharing data', 'Running faster', 'Printing'],
                correctIndex: 0,
            },
        ],
    },

    // 🏁 FINAL QUIZ
    {
        id: 'l7-final',
        title: 'Quiz: OOP',
        description: 'Test your OOP knowledge.',
        type: 'quiz',
        isCompleted: false,
    },
];

export const level7Quizzes = {
    'l7-final': [
        {
            question: 'Which keyword creates a class?',
            options: ['def', 'struct', 'class', 'object'],
            correctIndex: 2,
        },
        {
            question: 'Can a class inherit from another?',
            options: ['No', 'Yes', 'Only first time', 'Never'],
            correctIndex: 1,
        },
        {
            question: 'What is `self.name = name` doing?',
            options: ['Printing name', 'Setting an attribute', 'Deleting name', 'Comparing'],
            correctIndex: 1,
        },
    ],
};
