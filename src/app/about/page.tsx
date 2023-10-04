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

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription>About Us</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Welcome to our about us page. You can go back home by clicking the
            button below
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/">
            <Button>Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
