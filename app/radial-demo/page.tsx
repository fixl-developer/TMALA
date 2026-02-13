import { RadialVideoMenu } from "@/components/radial-video-menu";

export default function RadialDemoPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-white mb-8 tracking-tighter">
                Interactive Video Hub
            </h1>
            <p className="text-white/50 mb-12 max-w-lg text-center">
                Explore different content types by clicking on the segments below.
            </p>

            <RadialVideoMenu />
        </div>
    );
}
