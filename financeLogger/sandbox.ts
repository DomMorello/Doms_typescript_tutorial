let character = 'dom';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});

const circ = (diameter : number) => {
    return diameter * Math.PI;
};

console.log(circ(3.45));

let mixed = ['dom', 'morello', 23];

// mixed = 'hello'; error

mixed[0] = 34;
mixed.push(23);
mixed.push('hihi');

let ninja = {
    name: 'morello',
    age: 32,
    belt: 'black',
};

// ninja.skills = ['punch', 'kick']; can't add additional property.

// ninga = {
//     name: 'dom',
//     age: 34;
//     // belt: 'yellow',
// };
// has to be exactly same structure.