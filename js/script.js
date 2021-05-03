const cities = document.querySelectorAll('.cities-container fieldset label input');
const findCitiesBtn = document.querySelector('.main-btn');
const inputGMT = document.querySelector('input[type="number"]');
const output = document.querySelector('.output-container fieldset');
const notOffsetCheckBox = document.querySelector('.notOffset');

const bitwiseNOT = {
    selected: false
}


document.addEventListener("DOMContentLoaded", () => {
    findCitiesBtn.addEventListener('click', findCities)
    notOffsetCheckBox.addEventListener('change',trackNOTCheckbox)
})


const trackNOTCheckbox = (ev) => {
    if(ev.target.checked) {
        bitwiseNOT.selected = true;
    } else {
        bitwiseNOT.selected = false;
    }
}

const findCities = () => {
    let resultArr;
    if(!bitwiseNOT.selected) {
        resultArr = Array.from(cities).filter(city => {
            return (!(Number(city.value) ^ inputGMT.value))
    })
  } else {
    resultArr = Array.from(cities).filter(city => {
        return ((Number(city.value) ^ inputGMT.value))
})
  }
    
    displayResult(resultArr);
}

const displayResult = (arr) => {
    const legend = document.querySelector('.output-container legend');
    const fieldset = document.querySelector('.output-container fieldset');
    const parentEl = legend.parentNode;
    checkmarkCities(arr)
    let df = new DocumentFragment();
    
    arr.forEach(city => {
        const label = document.createElement('label');
        label.textContent = city.dataset.city;
        df.appendChild(label);
    })
    fieldset.innerHTML =' <legend>Result</legend>';
    parentEl.insertBefore(df,legend.nextSibling);
    let div = document.createElement('div');
    div.className = "summary";
    div.textContent = `Total Number: ${arr.length}`
    parentEl.appendChild(div);
}


const checkmarkCities = (arr) => {
    cities.forEach(city => {
        city.removeAttribute('checked');
    })
    arr.forEach(city => {
        city.setAttribute('checked','checked')
    })
}

