import "../globals.css";

export const metadata = {
    title: "NexArena - Authentication",
    description: "",
};

export default function AuthLayout({ children }) {
    return <main className="min-h-screen w-full">{children}</main>;
}
