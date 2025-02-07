"use client";

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {
    Github,
    ArrowRight,
    Globe,
} from "lucide-react";
import BlurFade from "@/components/blur-fade";
import Balance360 from "@/public/balance360.png"
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const projects = [
    {
        name: "Balance360",
        image: Balance360,
        description: "Balance360 is a robust, all-in-one fitness management platform offering tailored dashboards for admins, trainers, and members. With secure class booking, integrated payment processing and a vibrant community forum, it streamlines every aspect of your fitness journey while harnessing modern web technologies like React, Node.js, and MongoDB.",
        stack: ["React", "Stripe", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Zustand", "Firebase", "TansStack Query"],
        liveLink: "https://balance360.vercel.app/",
        githubLink: "https://github.com/Shorno/balance360",
        challenges: [
            "Implementing role based features",
            "Adding role based access control",
            "Handling complex mongodb queries"
        ],
        improvements: [
            "Add AI-powered fitness tracking",
            "Improve performance with server-side rendering and database optimization",
            "Implement advanced analytics dashboard",
            "Integrate with more payment gateways"
        ],
        link: "/projects/balance360"
    },
    {
        name: "Antique Chronicles",
        image: "https://res.cloudinary.com/def3zwztt/image/upload/v1738736266/all-devices-black_dl3zs4.png",
        description: "The Antique Chronicles is a web application that allows users to explore, add, and manage artifacts. It provides a platform for users to register, log in, and interact with various artifacts.",
        stack: ["React", "TypeScript", "Zustand", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
        liveLink: "https://antique-chronicles.vercel.app/",
        githubLink: "https://github.com/Shorno/antique-chronicles",
        challenges: [
            "Implementing artifacts searching",
            "Role based artifacts management",
            "Handling liked artifacts counting and user profile"
        ],
        improvements: [
            "Add AI-powered artifacts exploration system",
            "Improve performance with server-side rendering and database optimization",
            "Improve user experience with advanced animations and transitions",
        ],
        link: "/projects/antique-chronicles"
    },
    {
        name: "Visa Navigator",
        image: "https://res.cloudinary.com/def3zwztt/image/upload/v1738740339/Screenshot_2025-02-05_132443_djvm9i.png",
        description: "Collaborative task management application with real-time updates, team workflows, and progress tracking features.",
        stack: ["React", "Firebase", "AntDesign", "Zustand", "TypeScript", "Express.js", "MongoDB"],
        liveLink: "https://visa-navigator.vercel.app/",
        githubLink: "https://github.com/Shorno/visa-navigator",
        challenges: [
            "Implementing authentication and authorization",
            "Managing real-time visa application tracking",
            "Handling complex visa application forms"
        ],
        improvements: [
            "Add AI-powered visa application and tracking",
            "Improve overall design, animation and user experience",
            "Implement advanced analytics dashboard",
        ],
        link: "/projects/visa-navigator"
    }
];

export default function Projects() {
    return (
        <section className="py-24">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
                <SectionHeading text={"Selected Projects"}/>
            </BlurFade>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <BlurFade key={project.name} delay={BLUR_FADE_DELAY * (19 + index)}>
                        <div
                            className="group relative bg-card rounded-xl overflow-hidden border transition-all hover:shadow-lg">
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                                    {project.name}
                                </h3>
                            </div>

                            {/* Project Info */}
                            <div className="p-6 space-y-4">
                                <p className="text-muted-foreground line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs rounded-full bg-primary/5 text-primary"
                                        >
                        {tech}
                      </span>
                                    ))}
                                    {project.stack.length > 3 && (
                                        <span className="px-2 py-1 text-xs rounded-full bg-primary/5 text-primary">
                        +{project.stack.length - 3} more
                      </span>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-4 pt-2">
                                    <Button variant="outline" size="sm" className="gap-2" asChild>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                            <Globe className="w-4 h-4"/>
                                            Live Demo
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="sm" className="gap-2" asChild>
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4"/>
                                            Code
                                        </a>
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="ml-auto gap-2 hover:text-primary"
                                        asChild
                                    >
                                        <Link href={project.link || ""}>
                                            Details
                                            <ArrowRight className="w-4 h-4"/>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}