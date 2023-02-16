import { ReactNode } from "react";
import Header from "../Header";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="h-full bg-amber-50">
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;