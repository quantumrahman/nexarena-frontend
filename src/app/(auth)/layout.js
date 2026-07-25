import "../globals.css";

export const metadata = {
    title: "NexArena - Authentication",
    description: "",
};

export default function AuthLayout({ children }) {
    return (
        <main className="min-h-screen w-full bg-[url('/img/auth.webp')] bg-cover bg-center bg-no-repeat">
            <div className="relative inset-0 z-20 h-full bg-linear-to-b from-transparent via-transparent to-[#010717]">
                {children}
            </div>
        </main>
    );
}
