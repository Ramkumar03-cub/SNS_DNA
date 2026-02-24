import { CourseCategory, Institution, Leader, StatItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Leaders', href: '#leaders' },
  { name: 'Institutions', href: '#institutions' },
  { name: 'Courses', href: '#courses' },
];

export const LEADERS: Leader[] = [
  {
    name: 'Deiva Thiru Dr. S.N. Subbramanian',
    title: 'Founder Chairman',
    role: 'The Visionary',
    image: '/1.png'
  },
  {
    name: 'Dr. S. Rajalakshmi',
    title: 'Chairman / Correspondent',
    role: 'The Pillar of Support',
    image: '/2.png'
  },
  {
    name: 'Nalin SNS',
    title: 'Technical Director',
    role: 'The Innovator',
    image: '/3.png'
  }
];

export const INSTITUTIONS: Institution[] = [
  { name: 'SNS Academy - International CBSE Fingerprint School', description: 'International CBSE Fingerprint School', image: '/college photo/insti 1.jpg', logo: '/college logo/insti 1.png', link: 'https://snsacademy.org/?_gl=1*1xtgphv*_gcl_au*MjA1MTI4MjUxNC4xNzcxNjU4NjQ2LjY0ODA4Mjg1MS4xNzcxNjU4NjU2LjE3NzE2NTkwNjk.*_ga*NjgzNjMyNDExLjE3NzE2NTg2NDY.*_ga_7G2NBW0Z58*czE3NzE2NTg2NDUkbzEkZzEkdDE3NzE2NTkwNjkkajQzJGwwJGgw*_ga_KNDZC15Z8D*czE3NzE2NTg2NDUkbzEkZzEkdDE3NzE2NTkwNjkkajQzJGwwJGgxNDQwODQ2NzIx' },
  { name: 'Dr. SNS Rajalakshmi College  of Arts and Science', description: 'Arts and Science', image: '/college photo/insti 2.jpg', logo: '/college logo/insti 2.png', link: 'https://drsnsrcas.ac.in/' },
  { name: 'SNS College of Technology', description: 'Engineering & Technology', image: '/college photo/insti 3.jpg', logo: '/college logo/insti 3.png', link: 'https://snsct.org/' },
  { name: 'SNS College of Pharmacy & Health Sciences', description: 'Pharmacy & Health Sciences', image: '/college photo/insti 4.jpg', logo: '/college logo/insti 4.png', link: 'https://snscphs.org/' },
  { name: 'Dr. SNS College of Education', description: 'Teacher Education', image: '/college photo/insti 5.jpg', logo: '/college logo/insti 5.png', link: 'https://drsnsce.edu.in/' },
  { name: 'SNS College of Allied Health Sciences', description: 'Allied Health Sciences', image: '/college photo/insti 6.jpg', logo: '/college logo/insti 6.png', link: 'https://snscahs.org/' },
  { name: 'SNS College of Physiotherapy', description: 'Physiotherapy', image: '/college photo/insti 7.jpg', logo: '/college logo/insti 7.png', link: 'https://snscphs.org/' },
  { name: 'SNS College of Nursing', description: 'Nursing Education', image: '/college photo/insti 8.jpg', logo: '/college logo/insti 8.png', link: 'https://snscnursing.org/' },
  { name: 'SNS B-Spine - Experiential Business (MBA)', description: 'Experiential Business (MBA)', image: '/college photo/insti 9.jpg', logo: '/college logo/insti 9.png', link: 'https://snsbschool.in/' },
];

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: 'be-btech',
    title: 'B.E./B.Tech Programmes',
    courses: [
      'Computer Science and Engineering',
      'Civil Engineering',
      'Electronics and Communication Engineering',
      'Electrical and Electronics Engineering',
      'Information Technology',
      'Mechanical Engineering',
      'Mechatronics Engineering'
    ]
  },
  {
    id: 'exclusive-eng',
    title: 'Exclusive B.E./B.Tech',
    courses: [
      'AeroSpace Engineering',
      'Artificial Intelligence & Data Science',
      'Computer Science and Technology',
      'IoT with Cyber Security & Blockchain',
      'Additive Manufacturing',
      'Food Technology',
      'Bio-Medical Engineering',
      'Computer Science and Design',
      'Artificial Intelligence & Machine Learning',
      'Data Science  *'
    ]
  },
  {
    id: 'arts-ug',
    title: 'Arts & Science (UG)',
    courses: [
      'Bachelor of Computer Applications',
      'B.Sc. Psychology',
      'B.Sc. Computer Science',
      'B.Sc. Information Tech',
      'B.Sc. Costume Design and Fashion',
      'CS with AI & Data Science',
      'CS with Cyber Security',
      'CS with Data Analytics',
      'CS (Full Stack Web Development)',
      'CS (Data Science & Visualization)',
      'CS (DevOps & Cloud)',
      'CS (AI, ML & DS) *',
      'CS (Agentic AI) *',
      'CS (Generative AI) *'
    ]
  },
  {
    id: 'bba-commerce',
    title: 'BBA & Commerce',
    courses: [
      'Bachelor of Business Administration (BBA)',
      'BBA with Computer Applications',
      'Digital Marketing and Data Mining',
      'B.Com Commerce',
      'B.Com Computer Applications',
      'B.Com Information Technology',
      'B.Com Professional Accounting'
    ]
  },
  {
    id: 'pg',
    title: 'PG Programmes',
    courses: [
      'Master of Business Administration',
      'Master of Computer Applications',
      'M.Sc. Computer Science',
      'M.Com Computer Applications',
      'M.Sc. Mathematics',
      'M.A. English Literature',
      'Master of Commerce'
    ]
  },
  {
    id: 'phd',
    title: 'Ph.D / M.Phil',
    courses: [
      'Ph.D (Eng): CSE, Civil, ECE, EEE, Mech',
      'Ph.D/M.Phil: CS, Maths, Commerce, Info Science, Management, Library, Tamil, English'
    ]
  },
  {
    id: 'paramedical',
    title: 'Paramedical & Health',
    courses: [
      'Bachelor of Physiotherapy',
      'Bachelor of Pharmacy',
      'Diploma in Pharmacy',
      'M.Pharmacy (Pharmaceutics)',
      'Doctor of Pharmacy (Pharm.D)',
      'B.Sc. Nursing',
      'B.Sc. Cardiac Technology',
      'B.Sc. Physician Assistant',
      'B.Sc. Cardio Pulmonary Perfusion',
      'B.Sc. OT & Anaesthesia Tech',
      'B.Sc. Radiography and Imaging',
      'B.Sc. Optometry *',
      'B.Sc. Dialysis Therapy *',
      'B.Sc. Respiratory Therapy *'
    ]
  },
  {
    id: 'exclusive-mba',
    title: 'Exclusive Programmes',
    courses: [
      'MBA (SNS B-SPINE)',
      'MBA in Business Analytics',
      'B.Ed Programmes (Biological Science, Commerce, CS, Economics, English, History, Maths, Tamil, Social Science, Physical Science)',
      'CBSE School (Pre KG to +2)'
    ]
  }
];

export const STATS: StatItem[] = [
  { label: 'Students', value: '16,000+' },
  { label: 'Years of Excellence', value: '29+' },
  { label: 'Alumni', value: '40,000+' },
  { label: 'Institutions', value: '9' },
];