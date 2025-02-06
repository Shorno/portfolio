import { OrbitingCircles } from "@/components/orbiting-circles";
import Image from "next/image";
import ReactSVG from "@/public/icons/react.svg"
import NextJs from "@/public/icons/nextjs-fill-svgrepo-com.svg"
import PrismaSVG from "@/public/icons/light-prisma-svgrepo-com.svg"
import TailwindSVG from "@/public/icons/tailwind-svgrepo-com.svg"
import TypeScriptSVG from "@/public/icons/typescript-icon-svgrepo-com.svg"
import AntDSVG from "@/public/icons/ant-design-svgrepo-com.svg"
import ShadcnSVG from "@/public/icons/shadcn-ui-seeklogo.svg"
import MotionIcon from "@/public/icons/motion-icon.png"
export default function FrontendSkills() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-7xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                Frontend
            </span>

            <OrbitingCircles iconSize={40}>
                <Icons.react />
                <Icons.next />
                <Icons.tailwind />
                <Icons.framer />
                <Icons.shadcn />
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={70} reverse speed={1}>
                <Icons.prisma />
                <Icons.antd />
                <Icons.typescript />
            </OrbitingCircles>
        </div>
    );
}

const Icons = {
    react: () => (
        <Image src={ReactSVG} alt={"react-icon"}/>
    ),
    next: () => (
        <Image src={NextJs} alt={"next-icon"}/>
    ),
    prisma: () => (
        <Image src={PrismaSVG} alt={"prisma-icon"}/>
    ),
    tailwind: () => (
        <Image src={TailwindSVG} alt={"tailwind-icon"}/>

    ),
    framer: () => (
        <Image src={MotionIcon} alt={"motion-icon"}/>
    ),
    shadcn: () => (
        <Image src={ShadcnSVG} alt={"shadcn-icon"}/>
    ),
    antd: () => (
        <Image src={AntDSVG} alt={"antd-icon"}/>
    ),
    typescript: () => (
        <Image src={TypeScriptSVG} alt={"typescript-icon"}/>
    ),
};

