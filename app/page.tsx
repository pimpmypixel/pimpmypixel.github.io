import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin, Facebook, Mail, Phone, ExternalLink } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Andreas Hesse</div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
                <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </a>
                <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">Andreas Hesse</h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8">Lead Full Stack Engineer</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I build accessible, production-ready digital experiences for the web.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mb-8">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">ABOUT</h3>
                  <div className="h-px bg-border mb-4"></div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">EXPERIENCE</h3>
                  <div className="h-px bg-border mb-4"></div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">SKILLS</h3>
                  <div className="h-px bg-border mb-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            I'm a full-stack developer with 15+ years of experience turning complex ideas into production-ready digital
            products. My background in media and interaction design shapes how I approach software: part engineer, part
            creative problem-solver. I thrive at the intersection of backend architecture and intuitive frontend design,
            always keeping usability, maintainability, and performance front and center.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Currently, I'm a <span className="text-primary font-medium">Lead Full Stack Engineer</span> at{" "}
            <span className="text-primary font-medium">FaunaPhotonics</span>, specializing in AI and data visualization.
            I contribute to the creation and maintenance of platforms that power enterprise automation, ensuring our
            systems meet performance standards and best practices to deliver scalable solutions.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
            <span className="text-primary font-medium">broadcasting agencies</span> and{" "}
            <span className="text-primary font-medium">large corporations</span> to{" "}
            <span className="text-primary font-medium">start-ups</span> and{" "}
            <span className="text-primary font-medium">digital product studios</span>. Additionally, I also released a{" "}
            <span className="text-primary font-medium">comprehensive development course</span> a few years ago, guiding
            learners through building scalable web applications.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            In my spare time, I'm usually exploring new technologies, contributing to open source, or spending time with
            family just outside Copenhagen. I identify strongly with solving global challenges through technology, and
            while initially appearing serious, colleagues know me as open-minded, deeply social, and genuinely invested
            in collective success.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Current Role */}
            <div className="border-l-2 border-primary pl-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">2023 — PRESENT</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Lead Full Stack Engineer, AI & Data Visualization • FaunaPhotonics
              </h3>
              <p className="text-muted-foreground mb-4">
                Led end-to-end development across AI, data visualization, product lifecycle, and DevOps. Delivered
                tested, scalable platform with strong focus on lifecycle ownership and performance. Managed integration
                of AI and data visualization to create actionable insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">AI/ML</Badge>
                <Badge variant="secondary">DevOps</Badge>
              </div>
            </div>

            {/* Previous Roles */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">2022 — 2023</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Project Based Contracts • Low Fi</h3>
                <p className="text-muted-foreground mb-4">
                  Delivered end-to-end solutions for small companies, including full-stack development, infrastructure
                  setup, and data architecture. Optimized systems and workflows to improve performance, scalability, and
                  maintainability.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">2018 — 2022</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Senior Full Stack Engineer • UserNeeds A/S</h3>
                <p className="text-muted-foreground mb-4">
                  Delivered platform architecture, infrastructure, and observability to support scalable and reliable
                  systems. Led development of multiple full-stack applications using NodeJS, React, PHP Laravel, Python,
                  and automation/testing tools.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">2017 — 2018</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Full Stack Engineer • Danish Broadcasting (DR)</h3>
                <p className="text-muted-foreground mb-4">
                  Maintained the core Drupal CMS using Symfony, React, and Storybook. Deployed CI/CD pipelines with
                  Jenkins to AWS infrastructure.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">2012 — 2016</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Full Stack Engineer • Bolius</h3>
                <p className="text-muted-foreground mb-4">
                  Developed using TYPO3, PHP, JavaScript, and Python. Implemented DevOps practices to streamline
                  deployment and system management. Designed and delivered maps and data visualizations for big data
                  insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Cloud & DevOps</h3>
              <p className="text-muted-foreground mb-4">
                AWS, Docker, Kubernetes, CDK, CI/CD, GitLab, tooling/Dev-X, enterprise automation
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Full-Stack & Data</h3>
              <p className="text-muted-foreground mb-4">
                React TS, Laravel, Python 3, MongoDB, Redis, RDS, data visualization, big data, E2E testing
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product & Project Leadership</h3>
              <p className="text-muted-foreground mb-4">
                Product lifecycle, requirements specification, documentation, strategy & roadmapping, agile
                methodologies, mentoring
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Conceptualization & Ideation</h3>
              <p className="text-muted-foreground mb-4">Ideation, concept development, UX design, reporting</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">AI & Emerging Tech</h3>
              <p className="text-muted-foreground mb-4">Prompt engineering, agentic AI, RAG, MCP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              If you would like to discuss a project or just say hi, I'm always down to chat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild>
                <a href="mailto:pimpmypixel@me.com">
                  <Mail className="h-4 w-4 mr-2" />
                  pimpmypixel@me.com
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+4526258291">
                  <Phone className="h-4 w-4 mr-2" />
                  +45 26258291
                </a>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Based just outside Copenhagen, Denmark</p>
              <p>Available for freelance projects and full-time opportunities</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Pimp My Pixel</p>
        </div>
      </footer>
    </div>
  )
}
