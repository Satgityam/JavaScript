# proejct related to DOM

## porject link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Project Solution 

## Project 1

```javascript
const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')


buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)

    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id
    }
  })

})


```

### Projec 2

```javascript

  const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height=document.querySelector('#height').value
  const weight=document.querySelector('#weight').value
  const results=document.querySelector('#results')
  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=` Please Enter a vald height`;
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=` Please Enter a vald weight`;
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.6){results.innerHTML=`<span>${bmi} Under weight</span>}`}
    else if(bmi>=18.6 &&bmi <=24.9){results.innerHTML=`<span>${bmi} Normal Range</span>}`}
    else{
      results.innerHTML=`<span>${bmi} Overweight </span>}`
    }
  }


})
```
