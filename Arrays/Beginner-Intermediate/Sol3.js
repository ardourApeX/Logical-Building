const max_min = (arr) => [
    Math.max.apply(null, arr),
    Math.min.apply(null, arr),
];

console.log(max_min([10, 4, 5, 2, 5, 6, 9]));
