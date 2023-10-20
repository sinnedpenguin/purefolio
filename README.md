# Purefolio

A minimal portfolio template.

[Live Demo](https://sinnedpenguin.me/).

![Screenshot 2023-10-20 001858](https://github.com/sinnedpenguin/purefolio/assets/133164950/00836457-f5ef-425a-8a21-28eff8df8c73)
![Screenshot 2023-10-20 001904](https://github.com/sinnedpenguin/purefolio/assets/133164950/28e4b5ba-6929-470d-9d7c-2e4a66c7e636)

## Getting started

Follow these steps to use the template.

1. **Clone the repository**

```shell
git clone https://github.com/sinnedpenguin/purefolio.git
```

2. **Install dependencies**

```shell
npm install
```

3. **Modify config/site.ts, data/skills.json and data/projects.json:**

```shell
export const siteConfig = {
  name: "sinnedpenguin",
  description: "A full-stack web developer who loves building things that users enjoy using.",
  links: {
    github: "https://github.com/sinnedpenguin",
    cv: "",
  },
  avatar: "https://avatars.githubusercontent.com/u/133164950?v=4",
  email: "sinnedpenguin@proton.me"
}
```

```shell
{
  "technologies": [
    { "name": "Next.js", "icon": "nextdotjs" },
    { "name": "React.js", "icon": "react" },
    { "name": "TypeScript", "icon": "typescript" },
    { "name": "JavaScript", "icon": "javascript" },
    { "name": "Node.js", "icon": "nodedotjs" },
    { "name": "Java", "icon": "java" },
    { "name": "Tailwind CSS", "icon": "tailwindcss" },
    { "name": "Bootstrap", "icon": "bootstrap" },
    { "name": "MSSQL", "icon": "microsoftsqlserver" },
    { "name": "MySQL", "icon": "mysql" },
    { "name": "Firebase", "icon": "firebase" }
  ],
  "tools": [
    { "name": "Git", "icon": "git" },
    { "name": "GitHub", "icon": "github" },
    { "name": "Linux", "icon": "linux" }
  ]
}
```

```shell
[
  {
    "name": "Purefolio",
    "description": "A minimal portfolio template.",
    "repository": "https://github.com/sinnedpenguin/portfolio",
    "demo": "https://sinnedpenguin.me",
    "technologies": [
      { "name": "Next.js", "icon": "nextdotjs" },
      { "name": "React.js", "icon": "react" },
      { "name": "TypeScript", "icon": "typescript" },
      { "name": "Tailwind CSS", "icon": "tailwindcss" }
    ]
  }
]
```

Icons used in this project are sourced from [Simple Icons](https://simpleicons.org/).
