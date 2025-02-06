import BlurFade from "@/components/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function About() {
    return (
        <section className="py-20">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-3xl font-bold mb-8">About Me</h2>
            </BlurFade>

            <div className="grid gap-8 md:grid-cols-2">
                <BlurFade delay={BLUR_FADE_DELAY * 8}>
                    <div>
                        <p className="text-lg">
                            My journey into programming began during my college years, quickly evolving from curiosity
                            into
                            passion. I
                            specialize in frontend development, with a focus on React and Next.js ecosystems, creating
                            intuitive user
                            interfaces and solving complex problems through clean, efficient code. Beyond coding, I'm an
                            PC and mobile game enthusiast. I'm committed to continuous learning and leveraging
                            technology to
                            make a positive impact on people's lives.
                        </p>
                    </div>
                </BlurFade>

                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                            <ul className="list-disc list-inside space-y-2 list-none">
                                <li>🎓 Currently pursuing CSE degree at Daffodil International University</li>
                                <li>💼 6 months of professional experience in web development</li>
                                <li>🌟 Passionate about cutting edge technologies</li>
                                <li>️‍🎮 Pc and mobile game enthusiast</li>
                                <li>🍿 Love watching crime / thriller movies and tv series</li>
                            </ul>
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 10}>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">My Favorite Tech Stack</h3>
                            <div className="flex flex-wrap gap-4">
                                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
                                    <span key={tech}
                                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>

    )
}