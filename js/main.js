document.querySelectorAll('.accordion-item-trigger').forEach((item) => item.addEventListener('click', () => { //1
    const parent = item.parentNode;
    if (parent.classList.contains('accordion-item-active')) {
        parent.classList.remove('accordion-item-active');
    } else {
        document.querySelectorAll('.accordion-item').forEach((child) => child.classList.remove('accordion-item-active'))
        parent.classList.toggle('accordion-item-active');

        document.querySelectorAll('.accordion-title').forEach((title) => {
            const active = title;

        })
    }
}))

// document.querySelectorAll('.accordion-item-trigger').forEach((item) => item.addEventListener('click', () => { //1
//     const parent = item.parentNode;
//     if (parent.classList.contains('accordion-item-active')) {
//         parent.classList.remove('accordion-item-active');
//     } else {
//         document.querySelectorAll('.accordion-item').forEach((child) => child.classList.remove('accordion-item-active'))
//         parent.classList.toggle('accordion-item-active');

//         document.querySelectorAll('.accordion-title').forEach((title) => {
//                 const active = title;
//                 if (title.classList.contains('title-active')) { //4
//                     title.classList.remove('title-active');
//                 } //4
//                 else { //5
//                     title.classList.toggle('title-active');
//                 } //5
//                 document.querySelectorAll('.accordion-title').forEach((title) => title.classList.toggle('title-active'));

//             }) //3
//     } //1
// }))