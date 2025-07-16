"use client";

import { Component } from "react";
import ErrorDisplay from "@/components/error-display";

/** Search for the 2 first lines and capture 2 groups */
const REGEX = /(.+)\n(.+)\n/;

type Props = { children: React.ReactNode };

export default class ErrorBoundary extends Component<Props> {
  state = { message: "" };

  static getDerivedStateFromError({ name, message, stack }: Error) {
    const result = stack?.match(REGEX)?.[2].trim();

    return { message: `[${name}]\n${message}\n${result}` };
  }

  render() {
    if (this.state.message) {
      return <ErrorDisplay code={400} message={this.state.message} />;
    }

    return this.props.children;
  }
}
