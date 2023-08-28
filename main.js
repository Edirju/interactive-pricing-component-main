let view = document.getElementById('pageView')
let cost = document.getElementById('cost')
let cost2 = document.getElementById('cost2')
let slider = document.getElementById('price-slider')
let toggle = document.getElementById('billing')

let pageViews = ['10k', '50k', '100k', '500k', '1M']
let perMonth = [8, 12, 16, 24, 36]
let isYearly = false

slider.addEventListener('input', function(){
  
  updateValue()
  view.innerHTML = pageViews[slider.value]
  
  let value = this.value * 25
  
  this.style.background = `
    linear-gradient(to right,
      hsl(174, 77%, 80%) 0%,
      hsl(174, 77%, 80%) ${value}%,
      hsl(224, 65%, 95%) 0%,
      hsl(224, 65%, 95%) 100%)
  `
})

toggle.addEventListener('change', function(){
  if (isYearly === false) {
    isYearly = true
  }else{
    isYearly = false
  }
  updateValue()
})

function updateValue() {
  if (isYearly) {
    cost.innerHTML = perMonth[slider.value] * 0.75
    cost2.innerHTML = perMonth[slider.value] * 0.75
  }else{
    cost.innerHTML = perMonth[slider.value]
    cost2.innerHTML = perMonth[slider.value]
  }
  
}



