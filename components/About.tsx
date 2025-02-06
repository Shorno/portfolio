"use client";

import BlurFade from "@/components/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function About() {
    return (
        <section className="py-24  max-w-7xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl py-4 md:text-6xl font-bold text-transparent dark:from-gray-100 dark:to-gray-400">
                    About Me
                </h2>
            </BlurFade>

            <div className="grid gap-12 md:grid-cols-2">
                <BlurFade delay={BLUR_FADE_DELAY * 8}>
                    <div className="prose prose-lg dark:prose-invert">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            My journey into programming began during my college years, quickly evolving from curiosity into
                            passion. I specialize in frontend development, with a focus on React and Next.js ecosystems, creating
                            intuitive user interfaces and solving complex problems through clean, efficient code.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                            Beyond coding, I&#39;m a PC and mobile game enthusiast. I&#39;m committed to continuous learning and leveraging
                            technology to make a positive impact on people&#39;s lives.
                        </p>
                    </div>
                </BlurFade>

                <div className="space-y-10">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <div className="bg-card rounded-xl p-6 shadow-sm border">
                            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Quick Facts</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                                    <span className="text-xl">🎓</span>
                                    <span>Currently pursuing CSE degree at Daffodil International University</span>
                                </li>
                                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                                    <span className="text-xl">💼</span>
                                    <span>6 months of professional experience in web development</span>
                                </li>
                                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                                    <span className="text-xl">🌟</span>
                                    <span>Passionate about cutting edge technologies</span>
                                </li>
                                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                                    <span className="text-xl">🎮</span>
                                    <span>PC and mobile game enthusiast</span>
                                </li>
                                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                                    <span className="text-xl">🍿</span>
                                    <span>Love watching crime / thriller movies and tv series</span>
                                </li>
                            </ul>
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 10}>
                        <div className="bg-card rounded-xl p-6 shadow-sm border">
                            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">My Favorite Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/10 hover:bg-primary/10 transition-colors"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}