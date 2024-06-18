document.addEventListener('DOMContentLoaded', ()=>{
    const body = document.body
    const nightBtn = document.getElementById('night-btn') 
    const header = document.getElementById('head') 
    const nightBtnStyle = document.getElementById('night-btn') 
    const sectionProjectsBackground = document.getElementById('section-projects-background')
    const softTittle = document.getElementById('soft-lang')
    const contact = document.getElementById('contact')
    const photoProfile = document.getElementById('photo-profile')
    const translateBtn = document.getElementById('translate-btn')
    const mailBtn = document.getElementById('btn-Mail')
    const menuA = document.querySelectorAll('.menu-A') 
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
    const imgTec = document.querySelectorAll(".tec-img")
    const tecDescription = document.getElementById('description-tec')
    
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
                variable = variable === 'false'? 'true':'false'})}    
        openPage(){
            const btnsPage = document.querySelectorAll('.btns-page')
            btnsPage.forEach(btn =>{
                btn.addEventListener('click',()=>{
                    if(btn.id === 'btn-github-contact' || btn.id === 'btn-Github'){ 
                        window.open('https://github.com/MemoGV', '_blank')
                        
                    }else if(btn.id === 'btn-linkedin-contact' || btn.id === 'linkedin'){
                        window.open('https://www.linkedin.com/in/guillermo-e-garcia-vega-342947266', '_blank')}})})}
        copyMail(){
            const btnsMail = document.querySelectorAll('.btns-mail')
            const msjData=document.querySelector('.message-Mail')
            const msjContact = document.querySelector('.mail')

            btnsMail.forEach(btn =>{
            btn.addEventListener('click',(event)=>{
            let msj
                if(btn.id === 'btn-mail-contact'){
                    msj = msjContact}
                else{
                    msj = msjData}
                navigator.clipboard.writeText('gvmemo.93@gmail.com')
                msj.style.left= `${event.clientX + 7}px` ;
                msj.style.top = `${event.clientY + 7}px`;
                msj.style.display='block';
                setTimeout(()=>{
                    msj.style.display='none';}, 1200)})})}
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
                    imgUp[index].style.display = 'none'}
                else{
                    prjDescription[index].style.display ='block'
                    imgDots[index].style.display = 'none'
                    imgUp[index].style.display = 'block'}})})}
        traduction(){
          translateBtn.addEventListener('click',()=>{
                if(title.textContent === 'Desarrollador Web'){
                    printDataCV(englishCV) 
                    translateBtn.textContent = 'EN/ES'
                    localStorage.setItem('translate', 'ingles')
                }else{
                    printDataCV(spanishCV)
                    translateBtn.textContent = 'ES/EN'
                    localStorage.setItem('translate', 'spanish')}})}
    }

    const buttons = [ 
        new Button('btns-Mail', 'Button Mail', Button.prototype.copyMail()),
        new Button('btns-Cv', 'Button Cv', Button.prototype.downloadCv),
        new Button('btns-Cv2', 'Button Cv', Button.prototype.downloadCv),
        new Button('btns-openpage', 'Button Open Page', Button.prototype.openPage()),
        new Button('btn-description-prj', 'Button Project', Button.prototype.prjDescriptionAction()),
        new Button('night-btn','Button Nightshift', Button.prototype.nightMode()),
        new Button('translate-btn', 'Button Translator', Button.prototype.traduction())]
    buttons.forEach( boton => boton.addEvent())
    
    const TecDisplay=()=>{
    var timerOut
    var timerIn
    
    const txtTecTecnology = [
        {   name:'html',
            txt:`Tengo experiencia en HTML y estoy familiarizado con su sintaxis, puedo crear estructuras de páginas web
            utilizando diferentes tipos de etiquetas. El HTML de esta página web es un ejemplo de lo que sé hacer.`},
        {   name:'css',
            txt:`Poseo conocimientos en CSS, incluyendo diseño con flexbopx y grid, sigo aprendiendo técnicas avanzadas de diseño, 
            animaciones y posicionamiento en CSS, para poder crear mejores interfaces web atractivas y funcionales.`},
        {   name:'javascript',
            txt:`Tengo una base solida de conocimiento en JavaScript, abarcando una comprensión de los conceptos fundamentales del lenguaje
             y estoy familiarizado con el uso de objetos, sus métodos y propiedades.`},
        {   name:'github',
            txt:`Estoy familiarizado con el uso de Git y GitHub, lo que incluye la capacidad de gestionar repositorios, 
            realizar seguimiento de cambios, manejar ramas, fusionar código y colaborar eficientemente en proyectos.`}]
    const txtTecTecnologyEnglish = [
        {   name:'html',
            txt:`Experienced in HTML and familiar with its syntax, capable of creating web page structures using various tags. The HTML of this web page exemplifies my skills.`},
        {   name:'css',
            txt:`Knowledgeable in CSS, including design with Flexbox and Grid, continually learning advanced techniques in design, animations,
             and positioning to create more attractive and functional web interfaces.`},
        {   name:'javascript',
            txt:`Solid foundation in JavaScript, with an understanding of fundamental concepts and familiarity with using objects, their methods, and properties.`},
        {   name:'github',
            txt:`Familiar with using Git and GitHub, including managing repositories, tracking changes, handling branches, merging code, and collaborating efficiently on projects.`}]
     
    imgTec.forEach((imgTec, index)=>{
        imgTec.addEventListener('mouseover',()=>{
            tecDescription.style.opacity = 0
            var data = txtTecTecnology[index]

            if(title.textContent === 'Desarrollador Web'){
                data = txtTecTecnology[index]
            }else{
                data = txtTecTecnologyEnglish[index]}

            timerIn = setTimeout(()=>{

                switch(index){
                    case 0: 
                        tecDescription.textContent = data.txt; 
                        break;
                    case 1:
                        tecDescription.textContent = data.txt;
                        break;
                    case 2:
                        tecDescription.textContent = data.txt;
                        break;
                    case 3:
                        tecDescription.textContent = data.txt;
                        break;}
                tecDescription.style.opacity = 1},500)  
            clearTimeout(timerOut)})

        imgTec.addEventListener('mouseout', ()=>{
            tecDescription.style.opacity = 0
            timerOut = setTimeout(()=>{
                tecDescription.style.opacity = 1
                if(title.textContent = 'Fronted Developer'){
                    tecDescription.textContent = englishCV.section3.default
                }else{
                    tecDescription.textContent = spanishCV.section3.default}
                },1000)
            clearTimeout(timerIn)})})
    }

    const spanishCV = {
        menu:{
            first:'Sobre Mi', 
            second: 'Proyectos', 
            third :'Experiencia', 
            fourth:'Educacion'},
        title:'Desarrollador Web',
        section1:{
            title:'Sobre Mi',
            description:`Ingeniero industrial con experiencia en edición de videos para plataformas digitales y un fuerte interés en el cine, los deportes y la tecnología.
            Durante el último año, me he dedicado a estudiar programación con la meta de desarrollar una carrera en este ámbito. Busco oportunidades en programación 
            donde pueda aplicar mis habilidades analíticas y creativas para contribuir en grandes proyectos.`},
        section2:{
            title:'Proyectos',
            firstProject:{
                prjName:'nombre 1',
                description:`descripcion proyecto 1.`},
            secondProject:{
                prjName:'nombre 2',
                description:`descripcion proyiecto 2`}},
        section3:{
            title:'Tecnoclogias',
            subTitle:'Conocimientos',
            default:`Hola, te platico un poco de lo que sé y como es que lo sé.
            Durante un año, me he dedicado a estudiar HTML, CSS y JavaScript de manera autodidacta. 
            He explorado diferentes cursos en línea, páginas web, y practicado con proyectos.
            Explora más sobre mis habilidades en cada tecnología al pasar el cursor sobre ellas.`,
            subTitle1:'Aprendiendo'},
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
                skill3:'Paciencia'}},
        section5:{
            workHistory:{
                title:'Experiencia',
                workTitle:'Editor de Videos',
                fecha:'Sep 2019 - Actualmente',
                descripcion:`He participado en una variedad de proyectos, desde la edición de videos promocionales hasta 
                la creación de contenido visual para campañas digitales en redes sociales. Me gusta combinar mi 
                formación en ingeniería con mi habilidad para contar historias a través de videos y animaciones.`}},
        section6:{  
            education:{
                title:'Educacion',
                degree:{
                    degree:'Maestria en Ingenieria Industrial',
                    date:'Ago 2020 - Dic 2022',
                    descripcion: `Durante mi maestría, diseñe un proyecto que incluyó un análisis exhaustivo del mercado 
                    local y global, un estudio técnico detallado de costos e inversiones, análisis financiero para evaluar 
                    la viabilidad económica y una investigación del mercado global para considerar la expansión del proyecto.`},
                secondDegree:{
                    degree:'Ingeniera Industrial',
                    date:'Ago 2012 - Dic 2017',
                    descripcion: `Durante mi carrera de ingeniería, adquirí habilidades en la planificación y evaluación de 
                    proyectos a corto, mediano y largo plazo, así como en procesos y mediciones de mejora continua.`}}},
        section7:'Contacto'}
    
    const englishCV = {
        menu:{
            first:'About Me', 
            second: 'Projects', 
            third :'Experince', 
            fourth:'Education'},
        title:'Fronted Developer',
        section1:{
            title:'About Me',
            description:`Experienced industrial engineer skilled in digital video editing platforms, passionate about cinema, sports, 
            and technology. Over the past year, I've been studying programming to pursue a career in this field. Seeking opportunities 
            where my analytical and creative skills can contribute to significant projects in programming.`},
        section2:{
            title:'Projects',
            firstProject:{
                prjName:'name 1',
                description:`project description 1.`},
            secondProject:{
                prjName:'name 2',
                description:`project description 2`}},
        section3:{
            title:'Technology',
            subTitle:'Knowledge',
            default:`Hey, let me tell you a bit about what I know and how I learned it. For the past year, I've been self-studying HTML, CSS, and JavaScript. 
            I've explored various online courses, websites, and practiced through projects. Explore more about my skills in each technology by hovering over them.`,
            subTitle1:'Learning'},
        section4:{
            language:{
                title:'Languages',
                Lang:'Spanish',
                Lang2:'English'},
            skills:{
                title:'Softkills',
                skill:'Teamwork',
                skill1: 'Adaptability', 
                skill2:'Attencion to Details', 
                skill3:'Patience'}},
        section5:{
            workHistory:{
                title:'Work Experience',
                workTitle:'Diseñador Grafico Independiente',
                fecha:'Sep 2019 - Currently',
                descripcion:`I have been involved in a variety of projects, from editing promotional videos to creating visual content for digital 
                campaigns on social media. I enjoy blending my engineering background with my ability to tell stories through videos and animations.`}},
        section6:{  
            education:{
                title:'Education',
                degree:{
                    degree:'Maestria en Ingenieria Industrial',
                    date:'Ago 2020 - Dic 2022',
                    descripcion: `In my master's program, I developed a project that included a comprehensive analysis of local and global markets, a detailed 
                    technical study of costs and investments, financial analysis to evaluate economic viability, and global market research to explore project expansion.`
                },
                secondDegree:{
                    degree:'Ingeniera Industrial',
                    date:'Ago 2012 - Dic 2017',
                    descripcion: `Throughout my engineering studies, I gained skills in planning and evaluating projects over short, medium, and long terms, as well as in
                     processes and measurements for continuous improvement. `  }  }    },
        section7:'Contact'}
        
    const printDataCV=(obj)=>{
        const spacesToPrint = document.querySelectorAll('.print-cv-value')
        const arrValues = arrValuesCV(obj)

        if((spacesToPrint.length<arrValues.length)){
            console.error('No hay suficientes Divs para mostrar todos los Valores')
            return}
        spacesToPrint.forEach((div, index)=>{
            if(index<arrValues.length){
                div.style.opacity = 0
                div.textContent = arrValues[index]
                setTimeout(()=>{
                    div.style.opacity = 1
                }, 300)
                }})}

    const arrValuesCV=(obj)=>{
        let values = []
        for(const key in obj){
            if(obj.hasOwnProperty(key)){
                if(typeof obj[key] === 'object' && obj[key] !==null){
                    values.push(...arrValuesCV(obj[key]))}
                else{values.push(obj[key])}
            }}
        return values}

    const toggleClass =(id,className)=>{
        if(id.length>1){
            id.forEach((data)=>{
                data.classList.toggle(className)})
        }else{
            id.classList.toggle(className)}}
            
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
        toggleClass(body, 'night-mode')}
        
    if(localStorage.getItem('nightModeActivated') === 'true'){
        nightModeClass()}
    localStorage.getItem('translate') === 'ingles' ? printDataCV(englishCV) : printDataCV(spanishCV)
    TecDisplay()
})

