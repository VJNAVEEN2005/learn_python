export const level7Lessons = [
    // 1️⃣ INTRO TO OOP
    {
        id: 'l7-1',
        title: 'What is OOP?',
        description: 'Organize code using objects.',
        type: 'lesson',
        isCompleted: false,
        content: `class Person:
    pass`,
        explanation:
            'Object-Oriented Programming (OOP) is a way of organizing code using classes and objects, making programs easier to manage and scale.',
    },

    // 2️⃣ CLASSES & OBJECTS
    {
        id: 'l7-2',
        title: 'Classes and Objects',
        description: 'Create objects from classes.',
        type: 'lesson',
        isCompleted: false,
        content: `class Person:
    name = "Alice"

p = Person()
print(p.name)`,
        explanation:
            'A class is a blueprint, and an object is an instance of that class.',
    },

    // 3️⃣ __INIT__ METHOD
    {
        id: 'l7-3',
        title: 'The __init__ Method',
        description: 'Initialize object data.',
        type: 'lesson',
        isCompleted: false,
        content: `class Person:
    def __init__(self, name):
        self.name = name

p = Person("Bob")
print(p.name)`,
        explanation:
            'The __init__ method is a constructor that runs when an object is created.',
    },

    // 4️⃣ INSTANCE METHODS
    {
        id: 'l7-4',
        title: 'Instance Methods',
        description: 'Functions inside a class.',
        type: 'lesson',
        isCompleted: false,
        content: `class Person:
    def greet(self):
        print("Hello!")

p = Person()
p.greet()`,
        explanation:
            'Instance methods define behaviors of an object.',
    },

    // 5️⃣ INHERITANCE
    {
        id: 'l7-5',
        title: 'Inheritance',
        description: 'Reuse code using parent classes.',
        type: 'lesson',
        isCompleted: false,
        content: `class Animal:
    def speak(self):
        print("Animal sound")

class Dog(Animal):
    pass

d = Dog()
d.speak()`,
        explanation:
            'Inheritance allows a class to reuse properties and methods from another class.',
    },

    // 6️⃣ ENCAPSULATION
    {
        id: 'l7-6',
        title: 'Encapsulation',
        description: 'Protect data inside classes.',
        type: 'lesson',
        isCompleted: false,
        content: `class User:
    def __init__(self):
        self._password = "1234"`,
        explanation:
            'Encapsulation restricts direct access to certain data to protect it.',
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
    'l7-q1': [
        {
            question: 'What is OOP?',
            options: [
                'A loop',
                'A way to organize code using objects',
                'A data type',
                'A library',
            ],
            correctIndex: 1,
        },
    ],

    'l7-q2': [
        {
            question: 'What is a class?',
            options: [
                'An object',
                'A blueprint for objects',
                'A variable',
                'A function',
            ],
            correctIndex: 1,
        },
    ],

    'l7-q3': [
        {
            question: 'What does __init__ do?',
            options: [
                'Deletes an object',
                'Initializes object data',
                'Prints output',
                'Stops execution',
            ],
            correctIndex: 1,
        },
    ],

    'l7-q4': [
        {
            question: 'What is inheritance?',
            options: [
                'Hiding data',
                'Reusing code from another class',
                'Creating loops',
                'Handling errors',
            ],
            correctIndex: 1,
        },
    ],

    'l7-final': [
        {
            question: 'What is an object?',
            options: [
                'A class',
                'An instance of a class',
                'A function',
                'A variable',
            ],
            correctIndex: 1,
        },
        {
            question: 'Which keyword is used to create a class?',
            options: ['function', 'object', 'class', 'def'],
            correctIndex: 2,
        },
        {
            question: 'What does self refer to?',
            options: [
                'The class',
                'The object itself',
                'The function',
                'The variable',
            ],
            correctIndex: 1,
        },
    ],
};
