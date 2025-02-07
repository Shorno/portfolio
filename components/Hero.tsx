"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Facebook } from "lucide-react";
import BlurFadeText from "@/components/blur-fade-text";
import BlurFade from "@/components/blur-fade";
import ProfileImage from "@/public/image2.png";

const BLUR_FADE_DELAY = 0.04;

export default function Hero() {
    return (
        <section className="py-24 px-2 mx-auto" id={"hero"}>
            <div className="grid gap-12 md:grid-cols-[400px_1fr] items-center">
                {/* Profile Image */}
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <div className="relative aspect-square overflow-hidden rounded-3xl border shadow-lg">
                        <Image
                            src={ProfileImage}
                            alt="shorno"
                            fill
                            className="object-cover transition-all duration-300 hover:scale-105 hover:rotate-2"
                        />
                    </div>
                </BlurFade>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <BlurFadeText
                            delay={BLUR_FADE_DELAY * 2}
                            className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl py-4 md:text-3xl lg:text-6xl font-bold text-transparent dark:from-gray-100 dark:to-gray-400"
                            text="Shorno Kamal Roy"
                        />
                        <BlurFadeText
                            delay={BLUR_FADE_DELAY * 3}
                            className="text-2xl font-semibold text-muted-foreground"
                            text="Frontend Developer"
                        />
                    </div>

                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                            Passionate frontend developer with expertise in React and Next.js. Committed to creating responsive and
                            user-friendly web applications that deliver exceptional user experiences through clean, efficient code.
                        </p>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <div className="flex flex-wrap gap-4">
                            <Button className="gap-2 px-6" size="lg" asChild>
                                <a href="/resume-shorno.png" download="Shorno Kamal Roy.png">
                                    <Download className="w-4 h-4" />
                                    Download Resume
                                </a>
                            </Button>
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <div className="flex gap-6">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-primary/5 hover:text-primary transition-colors"
                                asChild
                            >
                                <a href="https://github.com/shorno" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-primary/5 hover:text-primary transition-colors"
                                asChild
                            >
                                <a href="https://linkedin.com/in/shorno" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-5 h-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-primary/5 hover:text-primary transition-colors"
                                asChild
                            >
                                <a href="https://facebook.com/MrShorno911" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="w-5 h-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                            </Button>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}