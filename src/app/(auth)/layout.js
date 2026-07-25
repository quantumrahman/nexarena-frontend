import "../globals.css";

export const metadata = {
    title: "NexArena - Authentication",
    description: "",
};

export default function AuthLayout({ children }) {
    return (
        <main className="relative min-h-screen w-full flex-1 bg-[url('/img/auth.webp')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 z-20 bg-linear-to-b from-transparent via-transparent to-[#010717]">
                {children}
                <p className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2 transform text-sm font-medium text-slate-500">
                    @ {new Date().getFullYear()} NexArena
                </p>
            </div>
        </main>
    );
}
