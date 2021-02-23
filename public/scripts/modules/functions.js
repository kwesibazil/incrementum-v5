export const glide= new Glide('.glide', {
  type: 'slider',
  perView: 2,                     
  swipeThreshold: 40,
  dragThreshold: 60,
  peek: {
    before: 0,
    after: 150
  },

  breakpoints: {
    355: {
      perView: 1
    },
    576:{                         //settings valid  for sizes below breakpoint    for more info - https://glidejs.com/docs/options/
      perView: 1,
      peek: {
        before: 0,
        after: 200
      }
    },
    700: {                        
      perView: 1,
      peek: {
        before: 0,
        after: 170
      }
    },
  }
}).mount()
