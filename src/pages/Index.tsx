import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Globe, Heart, Github, Linkedin, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Language = 'en' | 'ro' | 'hu';

const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      technical: 'Technical Expertise',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      role: 'Automation/Digitalization Specialist - Business Intelligence (BI) Analyst - Programmer',
      description: 'Young and ambitious, passionate about economic informatics and digital innovation, specialized in developing and optimizing ERP systems, web and mobile applications.',
      getInTouch: 'Get in Touch',
      viewWork: 'View Work',
    },
    about: {
      title: 'About Me',
      description: 'I actively contribute to the digitalization of internal processes through automation, database administration, and data analysis in Excel and Power BI. I combine technical skills with marketing and management abilities to provide efficient and results-oriented solutions.',
      experience: 'Experience',
      location: 'Location',
      months: 'months',
    },
    experience: {
      title: 'Experience',
      current: 'Automation/Digitalization Specialist - Business Intelligence (BI) Analyst - Programmer',
      company1: 'Harghita Energy Broker SRL',
      location1: 'Odorheiu Secuiesc | IT Software',
      date1: 'Aug 2025 - present',
      tasks1: [
        'Development and maintenance of websites (front-end and back-end)',
        'Mobile application development and implementation of new features',
        'CRM system administration, data maintenance and updating, report generation',
        'Collaboration on optimization and automation of billing and email communication processes',
        'Creation of reports and analyses in Excel and Power BI',
        'Development of digitalization and automation solutions (e.g., Python scripts)',
        'Database administration, maintenance, and quality assurance',
        'Development and application of prediction models for stock market analysis',
      ],
      role2: 'SAP Front End Software Developer',
      company2: 'Orchestra Development Services',
      location2: 'Odorheiu Secuiesc | IT Software',
      date2: 'Jul 2023 - Oct 2023',
      tasks2: [
        'ERP system optimization',
        'SAP Front End software development (Summer job)',
      ],
      role3: 'Java Back End Software Developer',
      company3: 'Bee Task Force',
      location3: 'Cluj-Napoca | IT Software',
      date3: 'Apr 2023 - Jun 2023',
      tasks3: [
        'Java software development (Internship)',
      ],
    },
    education: {
      title: 'Education',
      university: 'Babeș-Bolyai University',
      universityField: 'Economic Informatics | Cluj-Napoca',
      universityDate: '2021 - 2024',
      thesis: 'Thesis:',
      thesisTitle: 'Sectoral evolution and inflation forecast in the European Union in the period 2019–2023',
      highschool: 'Tamási Áron Theoretical High School',
      highschoolField: 'Natural Sciences, bilingual class',
      highschoolLocation: 'Odorheiu Secuiesc',
      highschoolDate: '2016 - 2020',
    },
    technical: {
      title: 'Technical Expertise',
      subtitle: 'Technologies & Tools I Work With',
    },
    skills: {
      title: 'Skills & Expertise',
      general: 'General Skills',
      generalSkills: [
        'Team communication',
        'Organization',
        'Initiative',
        'Fast learner',
        'Work efficiency',
      ],
      languages: 'Foreign Languages',
      languagesList: {
        english: 'English',
        hungarian: 'Hungarian',
        romanian: 'Romanian',
      },
      levels: {
        advanced: 'Advanced',
        medium: 'Medium',
      },
      hobbies: 'Hobbies and Interests',
      hobbiesList: ['Sports', 'Theatre', 'Politics'],
    },
    contact: {
      title: "Let's Work Together",
      description: 'I am open to new opportunities and collaborations. Let\'s discuss your next project!',
    },
    footer: {
      rights: 'All rights reserved.',
      designed: 'Designed with passion & built with React',
    },
  },
  ro: {
    nav: {
      about: 'Despre',
      experience: 'Experiență',
      education: 'Educație',
      technical: 'Expertiză Tehnică',
      skills: 'Abilități',
      contact: 'Contact',
    },
    hero: {
      role: 'Specialist Automatizare/Digitalizare - Analist Business Intelligence (BI) - Programator',
      description: 'Tânăr ambițios, pasionat de informatică economică și inovație digitală, specializat în dezvoltarea și optimizarea sistemelor ERP, aplicațiilor web și mobile.',
      getInTouch: 'Contactează-mă',
      viewWork: 'Vezi Lucrări',
    },
    about: {
      title: 'Despre mine',
      description: 'Contribui activ la digitalizarea proceselor interne prin automatizări, administrarea bazelor de date și analiza datelor în Excel și Power BI. Combin competențele tehnice cu abilități în marketing și management pentru a oferi soluții eficiente și orientate spre rezultate.',
      experience: 'Experiență',
      location: 'Locație',
      months: 'luni',
    },
    experience: {
      title: 'Experiență profesională',
      current: 'Specialist Automatizare/Digitalizare - Analist Business Intelligence (BI) - Programator',
      company1: 'Harghita Energy Broker SRL',
      location1: 'Odorheiu Secuiesc | IT Software',
      date1: 'Aug 2025 - prezent',
      tasks1: [
        'Dezvoltarea și întreținerea site-urilor web (front-end și back-end)',
        'Dezvoltarea aplicațiilor mobile și implementarea de funcționalități noi',
        'Administrarea sistemului CRM, întreținerea și actualizarea datelor, realizarea rapoartelor',
        'Colaborarea la optimizarea și automatizarea proceselor de facturare și comunicare prin e-mail',
        'Crearea de rapoarte și analize în Excel și Power BI',
        'Dezvoltarea soluțiilor de digitalizare și automatizare (ex. scripturi Python)',
        'Administrarea, întreținerea și asigurarea calității bazelor de date',
        'Dezvoltarea și aplicarea modelelor de predicție pentru analiza pieței bursiere',
      ],
      role2: 'Dezvoltator software SAP Front End',
      company2: 'Orchestra Development Services',
      location2: 'Odorheiu Secuiesc | IT Software',
      date2: 'Iul 2023 - Oct 2023',
      tasks2: [
        'Optimizarea sistemului ERP',
        'Dezvoltare software SAP Front End (Summer job)',
      ],
      role3: 'Dezvoltator software Java Back End',
      company3: 'Bee Task Force',
      location3: 'Cluj-Napoca | IT Software',
      date3: 'Apr 2023 - Iun 2023',
      tasks3: [
        'Dezvoltare software Java (Internship)',
      ],
    },
    education: {
      title: 'Educație',
      university: 'Universitatea Babeș-Bolyai',
      universityField: 'Informatică economică | Cluj-Napoca',
      universityDate: '2021 - 2024',
      thesis: 'Lucrarea de licență:',
      thesisTitle: 'Evoluția sectorială și prognoza inflației în Uniunea Europeană în perioada 2019–2023',
      highschool: 'Liceul Teoretic "Tamási Áron"',
      highschoolField: 'Științele naturii, clasă bilingvă',
      highschoolLocation: 'Odorheiu Secuiesc',
      highschoolDate: '2016 - 2020',
    },
    technical: {
      title: 'Expertiză Tehnică',
      subtitle: 'Tehnologii și Instrumente pe care le Folosesc',
    },
    skills: {
      title: 'Abilități și Expertiză',
      general: 'Abilități generale',
      generalSkills: [
        'Comunicare în echipă',
        'Organizare',
        'Spirit de inițiativă',
        'Învăț foarte repede',
        'Eficientizarea muncii',
      ],
      languages: 'Limbi străine',
      languagesList: {
        english: 'Engleză',
        hungarian: 'Maghiară',
        romanian: 'Română',
      },
      levels: {
        advanced: 'Avansat',
        medium: 'Mediu',
      },
      hobbies: 'Hobby-uri și interese',
      hobbiesList: ['Sport', 'Teatru', 'Politică'],
    },
    contact: {
      title: 'Să lucrăm împreună',
      description: 'Sunt deschis la noi oportunități și colaborări. Să discutăm despre următorul tău proiect!',
    },
    footer: {
      rights: 'Toate drepturile rezervate.',
      designed: 'Proiectat cu pasiune & construit cu React',
    },
  },
  hu: {
    nav: {
      about: 'Rólam',
      experience: 'Tapasztalat',
      education: 'Tanulmányok',
      technical: 'Technikai Szakértelem',
      skills: 'Készségek',
      contact: 'Kapcsolat',
    },
    hero: {
      role: 'Automatizálási/Digitalizálási Szakértő - Business Intelligence (BI) Elemző - Programozó',
      description: 'Fiatal és ambiciózus, gazdaságinformatika és digitális innováció iránt elkötelezett, ERP rendszerek, webes és mobil alkalmazások fejlesztésében és optimalizálásában specializálódott.',
      getInTouch: 'Lépj kapcsolatba',
      viewWork: 'Munkák megtekintése',
    },
    about: {
      title: 'Rólam',
      description: 'Aktívan hozzájárulok a belső folyamatok digitalizálásához automatizálás, adatbázis-kezelés és adatelemzés révén Excel és Power BI segítségével. A technikai készségeket marketing és menedzsment képességekkel kombinálom, hogy hatékony és eredményorientált megoldásokat kínáljak.',
      experience: 'Tapasztalat',
      location: 'Helyszín',
      months: 'hónap',
    },
    experience: {
      title: 'Szakmai tapasztalat',
      current: 'Automatizálási/Digitalizálási Szakértő - Business Intelligence (BI) Elemző - Programozó',
      company1: 'Harghita Energy Broker SRL',
      location1: 'Székelyudvarhely | IT Szoftver',
      date1: '2025 Aug - jelen',
      tasks1: [
        'Weboldalak fejlesztése és karbantartása (front-end és back-end)',
        'Mobilalkalmazások fejlesztése és új funkciók implementálása',
        'CRM rendszer adminisztrációja, adatok karbantartása és frissítése, jelentések készítése',
        'Együttműködés a számlázási és e-mail kommunikációs folyamatok optimalizálásában és automatizálásában',
        'Jelentések és elemzések készítése Excel és Power BI segítségével',
        'Digitalizálási és automatizálási megoldások fejlesztése (pl. Python szkriptek)',
        'Adatbázis adminisztráció, karbantartás és minőségbiztosítás',
        'Előrejelzési modellek fejlesztése és alkalmazása a tőzsdei piac elemzésére',
      ],
      role2: 'SAP Front End szoftverfejlesztő',
      company2: 'Orchestra Development Services',
      location2: 'Székelyudvarhely | IT Szoftver',
      date2: '2023 Júl - 2023 Okt',
      tasks2: [
        'ERP rendszer optimalizálása',
        'SAP Front End szoftverfejlesztés (Nyári munka)',
      ],
      role3: 'Java Back End szoftverfejlesztő',
      company3: 'Bee Task Force',
      location3: 'Kolozsvár | IT Szoftver',
      date3: '2023 Ápr - 2023 Jún',
      tasks3: [
        'Java szoftverfejlesztés (Gyakorlat)',
      ],
    },
    education: {
      title: 'Tanulmányok',
      university: 'Babeș-Bolyai Egyetem',
      universityField: 'Gazdaságinformatika | Kolozsvár',
      universityDate: '2021 - 2024',
      thesis: 'Szakdolgozat:',
      thesisTitle: 'Ágazati fejlődés és inflációs előrejelzés az Európai Unióban 2019–2023 között',
      highschool: 'Tamási Áron Elméleti Líceum',
      highschoolField: 'Természettudományok, kétnyelvű osztály',
      highschoolLocation: 'Székelyudvarhely',
      highschoolDate: '2016 - 2020',
    },
    technical: {
      title: 'Technikai Szakértelem',
      subtitle: 'Technológiák és Eszközök, amelyekkel dolgozom',
    },
    skills: {
      title: 'Készségek és szakértelem',
      general: 'Általános készségek',
      generalSkills: [
        'Csapatmunka',
        'Szervezés',
        'Kezdeményezőkészség',
        'Gyors tanulás',
        'Munka hatékonyság',
      ],
      languages: 'Idegen nyelvek',
      languagesList: {
        english: 'Angol',
        hungarian: 'Magyar',
        romanian: 'Román',
      },
      levels: {
        advanced: 'Haladó',
        medium: 'Közepes',
      },
      hobbies: 'Hobbik és érdeklődési körök',
      hobbiesList: ['Sport', 'Színház', 'Politika'],
    },
    contact: {
      title: 'Dolgozzunk együtt',
      description: 'Nyitott vagyok új lehetőségekre és együttműködésekre. Beszéljük meg a következő projektedet!',
    },
    footer: {
      rights: 'Minden jog fenntartva.',
      designed: 'Szenvedéllyel tervezve & React-tel építve',
    },
  },
};

// Technical skills data (same across all languages)
const technicalSkills = [
  'MySQL',
  'Databases',
  'Data Analysis',
  'Python',
  'PHP',
  'C++',
  'Java',
  'Power BI',
  'Excel',
  'Tableau',
  'Reports',
  'Predictive Models',
  'AI Implementation',
];

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>('ro');
  const t = translations[language];

  const languageNames = {
    en: 'EN',
    ro: 'RO',
    hu: 'HU',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100 text-slate-900">
      {/* Background Image Overlay */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight text-slate-900">
            ÖB
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-light">
              <a href="#about" className="hover:text-cyan-600 transition-colors">{t.nav.about}</a>
              <a href="#experience" className="hover:text-cyan-600 transition-colors">{t.nav.experience}</a>
              <a href="#education" className="hover:text-cyan-600 transition-colors">{t.nav.education}</a>
              <a href="#technical" className="hover:text-cyan-600 transition-colors">{t.nav.technical}</a>
              <a href="#skills" className="hover:text-cyan-600 transition-colors">{t.nav.skills}</a>
              <a href="#contact" className="hover:text-cyan-600 transition-colors">{t.nav.contact}</a>
            </div>
            
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="border border-slate-200 hover:bg-slate-50 gap-2 font-light">
                  <Languages className="w-4 h-4" />
                  {languageNames[language]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-slate-200">
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className="hover:bg-slate-50 cursor-pointer"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('ro')}
                  className="hover:bg-slate-50 cursor-pointer"
                >
                  Română
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('hu')}
                  className="hover:bg-slate-50 cursor-pointer"
                >
                  Magyar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-6">
            <p className="text-cyan-600 text-sm tracking-[0.3em] uppercase font-light">{t.hero.role}</p>
            <h1 className="text-7xl md:text-9xl font-extralight tracking-tight text-slate-900">
              Örs Bordás
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              {t.hero.description}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base rounded-full font-light">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {t.hero.getInTouch}
              </a>
            </Button>
            <Button variant="outline" className="border-slate-300 hover:bg-slate-50 px-8 py-6 text-base rounded-full font-light">
              <a href="#experience">
                {t.hero.viewWork}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-extralight tracking-tight">{t.about.title}</h2>
              <div className="h-px w-20 bg-cyan-400"></div>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t.about.description}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200">
                  <p className="text-cyan-600 text-xs uppercase tracking-wider mb-2 font-light">{t.about.experience}</p>
                  <p className="text-3xl font-light">10+ {t.about.months}</p>
                </div>
                <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200">
                  <p className="text-cyan-600 text-xs uppercase tracking-wider mb-2 font-light">{t.about.location}</p>
                  <p className="text-3xl font-light">România</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
                <img 
                  src="/assets/profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-tight mb-4">{t.experience.title}</h2>
            <div className="h-px w-20 bg-cyan-400 mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {/* Current Position */}
            <div className="group relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-cyan-400"></div>
              <div className="pl-12 space-y-4">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-3xl font-light tracking-tight group-hover:text-cyan-600 transition-colors">{t.experience.current}</h3>
                    <p className="text-xl text-slate-600 mt-2 font-light">{t.experience.company1}</p>
                    <p className="text-sm text-slate-500 mt-1 font-light">{t.experience.location1}</p>
                  </div>
                  <Badge className="bg-cyan-50 text-cyan-700 border border-cyan-200 px-4 py-2 text-sm font-light">
                    {t.experience.date1}
                  </Badge>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-cyan-300 transition-all">
                  <ul className="space-y-3 text-slate-600 font-light">
                    {t.experience.tasks1.map((task, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Orchestra Development Services */}
            <div className="group relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-300"></div>
              <div className="pl-12 space-y-4">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-3xl font-light tracking-tight group-hover:text-cyan-600 transition-colors">{t.experience.role2}</h3>
                    <p className="text-xl text-slate-600 mt-2 font-light">{t.experience.company2}</p>
                    <p className="text-sm text-slate-500 mt-1 font-light">{t.experience.location2}</p>
                  </div>
                  <Badge className="bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 text-sm font-light">
                    {t.experience.date2}
                  </Badge>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-cyan-300 transition-all">
                  <ul className="space-y-3 text-slate-600 font-light">
                    {t.experience.tasks2.map((task, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bee Task Force */}
            <div className="group relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-300"></div>
              <div className="pl-12 space-y-4">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-3xl font-light tracking-tight group-hover:text-cyan-600 transition-colors">{t.experience.role3}</h3>
                    <p className="text-xl text-slate-600 mt-2 font-light">{t.experience.company3}</p>
                    <p className="text-sm text-slate-500 mt-1 font-light">{t.experience.location3}</p>
                  </div>
                  <Badge className="bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 text-sm font-light">
                    {t.experience.date3}
                  </Badge>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-cyan-300 transition-all">
                  <ul className="space-y-3 text-slate-600 font-light">
                    {t.experience.tasks3.map((task, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-tight mb-4">{t.education.title}</h2>
            <div className="h-px w-20 bg-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* University */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 hover:border-cyan-300 transition-all hover:shadow-lg">
              <GraduationCap className="w-12 h-12 text-cyan-600 mb-6" />
              <Badge className="bg-cyan-50 text-cyan-700 border border-cyan-200 mb-4 font-light">{t.education.universityDate}</Badge>
              <h3 className="text-2xl font-light tracking-tight mb-2">{t.education.university}</h3>
              <p className="text-slate-600 mb-4 font-light">{t.education.universityField}</p>
              <p className="text-sm text-slate-500 font-light">
                <span className="text-cyan-600 font-normal">{t.education.thesis}</span> {t.education.thesisTitle}
              </p>
            </div>

            {/* High School */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 hover:border-cyan-300 transition-all hover:shadow-lg">
              <GraduationCap className="w-12 h-12 text-slate-600 mb-6" />
              <Badge className="bg-slate-50 text-slate-700 border border-slate-200 mb-4 font-light">{t.education.highschoolDate}</Badge>
              <h3 className="text-2xl font-light tracking-tight mb-2">{t.education.highschool}</h3>
              <p className="text-slate-600 mb-4 font-light">{t.education.highschoolField}</p>
              <p className="text-sm text-slate-500 font-light">{t.education.highschoolLocation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="technical" className="py-32 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extralight tracking-tight mb-4">{t.technical.title}</h2>
            <div className="h-px w-20 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 font-light">{t.technical.subtitle}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative px-8 py-5 bg-gradient-to-br from-white/90 to-cyan-50/90 backdrop-blur-md rounded-full border-2 border-cyan-200/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-200/50 hover:scale-110 cursor-pointer">
                  <span className="text-lg font-light text-slate-800 group-hover:text-cyan-700 transition-colors">
                    {skill}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:to-cyan-600/10 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-tight mb-4">{t.skills.title}</h2>
            <div className="h-px w-20 bg-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* General Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light tracking-tight text-cyan-600">{t.skills.general}</h3>
              <div className="flex flex-wrap gap-3">
                {t.skills.generalSkills.map((skill, index) => (
                  <Badge key={index} className="bg-white/70 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 px-6 py-3 text-base text-cyan-700 transition-all font-light">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light tracking-tight text-cyan-600">{t.skills.languages}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl border border-slate-200">
                  <span className="text-lg font-light text-slate-700">{t.skills.languagesList.english}</span>
                  <Badge className="bg-cyan-50 text-cyan-700 border border-cyan-200 font-light">{t.skills.levels.advanced}</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl border border-slate-200">
                  <span className="text-lg font-light text-slate-700">{t.skills.languagesList.hungarian}</span>
                  <Badge className="bg-cyan-50 text-cyan-700 border border-cyan-200 font-light">{t.skills.levels.advanced}</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl border border-slate-200">
                  <span className="text-lg font-light text-slate-700">{t.skills.languagesList.romanian}</span>
                  <Badge className="bg-slate-50 text-slate-700 border border-slate-200 font-light">{t.skills.levels.medium}</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-light tracking-tight mb-8 text-cyan-600">{t.skills.hobbies}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {t.skills.hobbiesList.map((hobby, index) => (
                <Badge key={index} className="bg-white/70 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 px-8 py-4 text-lg text-cyan-700 transition-all font-light">
                  {hobby}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tight">{t.contact.title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            {t.contact.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <a href="mailto:bordas23.ors@gmail.com" className="group">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-full font-light">
                <Mail className="w-5 h-5 mr-2" />
                bordas23.ors@gmail.com
              </Button>
            </a>
            <a href="tel:+40733931597" className="group">
              <Button variant="outline" className="border-slate-300 hover:bg-slate-50 px-8 py-6 text-lg rounded-full font-light">
                <Phone className="w-5 h-5 mr-2" />
                +40 733 931 597
              </Button>
            </a>
          </div>

          <div className="flex justify-center items-center gap-2 text-slate-500 pt-8 font-light">
            <MapPin className="w-5 h-5" />
            <span>Odorheiu Secuiesc, Târgu Mureș, Cluj-Napoca</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-light">© 2025 Örs Bordás. {t.footer.rights}</p>
          
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}