const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

function createGrid(columns, rows) {
  const size = columns * rows
  for (let i = 0; i < size; i++) {
    container.style.cssText = `grid-template-columns: repeat(${columns} , 1fr) ;  grid-template-rows: repeat(${rows} , 1fr)`
    const square = document.createElement('div')
    square.classList.add('item')
    square.textContent = i + 1

    container.appendChild(square)
    square.addEventListener('mouseover', function (e) {
      e.target.style.background = 'red'
    })
  }
}

btn.addEventListener('click', () => {
  const squars = document.querySelectorAll('.item')
  squars.forEach((item) => {
    container.removeChild(item)
  })
  const num = parseInt(
    window.prompt('enter the desired number of grid items per side')
  )
  createGrid(num, num)
})
