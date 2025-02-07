import BlurFade from "@/components/blur-fade";
import {Mail, MessageCircle, Phone, Send} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const BLUR_FADE_DELAY = 0.04;

export default function Contact() {
    return (
        <>
            <section className="py-24 px-4 max-w-7xl mx-auto" id={"contact"}>
                <BlurFade delay={BLUR_FADE_DELAY * 21}>
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <SectionHeading text={"Get in Touch"}/>
                            <p className="mt-2 text-muted-foreground">Let&#39;s connect and discuss opportunities</p>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 22}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div
                                className="group flex items-start gap-4 p-6 rounded-2xl bg-card hover:bg-secondary/40 border transition-all duration-300">
                                <div
                                    className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400"/>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold">Email</h3>
                                    <a
                                        href="mailto:fb.shorno@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        fb.shorno@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div
                                className="group flex items-start gap-4 p-6 rounded-2xl bg-card hover:bg-secondary/40 border transition-all duration-300">
                                <div
                                    className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-950/30 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400"/>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold">Phone</h3>
                                    <a
                                        href="tel:+8801841151827"
                                        className="text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        +8801841151827
                                    </a>
                                </div>
                            </div>

                            <div
                                className="group flex items-start gap-4 p-6 rounded-2xl bg-card hover:bg-secondary/40 border transition-all duration-300">
                                <div
                                    className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/30 flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400"/>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold">WhatsApp</h3>
                                    <a
                                        href="https://wa.me/+8801841151827"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        +8801841151827
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-card border">
                            <form className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="John Doe"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com"/>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="How can I help you?"/>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Write your message here..."
                                        className="min-h-[150px]"
                                    />
                                </div>

                                <Button className="w-full">
                                    Send Message
                                    <Send className="w-4 h-4 ml-2"/>
                                </Button>
                            </form>
                        </div>
                    </div>
                </BlurFade>
            </section>
        </>
    )
}