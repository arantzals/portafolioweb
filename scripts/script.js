document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerRight = document.querySelector('.header-right');
    const navLinks = document.querySelectorAll('.navbar a');
    const languageOptions = document.querySelectorAll('.language-option');
    const currentLang = document.querySelector('.language-current span');

    menuToggle.addEventListener('click', function() {
        headerRight.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                headerRight.classList.remove('active');
                menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    });

    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            currentLang.textContent = lang.toUpperCase();
            changeLanguage(lang);
        });
    });

    function changeLanguage(lang) {
        const translations = {
            'es': {
                'inicio': 'Inicio',
                'sobre-mi': 'Sobre mí',
                'proyectos': 'Proyectos',
                'contacto': 'Contacto',
                'hello': '¡Hola! Soy Arantza Lizárraga',
                'description': 'Desarrolladora de software apasionada por el diseño, la tecnología y la creación de experiencias digitales atractivas.',
                'download-cv': 'Descargar CV',
                'about': 'Sobre mí',
                'education': 'Formación educativa',
                'experience': 'Experiencia laboral',
                'expertise': 'Área de expertise',
                'skills': 'Habilidades técnicas',
                'certificates': 'Certificados',
                'education-text': 'Universidad Politécnica de Sinaloa — Ingeniería en Tecnologías de la Información y la Comunicación (2023 – 2027)',
                'english-level': 'Nivel de inglés: B2',
                'experience-text': 'RedPetroil — Practicante (noviembre – diciembre 2024)',
                'experience-desc': 'Durante mis prácticas participé en documentación técnica y desarrollo de una página web con aplicación orientada a la estimación de tiempos. Esto me permitió aplicar conocimientos en desarrollo front-end, manejo de datos y documentación técnica.',
                'expertise-text': 'Mi área de expertise es el diseño de interfaces de usuario (UI) y el desarrollo web. Me enfoco en crear interfaces funcionales y visualmente atractivas, cuidando la coherencia y la experiencia del usuario. Manejo herramientas como Figma y Adobe Photoshop, además de lenguajes como HTML, CSS y JavaScript para implementar y adaptar diseños de forma eficiente.',
                'tag-design': 'Diseño',
                'tag-language': 'Lenguaje',
                'tag-development': 'Desarrollo',
                'tag-html': 'HTML',
                'tag-css': 'CSS',
                'tag-figma': 'Figma',
                'tag-prototype': 'Prototipo',
                'tag-cisco': 'Cisco',
                'tag-networks': 'Redes',
                'certificate-1-title': 'Introduction to Networks',
                'certificate-1-desc': 'Certificado otorgado por Cisco Networking Academy.',
                'certificate-2-title': 'IT Essentials',
                'certificate-2-desc': 'Certificado otorgado por Cisco Networking Academy.',
                'certificate-3-title': 'Programador Orientado a Objetos',
                'certificate-3-desc': 'Certificado otorgado por la Fundación Slim - Capacítate para el Empleo.',
                'view-certificate': 'Ver certificado',
                'projects': 'Proyectos Destacados',
                'project-1-title': 'Página web: NewJeans',
                'project-1-desc': 'Página web creada para el grupo de K-Pop <b>NewJeans</b>, con diseño visual moderno y secciones interactivas para mostrar información, galería y contenido multimedia. Desarrollada con <b>HTML y CSS</b> como parte de mi portafolio personal.',
                'project-2-title': 'App móvil: KomiKomi',
                'project-2-desc': 'Prototipo de aplicación móvil diseñada en <b>Figma</b> para facilitar la búsqueda de restaurantes cercanos, realizar reservaciones, dejar reseñas y obtener descuentos exclusivos. Enfocada en ofrecer una experiencia de usuario intuitiva y moderna.',
                'project-3-title': 'Infraestructura de redes',
                'project-3-desc': 'Proyecto académico desarrollado en <b>Cisco Packet Tracer</b> sobre la infraestructura de red de la <b>Universidad Politécnica de Sinaloa</b>. Incluye diseño topológico, configuración de routers, switches y verificación de conectividad.',
                'view-project': 'Ver proyecto',
                'download-project': 'Descargar proyecto',
                'contact': 'Contacto',
                'lets-talk': '¡Hablemos!',
                'contact-desc': '¿Tienes un proyecto en mente? Me encantaría escucharte y colaborar contigo.',
                'email': 'Email',
                'phone': 'Teléfono',
                'location': 'Ubicación',
                'linkedin': 'LinkedIn',
                'footer-role': 'Desarrolladora de Software',
                'footer-rights': 'Todos los derechos reservados.'
            },
            'en': {
                'inicio': 'Home',
                'sobre-mi': 'About',
                'proyectos': 'Projects',
                'contacto': 'Contact',
                'hello': 'Hello! I\'m Arantza Lizárraga',
                'description': 'Software developer passionate about design, technology, and creating attractive digital experiences.',
                'download-cv': 'Download CV',
                'about': 'About Me',
                'education': 'Education',
                'experience': 'Work Experience',
                'expertise': 'Area of Expertise',
                'skills': 'Technical Skills',
                'certificates': 'Certificates',
                'education-text': 'Universidad Politécnica de Sinaloa — Information and Communication Technologies Engineering (2023 – 2027)',
                'english-level': 'English level: B2',
                'experience-text': 'RedPetroil — Intern (November – December 2024)',
                'experience-desc': 'During my internship, I participated in technical documentation and development of a web page with a time estimation application. This allowed me to apply knowledge in front-end development, data management, and technical documentation.',
                'expertise-text': 'My area of expertise is user interface (UI) design and web development. I focus on creating functional and visually appealing interfaces, ensuring coherence and user experience. I work with tools like Figma and Adobe Photoshop, as well as languages like HTML, CSS, and JavaScript to efficiently implement and adapt designs.',
                'tag-design': 'Design',
                'tag-language': 'Language',
                'tag-development': 'Development',
                'tag-html': 'HTML',
                'tag-css': 'CSS',
                'tag-figma': 'Figma',
                'tag-prototype': 'Prototype',
                'tag-cisco': 'Cisco',
                'tag-networks': 'Networks',
                'certificate-1-title': 'Introduction to Networks',
                'certificate-1-desc': 'Certificate awarded by Cisco Networking Academy.',
                'certificate-2-title': 'IT Essentials',
                'certificate-2-desc': 'Certificate awarded by Cisco Networking Academy.',
                'certificate-3-title': 'Object-Oriented Programmer',
                'certificate-3-desc': 'Certificate awarded by Slim Foundation - Capacítate para el Empleo.',
                'view-certificate': 'View Certificate',
                'projects': 'Featured Projects',
                'project-1-title': 'Website: NewJeans',
                'project-1-desc': 'Website created for the K-Pop group <b>NewJeans</b>, with modern visual design and interactive sections to display information, gallery, and multimedia content. Developed with <b>HTML and CSS</b> as part of my personal portfolio.',
                'project-2-title': 'Mobile App: KomiKomi',
                'project-2-desc': 'Mobile app prototype designed in <b>Figma</b> to facilitate the search for nearby restaurants, make reservations, leave reviews, and get exclusive discounts. Focused on offering an intuitive and modern user experience.',
                'project-3-title': 'Network Infrastructure',
                'project-3-desc': 'Academic project developed in <b>Cisco Packet Tracer</b> about the network infrastructure of the <b>Universidad Politécnica de Sinaloa</b>. Includes topological design, router and switch configuration, and connectivity verification.',
                'view-project': 'View Project',
                'download-project': 'Download Project',
                'contact': 'Contact',
                'lets-talk': 'Let\'s Talk!',
                'contact-desc': 'Do you have a project in mind? I\'d love to hear from you and collaborate.',
                'email': 'Email',
                'phone': 'Phone',
                'location': 'Location',
                'linkedin': 'LinkedIn',
                'footer-role': 'Software Developer',
                'footer-rights': 'All rights reserved.'
            },
            'fr': {
                'inicio': 'Accueil',
                'sobre-mi': 'À propos',
                'proyectos': 'Projets',
                'contacto': 'Contact',
                'hello': 'Bonjour ! Je suis Arantza Lizárraga',
                'description': 'Développeuse de logiciels passionnée par le design, la technologie et la création d\'expériences numériques attrayantes.',
                'download-cv': 'Télécharger CV',
                'about': 'À propos de moi',
                'education': 'Formation',
                'experience': 'Expérience professionnelle',
                'expertise': 'Domaine d\'expertise',
                'skills': 'Compétences techniques',
                'certificates': 'Certificats',
                'education-text': 'Universidad Politécnica de Sinaloa — Ingénierie en Technologies de l\'Information et de la Communication (2023 – 2027)',
                'english-level': 'Niveau d\'anglais: B2',
                'experience-text': 'RedPetroil — Stagiaire (novembre – décembre 2024)',
                'experience-desc': 'Pendant mon stage, j\'ai participé à la documentation technique et au développement d\'une page web avec une application d\'estimation des temps. Cela m\'a permis d\'appliquer des connaissances en développement front-end, gestion de données et documentation technique.',
                'expertise-text': 'Mon domaine d\'expertise est la conception d\'interfaces utilisateur (UI) et le développement web. Je me concentre sur la création d\'interfaces fonctionnelles et visuellement attrayantes, en veillant à la cohérence et à l\'expérience utilisateur. Je maîtrise des outils comme Figma et Adobe Photoshop, ainsi que des langages comme HTML, CSS et JavaScript pour implémenter et adapter efficacement les designs.',
                'tag-design': 'Design',
                'tag-language': 'Langage',
                'tag-development': 'Développement',
                'tag-html': 'HTML',
                'tag-css': 'CSS',
                'tag-figma': 'Figma',
                'tag-prototype': 'Prototype',
                'tag-cisco': 'Cisco',
                'tag-networks': 'Réseaux',
                'certificate-1-title': 'Introduction to Networks',
                'certificate-1-desc': 'Certificat délivré par Cisco Networking Academy.',
                'certificate-2-title': 'IT Essentials',
                'certificate-2-desc': 'Certificat délivré par Cisco Networking Academy.',
                'certificate-3-title': 'Programmeur Orienté Objet',
                'certificate-3-desc': 'Certificat délivré par la Fondation Slim - Capacítate para el Empleo.',
                'view-certificate': 'Voir le certificat',
                'projects': 'Projets en vedette',
                'project-1-title': 'Site web: NewJeans',
                'project-1-desc': 'Site web créé pour le groupe de K-Pop <b>NewJeans</b>, avec un design visuel moderne et des sections interactives pour afficher des informations, une galerie et du contenu multimédia. Développé avec <b>HTML et CSS</b> dans le cadre de mon portfolio personnel.',
                'project-2-title': 'Application mobile: KomiKomi',
                'project-2-desc': 'Prototype d\'application mobile conçu dans <b>Figma</b> pour faciliter la recherche de restaurants à proximité, effectuer des réservations, laisser des avis et obtenir des réductions exclusives. Axé sur une expérience utilisateur intuitive et moderne.',
                'project-3-title': 'Infrastructure réseau',
                'project-3-desc': 'Projet académique développé dans <b>Cisco Packet Tracer</b> sur l\'infrastructure réseau de l\'<b>Universidad Politécnica de Sinaloa</b>. Inclut la conception topologique, la configuration des routeurs et commutateurs, et la vérification de la connectivité.',
                'view-project': 'Voir le projet',
                'download-project': 'Télécharger le projet',
                'contact': 'Contact',
                'lets-talk': 'Parlons-en !',
                'contact-desc': 'Vous avez un projet en tête ? J\'aimerais vous écouter et collaborer avec vous.',
                'email': 'Email',
                'phone': 'Téléphone',
                'location': 'Localisation',
                'linkedin': 'LinkedIn',
                'footer-role': 'Développeuse de Logiciels',
                'footer-rights': 'Tous droits réservés.'
            }
        };

        // Navegación
        const navLinksArray = document.querySelectorAll('.navbar a');
        navLinksArray[0].textContent = translations[lang].inicio;
        navLinksArray[1].textContent = translations[lang]['sobre-mi'];
        navLinksArray[2].textContent = translations[lang].proyectos;
        navLinksArray[3].textContent = translations[lang].contacto;

        // Presentación
        document.querySelector('.presentacion-texto h2').textContent = translations[lang].hello;
        document.querySelector('.presentacion-texto > p').textContent = translations[lang].description;
        document.querySelector('.presentacion-acciones .btn-primario').innerHTML = '<i class="fas fa-download"></i> ' + translations[lang]['download-cv'];
        
        // Sección Sobre mí - título principal
        document.querySelector('#sobre-mi h2').textContent = translations[lang].about;
        
        // Formación educativa
        const formacion = document.querySelector('.formacion');
        formacion.querySelector('h3').innerHTML = '<i class="fas fa-graduation-cap"></i> ' + translations[lang].education;
        const formacionPs = formacion.querySelectorAll('p');
        formacionPs[0].textContent = translations[lang]['education-text'];
        formacionPs[1].textContent = translations[lang]['english-level'];
        
        // Experiencia laboral
        const experiencia = document.querySelector('.experiencia');
        experiencia.querySelector('h3').innerHTML = '<i class="fas fa-briefcase"></i> ' + translations[lang].experience;
        const experienciaPs = experiencia.querySelectorAll('p');
        experienciaPs[0].textContent = translations[lang]['experience-text'];
        experienciaPs[1].textContent = translations[lang]['experience-desc'];
        
        // Área de expertise
        const expertise = document.querySelector('.expertise');
        expertise.querySelector('h3').innerHTML = '<i class="fas fa-star"></i> ' + translations[lang].expertise;
        expertise.querySelector('p').textContent = translations[lang]['expertise-text'];
        
        // Habilidades técnicas
        document.querySelector('.habilidades-tecnicas h3').innerHTML = '<i class="fas fa-code"></i> ' + translations[lang].skills;
        
        // Tags de habilidades técnicas
        const habilidadTags = document.querySelectorAll('.habilidad-tag');
        habilidadTags.forEach(tag => {
            if (tag.classList.contains('diseño')) {
                tag.textContent = translations[lang]['tag-design'];
            } else if (tag.classList.contains('lenguaje')) {
                tag.textContent = translations[lang]['tag-language'];
            } else if (tag.classList.contains('desarrollo')) {
                tag.textContent = translations[lang]['tag-development'];
            }
        });
        
        // Certificados
        const certificadosSection = document.querySelector('.certificados');
        certificadosSection.querySelector('h3').innerHTML = '<i class="fas fa-award"></i> ' + translations[lang].certificates;
        const certificateItems = certificadosSection.querySelectorAll('.certificado-item');
        certificateItems[0].querySelector('h4').textContent = translations[lang]['certificate-1-title'];
        certificateItems[0].querySelector('p').textContent = translations[lang]['certificate-1-desc'];
        certificateItems[0].querySelector('.btn-secundario').innerHTML = '<i class="fas fa-external-link-alt"></i> ' + translations[lang]['view-certificate'];
        
        certificateItems[1].querySelector('h4').textContent = translations[lang]['certificate-2-title'];
        certificateItems[1].querySelector('p').textContent = translations[lang]['certificate-2-desc'];
        certificateItems[1].querySelector('.btn-secundario').innerHTML = '<i class="fas fa-external-link-alt"></i> ' + translations[lang]['view-certificate'];
        
        certificateItems[2].querySelector('h4').textContent = translations[lang]['certificate-3-title'];
        certificateItems[2].querySelector('p').textContent = translations[lang]['certificate-3-desc'];
        certificateItems[2].querySelector('.btn-secundario').innerHTML = '<i class="fas fa-external-link-alt"></i> ' + translations[lang]['view-certificate'];

        // Proyectos
        document.querySelector('#proyectos h2').textContent = translations[lang].projects;
        const projectCards = document.querySelectorAll('.proyecto-card');
        
        // Proyecto 1: NewJeans
        projectCards[0].querySelector('h4').textContent = translations[lang]['project-1-title'];
        projectCards[0].querySelector('p').innerHTML = translations[lang]['project-1-desc'];
        projectCards[0].querySelector('.ver-proyecto').innerHTML = '<i class="fas fa-external-link-alt"></i> ' + translations[lang]['view-project'];
        const project1Tags = projectCards[0].querySelectorAll('.tag');
        project1Tags[0].textContent = translations[lang]['tag-html'];
        project1Tags[1].textContent = translations[lang]['tag-css'];
        
        // Proyecto 2: KomiKomi
        projectCards[1].querySelector('h4').textContent = translations[lang]['project-2-title'];
        projectCards[1].querySelector('p').innerHTML = translations[lang]['project-2-desc'];
        projectCards[1].querySelector('.ver-proyecto').innerHTML = '<i class="fas fa-external-link-alt"></i> ' + translations[lang]['view-project'];
        const project2Tags = projectCards[1].querySelectorAll('.tag');
        project2Tags[0].textContent = translations[lang]['tag-figma'];
        project2Tags[1].textContent = translations[lang]['tag-prototype'];
        
        // Proyecto 3: Infraestructura de redes
        projectCards[2].querySelector('h4').textContent = translations[lang]['project-3-title'];
        projectCards[2].querySelector('p').innerHTML = translations[lang]['project-3-desc'];
        projectCards[2].querySelector('.ver-proyecto').innerHTML = '<i class="fas fa-download"></i> ' + translations[lang]['download-project'];
        const project3Tags = projectCards[2].querySelectorAll('.tag');
        project3Tags[0].textContent = translations[lang]['tag-cisco'];
        project3Tags[1].textContent = translations[lang]['tag-networks'];

        // Contacto
        document.querySelector('#contacto h2').textContent = translations[lang].contact;
        document.querySelector('.contacto-info-centrada h3').textContent = translations[lang]['lets-talk'];
        document.querySelector('.contacto-info-centrada > p').textContent = translations[lang]['contact-desc'];

        // Información de contacto
        const infoItems = document.querySelectorAll('.info-item');
        infoItems[0].querySelector('.info-label').textContent = translations[lang].email;
        infoItems[1].querySelector('.info-label').textContent = translations[lang].phone;
        infoItems[2].querySelector('.info-label').textContent = translations[lang].location;
        infoItems[3].querySelector('.info-label').textContent = translations[lang].linkedin;

        // Footer - Navegación
        const footerLinks = document.querySelectorAll('.footer-links a');
        footerLinks[0].textContent = translations[lang].inicio;
        footerLinks[1].textContent = translations[lang]['sobre-mi'];
        footerLinks[2].textContent = translations[lang].proyectos;
        footerLinks[3].textContent = translations[lang].contacto;

        // Footer - Rol y derechos
        document.querySelector('.footer-logo p').textContent = translations[lang]['footer-role'];
        document.querySelector('.footer-bottom p').textContent = '© 2025 Arantza Lizárraga. ' + translations[lang]['footer-rights'];
    }

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = 'var(--sombra-media)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'var(--sombra-suave)';
        }
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.header-right') && !e.target.closest('.menu-toggle')) {
            headerRight.classList.remove('active');
            menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
    });
});