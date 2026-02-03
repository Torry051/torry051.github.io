const translations = {
    en: {
        // Hero Section
        hero: {
            greeting: "Hey, I'm",
            job: "CS student",
            location: "based in Goleta, California.",
            school: "UCSB",
            schoolFull: "",
            at: "at"
        },
        
        // About Section
        about: {
            title: "About Me",
            description: "I'm a computer science student with strong interests in software development, game development, AR/XR, and computer vision. I've been studying computer science for several years and am comfortable working with languages and tools such as C/C++, C#, Python, JavaScript, React, and Unity. When I'm not in classes, I enjoy creating fun games and working on technical projects and research related to mixed reality, and vision-based applications, and I like exploring how software can bridge virtual and physical environments.",
            yearsExperience: "Years\nexperience",
            completedProjects: "Completed\nprojects",
            passionForGames: "Passion for\ngames",
            downloadCV: "Download CV"
        },
        
        // Experience Section
        experience: {
            title: "Experience",
            present: "present",
            items: [
                {
                    company: "Research Assistant",
                    position: "UCSB Four Eyes Lab",
                    location: "Goleta, CA",
                    startDate: "Jan 2025",
                    endDate: "present",
                    highlights: [
                        "Designed and implemented a mixed-reality navigation system enabling multi-user collaboration in complex indoor environments using Unity, HoloLens 2, Vuforia Engine, and Photon Fusion2.",
                        "Developed interactive features (path drawing, virtual landmarks) anchored to physical spaces and synchronized across devices (PC, mobile, iPad, HoloLens 2) with low latency.",
                        "Implemented vision-based anchoring techniques to enhance spatial accuracy and navigation efficiency."
                    ]
                },
                {
                    company: "Undergraduate Learning Assistant",
                    position: "CMPSC 16 & 24 (Problem Solving with Computers I&II)",
                    location: "Goleta, CA",
                    startDate: "Jan 2025",
                    endDate: "Dec 2025",
                    highlights: [
                        "Delivered engaging presentations, review sessions, and coding assessments to enhance student learning.",
                        "Refined Gradescope autograders for improved accuracy and developed a tool to automate worksheet generation.",
                        "Offered academic support through weekly office hours, addressing student inquiries and reinforcing key concepts.",
                        "Contributed to curriculum enhancement through active participation in course development meetings."
                    ]
                },
                {
                    company: "Research Assistant",
                    position: "UCSB Bionic Vision Lab",
                    location: "Goleta, CA",
                    startDate: "Sep 2025",
                    endDate: "present",
                    highlights: [
                        "Implemented mixed reality prototypes to test performance of Depth API from AR Foundation and Meta XR by using devices like Meta Quest 3 and mobile phone.",
                        "Developed XR technology that aids blind navigation by integrating data from head- and knee-mounted cameras."
                    ]
                }
            ]
        },
        
        // Projects Section
        projects: {
            title: "Projects",
            viewProject: "View Project",
            readMore: "Read more",
            showLess: "Show less",
            items: [
                {
                    name: "Treasure Hunter",
                    description: "A 3D adventure game featuring multiple explorable levels, hidden treasures, and interactive environments. Players solve light puzzles and overcome enemies while discovering secrets across diverse areas.",
                    type: "🎮 Game",
                    url: "https://torry051.itch.io/treasure-hunter",
                    image: "/th_banner.png",
                    technologies: ["Unity", "C#"]
                },
                {
                    name: "Time Bender",
                    description: "A 2D puzzle game where players reverse time to overcome obstacles and solve creative challenges.",
                    type: "🎮 Game",
                    url: "https://github.com/ucsb-cs148-w25/pj10-timebendingpuzzle",
                    image: "/tb.png",
                    technologies: ["Unity", "C#"]
                },
                {
                    name: "Odysseia (Coming Soon)",
                    description: "A 3D sailing adventure game inspired by Greek mythology, featuring large open environments, enemy encounters, and dynamic sea-based exploration.",
                    type: "🎮 Game",
                    url: "https://www.instagram.com/odysseiagame?igsh=NTc4MTIwNjQ2YQ==",
                    image: "",
                    technologies: ["Unity", "C#"]
                },
                {
                    name: "SciVid.AI",
                    description: "SciVid.AI converts complex research papers into short, engaging videos, making scholarly ideas accessible through visual storytelling and flexible styles.",
                    type: "🌐 Web App",
                    url: "https://scividai.vercel.app/",
                    image: "/SciVid.png",
                    technologies: ["React", "Next.js", "Gemini", "Veo"]
                }
            ]
        },
        
        // Skills Section
        skills: {
            title: "Skills",
            categories: [
                {
                    name: "Programming",
                    skills: [
                        { name: "C#", level: 90 },
                        { name: "C++", level: 90 },
                        { name: "Python", level: 85 },
                        { name: "React", level: 70 }
                    ]
                },
                {
                    name: "Tools & Software",
                    skills: [
                        { name: "Git", level: 90 },
                        { name: "Unity", level: 90 },
                        { name: "LaTeX", level: 70 },
                        { name: "OpenCV", level: 75 }
                    ]
                }
            ]
        },
        
        // Footer
        footer: {
            madeWith: "Made with",
            by: "by"
        },
        
        // Scroll indicator
        scroll: "Scroll"
    },
    
    zh: {
        // Hero Section
        hero: {
            greeting: "你好，我是",
            name: "童瑞",
            job: "计算机科学学生",
            location: "现居美国加州戈利塔。",
            school: "UCSB",
            schoolFull: "加州大学圣塔芭芭拉分校",
            at: "就读于"
        },
        
        // About Section
        about: {
            title: "关于我",
            description: "我是一名计算机科学专业的学生，对软件开发、游戏开发、AR/XR 和计算机视觉有浓厚的兴趣。经过多年的学习，我熟练掌握 C/C++、C#、Python、JavaScript、React 和 Unity 等编程语言和开发工具。课余时间，我热衷于制作有趣的游戏，参与混合现实和计算机视觉相关的技术项目与研究，探索软件连接虚拟与现实世界的可能性。",
            yearsExperience: "年\n开发经验",
            completedProjects: "个\n完成项目",
            passionForGames: "对游戏的\n无限热爱",
            downloadCV: "下载简历"
        },
        
        // Experience Section
        experience: {
            title: "经历",
            present: "至今",
            items: [
                {
                    company: "本科生研究助理",
                    position: "UCSB Four Eyes Lab",
                    location: "加州戈利塔",
                    startDate: "2025年1月",
                    endDate: "至今",
                    highlights: [
                        "多用户 MR 导航系统: 基于 Unity 和 HoloLens 2 开发了一套支持多人协作的复杂室内导航系统 。",
                        "跨设备实时同步: 利用 Photon Fusion 2 实现了路径绘制、虚拟地标锚定等功能，并在 PC、移动端及 HoloLens 之间实现了低延迟同步 。",
                        "空间定位优化: 应用视觉锚定技术 (Vision-based anchoring)，显著提升了空间定位的准确度与导航效率 。"
                    ]
                },
                {
                    company: "本科生课程助教",
                    position: "CMPSC 16 & 24（计算机程序设计 I & II）",
                    location: "加州戈利塔",
                    startDate: "2025年1月",
                    endDate: "2025年12月",
                    highlights: [
                        "主持课程讲解、复习讨论和编程测试，帮助学生提升学习效果。",
                        "每周开设答疑时间，解答学生疑问，巩固核心知识点。",
                        "积极参与课程开发会议，为课程改进提供建议。"
                    ]
                },
                {
                    company: "本科生研究助理",
                    position: "UCSB Bionic Vision Lab",
                    location: "加州戈利塔",
                    startDate: "2025年9月",
                    endDate: "至今",
                    highlights: [
                        "XR 辅助导航系统: 负责开发辅助盲人导航的 XR 技术，通过整合头部和膝部摄像头的影像数据实现环境感知 。",
                        "原型开发与性能测试: 基于 Meta Quest 3 和移动设备，使用 AR Foundation 与 Meta XR 实现混合现实原型，深入测试并对比了各平台的 Depth API 性能 。"
                    ]
                }
            ]
        },
        
        // Projects Section
        projects: {
            title: "项目经历",
            viewProject: "查看项目",
            readMore: "展开详情",
            showLess: "收起",
            items: [
                {
                    name: "Treasure Hunter（寻宝猎人）",
                    description: "一款 3D 冒险游戏，包含多个可探索关卡、隐藏宝藏和交互式环境。玩家需要解谜、击败敌人，在不同区域中发现秘密。",
                    type: "🎮 游戏",
                    url: "https://torry051.itch.io/treasure-hunter",
                    image: "/th_banner.png",
                    technologies: ["Unity", "C#"]
                },
                {
                    name: "Time Bender（时间操控者）",
                    description: "一款 2D 解谜游戏，玩家可以逆转时间来克服障碍，解决创意谜题。",
                    type: "🎮 游戏",
                    url: "https://github.com/ucsb-cs148-w25/pj10-timebendingpuzzle",
                    image: "/tb.png",
                    technologies: ["Unity", "C#"]
                },
                {
                    name: "Odysseia（奥德赛）- 开发中",
                    description: "一款以希腊神话为灵感的 3D 航海冒险游戏，拥有广阔的开放世界、敌人遭遇战和动态海上探索体验。",
                    type: "🎮 游戏",
                    url: "https://www.instagram.com/odysseiagame?igsh=NTc4MTIwNjQ2YQ==",
                    image: "",
                    technologies: ["Unity", "C#"]
                },
                {
                    name: "SciVid.AI（科研视频AI）",
                    description: "SciVid.AI 将复杂的学术论文转化为简短有趣的视频，通过可视化叙事和灵活的风格，让学术观点更易于理解。",
                    type: "🌐 网页应用",
                    url: "https://scividai.vercel.app/",
                    image: "/SciVid.png",
                    technologies: ["React", "Next.js", "Gemini", "Veo"]
                }
            ]
        },
        
        // Skills Section
        skills: {
            title: "技能",
            categories: [
                {
                    name: "编程语言",
                    skills: [
                        { name: "C#", level: 90 },
                        { name: "C++", level: 90 },
                        { name: "Python", level: 85 },
                        { name: "React", level: 70 }
                    ]
                },
                {
                    name: "工具与软件",
                    skills: [
                        { name: "Git", level: 90 },
                        { name: "Unity", level: 90 },
                        { name: "LaTeX", level: 70 },
                        { name: "OpenCV", level: 75 }
                    ]
                }
            ]
        },
        
        // Footer
        footer: {
            madeWith: "由",
            by: "用 ❤️ 制作"
        },
        
        // Scroll indicator
        scroll: "下滑"
    }
};

export const getTranslation = (language, path) => {
    const keys = path.split('.');
    let result = translations[language];
    
    for (const key of keys) {
        if (result && result[key] !== undefined) {
            result = result[key];
        } else {
            // Fallback to English if translation not found
            result = translations['en'];
            for (const k of keys) {
                if (result && result[k] !== undefined) {
                    result = result[k];
                } else {
                    return path; // Return the path if not found
                }
            }
            break;
        }
    }
    
    return result;
};

export default translations;
