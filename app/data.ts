type Project = {
  name: string
  description: string
  link: string
  images: string[]
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'CRM | Company: 2mc Global',
    description: 'Custom CRM system built to streamline operations with automation and minimal input. Tailored to the business’s exact needs using WINFORMS & ASP.NET Core MVC, Bootstrap, JS, and SQL Server. Centralized data using CloudClusters, with role-based authorization using Identity.',
    link: '',
    images: [
      '/img/crmdashboard.jpg',
      '/img/crmlogin.jpg',
      '/img/crmadd.jpg',
      '/img/crmedit.jpg',
      '/img/crmview.jpg',
      '/img/crmlogs.jpg',
      '/img/level.jpg',
      '/img/status.jpg',
      '/img/salesowners.jpg',
      '/img/users.jpg',
      '/img/notes.jpg',
    ],
    id: 'project1',
  },
  {
    name: 'ERM | Company: Skyline Prime Corp.',
    description: 'Saves employee records and onboarding details integrated to windows native WINFORMS for time-keeping and payroll application, built to match the company’s workflow using ASP.NET Core MVC, Bootstrap, JS, SQL Server, and role-based authorization with Identity.',
    link: '',
    images: [
      '/img/hris2.jpg',
      '/img/hris1.jpg',
      '/img/hris3.jpg',
      '/img/hris4.jpg',
      '/img/hris5.jpg',
      '/img/hris6.jpg',
      '/img/hris7.jpg',
      '/img/hris8.jpg',
      '/img/hris9.jpg',
      '/img/hris10.jpg',
    ],
    id: 'project2',
  },
  {
    name: 'ERP | Company: Cebu Iceman Corp.',
    description: 'Custom ERP solution designed for Cebu Iceman, an ice supply company in Cebu, PH. Built with .NET, WinForms, and SQL Server to manage core business processes including inventory, payments, delivery tracking, accounting, sales, and job orders. Streamlined workflows and centralized data for efficient operations.',
    link: '',
    images: [
      '/img/iceman.jpg',
    ],
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why I Choose ASP.NET Core MVC Over Other Frameworks — Especially for Identity',
    description: 'A Practical Look at Why ASP.NET Core Stands Out for Authentication and User Management',
    link: '/blog/why-i-choose-aspnet-core-mvc-for-identity',
    uid: 'blog-1',
  },
  {
    title: '.NET Core for Web Development Over Other Environments',
    description: 'Choosing Performance, Flexibility, and Scalability for the Long Run',
    link: '/blog/why-i-pick-dotnet-core-for-web-development',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/maikkuzaskii',
  },
  {
    label: 'Facebook',
    link: 'https://www.facebook.com/maikkuzaskii/',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mike-francis-cabatino-91647b2b0/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/maikkuzaskii/',
  },
]

export const EMAIL = 'mikecabatino@gmail.com'
