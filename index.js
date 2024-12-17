function add(numbers) {
    if (numbers === "") return 0;

    if (numbers.startsWith("//")) {
        const delimiter = numbers[2]; 
        numbers = numbers.slice(4); 
        return add(numbers.split(delimiter).join(","));
    }

    let numbersArray = numbers.split(/[,\n]/).map(num => parseInt(num));

    let negatives = numbersArray.filter(num => num < 0);
    if (negatives.length > 0) {
        return `Negative numbers not allowed: ${negatives.join(', ')}`;
    }

    return numbersArray.reduce((sum, num) => sum + num, 0);
}

console.log(add("//;\n1;2"));
console.log(add("1,2")); 
console.log(add("1\n2,3"));
console.log(add("")); 
console.log(add("-1,2"));


