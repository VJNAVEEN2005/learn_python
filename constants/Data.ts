import { level1Lessons, level1Quizzes } from './data/level1';
import { level2Lessons, level2Quizzes } from './data/level2';
import { level3Lessons, level3Quizzes } from './data/level3';
import { level4Lessons, level4Quizzes } from './data/level4';
import { level5Lessons, level5Quizzes } from './data/level5';
import { level6Lessons, level6Quizzes } from './data/level6';
import { level7Lessons, level7Quizzes } from './data/level7';
import { level8Lessons, level8Quizzes } from './data/level8';
import { LEVELS } from './data/levels';

export { LEVELS };

export const LESSONS = {
  '1': level1Lessons,
  '2': level2Lessons,
  '3': level3Lessons,
  '4': level4Lessons,
  '5': level5Lessons,
  '6': level6Lessons,
  '7': level7Lessons,
  '8': level8Lessons,
};

export const QUIZZES = {
  ...level1Quizzes,
  ...level2Quizzes,
  ...level3Quizzes,
  ...level4Quizzes,
  ...level5Quizzes,
  ...level6Quizzes,
  ...level7Quizzes,
  ...level8Quizzes,
};
