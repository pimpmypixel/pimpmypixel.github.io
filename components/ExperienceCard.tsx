"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ObfuscatedReference } from "@/components/obfuscated-reference"
import { ExternalLink, Calendar } from "lucide-react"

interface ExperienceData {
    id: string
    dateRange: string
    badge: string | null
    title: string
    company: string
    description: string
    achievements: string[]
    whyLoved: string
    reference: {
        name: string
        title: string | null
        obfuscatedEmail: string
        realEmail: string
    } | null
    techStack: string[]
    hasExternalLink: boolean
}

interface ExperienceCardProps {
    experience: ExperienceData
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <Card className={`p-8 hover:shadow-lg transition-shadow duration-300 ${experience.id === 'current-project' ? 'border-l-4 border-l-primary' : ''}`}>
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                    {experience.badge && (
                        <Badge variant="outline" className="bg-primary/10 border-primary/20">
                            {experience.badge}
                        </Badge>
                    )}
                    {/* {experience.hasExternalLink && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    )} */}
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.dateRange}</span>
                </div>
            </div>      <h3 className="text-2xl font-bold mb-3">
                {experience.title}
            </h3>

            <p className="text-muted-foreground mb-1 font-medium">{experience.company}</p>

            {experience.description && (
                <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience.description}
                </p>
            )}

            {experience.achievements.length > 0 && (
                <div className="mb-1">
                    <ul className="space-y-2 text-muted-foreground leading-relaxed">
                        {experience.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {experience.whyLoved && (
                <div className="mb-3 p-4 bg-muted/30 rounded-lg">
                    <h4 className="text-sm font-semibold text-primary mb-2">Why I loved working here:</h4>
                    <p className="text-sm text-muted-foreground italic">
                        {experience.whyLoved}
                    </p>
                </div>
            )}

            {experience.reference && (
                <div className="mb-3 text-xs text-muted-foreground">
                    <p>
                        Reference: {experience.reference.name}
                        {experience.reference.title && ` - ${experience.reference.title}`}
                        <br />
                        Email: <ObfuscatedReference
                            obfuscatedText={experience.reference.obfuscatedEmail}
                            realText={experience.reference.realEmail}
                        />
                    </p>
                </div>
            )}

            {experience.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            )}
        </Card>
    )
}