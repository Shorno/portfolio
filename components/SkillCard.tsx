"use client";
import {cn} from "@/lib/utils";
import Image from "next/image";


export default function SkillCard({
                                      icon,
                                      name,
                                      description,
                                  }: {
    icon: string;
    name: string;
    description: string;
}) {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-6 transition-all duration-300",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] hover:shadow-lg",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="relative h-12 w-12">
                    <Image
                        src={icon}
                        alt={`${name} icon`}
                        className="object-contain"
                        fill
                    />
                </div>
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold dark:text-white">{name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};