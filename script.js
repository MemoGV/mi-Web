
document.addEventListener('DOMContentLoaded', ()=>{


    const btnMail = document.getElementById('btn-Mail');
    const btnLink = document.getElementById('btn-Link')
    const btnCv = document.getElementById('btn-Cv')

    btnMail.addEventListener('click', (event)=>{

        const urlMail = document.getElementById('url-Mail');
        navigator.clipboard.writeText(urlMail.textContent);    
        const msj=document.getElementById('message');
        msj.style.display='block'
        const x = event.clientX;
        const y = event.clientY;
        msj.style.left= (x + 10) + 'px'
        msj.style.top = (y+10) + 'px'

        setTimeout(()=>{
            msj.style.display='none';
        }, 1200)
        
    })

    

    btnLink.addEventListener('click', ()=>{
        window.open('https://www.linkedin.com/in/guillermo-e-garcia-vega-342947266/', '_blank') 
    })

    btnCv.addEventListener('click', ()=>{

        const urlPDF = "./CV/Guillermo_Garcia_CV.pdf";
        const linkDescarga = document.createElement('a');
        linkDescarga.href = urlPDF;
        linkDescarga.download = 'hola mundo'
        linkDescarga.target = '_blank'

        linkDescarga.click();
    })

    const botones = document.querySelectorAll(".btn-prj-description")
    const prjDescription = document.querySelectorAll(".prj-description")

    botones.forEach((boton, index)=>{

        boton.addEventListener('click', ()=>{

            if(prjDescription[index].style.display === 'block'){
                prjDescription[index].style.display = 'none'
            }else{
                prjDescription[index].style.display ='block'
            }
        })
    })


})

