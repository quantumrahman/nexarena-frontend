import "../globals.css";

export default function MainLayout({ children }) {
    return (
        <main className="flex w-full flex-col items-center justify-between">
            {children}
        </main>
    );
}
