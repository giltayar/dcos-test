document.getElementById('root').textContent = 'And the answer is...'

;(async function() {
  document.getElementById('root').textContent =
    (await (await fetch('/life-the-universe')).json()).answer
})()
