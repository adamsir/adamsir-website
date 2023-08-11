import { ModeToggle } from '#/components/mode-toggle';
import { cn } from '#/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return <Image src="/logo.svg" width={32} height={32} alt="Logo" />;
}

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          'text-yellow-400 font-medium text-3xl transition-all hover:text-primary',
        )}
      >
        <Logo />
      </Link>
      <ModeToggle />
    </nav>
  );
}
