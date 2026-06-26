import React from "react";
import { inter, firaCode, montserrat } from "./fonts";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dhruv Panchagatti – Portfolio",
  description: "Electrical Engineer, Researcher, Entrepreneur",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
