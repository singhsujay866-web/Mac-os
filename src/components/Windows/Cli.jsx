import React from 'react'
import MacWindows from './MacWindows'
import Terminal from 'react-console-emulator'
import "./cli.scss"
const Cli = ({windowsName,setwindowsState}) => {
    return (
        <MacWindows windowsName={windowsName} setwindowsState={setwindowsState}>
            <div className="cli-window">
                <Terminal
                    commands={{

                        about: {
                            description: 'Display information about Sujay.',
                            usage: 'about',
                            fn: () => 'Sujay Singh is a passionate full-stack web developer with expertise in modern web technologies. He specializes in creating interactive user experiences and scalable web applications. This portfolio showcases his journey and technical capabilities.'
                        },
                        tech: {
                            description: 'Display technical skills and technologies.',
                            usage: 'tech',
                            fn: () => `Technical Skills & Technologies:\n\n🚀 Frontend Development:\n• React.js\n• JavaScript (ES6+)\n• HTML5 / CSS3 / Sass/SCSS\n• Responsive Design\n\n⚙️ Backend Development:\n• Node.js\n• RESTful APIs\n\n🛠️ Tools & Technologies:\n• Git / GitHub\n• Vite\n• Vercel / Netlify\n\n📚 Libraries & Frameworks:\n• React Router\n• Redux / Context API\n• Axios / Fetch API\n• React Console Emulator\n• React Markdown\n• Lottie Animations\n• React Syntax Highlighter\n\n🎨 Design & UI/UX:\n• Figma\n• Adobe Creative Suite\n• Material UI\n• Tailwind CSS\n• CSS Animations`
                        },
                        projects: {
                            description: 'Show portfolio projects.',
                            usage: 'projects',
                            fn: () => `Portfolio Projects:\n1. Mac OS Portfolio - Interactive desktop environment (Current)\n2. E-commerce Platform - web application\n3. Task Management App - React-based productivity tool\n4. Weather Dashboard - Real-time weather application\n\nUse 'project <number>' for more details.`
                        },
                        contact: {
                            description: 'Display contact information.',
                            usage: 'contact',
                            fn: () => `Contact Information:\nEmail: sujaysingh145@gmail.com\nLinkedIn: https://www.linkedin.com/in/sujay-singh-/\nGitHub: https://github.com/singhsujay866-web\nPhone: +91 9761558944`
                        },
                        linkedIn: {
                            description: 'Open LinkedIn profile.',
                            usage: 'linkedIn',
                            fn: () => {
                                window.open('https://www.linkedin.com/in/sujay-singh-/', '_blank');
                                return 'Opening LinkedIn profile... 🚀';
                            }
                        },
                        github: {
                            description: 'Open GitHub profile.',
                            usage: 'github',
                            fn: () => {
                                window.open('https://github.com/singhsujay866-web', '_blank');
                                return 'Opening GitHub profile... 🚀';
                            }
                        },
                        project: {
                            description: 'Get details about a specific project.',
                            usage: 'project <number> [github|live]',
                            fn: (num, type) => {
                                const projects = {
                                    1: {
                                        info: 'Mac OS Portfolio...',
                                        github: 'https://github.com/singhsujay866-web/Mac-os',
                                        live: 'https://mac-os-red.vercel.app/'
                                    },
                                    2: {
                                        info: 'E-commerce Platform...',
                                        github: 'https://github.com/singhsujay866-web/shoply',
                                        live: 'https://shoply-ashen.vercel.app/'
                                    },
                                    3: {
                                        info: 'Task Management App...',
                                        github: 'https://github.com/singhsujay866-web/task-app',
                                        live: 'https://prd-mng-dashboard-8xgz.vercel.app/'
                                    },
                                    4: {
                                        info: 'Weather Dashboard...',
                                        github: 'https://github.com/singhsujay866-web/weather',
                                        live: 'https://prd-mng-dashboard-8xgz.vercel.app/'
                                    }
                                };

                                const p = projects[num];
                                if (!p) return 'Project not found. Use "projects" to see all.';

                                // ✅ type ke hisaab se sirf ek link open karo
                                if (type === 'github') {
                                    window.open(p.github, '_blank');
                                    return `Opening GitHub... 🔗 ${p.github}`;
                                }
                                if (type === 'live') {
                                    window.open(p.live, '_blank');
                                    return `Opening Live Demo... 🌐 ${p.live}`;
                                }

                                // koi type nahi diya toh sirf info dikhao
                                return `${p.info}\n\n🔗 GitHub: ${p.github}\n🌐 Live:   ${p.live}\n\nTip: "project ${num} github" or "project ${num} live" to open links!`;
                            }
                        }
                    }}
                    welcomeMessage={`Welcome to Sujay's Portfolio CLI! 🚀
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 TIP: Click the apple icon in the top nav to change wallpaper!

AVAILABLE COMMANDS:
──────────────────
  about          → Who am I?
  tech           → My tech stack & skills
  projects       → List all projects
  project <num>  → Project details + opens GitHub & Live link
                   e.g: project 1, project 2...
  contact        → My contact info
  github         → Opens my GitHub profile
  help           → All commands

──────────────────
Type any command and press Enter to get started!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`}
                    promptLabel={'sujay@singh:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindows>
    )
}

export default Cli
