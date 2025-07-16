"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { VALIDATION_SCHEMAS } from "@/lib/validation-schemas";

const { CONTACT_FORM: SCHEMA } = VALIDATION_SCHEMAS;

type Schema = z.infer<typeof SCHEMA>;

export default function ContactForm() {
  const form = useForm<Schema>({
    resolver: zodResolver(SCHEMA),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: Schema) {
    const formData = new FormData();

    Object.entries(values).forEach((entry) => {
      formData.append(...entry);
    });

    // Simulate a successful contact form submission
    const errors: string[] = [];

    if (errors.length) {
      console.error("Errors submitting form", errors);
      toast.error("Failed to send your message. Please try again.");

      return;
    }

    // Simulate a successful contact form submission
    toast.success("Your message has been sent successfully!");
    form.reset();
  }

  return (
    <div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Us</CardTitle>
          <CardDescription>
            Please fill out the form below and we will get back to you shortly.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormElement htmlFor="name" label="Name">
                      <Input
                        id="name"
                        placeholder="John Doe"
                        type="text"
                        autoComplete="name"
                        {...field}
                      />
                    </FormElement>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormElement htmlFor="email" label="Email">
                      <Input
                        id="email"
                        placeholder="johndoe@mail.com"
                        type="email"
                        autoComplete="email"
                        {...field}
                      />
                    </FormElement>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormElement htmlFor="message" label="Message">
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        autoComplete="off"
                        {...field}
                      />
                    </FormElement>
                  )}
                />

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

type Props = React.PropsWithChildren<{
  htmlFor: string;
  label: string;
}>;

function FormElement({ htmlFor, label, children }: Props) {
  return (
    <FormItem className="grid gap-2">
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormMessage />
    </FormItem>
  );
}
