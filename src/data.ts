export const profile = {
  name: 'Sabrine Khouaja',
  title: 'Software Engineer',
  intro:
    "Welcome to My Digital Journey ✨\n🌍 I create experiences where technology meets creativity. Every project I take on is a chance to combine clean design, seamless functionality, and innovative ideas.\n\n🚀 From web platforms to mobile applications, I focus on building tools that inspire and empower.\n\n💡 For me, code is not just logic-it's a way of telling stories through design, performance, and imagination.\n\n💡 Crafting Tomorrow's Digital Solutions\n✨ I transform ideas into powerful applications that inspire and connect.\n🌟 From sleek designs to scalable systems, every project is built with passion and precision.\n🚀 Let's create something meaningful together.",
  email: 'sabrine.alaya00@gmail.com',
  phone: '+21654015221',
  location: 'Sousse, Tunisie',
  linkedin: 'https://linkedin.com/in/khouaja-sabrine',
  github: 'https://github.com/sabrine-kh',
}

export const about = {
  description:
    "Je suis ingenieur en informatique specialisee en intelligence artificielle, passionnee par la resolution de problemes reels via la data et les applications intelligentes.",
  goals:
    "Mon objectif est de construire des produits digitaux performants, accessibles et impactants, en combinant IA generative, NLP, et interfaces modernes.",
  interests: [
    'Intelligence Artificielle appliquee',
    'NLP et LLM',
    'Data Visualisation',
    'Developpement Web et Mobile',
  ],
  education: [
    {
      degree: 'Maitrise en gestion de projet',
      school: 'ETS / Ecole Technologie Superieure',
      period: '05/2026 - Present',
      location: 'Montreal, Canada',
    },
    {
      degree: "Diplome National d'Ingenieur en Informatique",
      school: 'EPI Digital School',
      period: '09/2022 - 09/2026',
      location: 'Sousse, Tunisie',
    },
    {
      degree: 'Cycle Preparatoire',
      school: 'EPI Digital School',
      period: '09/2020 - 05/2022',
      location: 'Sousse, Tunisie',
    },
  ],
}

export const experiences = [
  {
    title: "Stagiaire Projet de Fin d'Etudes - LEONI",
    period: '02/2025 - 06/2025',
    location: 'Sousse',
    demoUrl: '/demos/leoni-demo.mp4',
    details: [
      "Conception d'un systeme d'extraction automatique d'attributs techniques depuis des documents industriels.",
      'Developpement d’un chatbot RAG (LangChain + Qwen) connecte a une base SQL et un stockage vectoriel.',
      "Mise en place d'une interface pour l'upload et l'exploration de documents techniques.",
    ],
    tech: ['Python', 'Streamlit', 'LangChain', 'Qwen', 'Groq', 'Mistral OCR', 'Supabase', 'RAG'],
  },
  {
    title: 'Stagiaire en Intelligence Artificielle - Auzy Mental Health',
    period: '08/2024 - 09/2024',
    location: 'Sousse, Tunisie',
    details: [
      "Developpement d'une application mobile avec React Native pour le suivi quotidien de l'etat utilisateur.",
      "Analyse hebdomadaire de l'humeur avec des techniques NLP.",
    ],
    tech: ['Python', 'React Native', 'NLP'],
  },
  {
    title: 'Stagiaire en Intelligence Artificielle - Proxym-IT',
    period: '06/2024 - 08/2024',
    location: 'Sousse, Tunisie',
    details: [
      "Creation d'un chatbot intelligent base LLM pour repondre rapidement sur les codes de projet.",
      "Mise en place d'une interface React interactive.",
      'Integration de LangChain pour interpreter les requetes et recuperer des reponses ciblees.',
    ],
    tech: ['Python', 'React', 'LLM', 'LangChain', 'NLP'],
  },
  {
    title: 'Stagiaire en Developpement Web - YESWENOV',
    period: '07/2023 - 08/2023',
    location: 'Mahdia, Tunisie',
    details: [
      "Creation d'une application MERN pour la classification des cryptomonnaies.",
      'Frontend ReactJS, backend Node.js + MongoDB.',
      'Tests des APIs avec Postman.',
    ],
    tech: ['MongoDB', 'ReactJS', 'Node.js', 'API'],
  },
]

export const projects = [
  {
    title: 'Detection de Pneumonie avec un Systeme IA',
    description:
      "Conception d'un chatbot GEMMA 2B avec LangChain/Ollama et d'un modele CNN (precision 90%) deploye sur Streamlit pour usage medical.",
    technologies: ['Python', 'Pandas', 'TensorFlow', 'NumPy', 'Streamlit', 'EfficientNet', 'LangChain'],
    link: '#',
  },
  {
    title: 'Detection de Somnolence',
    description:
      "Implementation d'algorithmes ML et de vision par ordinateur pour detecter precocement la somnolence et declencher des alertes temps reel.",
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Pandas', 'NumPy', 'Jupyter Notebook'],
    link: '#',
  },
]

export const skills = {
  categories: [
    {
      title: 'Data Science & IA',
      items: [
        'IA Generative',
        'Apprentissage Automatique',
        'Apprentissage Profond',
        'Vision par Ordinateur',
        'Analyse de Donnees',
        'Visualisation de Donnees',
        'Power BI',
      ],
    },
    {
      title: 'Frameworks Web et Mobiles',
      items: ['ReactJS', 'React Native', 'Node.js', 'HTML', 'CSS'],
    },
    {
      title: 'Big Data',
      items: ['Spark'],
    },
    {
      title: 'Bases de Donnees',
      items: ['MySQL', 'MongoDB'],
    },
    {
      title: 'Langages de Programmation',
      items: ['Python', 'PHP'],
    },
  ],
  certificates: [
    'AI Applications for Predictive Maintenance by NVIDIA',
    'Fundamentals of Deep Learning',
    'Fundamentals of Accelerated Data Science',
    'Azure Fundamentals',
    'What is Data Science?',
    'Oracle Cloud Infrastructure AI Certified Foundations Associate',
    'AWS Academy Cloud Foundations',
  ],
}
