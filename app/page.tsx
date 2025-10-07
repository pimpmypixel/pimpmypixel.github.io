"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { ObfuscatedContact } from "@/components/obfuscated-contact"
import { ObfuscatedReference } from "@/components/obfuscated-reference"
import { ExperienceCard } from "@/components/ExperienceCard"
import { ParallaxExperienceCard } from "@/components/ParallaxExperienceCard"
import experiencesData from "@/data/experiences.json"
import { Github, Linkedin, Facebook, Mail, Phone, ExternalLink, MapPin, Calendar } from "lucide-react"
import Particles from "@tsparticles/react"
import { useEffect, useMemo, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"

export default function Portfolio() {
  const [init, setInit] = useState(false)
  const [randomFunnyImage, setRandomFunnyImage] = useState("")

  const funnyImages = [
    "8y3tf0cxohqf1.jpg",
    "funny.webp",
    "simpleuicomplicatedusers-v0-8nla21d1wbqf1.webp",
    "wellwellwell-v0-ns657gyltxpf1.webp"
  ]

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#374151",
      },
      links: {
        enable: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [])

  // Initialize random funny image on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * funnyImages.length)
    setRandomFunnyImage(funnyImages[randomIndex])
  }, [funnyImages])

  const changeFunnyImage = () => {
    let newImage
    do {
      const randomIndex = Math.floor(Math.random() * funnyImages.length)
      newImage = funnyImages[randomIndex]
    } while (newImage === randomFunnyImage && funnyImages.length > 1)
    setRandomFunnyImage(newImage)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight font-[family-name:var(--font-jetbrains-mono)] text-primary hover:text-primary/80 transition-colors duration-300">Pimp My Pixel</div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
                  About
                </a>
                <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
                  Experience
                </a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
                  Skills
                </a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
                  Contact
                </a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-muted/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>Copenhagen, Denmark</span>
                <span className="text-muted-foreground/50">•</span>
                <span className="text-green-500">Available for work</span>
              </div>
            </div>

            <h1 className="text-6xl lg:text-6xl font-black mb-8 text-balance leading-none tracking-tighter">
              Andreas<br />
              <span className="text-primary">Hesse</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8 font-semibold">
              Full Stack Engineer
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl font-medium">
              I build accessible, production-ready digital experiences for the web with 15+ years of expertise.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mb-12">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200" asChild>
                <a href="https://github.com/pimpmypixel" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200" asChild>
                <a href="https://linkedin.com/in/andreashesse" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200" asChild>
                <a href="https://facebook.com/andreashesse" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-18 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black mb-6 sticky top-32">About</h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-foreground font-medium">
                  I'm a full-stack developer with 15+ years of experience turning complex ideas into production-ready digital
                  products. My background in media and interaction design shapes how I approach software: part engineer, part
                  creative problem-solver. I thrive at the intersection of backend architecture and intuitive frontend design,
                  always keeping usability, maintainability, and performance front and center.
                </p>

                <p className="mt-4 text-normal leading-relaxed text-muted-foreground">
                  I enjoy fast-moving environments where knowledge-sharing, automation, and continuous learning are part of
                  the culture. Whether it's designing robust APIs, optimizing infrastructure, or crafting interfaces that just
                  make sense, I bring a solution-driven mindset and a knack for connecting the dots between strategy and hands-on execution.
                </p>

                <p className="text-normal leading-relaxed text-muted-foreground">
                  At the end of the day, my focus is simple: deliver meaningful, scalable solutions that empower both users and teams.
                </p>

                <p className="text-normal leading-relaxed text-muted-foreground">
                  I aspire to contributing insight and concrete solutions while fostering environments where goals are met.
                  Based just outside Copenhagen, I balance the tech world with family life and diverse interests. While initially
                  appearing serious, colleagues know me as open-minded, deeply social, and genuinely invested in collective success.
                </p>

                <p className="text-normal leading-relaxed text-muted-foreground">
                  Currently, while looking for the next role, I'm working on <span className="text-foreground">private entrepreneurial side projects</span> focused on{" "}
                  <span className="text-foreground">connecting technologies</span>, building technology-driven solutions
                  to solve real-world problems for fun, challenge and profit.
                </p>

                <p className="text-normal leading-relaxed text-muted-foreground">
                  In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
                  <span className="text-foreground">broadcasting agencies</span> and{" "}
                  <span className="text-foreground">large corporations</span> to{" "}
                  <span className="text-foreground">start-ups</span> and{" "}
                  <span className="text-foreground">digital product studios</span>.
                </p>

                <p className="text-normal leading-relaxed text-muted-foreground font-medium">
                  When I'm not coding, I'm usually exploring new roads less traveled on my motorcycle, hitting a punching bag, advocating for open source, process optimisation and transparency, or spending time with
                  family just outside Copenhagen. Oh, I identify strongly with solving global SDG challenges through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black mb-6 sticky top-32">Experience</h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              {experiencesData.map((experience, index) => (
                <ParallaxExperienceCard key={experience.id} experience={experience} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black mb-6 sticky top-32">Skills</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-2xl font-black mb-6 text-primary">Cloud & DevOps</h3>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">AWS</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" alt="Bash" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Bash</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">

                      <svg className="w-12 h-12 mb-2" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                          <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
                            <stop stopColor="#2E27AD" offset="0%"></stop>
                            <stop stopColor="#527FFF" offset="100%"></stop>
                          </linearGradient>
                        </defs>
                        <g id="Icon-Architecture/64/Arch_AWS-Cloud-Development-Kit_64" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Icon-Architecture-BG/64/Developer-Tools" fill="url(#linearGradient-1)">
                            <rect id="Rectangle" x="0" y="0" width="80" height="80"></rect>
                          </g>
                          <path d="M68,39.3055249 C68,46.2347078 63.2662495,48.7760413 60.4452559,49.6748056 L59.8457203,47.7683056 C62.6597657,46.8725405 66.0147828,44.6771162 66.0147828,39.3055249 C66.0147828,32.5143058 60.4561746,30.8187505 58.0669656,30.404859 C57.5339348,30.3128831 57.1736179,29.8080155 57.2530266,29.2701566 L57.2530266,29.2701566 C57.0167857,26.175968 55.5775032,23.9505516 53.3907865,23.3067204 C51.5743127,22.7728604 49.6228442,23.4806748 48.4257582,25.1142464 C48.2083769,25.4111686 47.8411117,25.562129 47.4807948,25.5091429 C47.1175,25.455157 46.8137618,25.2022234 46.691671,24.8533149 C45.8668132,22.503931 44.6717124,20.5274493 43.1401173,18.9788554 C41.2601166,17.0793535 36.1025223,12.9944248 28.8128047,16.1016099 C24.6031515,17.8971391 21.3057057,23.0697826 21.3057057,27.8765221 C21.3057057,28.4113818 21.3374692,28.9502405 21.4009962,29.4791018 C21.4595601,29.9769712 21.1429179,30.4418493 20.6605101,30.5658168 C18.1670773,31.2066488 13.9852172,33.1821307 13.9852172,39.2215469 C13.9852172,39.4174955 13.9901803,39.6094452 14.0001064,39.7983956 C14.1867168,43.686376 17.0275626,47.0265001 20.9106475,47.923265 L20.4659588,49.871754 C15.7212897,48.7750416 12.2461669,44.674117 12.0168743,39.8983694 C12.004963,39.6804266 12,39.4524864 12,39.2215469 C12,32.3143583 16.6374674,29.7670263 19.352252,28.8692617 C19.3314072,28.5383485 19.3204885,28.2064355 19.3204885,27.8765221 C19.3204885,22.2340018 23.0685786,16.3805368 28.0395625,14.2600929 C33.8641899,11.7747446 40.0362302,13.0114203 44.5456511,17.5672256 C45.9482071,18.9848538 47.0976479,20.7044029 47.9741213,22.6948809 C49.6426964,21.2822513 51.8492653,20.7703856 53.9476399,21.3882236 C56.8262049,22.2350015 58.7528582,24.906301 59.1826577,28.5943338 C61.9986883,29.25716 68,31.5805507 68,39.3055249 L68,39.3055249 Z M56.8986653,61.3137534 L49.9633089,65.1997343 L49.9633089,56.5540016 L56.8986653,52.6120354 L56.8986653,61.3137534 Z M39.0078877,61.28876 L32.0874205,65.2767142 L32.0874205,56.5200105 L39.0078877,52.5900411 L39.0078877,61.28876 Z M31.091834,54.7904641 L24.1693816,50.9054829 L31.1037453,47.0205017 L37.9716043,50.8824889 L31.091834,54.7904641 Z M23.1211869,52.6060369 L30.1022032,56.5240095 L30.1022032,65.2817128 L23.1211869,61.2867605 L23.1211869,52.6060369 Z M40.029282,32.0534267 L46.9110375,35.8984184 L40.0004963,39.7634048 L33.1445486,35.9184131 L40.029282,32.0534267 Z M42.0323661,50.8844884 L48.9548186,47.0045059 L55.8653597,50.9034834 L48.9707003,54.8224557 L42.0323661,50.8844884 Z M40.9931049,52.5890414 L47.9780917,56.5540016 L47.9780917,65.1997343 L40.9931049,61.2807621 L40.9931049,52.5890414 Z M47.9641952,45.2719602 L40.9931049,49.1779359 L40.9931049,41.4949507 L47.9641952,37.5969729 L47.9641952,45.2719602 Z M32.0973465,37.6189672 L39.0078877,41.493951 L39.0078877,49.1749367 L32.0973465,45.2889558 L32.0973465,37.6189672 Z M58.3915486,50.0367107 C58.3865856,50.0337115 58.38063,50.0327118 58.3756669,50.0297126 L58.3766595,50.0277131 L49.9494124,45.2739597 L49.9494124,35.8984184 C49.9494124,35.5435114 49.7637946,35.2165972 49.4600564,35.0366444 C49.4521155,35.0326454 49.4451672,35.0306459 49.4372264,35.026647 L49.4392116,35.0236478 L40.5106971,30.0359558 C40.2089441,29.8689995 39.8436641,29.8689995 39.5458816,30.0369555 L30.6223301,35.045642 L30.6233228,35.0476415 C30.6163745,35.0516404 30.6084336,35.0526402 30.6014854,35.0566391 C30.2987397,35.2365919 30.1121293,35.5645059 30.1121293,35.9184131 L30.1121293,45.2869563 L21.6461705,50.0307123 L21.6481557,50.0327118 C21.6402148,50.0367107 21.632274,50.0387102 21.6253257,50.0427092 C21.3225801,50.2216622 21.1359697,50.550576 21.1359697,50.9044832 L21.1359697,61.8686079 C21.1359697,62.2285135 21.3275431,62.5604265 21.6382296,62.7373801 L30.5965223,67.8650354 L30.6044632,67.8700341 L30.6044632,67.8690343 C30.7573249,67.9560115 30.9260684,68 31.0948118,68 C31.2645479,68 31.4352766,67.9560115 31.5881383,67.8680346 L40.0074446,63.0163069 L48.4882925,67.7740593 L48.4892851,67.77106 C48.639169,67.855038 48.8039421,67.9000262 48.9707003,67.9000262 C49.136466,67.9000262 49.3032242,67.8580372 49.4531081,67.7740593 L58.3746743,62.7753701 C58.6893312,62.5984165 58.8838825,62.2645041 58.8838825,61.9015993 L58.8838825,50.9004842 C58.8838825,50.5445775 58.6972721,50.2166635 58.3915486,50.0367107 L58.3915486,50.0367107 Z" id="AWS-Cloud-Development-Kit_Icon_64_Squid" fill="#FFFFFF"></path>
                        </g>
                      </svg>
                      <span className="text-[10px] text-muted-foreground text-center">CDK</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflareworkers/cloudflareworkers-original.svg" alt="Cloudflare Workers" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">CF Workers</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Docker</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Actions" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">GitHub Actions</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="GitLab" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">GitLab</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/helm/helm-original.svg" alt="Helm" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Helm</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Kubernetes</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/portainer/portainer-original-wordmark.svg" alt="Portainer" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Portainer</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Enterprise automation
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      CI/CD, Dev-X
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Infrastructure as code
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-2xl font-black mb-6 text-primary">Full-Stack Development</h3>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" alt="Bun" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Bun</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">FastAPI</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" alt="GraphQL" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">GraphQL</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inertiajs/inertiajs-original.svg" alt="Inertia.js" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Inertia.js</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" alt="Jupyter" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Jupyter</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Laravel</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">PHP</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Python 3</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">React Native</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">React TS</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" alt="Streamlit" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Streamlit</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg" alt="Symfony" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Symfony</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Vite</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" alt="Zustand" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Zustand</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Frameworks
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Tooling
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      E2E testing
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-2xl font-black mb-6 text-primary">Data</h3>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg" alt="NoSQL" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">DynamoDB</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">MongoDB</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">MySQL</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">PostgreSQL</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" id="Aws-Rds--Streamline-Svg-Logos" className="w-12 h-12 mb-2">
                        <path fill="url(#a)" d="M95 1H1v94h94V1Z"></path>
                        <path fill="#ffffff" d="m19.1111 17.4501 10.9192 10.9193-1.6614 1.6614-10.9193-10.9193v8.9136h-2.35v-11.75c0-.6486.5252-1.175 1.175-1.175h11.75v2.35h-8.9135Zm61.7885-1.175v11.75h-2.35v-8.9136L67.6303 30.0308l-1.6614-1.6614 10.9193-10.9193h-8.9136v-2.35h11.75c.6498 0 1.175.5264 1.175 1.175Zm-2.35 51.7h2.35v11.75c0 .6486-.5252 1.175-1.175 1.175h-11.75v-2.35h8.9136L65.9689 67.6308l1.6614-1.6614 10.9193 10.9193v-8.9136Zm-.5875-20.8997c0-3.8999-4.5026-7.7527-12.0437-10.306l.7531-2.2254c8.668 2.934 13.6406 7.5012 13.6406 12.5314 0 5.0313-4.9726 9.5997-13.6417 12.5325l-.7532-2.2266c7.5423-2.5521 12.0449-6.4038 12.0449-10.3059Zm-59.8592 0c0 3.7365 4.2147 7.4871 11.2753 10.0345l-.7978 2.2101c-8.1522-2.941-12.8275-7.4036-12.8275-12.2446 0-4.8399 4.6753-9.3025 12.8275-12.2447l.7978 2.2102c-7.0606 2.5486-11.2753 6.2991-11.2753 10.0345Zm11.9274 20.5554L19.1111 78.5501h8.9135v2.35h-11.75c-.6498 0-1.175-.5264-1.175-1.175v-11.75h2.35v8.9136l10.9193-10.9193 1.6614 1.6614Zm17.9693-29.8697c-8.3965 0-12.925-2.169-12.925-3.055 0-.8871 4.5285-3.055 12.925-3.055 8.3954 0 12.925 2.1679 12.925 3.055 0 .886-4.5296 3.055-12.925 3.055Zm.0341 9.1004c-8.0394 0-12.9591-2.196-12.9591-3.391v-5.7117c2.894 1.5968 8.0276 2.3523 12.925 2.3523 4.8974 0 10.031-.7555 12.925-2.3523v5.7117c0 1.1961-4.8939 3.391-12.8909 3.391Zm0 8.9723c-8.0394 0-12.9591-2.1961-12.9591-3.391v-5.7799c2.8564 1.6791 7.9219 2.5486 12.9591 2.5486 5.009 0 10.0451-.8683 12.8909-2.5427v5.774c0 1.1961-4.8939 3.391-12.8909 3.391Zm-.0341 8.05c-8.3625 0-12.925-2.2478-12.925-3.4028v-4.8458c2.8564 1.6791 7.9219 2.5486 12.9591 2.5486 5.009 0 10.0451-.8671 12.8909-2.5427v4.8399c0 1.155-4.5625 3.4028-12.925 3.4028Zm0-34.5827c-7.3567 0-15.275 1.6909-15.275 5.405V60.481c0 3.7764 7.6845 5.7528 15.275 5.7528 7.5905 0 15.275-1.9764 15.275-5.7528V34.7061c0-3.7141-7.9183-5.405-15.275-5.405Z"></path>
                        <defs>
                          <linearGradient id="a" x1="1" x2="9401" y1="9401" y2="1" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2e27ad"></stop>
                            <stop offset="1" stop-color="#527fff"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="text-[10px] text-muted-foreground text-center">RDS</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Redis</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">SQLite</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" alt="Streamlit" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Streamlit</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" alt="Supabase" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Supabase</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Database design
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Data visualization
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Big data analytics
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-2xl font-black mb-6 text-primary">Product Leadership</h3>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" alt="Cypress" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Cypress</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">GitHub</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt="Jest" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Jest</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg" alt="Sentry" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Sentry</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Slack</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt="Trello" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Trello</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Product lifecycle
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Requirements specification
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      QA and monitoring
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-2xl font-black mb-6 text-primary">AI & Generative</h3>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="AI/ML" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">AI/ML</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg" alt="API" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">APIs</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64" className="w-12 h-12 mb-2">
                        <path fill="#D77655" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.612-115.613 115.612H115.612C52.026 509.639 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z" />
                        <path fill="#FCF2EE" fill-rule="nonzero" d="M142.27 316.619l73.655-41.326 1.238-3.589-1.238-1.996-3.589-.001-12.31-.759-42.084-1.138-36.498-1.516-35.361-1.896-8.897-1.895-8.34-10.995.859-5.484 7.482-5.03 10.717.935 23.683 1.617 35.537 2.452 25.782 1.517 38.193 3.968h6.064l.86-2.451-2.073-1.517-1.618-1.517-36.776-24.922-39.81-26.338-20.852-15.166-11.273-7.683-5.687-7.204-2.451-15.721 10.237-11.273 13.75.935 3.513.936 13.928 10.716 29.749 23.027 38.848 28.612 5.687 4.727 2.275-1.617.278-1.138-2.553-4.271-21.13-38.193-22.546-38.848-10.035-16.101-2.654-9.655c-.935-3.968-1.617-7.304-1.617-11.374l11.652-15.823 6.445-2.073 15.545 2.073 6.547 5.687 9.655 22.092 15.646 34.78 24.265 47.291 7.103 14.028 3.791 12.992 1.416 3.968 2.449-.001v-2.275l1.997-26.641 3.69-32.707 3.589-42.084 1.239-11.854 5.863-14.206 11.652-7.683 9.099 4.348 7.482 10.716-1.036 6.926-4.449 28.915-8.72 45.294-5.687 30.331h3.313l3.792-3.791 15.342-20.372 25.782-32.227 11.374-12.789 13.27-14.129 8.517-6.724 16.1-.001 11.854 17.617-5.307 18.199-16.581 21.029-13.75 17.819-19.716 26.54-12.309 21.231 1.138 1.694 2.932-.278 44.536-9.479 24.062-4.347 28.714-4.928 12.992 6.066 1.416 6.167-5.106 12.613-30.71 7.583-36.018 7.204-53.636 12.689-.657.48.758.935 24.164 2.275 10.337.556h25.301l47.114 3.514 12.309 8.139 7.381 9.959-1.238 7.583-18.957 9.655-25.579-6.066-59.702-14.205-20.474-5.106-2.83-.001v1.694l17.061 16.682 31.266 28.233 39.152 36.397 1.997 8.999-5.03 7.102-5.307-.758-34.401-25.883-13.27-11.651-30.053-25.302-1.996-.001v2.654l6.926 10.136 36.574 54.975 1.895 16.859-2.653 5.485-9.479 3.311-10.414-1.895-21.408-30.054-22.092-33.844-17.819-30.331-2.173 1.238-10.515 113.261-4.929 5.788-11.374 4.348-9.478-7.204-5.03-11.652 5.03-23.027 6.066-30.052 4.928-23.886 4.449-29.674 2.654-9.858-.177-.657-2.173.278-22.37 30.71-34.021 45.977-26.919 28.815-6.445 2.553-11.173-5.789 1.037-10.337 6.243-9.2 37.257-47.392 22.47-29.371 14.508-16.961-.101-2.451h-.859l-98.954 64.251-17.618 2.275-7.583-7.103.936-11.652 3.589-3.791 29.749-20.474-.101.102.024.101z" />
                      </svg>
                      <span className="text-[10px] text-muted-foreground text-center">Claude code</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <svg className="w-12 h-12 mb-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h8.79c.45 0 .67-.54.35-.85L6.06 2.85a.5.5 0 0 0-.85.35z" />
                      </svg>
                      <span className="text-[10px] text-muted-foreground text-center">Cursor</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <svg className="w-12 h-12 mb-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.245 5.364c1.322 1.36 1.877 3.216 2.11 5.817.622 0 1.2.135 1.592.654l.73.964c.21.278.323.61.323.955v2.62c0 .339-.173.669-.453.868C20.239 19.602 16.157 21.5 12 21.5c-4.6 0-9.205-2.583-11.547-4.258-.28-.2-.452-.53-.453-.868v-2.62c0-.345.113-.679.321-.956l.73-.963c.392-.517.974-.654 1.593-.654l.029-.297c.25-2.446.81-4.213 2.082-5.52 2.461-2.54 5.71-2.851 7.146-2.864h.198c1.436.013 4.685.323 7.146 2.864zm-7.244 4.328c-.284 0-.613.016-.962.05-.123.447-.305.85-.57 1.108-1.05 1.023-2.316 1.18-2.994 1.18-.638 0-1.306-.13-1.851-.464-.516.165-1.012.403-1.044.996a65.882 65.882 0 00-.063 2.884l-.002.48c-.002.563-.005 1.126-.013 1.69.002.326.204.63.51.765 2.482 1.102 4.83 1.657 6.99 1.657 2.156 0 4.504-.555 6.985-1.657a.854.854 0 00.51-.766c.03-1.682.006-3.372-.076-5.053-.031-.596-.528-.83-1.046-.996-.546.333-1.212.464-1.85.464-.677 0-1.942-.157-2.993-1.18-.266-.258-.447-.661-.57-1.108-.32-.032-.64-.049-.96-.05zm-2.525 4.013c.539 0 .976.426.976.95v1.753c0 .525-.437.95-.976.95a.964.964 0 01-.976-.95v-1.752c0-.525.437-.951.976-.951zm5 0c.539 0 .976.426.976.95v1.753c0 .525-.437.95-.976.95a.964.964 0 01-.976-.95v-1.752c0-.525.437-.951.976-.951zM7.635 5.087c-1.05.102-1.935.438-2.385.906-.975 1.037-.765 3.668-.21 4.224.405.394 1.17.657 1.995.657h.09c.649-.013 1.785-.176 2.73-1.11.435-.41.705-1.433.675-2.47-.03-.834-.27-1.52-.63-1.813-.39-.336-1.275-.482-2.265-.394zm6.465.394c-.36.292-.6.98-.63 1.813-.03 1.037.24 2.06.675 2.47.968.957 2.136 1.104 2.776 1.11h.044c.825 0 1.59-.263 1.995-.657.555-.556.765-3.187-.21-4.224-.45-.468-1.335-.804-2.385-.906-.99-.088-1.875.058-2.265.394zM12 7.615c-.24 0-.525.015-.84.044.03.16.045.336.06.526l-.001.159a2.94 2.94 0 01-.014.25c.225-.022.425-.027.612-.028h.366c.187 0 .387.006.612.028-.015-.146-.015-.277-.015-.409.015-.19.03-.365.06-.526a9.29 9.29 0 00-.84-.044z" />
                      </svg>
                      <span className="text-[10px] text-muted-foreground text-center">GitHub Copilot</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="GPT" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">GPT</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" alt="RAG" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">RAG</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Prompt engineering
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Agentic AI
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      MCP
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-2xl font-black mb-6 text-primary">Interests & Experiments</h3>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" alt="Web3" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Arduino</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Linux</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ohmyzsh/ohmyzsh-original.svg" alt="Oh My Zsh" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Oh My Zsh</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" alt="Raspberry Pi" className="w-12 h-12 mb-2" />
                      <span className="text-[10px] text-muted-foreground text-center">Raspberry Pi</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Fun & play
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Research & development
                    </li>
                    <li className="flex items-center text-muted-foreground text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Innovation projects
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-18 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black mb-6 sticky top-32">Get In Touch</h2>
            </div>
            <div className="lg:col-span-8">
              <Card className="p-12 hover:shadow-xl transition-shadow duration-300">
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-medium">
                  If you would like to discuss a project or just say hi, I'm always down to chat.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  <ObfuscatedContact
                    type="email"
                    obfuscatedText="xxxxxxxxxx@xx.xxx"
                    realValue="pimpmypixel@me.com"
                    href="mailto:pimpmypixel@me.com"
                  />
                  <ObfuscatedContact
                    type="phone"
                    obfuscatedText="+xx xxxxxxxx"
                    realValue="+45 26258291"
                    href="tel:+4526258291"
                  />
                </div>

                <div className="border-t border-border pt-8">
                  <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <p className="text-sm">Based just outside Copenhagen, Denmark</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Available for freelance projects and full-time opportunities</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Funny Image */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <img
              src={`/funny/${randomFunnyImage}`}
              alt="Funny illustration"
              className=" h-50 rounded-lg border-3 p-2 border-green shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={changeFunnyImage}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">©{new Date().getFullYear()} Pimp My Pixel</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/pimpmypixel" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/andreashesse" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.facebook.com/pimpmypixel" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
