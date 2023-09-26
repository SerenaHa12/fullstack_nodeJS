// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// 1. Declare an empty array;
const emptyArray = [];

// 2. Declare an array with more than 5 number of elements
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
console.log(`2. Array: ${webTechs}`);

// 3. Find the length of your array
console.log(`3. Length of array webTechs: ${webTechs.length}`);

// 4. Get the first item, the middle item and the last item of the array

const middleIndex = webTechs.length / 2 - 0.5;
// console.log(middleIndex);
// console.log(`Middle item: ${webTechs[middleIndex]}`);

const lastIndex = webTechs.length - 1;
// console.log(`Last item: ${webTechs[lastIndex]}`);

console.log(
  `4. First item: ${webTechs[0]}, Middle item: ${webTechs[middleIndex]},Last item: ${webTechs[lastIndex]}`
);

// 5. Declare an array called mixedDataTypes,
// put different data types in the array and
// find the length of the array.
// The array size should be greater than 5
const mixedDataTypes = [1, "Do Ha Chi", 20, "Ha Noi", "NCSC", null];
console.log(
  `5. The length of the array mixedDataTypes: ${mixedDataTypes.length}`
);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(`6. Array itCompanies: ${itCompanies}`);

// 7. Print the array using console.log()
console.log(`7. Array itCompanies: ${itCompanies}`);

// 8. the number of ompany in array
console.log(`8. The number of ompany in array: ${itCompanies.length}`);

// 9. Print the first company, middle and last company
const middleIndexCompany = itCompanies.length / 2 - 0.5;
const lastIndexCompany = itCompanies.length - 1;
console.log(
  `9. The first company: ${itCompanies[0]}, middle: ${itCompanies[middleIndexCompany]} and last company: ${itCompanies[lastIndexCompany]}`
);

// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(`10. ${itCompanies[i]}`);
}

// 11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  const uppercaseCompany = itCompanies[i].toUpperCase();
  console.log(`11. ${uppercaseCompany}`);
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`12. ${itCompanies} are big IT companies`);

// 13. Check if a certain company exists in the itCompanies array.
// If it exist return the company else return a company is not found
const companyNameToCheck = "Microsoft";

if (itCompanies.includes(companyNameToCheck)) {
  console.log(`${companyNameToCheck} exists in the itCompanies array.`);
} else {
  console.log(`Company not found.`);
}

// 14. Filter out companies which have more than one 'o' without the filter method

// 15. Sort the array using sort() method
console.log(`15. Sort the array: ${itCompanies.sort()}`);

// 16. Reverse the array using reverse() method
console.log(`16. Reverse the array: ${itCompanies.reverse()}`);

// 17. Slice out the first 3 companies from the array
console.log(
  `17. Slide out the first 3 companies from the array: ${itCompanies.slice(4)}`
);

// 18. Slice out the last 3 companies from the array
console.log(
  `18. Slide out the last 3 companies from the array: ${itCompanies
    .reverse()
    .slice(4)}`
);

// 19. Slice out the middle IT company or companies from the array
// Check if the number of companies is even or odd
if (itCompanies.length % 2 === 0) {
  // If even, remove two companies from the middle
  const removedCompanies = itCompanies.splice(middleIndexCompany - 1, 2);
  console.log(`Removed companies: ${removedCompanies.join(", ")}`);
} else {
  // If odd, remove one company from the middle
  const removedCompany = itCompanies.splice(middleIndexCompany, 1);
  console.log(`Removed company: ${removedCompany[0]}`);
}

// Print the updated itCompanies array
console.log(`19. Remove middle company: ${itCompanies}`);

// 20.Remove the first IT company from the array
itCompanies.shift();
console.log(`20. Remove the first IT company: ${itCompanies}`);

// 21. Remove the middle IT company or companies from the array
itCompanies.shift();
console.log(`21. Remove middle company: ${itCompanies}`);

// 22. Remove the last IT company from the array
// 23. Remove all IT companies
