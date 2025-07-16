import Link from "next/link";
import { Button } from "./ui/button";

type Props =
  | {
      code?: 401 | 403 | 404;
      message?: undefined;
    }
  | {
      code: 400;
      message: string;
    };

const TEXT = {
  400: {
    title: "Sorry, there is a client error",
  },
  401: [
    "Sorry, this page can't be accessed",
    "You are not allowed to access this page. Please sign in and try again.",
  ],
  403: [
    "Sorry, this content can't be accessed",
    "You do not have access rights to the content you were looking for.",
  ],
  404: [
    "Sorry, the page can't be found",
    "The page you were looking for appears to have been moved, deleted or does not exist.",
  ],
} as const;

export default function ErrorDisplay({ code, message }: Props) {
  const is400 = code === 400;

  const [statusCode, title, description] = is400
    ? [400, TEXT[400].title, message]
    : code
      ? [code, ...TEXT[code]]
      : [404, ...TEXT[404]];

  return (
    <section className="px-4 xl:container">
      <div className="relative mx-auto max-w-[550px] pt-6 text-center md:pt-8">
        <p className="title">ERROR</p>

        <h1 className="mb-8 font-heading text-[100px] font-semibold leading-none md:text-[170px] md:leading-none">
          {statusCode}
        </h1>

        <h2 className="mb-5 font-heading text-3xl font-medium md:text-4xl">
          {title}
        </h2>

        {is400 ? (
          <div className="text-left mx-auto mb-10 max-w-[515px] whitespace-pre-wrap">
            <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-xs sm:text-sm">
              {description}
            </code>
          </div>
        ) : (
          <>
            <p className="mx-auto mb-10 max-w-[515px] text-base">
              {description}
            </p>

            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
