'use client';

import { ModeToggle } from '#/components/mode-toggle';
import { Button } from '#/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return <Image src="/logo.svg" width={32} height={32} alt="Logo" />;
}

export function ProfileCard() {
  return (
    <Card className="w-full relative">
      <div className="absolute top-0 right-0">
        <ModeToggle />
      </div>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center text-center overflow-hidden bg-white rounded-full">
        <Image src="/me.jpeg" width={48} height={48} alt="Logo" />
      </div>
      <CardHeader>
        <div className="mt-4 mb-4 text-center">
          <CardTitle>
            <h1 className="text-4xl">Adam Šír</h1>
          </CardTitle>
        </div>
        <CardDescription className="text-center">
          Developer - Musician - Photographer
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="//github.com/adamsir" target="_blank">
            <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
          </Link>
        </Button>
        <Button asChild>
          <Link href="//linkedin.com/in/adamsir/" target="_blank">
            Contact me
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
