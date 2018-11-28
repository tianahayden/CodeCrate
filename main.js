anime({
    targets: 'img.first',
    translateY: [
        { value: 0, duration: 400 },
        { value: 50, duration: 400 },
        { value: 0, duration: 400 }
    ],
    // rotate: {
    //     value: '1turn',
    //     easing: 'easeInOutSine'
    // },
    easing: 'easeInOutQuart',
    // loop: true,
})

anime({
    targets: 'img.second',
    translateY: [
        { value: 0, duration: 500 },
        { value: 50, duration: 500 },
        { value: 0, duration: 500 }
    ],
    // loop: true,
    easing: 'easeInOutQuart',
})

anime({
    targets: 'img.third',
    translateY: [
        { value: 0, duration: 600 },
        { value: 50, duration: 600 },
        { value: 0, duration: 600 }
    ],
    // loop: true,
    easing: 'easeInOutQuart',
})

anime({
    targets: 'img.fourth',
    translateY: [
        { value: 0, duration: 700 },
        { value: 50, duration: 700 },
        { value: 0, duration: 700 }
    ],
    // loop: true,
    easing: 'easeInOutQuart',
})

anime({
    targets: 'img.fifth',
    translateY: [
        { value: 0, duration: 800 },
        { value: 50, duration: 800 },
        { value: 0, duration: 800 }
    ],
    // loop: true,
    easing: 'easeInOutQuart',
})

anime({
    targets: 'div.header',
    translateY: [
        { value: 0, duration: 1000 },
        { value: -1000, duration: 1000 },
    ],
    delay: 800,
    easing: 'easeInOutQuart',
})

anime({
    targets: 'div.container',
    translateY: [
        { value: 0, duration: 1000 },
        { value: -100, duration: 1000 },
    ],
    delay: 800,
})

anime({
    targets: 'form',
    rotate: [
        { value: 0, duration: 2000 },
        { value: 3, duration: 200 },
        { value: -3, duration: 200 },
        { value: 0, duration: 600 },
    ],
    delay: 2000,
    easing: 'easeInOutQuart',
})

// anime({
//     targets: 'div.container',
//     opacity: 1,
//     delay: 2000,
//     easing: 'easeInOutQuart',
// })

// anime({
//     targets: 'form',
//     opacity: 1,
//     delay: 2200,
//     easing: 'easeInOutQuart',
// })
