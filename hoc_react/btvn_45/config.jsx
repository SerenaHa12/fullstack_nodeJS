/*
 * REMEMBER: IT ALWAY DECREMENT BY ONE!
 */
export const RANGE_NUMBER = 100;

/**
 * This is the maximum number of attempts to play one game.
 * It is calculated based on the binary search algorithm.
 * Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item,
 * until you've narrowed down the possible locations to just one.
 * In this case, we're using it to guess a number between 1 and RANGE_NUMBER.
 * The worst-case scenario for binary search is O(log n), so for a range of 100,
 * the maximum number of guesses would be log2(100) = 6.64. We use Math.ceil to round up,
 * because you can't make a fraction of a guess.
 */
const MAX_TIME = Math.ceil(Math.log2(RANGE_NUMBER));
export default MAX_TIME;
