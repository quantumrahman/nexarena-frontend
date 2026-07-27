import "../globals.css";

import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

export default function MainLayout({ children }) {
    return (
        <main className="flex w-full flex-col items-center justify-between">
            <Header />
            {children}
            <Footer />
        </main>
    );
}
