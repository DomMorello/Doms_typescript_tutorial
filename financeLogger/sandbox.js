var character = 'dom';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(3.45));
var mixed = ['dom', 'morello', 23];
// mixed = 'hello'; error
mixed[0] = 34;
mixed.push(23);
mixed.push('hihi');
var ninja = {
    name: 'morello',
    age: 32,
    belt: 'black'
};
// ninja.skills = ['punch', 'kick']; can't add additional property.
// ninga = {
//     name: 'dom',
//     age: 34;
//     // belt: 'yellow',
// };
// has to be exactly same structure.
