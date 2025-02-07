"use client";

import {ArrowLeft, ArrowRight, Github, Globe, Lightbulb, Target} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Tabs} from "@/components/ui/tabs";
import SectionHeading from "@/components/SectionHeading";
import {Badge} from "@/components/ui/badge";
import AllVisa from "@/public/all-visa.png"
import VisaDetails from "@/public/visa-details.png"
import LatestVisa from "@/public/latest-visa.png"
import VisaApplication from "@/public/applications.png"

import React from "react";

const projectData = {
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
}

const tabs = [
    {
        title: "All Visa",
        value: "all-visa",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-indigo-900">
                <p className="mb-8">All Visas</p>
                <Image
                    src={AllVisa}
                    alt="All Visa Page"
                    width={1000}
                    height={1000}
                    className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto shadow-2xl"
                />
            </div>
        ),
    },
    {
        title: "Visa Details",
        value: "visa-details",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p className="mb-8">Visa Details</p>
                <Image
                    src={VisaDetails}
                    alt="Visa Details Page"
                    width={1000}
                    height={1000}
                    className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto shadow-2xl"
                />
            </div>
        ),
    },
    {
        title: "Latest Visa",
        value: "latest-visa",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-700 to-green-900">
                <p className="mb-8">Latest Visa</p>
                <Image
                    alt={"latest visa page"}
                    src={LatestVisa}
                    width={1000}
                    height={1000}
                    className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto shadow-2xl"
                />
            </div>
        ),
    },
    {
        title: "Applications",
        value: "applications",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-700 to-green-900">
                <p className="mb-8">Visa Applications</p>
                <Image
                    alt={"visa application"}
                    src={VisaApplication}
                    width={1000}
                    height={1000}
                    className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto shadow-2xl"
                />
            </div>
        ),
    },
];


export default function ProjectDetails() {
    return (
        <main className="flex flex-col justify-center items-center px-4 py-32">
            <Link href="/" className="inline-block mb-8">
                <Button variant="ghost" className="gap-2">
                    <ArrowLeft className="w-4 h-4"/>
                    Back to Home
                </Button>
            </Link>

            <div className="mb-12">
                <SectionHeading text={projectData.name}/>
                <p className="text-lg text-muted-foreground max-w-3xl mb-6">
                    {projectData.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {projectData.stack.map((tech) => (
                        <Badge
                            key={tech}
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="flex gap-4">
                    <Button className="gap-2" asChild>
                        <a href={projectData.liveLink} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4"/>
                            View Live Demo
                        </a>
                    </Button>
                    <Button variant="outline" className="gap-2" asChild>
                        <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4"/>
                            View Source Code
                        </a>
                    </Button>
                </div>
            </div>

            <div
                className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20 mb-52">
                <Tabs tabs={tabs}/>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Challenges */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div
                            className="h-12 w-12 rounded-xl bg-red-100 dark:bg-red-950/30 flex items-center justify-center">
                            <Target className="w-6 h-6 text-red-600 dark:text-red-400"/>
                        </div>
                        <h2 className="text-2xl font-semibold">Challenges Faced</h2>
                    </div>
                    <div className="grid gap-4">
                        {projectData.challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="group relative p-6 rounded-xl bg-card hover:bg-secondary/40 border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-950/30 flex items-center justify-center">
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                {(index + 1).toString().padStart(2, '0')}
              </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary group-hover:text-red-500 transition-colors">
                                            {challenge}
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    className="w-1.5 h-1.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors"/>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future Improvements */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div
                            className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center">
                            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400"/>
                        </div>
                        <h2 className="text-2xl font-semibold">Future Improvements</h2>
                    </div>
                    <div className="grid gap-4">
                        {projectData.improvements.map((improvement, index) => (
                            <div
                                key={index}
                                className="group relative p-6 rounded-xl bg-card hover:bg-secondary/40 border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {(index + 1).toString().padStart(2, '0')}
              </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary group-hover:text-blue-500 transition-colors">
                                            {improvement}
                                        </h3>
                                    </div>
                                </div>
                                <ArrowRight
                                    className="w-5 h-5 text-blue-500/20 group-hover:text-blue-500 transition-colors"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}