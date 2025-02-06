import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Twitter, Facebook } from "lucide-react"
import BlurFadeText from "@/components/blur-fade-text";
import BlurFade from "@/components/blur-fade";
import ProfileImage from "@/public/image2.png";

const BLUR_FADE_DELAY = 0.04

export default function Hero() {
    return (
        <section className="py-10">
            <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
                {/* Profile Image */}
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <div className="relative aspect-square overflow-hidden rounded-3xl">
                        <Image
                            src={ProfileImage}
                            alt="Your Name"
                            objectFit="cover"
                            className="transition-transform hover:scale-105"
                        />
                    </div>
                </BlurFade>

                <div className="space-y-6">
                    <BlurFadeText delay={BLUR_FADE_DELAY * 2} className="text-4xl font-bold md:text-5xl" text="Shorno Kamal Roy" />

                    <BlurFadeText
                        delay={BLUR_FADE_DELAY * 3}
                        className="text-2xl font-semibold text-primary"
                        text="Frontend Developer"
                    />

                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <p className="max-w-lg text-lg text-muted-foreground">
                            Passionate frontend developer with expertise in React and Next.js. Committed to creating responsive and
                            user-friendly web applications.
                        </p>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <div className="flex flex-wrap gap-4">
                            <Button className="gap-2">
                                <Download className="w-4 h-4" />
                                Download Resume
                            </Button>
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-5 h-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    <Twitter className="w-5 h-5" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="w-5 h-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                            </Button>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}

