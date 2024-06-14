document.addEventListener('DOMContentLoaded', ()=>{
    const body = document.body
    const nightBtn = document.getElementById('night-btn') /*General Nightshift Style*/
    const header = document.getElementById('head') /*header*/
    const nightBtnStyle = document.getElementById('night-btn') /* night btn*/
    const sectionProjectsBackground = document.getElementById('section-projects-background')
    const softTittle = document.getElementById('soft-lang')
    const contact = document.getElementById('contact')
    const photoProfile = document.getElementById('photo-profile')
    const translateBtn = document.getElementById('translate-btn')
    const mailBtn = document.getElementById('btn-Mail')
    const menuA = document.querySelectorAll('.menu-A') /*list As Menu*/
    const prjBox = document.querySelectorAll('.project')
    const tecBox = document.querySelectorAll('.tec-Box')
    const tecImg = document.querySelectorAll('.tec-img')
    const softBox = document.querySelectorAll('.li-box-soft')
    const titleDate = document.querySelectorAll('.title-date')
    const boxDescriptionStyle = document.querySelectorAll('.box-description-style')
    const btnsDescriptionExpEdu = document.querySelectorAll('.btn-style-description')
    const dotsBtnsDescExpEdu = document.querySelectorAll('.img-dots')
    const upBtnsDescExpEdu = document.querySelectorAll('.img-up')
    const imgSocialMediaBtns = document.querySelectorAll('.img-social-media-btns')
    const styleBtnsContact = document.querySelectorAll('.style-btns')
    const styleDataBtns = document.querySelectorAll('.night-mode-data')
    const imgLightMode = document.querySelector('.img-light-btn')
    const imgDarkMode = document.querySelector('.img-night-btn')
    const msjMail = document.querySelectorAll('.msj-mail')
    const title = document.getElementById('title-job')
    
    class Button {   // class btns ///
        constructor(clas, name, action){
            this.clas = clas;
            this.name = name;
            this.action = action
            this.buttonElement = document.querySelector(`.${this.clas}`)}
        addEvent(){
            if (this.buttonElement) {
                this.buttonElement.addEventListener('click', this.action); }}
        nightMode(){
            var variable = localStorage.getItem('nightModeActivated')
            variable = (variable === 'false' || variable === null) ? 'true' : 'false'
            nightBtn.addEventListener('click', ()=>{
                
                nightModeClass()
                localStorage.setItem('nightModeActivated', variable)
                variable = variable === 'false'? 'true':'false'
            })}    
        openPageLinkedin(){
            window.open('https://www.linkedin.com/in/guillermo-e-garcia-vega-342947266', '_blank')
        }
        openPageGit(){
            window.open('https://github.com/MemoDamus', '_blank')}
        copyMail(event){
            navigator.clipboard.writeText('gvmemo.93@gmail.com');    
            const msj=document.querySelector('.message-Mail');
            msj.style.left= `${event.clientX + 7}px` ;
            msj.style.top = `${event.clientY + 7}px`;
            msj.style.display='block';
            setTimeout(()=>{
            msj.style.display='none';}, 1200)}
        copyMail2(event){
            navigator.clipboard.writeText('gvmemo.93@gmail.com');    
            const msj2=document.querySelector('.mail');
            msj2.style.left= `${event.clientX + 7}px` ;
            msj2.style.top = `${event.clientY + 7}px`;
            msj2.style.display='block';
            setTimeout(()=>{
            msj2.style.display='none';}, 1200)}
        downloadCv(){
            const urlPDF = "./CV/Guillermo_Garcia_CV.pdf";
            const linkDescarga = document.createElement('a');
            linkDescarga.href = urlPDF;
            linkDescarga.target = '_blank';
            linkDescarga.click();}
        prjDescriptionAction(){
            const botones = document.querySelectorAll(".btn-description");
            const prjDescription = document.querySelectorAll(".box-description");
            const imgDots = document.querySelectorAll(".img-dots");
            const imgUp = document.querySelectorAll(".img-up");

            botones.forEach((boton, index)=>{

                boton.addEventListener('click', ()=>{

                if(prjDescription[index].style.display === 'block'){
                    prjDescription[index].style.display = 'none'
                    imgDots[index].style.display = 'block'
                    imgUp[index].style.display = 'none'
                }else{
                    prjDescription[index].style.display ='block'
                    imgDots[index].style.display = 'none'
                    imgUp[index].style.display = 'block'
                    
                     }
                })
            })

        }
        traduction(){
            
          translateBtn.addEventListener('click',()=>{

                if(title.textContent === 'Desarrollador Web'){
                    printDataCV(englishCV)  
                    localStorage.setItem('translate', 'ingles')
                }else{
                    printDataCV(spanishCV)
                    localStorage.setItem('translate', 'spanish')
                }
                
          })
        }
    }

    const buttons = [  //Buttons Colecction 
        new Button('btns-Link', 'Button Link', Button.prototype.openPageLinkedin),
        new Button('btns-Link2', 'Button Link', Button.prototype.openPageLinkedin),
        new Button('btns-Mail', 'Button Mail', Button.prototype.copyMail),
        new Button('btns-Mail2', 'Button Mail', Button.prototype.copyMail2),
        new Button('btns-Cv', 'Button Cv', Button.prototype.downloadCv),
        new Button('btns-Cv2', 'Button Cv', Button.prototype.downloadCv),
        new Button('btns-Github', 'Button GitHub', Button.prototype.openPageGit),
        new Button('btns-GitHub2', 'Button GitHub', Button.prototype.openPageGit),
        new Button('btn-description-prj', 'Button Project', Button.prototype.prjDescriptionAction()),
        new Button('night-btn','Button Nightshift', Button.prototype.nightMode()),
        new Button('translate-btn', 'Button Translator', Button.prototype.traduction())
    ]
    buttons.forEach( boton => boton.addEvent())
    
    ///////////// Tecnologys /////////////////

    const imgTec = document.querySelectorAll(".tec-img")
    const tecDescription = document.getElementById('description-tec')
    var timerOut
    var timerIn
    
    const txtTecTecnology = [
        {
            name:'html',
            txt:`Tengo experiencia en HTML y estoy familiarizado con su sintaxis, puedo crear estructuras de páginas web
            utilizando diferentes tipos de etiquetas. Además, puedo aplicar atributos y utilizar elementos 
            de formato como listas, y estilos con CSS mediante clases y selectores. 
            El HTML de esta página web es un ejemplo de lo que sé hacer.`
        },
        {
            name:'css',
            txt:`Poseo conocimientos en CSS, incluyendo diseño con flexbopx y grid, así como la creación de diseños responsivos.
            Además sigo aprendiendo técnicas avanzadas de diseño, animaciones y posicionamiento en CSS, para poder crear 
            mejores interfaces web atractivas y funcionales que se ajusten de manera óptima a diferentes dispositivos.`
        },
        {
            name:'javascript',
            txt:`Tengo conocimiento general en JavaScript, abarcando una comprensión de los conceptos fundamentales del lenguaje,
             como variables, funciones, bucles y condicionales. Además, estoy familiarizado con el uso de objetos, 
             incluyendo la creación, y manipulación de objetos, el uso de métodos y propiedades.`
        },
        {
            name:'github',
            txt:`Estoy familiarizado con el uso de Git y GitHub, lo que incluye la capacidad de gestionar repositorios, 
            realizar seguimiento de cambios, manejar ramas, fusionar código y colaborar eficientemente en proyectos de desarrollo de software 
            utilizando estas herramientas de control de versiones`
        },
        {
            name:'default',
            txt:`Hola, te platico un poco de lo que sé y como es que lo sé.
            Durante un año, me he dedicado a estudiar HTML, CSS y JavaScript de manera autodidacta. 
            He explorado diferentes cursos en línea, páginas web, libros y vídeos en YouTube.
            Explora más sobre mis habilidades en cada tecnología al pasar el cursor sobre ellas.`
        }]
    const txtTecTecnologyEnglish = [
        {
            name:'html',
            txt:`jajajajajaja  CSS mediante clases y selectores. 
            El HTML de esta página web es un ejemplo de lo que sé hacer.`
        },
        {
            name:'css',
            txt:`Poseo conocimientos en CSS, incluyendo diseño con flexbopx y grid, así como la creación de diseños responsivos.
            Además sigo aprendiendo técnicas avanzadas de diseño, animaciones y posicionamiento en CSS, para poder crear 
            mejores interfaces web atractivas y funcionales que se ajusten de manera óptima a diferentes dispositivos.`
        },
        {
            name:'javascript',
            txt:`Tengo conocimiento general en JavaScript, abarcando una comprensión de los conceptos fundamentales del lenguaje,
             como variables, funciones, bucles y condicionales. Además, estoy familiarizado con el uso de objetos, 
             incluyendo la creación, y manipulación de objetos, el uso de métodos y propiedades.`
        },
        {
            name:'github',
            txt:`Estoy familiarizado con el uso de Git y GitHub, lo que incluye la capacidad de gestionar repositorios, 
            realizar seguimiento de cambios, manejar ramas, fusionar código y colaborar eficientemente en proyectos de desarrollo de software 
            utilizando estas herramientas de control de versiones`
        },
        {
            name:'default',
            txt:`Hola, te platico un poco de lo que sé y como es que lo sé.
            Durante un año, me he dedicado a estudiar HTML, CSS y JavaScript de manera autodidacta. 
            He explorado diferentes cursos en línea, páginas web, libros y vídeos en YouTube.
            Explora más sobre mis habilidades en cada tecnología al pasar el cursor sobre ellas.`
        }]
    tecDescription.textContent = txtTecTecnology[4].txt
    imgTec.forEach((imgTec, index)=>{

        imgTec.addEventListener('mouseover',()=>{
            
            tecDescription.style.opacity = 0
            var ok

            if(title.textContent === 'Desarrollador Web'){
                ok = txtTecTecnology[index]
            }else{
                ok = txtTecTecnologyEnglish[index]
            }

            timerIn = setTimeout(()=>{

                switch(index){
                    case 0: 
                        tecDescription.textContent = ok.txt; 
                        break;
                    case 1:
                        tecDescription.textContent = ok.txt;
                        break;
                    case 2:
                        tecDescription.textContent = ok.txt;
                        break;
                    case 3:
                        tecDescription.textContent = ok.txt;
                        break;
                }
                tecDescription.style.opacity = 1
            },500)  
            clearTimeout(timerOut)
        })

        imgTec.addEventListener('mouseout', ()=>{

            tecDescription.style.opacity = 0
            timerOut = setTimeout(()=>{
                tecDescription.textContent = txtTecTecnology[4].txt
                tecDescription.style.opacity = 1
                
            },1000)
            clearTimeout(timerIn)
        })
    })
    ///Info en txt ///
    const spanishCV = {
        menu:{
            first:'Sobre Mi', 
            second: 'Proyectos', 
            third :'Experiencia', 
            fourth:'Educacion'},
        title:'Desarrollador Web',
        section1:{
            title:'Sobre Mi',
            description:`I am an industrial engineer with a master's degree in industrial engineering, 
            enthusiastic about technology, film, and video games. Throughout my career, 
            I have gained experience in image design and video editing for social media platforms. 
            Currently, I am focusing my energy on learning programming with the goal of transitioning 
            into a career as a programmer. I am excited to explore new opportunities in the field of 
            programming and to apply my analytical and problem-solving skills to develop innovative 
            solutions. I am committed to my professional growth and am constantly seeking new learning 
            and development opportunities. I am always open to connecting with industry professionals 
            and exploring collaborations on exciting projects.`
        },
        section2:{
            title:'Proyectos',
            firstProject:{
                prjName:'nombre 1',
                description:`descripcion proyecto 1.`
            },
            secondProject:{
                prjName:'nombre 2',
                description:`descripcion proyiecto 2`
            }
        },
        section3:{
            title:'Tecnoclogias',
            subTitle:'Conocimientos',
            subTitle1:'Aprendiendo'
        },
        section4:{
            language:{
                title:'Idiomas',
                Lang:'Español',
                Lang2:'Ingles B2 Certificado'
            },
            skills:{
                title:'Habilidades',
                skill:'Trabajo en equipo',
                skill1: 'Adapatabilidad', 
                skill2:'Atencion al detalle', 
                skill3:'Paciencia'
            }
        },
        section5:{
            workHistory:{
                title:'Experiencia',
                workTitle:'Diseñador Grafico Independiente',
                fecha:'Sep 2019 - Actualmente',
                descripcion:`Trabajo en una variedad de proyectos, desde la edición de videos promocionales hasta la creación de contenido visual para campañas 
                de marketing en redes sociales. Mi objetivo es combinar mi experiencia en ingeniería con mi habilidad para contar historias a través de 
                imágenes y animaciones, ofreciendo soluciones visuales que gusten y enganchen a la audiencia.`
            }
        },
        section6:{  
            education:{
                title:'Educacion',
                degree:{
                    degree:'Maestria en Ingenieria Industrial',
                    date:'Ago 2020 - Dic 2022',
                    descripcion: `Instituto Tecnologico de Ciudad Victoria - Tamaulipas, Mexico.
                    Durante el tiempo en mi maestria realice los siguientes objetivos. Realización de un análisis exhaustivo del mercado local y global para 
                    identificar oportunidades y desafíos. Desarrollo de un estudio técnico detallado para calcular los costos de infraestructura y el 
                    retorno de la inversión. Determinación de la viabilidad económica del proyecto mediante análisis financiero y proyecciones. Investigación 
                    exhaustiva del mercado global para evaluar la expansión potencial del servicio fuera de nuestra área local.`
                },
                secondDegree:{
                    degree:'Ingeniera Industrial',
                    date:'Ago 2012 - Dic 2017',
                    descripcion: `Planeacion y evaluacion de proyectos a corto, mediano y largo plazo. Procesos y mediciones de mejora continua.`  
                }  
            }    
        },
        section7:'Contacto'
    }
    
    const englishCV = {
        menu:{
            first:'About Me', 
            second: 'Projects', 
            third :'Experince', 
            fourth:'Education'},
        title:'Fronted Trainne Developer',
        section1:{
            title:'About Me',
            description:`I am an industrial engineer with a master's degree in industrial engineering, 
            enthusiastic about technology, film, and video games. Throughout my career, 
            I have gained experience in image design and video editing for social media platforms. 
            Currently, I am focusing my energy on learning programming with the goal of transitioning 
            into a career as a programmer. I am excited to explore new opportunities in the field of 
            programming and to apply my analytical and problem-solving skills to develop innovative 
            solutions. I am committed to my professional growth and am constantly seeking new learning 
            and development opportunities. I am always open to connecting with industry professionals 
            and exploring collaborations on exciting projects.`
        },
        section2:{
            title:'Projects',
            firstProject:{
                prjName:'name 1',
                description:`project description 1.`
            },
            secondProject:{
                prjName:'name 2',
                description:`project description 2`
            }
        },
        section3:{
            title:'Technology',
            subTitle:'Knowledge',
            subTitle1:'Learning'
        },
        section4:{
            language:{
                title:'Languages',
                Lang:'Spanish',
                Lang2:'English'
            },
            skills:{
                title:'Softkills',
                skill:'Teamwork',
                skill1: 'Adaptability', 
                skill2:'Attencion to Details', 
                skill3:'Patience'
            }
        },
        section5:{
            workHistory:{
                title:'Work Experience',
                workTitle:'Diseñador Grafico Independiente',
                fecha:'Sep 2019 - Currently',
                descripcion:`Trabajo en una variedad de proyectos, desde la edición de videos promocionales hasta la creación de contenido visual para campañas 
                de marketing en redes sociales. Mi objetivo es combinar mi experiencia en ingeniería con mi habilidad para contar historias a través de 
                imágenes y animaciones, ofreciendo soluciones visuales que gusten y enganchen a la audiencia.`
            }
        },
        section6:{  
            education:{
                title:'Education',
                degree:{
                    degree:'Maestria en Ingenieria Industrial',
                    date:'Ago 2020 - Dic 2022',
                    descripcion: `Instituto Tecnologico de Ciudad Victoria - Tamaulipas, Mexico.
                    Durante el tiempo en mi maestria realice los siguientes objetivos. Realización de un análisis exhaustivo del mercado local y global para 
                    identificar oportunidades y desafíos. Desarrollo de un estudio técnico detallado para calcular los costos de infraestructura y el 
                    retorno de la inversión. Determinación de la viabilidad económica del proyecto mediante análisis financiero y proyecciones. Investigación 
                    exhaustiva del mercado global para evaluar la expansión potencial del servicio fuera de nuestra área local.`
                },
                secondDegree:{
                    degree:'Ingeniera Industrial',
                    date:'Ago 2012 - Dic 2017',
                    descripcion: `Planeacion y evaluacion de proyectos a corto, mediano y largo plazo. Procesos y mediciones de mejora continua.`  
                }  
            }    
        },
        section7:'Contact'
    }
    const printDataCV=(obj)=>{
        
        const spacesToPrint = document.querySelectorAll('.print-spanish-value')
        const arrValues = arrValuesCV(obj)

        if((spacesToPrint.length<arrValues.length)){
            console.error('No hay suficientes Divs para mostrar todos los Valores')
            return
        }
        
        spacesToPrint.forEach((div, index)=>{
            
            if(index<arrValues.length){
                div.textContent = arrValues[index]
            }  
        })
    }
    const arrValuesCV=(obj)=>{
        let values = []
        for(const key in obj){

            if(obj.hasOwnProperty(key)){
               
                if(typeof obj[key] === 'object' && obj[key] !==null){
                    values.push(...arrValuesCV(obj[key]))
                }else{
                    values.push(obj[key])
                }
            }
        }
        return values
    }
    const toggleClass =(id,className)=>{
        if(id.length>1){
            id.forEach((data)=>{
                data.classList.toggle(className)
            })
        }else{
            id.classList.toggle(className)
        }
    }
    const nightModeClass=()=>{
        toggleClass(imgDarkMode,'prueba')
        toggleClass(imgLightMode, 'display-block')
        toggleClass(header, 'night-mode-Head' )
        toggleClass(nightBtnStyle, 'night-mode-Night-Btn')
        toggleClass(sectionProjectsBackground,'night-mode-prj-background')
        toggleClass(softTittle, 'night-mode-skill')
        toggleClass(contact, 'night-mode-prj')
        toggleClass(photoProfile, 'night-mode-photo-profile')
        toggleClass(mailBtn, 'night-btn-mail')
        toggleClass(translateBtn, 'night-mode-translate-btn')
        toggleClass(menuA, 'night-mode-A')
        toggleClass(prjBox, 'night-mode-prj')
        toggleClass(tecBox, 'night-mode-tec-box')
        toggleClass(tecImg, 'night-tec-img')
        toggleClass(softBox, 'night-mode-prj')
        toggleClass(titleDate, 'night-mode-exp-box')
        toggleClass(boxDescriptionStyle, 'night-mode-exp-box-txt')
        toggleClass(btnsDescriptionExpEdu, 'night-mode')
        toggleClass(dotsBtnsDescExpEdu, 'night-tec-img')
        toggleClass(upBtnsDescExpEdu, 'night-tec-img')
        toggleClass(imgSocialMediaBtns, 'night-tec-img')
        toggleClass(styleBtnsContact, 'night-btns-social-media')
        toggleClass(styleDataBtns, 'night-btns-data')
        toggleClass(msjMail, 'night-mode-msj-copy-mail')
        toggleClass(body, 'night-mode')
    }

    if(localStorage.getItem('nightModeActivated') === 'true'){
        nightModeClass()
    }

    printDataCV(spanishCV)
    localStorage.getItem('translate') === 'ingles' ? printDataCV(englishCV) : printDataCV(spanishCV)
})




