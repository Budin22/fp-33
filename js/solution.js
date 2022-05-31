'use strict'

// Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел (например [1,2,3]) и генерирует список из элементов:

const generateList = (array) => {
    function createTreeDom(array) {
        let ul = document.createElement('ul');

        for (let key of array) {
            let li = document.createElement('li');

            if (Array.isArray(key)) {
                ul.append(li);
                li.append(createTreeDom(key));
            } else {
                li.innerHTML = key;
                ul.append(li);
            }
        }
        return ul;
    }
    return document.body.append(createTreeDom(array));
}

generateList([1,2,3,[4,5,6],7,8,[[9,10,11,12]]]);