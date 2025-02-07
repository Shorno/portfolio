export default function SectionHeading({ text } : { text: string }) {
    return (
        <h2 className="bg-gradient-to-r mb-8 from-gray-900 to-gray-600 bg-clip-text text-3xl py-4 md:text-4xl font-bold text-transparent dark:from-gray-100 dark:to-gray-400">
            {text}
        </h2>

    )
}