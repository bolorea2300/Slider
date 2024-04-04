const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')

const left = document.querySelector('.left')
const right = document.querySelector('.right')

let images = ['image1.jpg', 'image2.jpg', 'image3.jpg']
let position = 0
const length = images.length

left.addEventListener('click', () => {
  var firstImage = images.shift()
  images.push(firstImage)

  image1.src = images[0]
  image2.src = images[1]
  image3.src = images[2]
})

right.addEventListener('click', () => {
  var lastImage = images.pop()
  images.unshift(lastImage)

  image1.src = images[0]
  image2.src = images[1]
  image3.src = images[2]
})
