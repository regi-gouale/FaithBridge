import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ClipboardList, BarChart, Users, Clock } from "lucide-react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

type HomePageProps = Promise<{
  locale: string;
}>;

export default async function HomePage(props: { params: HomePageProps }) {
  const { locale } = await props.params;

  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1">
        <HeroSection locale={locale} />
        <section className="w-full rounded-md bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center font-heading text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <ClipboardList className="mb-4 size-12 text-primary" />
                <h3 className="text-lg font-bold">Customizable Templates</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create and use tailored interview report templates.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart className="mb-4 size-12 text-primary" />
                <h3 className="text-lg font-bold">Analytics Dashboard</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Gain insights from interview data with powerful analytics.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="mb-4 size-12 text-primary" />
                <h3 className="text-lg font-bold">Collaborative Reporting</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Work together on reports in real-time with your team.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="mb-4 size-12 text-primary" />
                <h3 className="text-lg font-bold">Time-Saving Automation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Automate repetitive tasks and focus on what matters.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Interview Process?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of companies already using InterviewReporter to
                  streamline their hiring process.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 InterviewReporter. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
