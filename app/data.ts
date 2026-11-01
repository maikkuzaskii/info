export type Project = {
  name: string
  description: string
  link: string
  images: string[]
  id: string
}

export type FeaturedProject = {
  name: string
  subtitle: string
  description: string
  link: string
  stack: string[]
  features: string[]
  modules: { name: string; description: string }[]
  credentials: { email: string; password: string }
  screenshots: { src: string; title: string }[]
  id: string
}

type WorkExperience = { company: string; title: string; start: string; end: string; link: string; id: string }
type BlogPost = { title: string; description: string; link: string; uid: string }
type SocialLink = { label: string; link: string }

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    "name": "Construction ERP System",
    "subtitle": "Built for a US-based construction company that accepts insurance as payees.",
    "description": "A full-stack construction ERP system built for a US-based construction company that accepts insurance as payees. It brings job intake, assessments, estimates, contracts, project delivery, purchasing, inventory, billing, collections, and accounting into one connected workspace.",
    "link": "https://nfconstructionerp.onrender.com/",
    "stack": [
      "React",
      ".NET API",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Render"
    ],
    "features": [
      "Dashboard",
      "Employee tasks",
      "Team calendar",
      "Task board",
      "Client records",
      "Job intake and assessment",
      "Assessment reports / Dictation",
      "Estimates and quotations",
      "Client contracts",
      "Project management",
      "Scope of work",
      "Construction schedules",
      "Field updates and inspections",
      "Budgets and expenses",
      "Approvals and additional work",
      "Purchasing",
      "Material deliveries",
      "Material inventory",
      "Tools and equipment",
      "Fleet and servicing",
      "Suppliers and subcontractors",
      "Client billing and collections",
      "Accounting records",
      "Documents and reports",
      "Project completion",
      "User access",
      "Search and built-in guidance"
    ],
    "modules": [
      {
        "name": "Dashboard",
        "description": "See collections, project spending, unpaid client invoices, project status, and items needing attention. Review activity for today, this week, this month, or this year."
      },
      {
        "name": "Employee tasks",
        "description": "Assign work to employees, set priorities and deadlines, and follow up on overdue tasks."
      },
      {
        "name": "Team calendar",
        "description": "Organize internal meetings, appointments, and company events."
      },
      {
        "name": "Task board",
        "description": "Move employee tasks through To do, In progress, Waiting, and Done so everyone can see their status."
      },
      {
        "name": "Client records",
        "description": "Keep client information and their related job requests together."
      },
      {
        "name": "Job intake and assessment",
        "description": "Record requested work, site details, assessment findings, documents, and the next action needed before a job becomes a project."
      },
      {
        "name": "Assessment reports / Dictation",
        "description": "Turn entered room-by-room findings into a formatted report with photos, recommendations, and a PDF output for review."
      },
      {
        "name": "Estimates and quotations",
        "description": "Prepare prices for materials, labor, equipment, and subcontract work. Produce client proposals and record acceptance, rejection, or requests for changes."
      },
      {
        "name": "Client contracts",
        "description": "Prepare contract details and keep signed copies, payment terms, and required deposit evidence together."
      },
      {
        "name": "Project management",
        "description": "Keep each project’s approved work, costs, schedule, documents, billing, and updates in one workspace."
      },
      {
        "name": "Scope of work",
        "description": "Break the approved job into clear work items, quantities, and areas so the team knows what needs to be delivered."
      },
      {
        "name": "Construction schedules",
        "description": "Plan work dates, assign responsible people, link tasks that depend on each other, and compare planned versus actual progress."
      },
      {
        "name": "Field updates and inspections",
        "description": "Record daily site activity, manpower, problems, delays, safety notes, and inspection results."
      },
      {
        "name": "Budgets and expenses",
        "description": "Set internal spending plans, record expenses and receipts, and compare budgets with committed and posted costs."
      },
      {
        "name": "Approvals and additional work",
        "description": "Review purchase orders, expenses, client billing, and requests for changes or extra work."
      },
      {
        "name": "Purchasing",
        "description": "Maintain a material catalog, prepare purchase orders, obtain approval, and print orders for suppliers."
      },
      {
        "name": "Material deliveries",
        "description": "Record what arrived, where it was delivered, who received it, and any damaged or rejected items, with supporting photos or documents."
      },
      {
        "name": "Material inventory",
        "description": "Track stock by location, materials issued to projects, unused returns, transfers, and low-stock alerts."
      },
      {
        "name": "Tools and equipment",
        "description": "Record individual assets, who checked them out, expected return dates, and their condition when returned."
      },
      {
        "name": "Fleet and servicing",
        "description": "Track vehicle custody, mileage, recorded fuel quantities, maintenance history, and service or repair needs."
      },
      {
        "name": "Suppliers and subcontractors",
        "description": "Keep business contacts, supplier and subcontractor roles, project agreements, and supporting records organized."
      },
      {
        "name": "Client billing and collections",
        "description": "Prepare progress billings based on verified work, issue invoices, record money received, and track unpaid balances and retention."
      },
      {
        "name": "Accounting records",
        "description": "Review posted invoices, collections, journal entries, and account balances."
      },
      {
        "name": "Documents and reports",
        "description": "Store project files and photos, find supporting documents, and export supported reports to CSV or PDF."
      },
      {
        "name": "Project completion",
        "description": "Track remaining work, punch-list items, and warranty issues."
      },
      {
        "name": "User access",
        "description": "Decide which modules and pages each employee can see, and whether they can add, edit, delete, approve, or post records. Disable access when needed."
      },
      {
        "name": "Search and built-in guidance",
        "description": "Quickly find modules, projects, clients, and intakes, with guides explaining how to use the system."
      }
    ],
    "credentials": {
      "email": "Mike.thxgn@gmail.com",
      "password": "Test@123"
    },
    "screenshots": [
  {
    "src": "/img/construction-erp/01-dashboard.jpg",
    "title": "Dashboard"
  },
  {
    "src": "/img/construction-erp/02-employee-tasks.jpg",
    "title": "Employee Tasks"
  },
  {
    "src": "/img/construction-erp/03-team-calendar.jpg",
    "title": "Team Calendar"
  },
  {
    "src": "/img/construction-erp/04-task-board.jpg",
    "title": "Task Board"
  },
  {
    "src": "/img/construction-erp/05-inventory-overview.jpg",
    "title": "Inventory Overview"
  },
  {
    "src": "/img/construction-erp/06-material-inventory.jpg",
    "title": "Material Inventory"
  },
  {
    "src": "/img/construction-erp/07-tools-equipment.jpg",
    "title": "Tools Equipment"
  },
  {
    "src": "/img/construction-erp/08-fleet.jpg",
    "title": "Fleet"
  },
  {
    "src": "/img/construction-erp/09-servicing.jpg",
    "title": "Servicing"
  },
  {
    "src": "/img/construction-erp/10-project-directory.jpg",
    "title": "Project Directory"
  },
  {
    "src": "/img/construction-erp/11-project-overview.jpg",
    "title": "Project Overview"
  },
  {
    "src": "/img/construction-erp/12-scope-of-work.jpg",
    "title": "Scope Of Work"
  },
  {
    "src": "/img/construction-erp/13-client-contracts.jpg",
    "title": "Client Contracts"
  },
  {
    "src": "/img/construction-erp/14-billing-collections.jpg",
    "title": "Billing Collections"
  },
  {
    "src": "/img/construction-erp/15-project-completion.jpg",
    "title": "Project Completion"
  },
  {
    "src": "/img/construction-erp/16-construction-schedules.jpg",
    "title": "Construction Schedules"
  },
  {
    "src": "/img/construction-erp/17-field-updates-inspections.jpg",
    "title": "Field Updates Inspections"
  },
  {
    "src": "/img/construction-erp/18-estimates-quotations.jpg",
    "title": "Estimates Quotations"
  },
  {
    "src": "/img/construction-erp/19-budgets-costs.jpg",
    "title": "Budgets Costs"
  },
  {
    "src": "/img/construction-erp/20-expenses-receipts.jpg",
    "title": "Expenses Receipts"
  },
  {
    "src": "/img/construction-erp/21-approvals-additional-work.jpg",
    "title": "Approvals Additional Work"
  },
  {
    "src": "/img/construction-erp/22-purchasing.jpg",
    "title": "Purchasing"
  },
  {
    "src": "/img/construction-erp/23-material-deliveries.jpg",
    "title": "Material Deliveries"
  },
  {
    "src": "/img/construction-erp/24-accounting.jpg",
    "title": "Accounting"
  },
  {
    "src": "/img/construction-erp/25-client-records.jpg",
    "title": "Client Records"
  },
  {
    "src": "/img/construction-erp/26-job-intake-assessment.jpg",
    "title": "Job Intake Assessment"
  },
  {
    "src": "/img/construction-erp/27-assessment-reports-dictation.jpg",
    "title": "Assessment Reports Dictation"
  },
  {
    "src": "/img/construction-erp/28-suppliers-business-partners.jpg",
    "title": "Suppliers Business Partners"
  },
  {
    "src": "/img/construction-erp/29-subcontractors.jpg",
    "title": "Subcontractors"
  },
  {
    "src": "/img/construction-erp/30-user-access.jpg",
    "title": "User Access"
  },
  {
    "src": "/img/construction-erp/31-documents.jpg",
    "title": "Documents"
  },
  {
    "src": "/img/construction-erp/32-reports.jpg",
    "title": "Reports"
  },
  {
    "src": "/img/construction-erp/33-settings.jpg",
    "title": "Settings"
  },
  {
    "src": "/img/construction-erp/34-global-search.jpg",
    "title": "Global Search"
  },
  {
    "src": "/img/construction-erp/35-built-in-guidance.jpg",
    "title": "Built In Guidance"
  }
],
    "id": "construction-erp"
  }
]

export const OTHER_PROJECTS: Project[] = [
  {
    name: 'CRM | Company: 2mc Global',
    description: 'Custom CRM system built to streamline operations with automation and minimal input. Tailored to the business’s exact needs using WINFORMS & ASP.NET Core MVC, Bootstrap, JS, and SQL Server. Centralized data using CloudClusters, with role-based authorization using Identity.',
    link: '',
    images: ['/img/crmdashboard.jpg','/img/crmlogin.jpg','/img/crmadd.jpg','/img/crmedit.jpg','/img/crmview.jpg','/img/crmlogs.jpg','/img/level.jpg','/img/status.jpg','/img/salesowners.jpg','/img/users.jpg','/img/notes.jpg'],
    id: 'project1',
  },
  {
    name: 'ERM | Company: Skyline Prime Corp.',
    description: 'Saves employee records and onboarding details integrated to windows native WINFORMS for time-keeping and payroll application, built to match the company’s workflow using ASP.NET Core MVC, Bootstrap, JS, SQL Server, and role-based authorization with Identity.',
    link: '',
    images: ['/img/hris2.jpg','/img/hris1.jpg','/img/hris3.jpg','/img/hris4.jpg','/img/hris5.jpg','/img/hris6.jpg','/img/hris7.jpg','/img/hris8.jpg','/img/hris9.jpg','/img/hris10.jpg'],
    id: 'project2',
  },
  {
    name: 'ERP | Company: Cebu Iceman Corp.',
    description: 'Custom ERP solution designed for Cebu Iceman, an ice supply company in Cebu, PH. Built with .NET, WinForms, and SQL Server to manage core business processes including inventory, payments, delivery tracking, accounting, sales, and job orders. Streamlined workflows and centralized data for efficient operations.',
    link: '', images: ['/img/iceman.jpg'], id: 'project3',
  },
]

export const PROJECTS = OTHER_PROJECTS

export const WORK_EXPERIENCE: WorkExperience[] = [
  { company: 'Reglazed Studio', title: 'CEO', start: '2024', end: 'Present', link: 'https://ibelick.com', id: 'work1' },
  { company: 'Freelance', title: 'Design Engineer', start: '2022', end: '2024', link: 'https://ibelick.com', id: 'work2' },
  { company: 'Freelance', title: 'Front-end Developer', start: '2017', end: 'Present', link: 'https://ibelick.com', id: 'work3' },
]

export const BLOG_POSTS: BlogPost[] = [
  { title: 'Why I Choose ASP.NET Core MVC Over Other Frameworks — Especially for Identity', description: 'A Practical Look at Why ASP.NET Core Stands Out for Authentication and User Management', link: '/blog/why-i-choose-aspnet-core-mvc-for-identity', uid: 'blog-1' },
  { title: '.NET Core for Web Development Over Other Environments', description: 'Choosing Performance, Flexibility, and Scalability for the Long Run', link: '/blog/why-i-pick-dotnet-core-for-web-development', uid: 'blog-2' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Github', link: 'https://github.com/maikkuzaskii' },
  { label: 'Facebook', link: 'https://www.facebook.com/maikkuzaskii/' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mike-francis-cabatino-91647b2b0/' },
  { label: 'Instagram', link: 'https://www.instagram.com/maikkuzaskii/' },
]

export const EMAIL = 'mikecabatino@gmail.com'

