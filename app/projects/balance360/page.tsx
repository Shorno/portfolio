"use client";

import {ArrowLeft, ArrowRight, Github, Globe, Lightbulb, Target} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Tabs} from "@/components/ui/tabs";
import Balance360 from "@/public/balance360.png";
import SectionHeading from "@/components/SectionHeading";
import TrainerPage from "@/public/trainers.png"
import ClassPage from "@/public/class.png"
import CommunityPage from "@/public/Community.png"
import {Badge} from "@/components/ui/badge";
import React from "react";

const projectData = {
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
    ]
}

const tabs = [
    {
        title: "Trainers",
        value: "trainers",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-indigo-900">
                <p className="mb-8">Trainers</p>
                <Image
                    src={TrainerPage}
                    alt="Traienrs Page"
                    width={1000}
                    height={1000}
                    className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto shadow-2xl"
                />
            </div>
        ),
    },
    {
        title: "Classes",
        value: "classes",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p className="mb-8">Class List</p>
                <Image
                    src={ClassPage}
                    alt="Class Page"
                    width={1000}
                    height={1000}
                    className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto shadow-2xl"
                />
            </div>
        ),
    },
    {
        title: "Community",
        value: "community",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-700 to-green-900">
                <p className="mb-8">Community / Forum</p>
                <Image
                    alt={"community page"}
                    src={CommunityPage}
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