function attachEventListener(){
    let count=0
    document.getElementById('click').addEventListener('click',function xyz(){
        console.log('button clicked',++count)
    })
}
attachEventListener()