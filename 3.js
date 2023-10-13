const arrays =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
console.log(arrays.map(array => {
    if(array === ' ')
    {
        return 'empty string';
    }
    else
    {
        return array;
    }
}
))