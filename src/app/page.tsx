import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card>
        <CardHeader>
          <CardTitle>My Application</CardTitle>
          <CardDescription>Welcome</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Welcome to my new application. You can visit the about page by clicking the button below</p>
        </CardContent>
        <CardFooter>
          <Link href="/about">
            <Button variant="outline">About</Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
