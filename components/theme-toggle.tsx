'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react'; // ⬅️ أيقونات مودرن

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    const html = document.documentElement;
    if (newDark) html.classList.add('dark');
    else html.classList.remove('dark');

    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full bg-transparent transition-all duration-300"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform duration-300 rotate-12 scale-110" />
      )}
    </Button>
  );
}
