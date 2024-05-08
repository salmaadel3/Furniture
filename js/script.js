
// collage image
const collageImage = [...document.querySelectorAll('.collage-img')];
collageImage.map((item,i)=>{
    item.addEventListener(('mouseover'), ()=>{
        collageImage.map((image,index)=>{
            if(index!=i){
                image.style.filter = `blur(10px)`;
                item.style.zIndex=2;
            }
        })

    })
    item.addEventListener(('mouseleave'),()=>{
        collageImage.map((image,index)=>{
            image.style=null;
        })
    })
})