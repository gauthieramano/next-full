import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  code?: 401 | 404;
};

const TEXT = {
  401: {
    title: "Sorry, this page can't be accessed",
    description:
      "You are not allowed to access this page. Please sign in and try again.",
  },
  403: {
    title: "Sorry, this content can't be accessed",
    description:
      "You do not have access rights to the content you were looking for.",
  },
  404: {
    title: "Sorry, the page can't be found",
    description:
      "The page you were looking for appears to have been moved, deleted or does not exist.",
  },
};

export default function Error({ code = 404 }: Props) {
  return (
    <section className="pt-[120px] lg:pt-[240px]">
      <div className="px-4 xl:container">
        <div className="border-b pb-20 dark:border-[#2E333D] lg:pb-[130px]">
          <div className="relative mx-auto max-w-[550px] pt-6 text-center md:pt-8">
            <span className="title">ERROR</span>

            <h1 className="mb-8 font-heading text-[100px] font-semibold leading-none text-dark dark:text-white md:text-[170px] md:leading-none">
              {code}
            </h1>

            <h2 className="mb-5 font-heading text-3xl font-medium text-dark dark:text-white md:text-4xl">
              {TEXT[code].title}
            </h2>

            <p className="mx-auto mb-10 max-w-[515px] text-base text-dark-text">
              {TEXT[code].description}
            </p>

            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
