// # learn KMP Matching Pattern Algorithm

let word =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non dui consectetur erat accumsan pulvinar sed interdum quam. Ut ut neque tellus. Praesent neque tortor, pellentesque quis tempus sed, sodales eu nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam rutrum suscipit turpis quis iaculis. In hendrerit interdum tortor, vestibulum ultricies enim interdum nec. Aliquam erat volutpat. Nulla accumsan facilisis justo sit amet tincidunt. Vestibulum ut volutpat mauris. Cras a metus id sapien rutrum sodales. Fusce diam sem, viverra non luctus in, eleifend et ipsum. Proin mollis, massa in laoreet fringilla, lectus eros lobortis nisl, non rutrum velit lorem at ex. Ut convallis, arcu ut mattis pharetra, tortor est feugiat purus, nec vehicula nisi mauris in erat';

let pattern = 'feugiat';
let table = [];
let hashMap = new Map();
for (let letter of pattern) {
  if (!hashMap.has(letter)) {
    hashMap.set(letter);
    table.push(0);
  } else {
    let index = pattern.indexOf(letter);
    table.push(index);
  }
}

let pointerWord = 0;
let pointerPattern = -1;
let counter = -1;
let match = 0;
let patternMath = false;

while (pointerWord !== word.length) {
  if (word[pointerWord] === pattern[pointerPattern + 1]) {
    // Match case
    counter++;
    pointerWord++;
    pointerPattern++;
    match++;
  } else {
    // missMatch case
    pointerWord++;
    let backTo = table[counter];
    pointerPattern = backTo - 1;
    match = 0;
    counter = 0;
  }

  if (match === pattern.length) {
    patternMath = true;
    break;
  }
}

if (patternMath) {
  console.log('Found Match');
} else {
  console.log('Not Found');
}
