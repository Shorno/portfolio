import {Code, ExternalLink, LayoutDashboard, Smartphone} from "lucide-react";
import BlurFade from "./blur-fade";
import {Button} from "@/components/ui/button";
const BLUR_FADE_DELAY = 0.04;

export default function Experience() {
    return (
        <section className={"py-20"}>
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <div className="bg-card rounded-xl p-8 shadow-sm border">
                    <div className="space-y-6">
                        <div className="flex justify-between items-start flex-wrap gap-4">
                            <div>
                                <h3 className="text-2xl font-semibold text-card-foreground">AppCube -  Frontend Developer</h3>
                                <p className="text-lg text-muted-foreground">Ubaky - Restaurant Management System</p>
                            </div>
                            <div className="md:text-right">
                                <p className="text-muted-foreground font-medium">6 months</p>
                                <p className="text-sm text-muted-foreground">2024 - Present</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Working on a comprehensive restaurant management system with multiple interfaces for
                                clients,
                                merchants, and administrators.
                                Primary focus on developing the merchant dashboard, enabling restaurant owners and
                                managers to
                                efficiently
                                manage their operations.
                            </p>

                            <div className="space-y-3">
                                <h4 className="font-medium text-xl text-card-foreground">Key Responsibilities</h4>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="group bg-muted/50 rounded-xl p-4 transition-all hover:bg-primary/5">
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
                                                <LayoutDashboard className="w-5 h-5"/>
                                            </div>
                                            <div className="space-y-1">
                                                <h5 className="font-medium text-card-foreground">Merchant Dashboard</h5>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Developed and maintained the merchant interface using React focusing on intuitive functionality
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group bg-muted/50 rounded-xl p-4 transition-all hover:bg-primary/5">
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
                                                <Smartphone className="w-5 h-5"/>
                                            </div>
                                            <div className="space-y-1">
                                                <h5 className="font-medium text-card-foreground">Responsive Design</h5>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Implemented mobile-first approach ensuring seamless experience
                                                    across all devices
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group bg-muted/50 rounded-xl p-4 transition-all hover:bg-primary/5">
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
                                                <Code className="w-5 h-5"/>
                                            </div>
                                            <div className="space-y-1">
                                                <h5 className="font-medium text-card-foreground">API Integration</h5>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Collaborated with backend team to integrate APIs and optimize data
                                                    flow
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex gap-4">
                                <Button size="sm" className="gap-2" asChild>
                                    <a href="https://manager.ubaky.com" target="_blank" rel="noopener noreferrer">
                                        Ubaky Manager <ExternalLink className="w-4 h-4"/>
                                    </a>
                                </Button>
                                <Button variant={"outline"} size="sm" className="gap-2" asChild>
                                    <a href="https://ubaky.com/home" target="_blank" rel="noopener noreferrer">
                                        Ubaky Client <ExternalLink className="w-4 h-4"/>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </BlurFade>
        </section>
    )
}