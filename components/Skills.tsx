import {Marquee} from "@/components/marquee";
import SkillCard from "@/components/SkillCard";
import ReactSVG from "@/public/icons/react.svg";
import NextJs from "@/public/icons/nextjs-fill-svgrepo-com.svg";
import PrismaSVG from "@/public/icons/light-prisma-svgrepo-com.svg";
import TailwindSVG from "@/public/icons/tailwind-svgrepo-com.svg";
import MotionIcon from "@/public/icons/motion-icon.png";
import ShadcnSVG from "@/public/icons/shadcn-ui-seeklogo.svg";
import AntDSVG from "@/public/icons/ant-design-svgrepo-com.svg";
import TypeScriptSVG from "@/public/icons/typescript-icon-svgrepo-com.svg";
import MongoDBSVG from "@/public/icons/mongodb-svgrepo-com.svg";
import NodeJSSVG from "@/public/icons/nodejs-icon-svgrepo-com.svg";
import ExpressSVG from "@/public/icons/express-svgrepo-com.svg";
import FirebaseSVG from "@/public/icons/firebase-svgrepo-com.svg";
import BlurFade from "@/components/blur-fade";
import BlurFadeText from "@/components/blur-fade-text";


export const frontendSkills = [
    {
        name: "React",
        icon: ReactSVG,
        description: "JavaScript library",
    },
    {
        name: "Next.js",
        icon: NextJs,
        description: "React framework for production",
    },
    {
        name: "Tailwind",
        icon: TailwindSVG,
        description: "Utility-first CSS framework",
    },
    {
        name: "Motion",
        icon: MotionIcon,
        description: "Production-ready animations",
    },
    {
        name: "shadcn/ui",
        icon: ShadcnSVG,
        description: "Re-usable components",
    },
    {
        name: "Ant Design",
        icon: AntDSVG,
        description: "Enterprise UI system",
    },
    {
        name: "TypeScript",
        icon: TypeScriptSVG,
        description: "Typed JavaScript",
    },
];

const backendSkills = [
    {
        name: "MongoDB",
        icon: MongoDBSVG,
        description: "NoSQL database",
    },
    {
        name: "Node.js",
        icon: NodeJSSVG,
        description: "JavaScript runtime",
    },
    {
        name: "Express",
        icon: ExpressSVG,
        description: "Library for Node.js",
    },
    {
        name: "Prisma",
        icon: PrismaSVG,
        description: "Next-generation ORM",
    },
    {
        name: "Firebase",
        icon: FirebaseSVG,
        description: "Cloud and Auth platform",
    }

]
const BLUR_FADE_DELAY = 0.04;

export default function Skills() {
    return (
        <>
            <div className="mb-12 text-center">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                    <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-5xl md:text-6xl font-bold text-transparent dark:from-gray-100 dark:to-gray-400">
                        Technical Skills
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        Modern web development technologies I specialize in
                    </p>
                </BlurFade>
            </div>
                <div
                    className="relative flex h-[550px] w-full flex-col gap-4 items-center justify-center overflow-hidden rounded-xl border bg-background shadow-xl">
                    <BlurFadeText
                        delay={BLUR_FADE_DELAY * 12}
                        className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl md:text-4xl font-bold text-transparent dark:from-gray-100 dark:to-gray-400 mb-2"
                        text="Frontend"
                    />
                    <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <Marquee pauseOnHover className="[--duration:30s]">
                            {frontendSkills.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </Marquee>
                    </BlurFade>
                    <BlurFadeText
                        delay={BLUR_FADE_DELAY * 15}
                        className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl md:text-4xl font-bold text-transparent dark:from-gray-100 dark:to-gray-400 pt-2"
                        text="Backend"
                    />
                    <BlurFade delay={BLUR_FADE_DELAY * 15}>
                        <Marquee reverse pauseOnHover className="[--duration:25s]">
                            {backendSkills.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </Marquee>
                        <div
                            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                    </BlurFade>
                </div>
        </>
    )
}