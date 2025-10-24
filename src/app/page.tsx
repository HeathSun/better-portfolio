import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import LogoLoop from "@/components/logo-loop";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none font-headline"
                yOffset={8}
                text={`Hi, I'm ${DATA.name} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] text-sm md:text-base whitespace-pre-line"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 4 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="Stack">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">My Stacks (Engineering + AI + Product)</h2>
              <p className="text-sm text-muted-foreground">
              Capable of driving the entire product cycle from ideation to launch.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="space-y-4">
              <LogoLoop
                logos={[
                  { src: "/react.png", alt: "React", href: "https://reactjs.org" },
                  { src: "/nextjs.png", alt: "Next.js", href: "https://nextjs.org" },
                  { src: "/typescript.png", alt: "TypeScript", href: "https://www.typescriptlang.org" },
                  { src: "/Postgresql.png", alt: "PostgreSQL", href: "https://www.postgresql.org" },
                  { src: "/docker.png", alt: "Docker", href: "https://www.docker.com" },
                  { src: "/redis.svg", alt: "Redis", href: "https://redis.io" },
                  { src: "/supabase.png", alt: "Supabase", href: "https://supabase.com" },
                  { src: "/cloudflare.png", alt: "Cloudflare", href: "https://workers.cloudflare.com" },
                  { src: "/vue.png", alt: "Vue", href: "https://vuejs.org" },
                ]}
                speed={60}
                direction="left"
                pauseOnHover={true}
                fadeOut={true}
                scaleOnHover={true}
                logoHeight={32}
                gap={40}
                ariaLabel="Technology logos"
              />
              <LogoLoop
                logos={[
                  { src: "/openrouter.png", alt: "OpenRouter", href: "https://openrouter.ai" },
                  { src: "/ollama.png", alt: "Ollama", href: "https://ollama.ai" },
                  { src: "/tensorflow.png", alt: "TensorFlow", href: "https://tensorflow.org" },
                  { src: "/gradio.png", alt: "Gradio", href: "https://gradio.app" },
                  { src: "/langchain.png", alt: "LangChain", href: "https://langchain.com" },
                  { src: "/mastra.png", alt: "Mastra", href: "https://mastra.ai" },
                  { src: "/huggingface.png", alt: "Hugging Face", href: "https://huggingface.co" },
                  { src: "/numpy.png", alt: "NumPy", href: "https://numpy.org" },
                ]}
                speed={60}
                direction="right"
                pauseOnHover={true}
                fadeOut={true}
                scaleOnHover={true}
                logoHeight={32}
                gap={40}
                ariaLabel="AI/ML tools logos"
              />
              <LogoLoop
                logos={[
                  { src: "/figma.png", alt: "Figma", href: "https://figma.com" },
                  { src: "/notion.png", alt: "Notion", href: "https://notion.so" },
                  { src: "/jira.png", alt: "Jira", href: "https://atlassian.com/software/jira" },
                  { src: "/linear.png", alt: "Linear", href: "https://linear.app" },
                  { src: "/excalidraw.png", alt: "Excalidraw", href: "https://excalidraw.com" },
                  { src: "/posthog.png", alt: "PostHog", href: "https://posthog.com" },
                  { src: "/slack.png", alt: "Slack", href: "https://slack.com" },
                  { src: "/google-analytics.png", alt: "Google Analytics", href: "https://analytics.google.com" },
                  { src: "/google-drive.png", alt: "Google Drive", href: "https://drive.google.com" },
                  { src: "/granola-ai.png", alt: "Granola AI", href: "https://granola.ai" },
                ]}
                speed={60}
                direction="left"
                pauseOnHover={true}
                fadeOut={true}
                scaleOnHover={true}
                logoHeight={32}
                gap={40}
                ariaLabel="PM tools logos"
              />
            </div>
          </BlurFade>
        </div>
      </section>
      {(DATA as any).projects && (DATA as any).projects.length > 0 && (
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Projects</h2>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {(DATA as any).projects.map((project: any, id: number) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      {/* <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <Link
                href="https://x.com/intent/follow?screen_name=Heath_Sun"
                className="text-blue-500 hover:underline"
              >
                with a direct question on twitter
              </Link>{" "}
              and I&apos;ll respond whenever I can. I will ignore all
              soliciting.
            </p>
          </BlurFade>
        </div>
      </section> */}
    </main>
  );
}
