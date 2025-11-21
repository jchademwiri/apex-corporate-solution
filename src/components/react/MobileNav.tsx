import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/contact', label: 'Contact' },
];

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <Button
                variant="ghost"
                size="icon"
                className="relative z-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <div
                className={cn(
                    "fixed inset-x-0 top-0 z-40 h-screen bg-background border-b border-border/40 transition-all duration-300 ease-in-out pt-24 px-6 flex flex-col gap-8",
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                )}
            >
                <nav className="flex flex-col gap-6 items-center text-lg font-medium">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-primary transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="h-px w-full bg-border/50 my-2" />
                    <a
                        href="https://webmail.yourdomain.co.za"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full"
                    >
                        <Button className="w-full" size="lg">
                            Client Login
                        </Button>
                    </a>
                </nav>
            </div>
        </div>
    );
}
