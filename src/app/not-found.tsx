"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import FuzzyText from "@/components/animations/FuzzyText/FuzzyText";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(true); // Track if redirect is active

  function sendBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace("/");
    }
  }

  useEffect(() => {
    const t = setTimeout(() => {
      if (redirecting) sendBack();
    }, 5000);

    return () => clearTimeout(t);
  }, [redirecting]); // Depend on `redirecting` state

  function cancelRedirect() {
    setRedirecting(false);
  }

  return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div className="h-screen w-full flex flex-col items-center justify-center cursor-pointer" onClick={cancelRedirect}>
      <div onClick={sendBack} className={"flex flex-col items-center justify-center cursor-pointer"}>
        <FuzzyText hoverIntensity={1.5} enableHover baseIntensity={0.3}>
          404
        </FuzzyText>
        <br />
        <FuzzyText hoverIntensity={1.5} enableHover baseIntensity={0.3}>
          Not Found
        </FuzzyText>

      </div>
          { redirecting && (
              <p className="text-center text-sm my-4 flex md:hidden">Sending you back shortly...</p>
          )}

          {redirecting && (
              <Button variant={'ghost'} onClick={cancelRedirect} className="mt-4">
                Cancel redirect
              </Button>
          )}

          <Image
              src="/click-to-go-back.png"
              alt="404"
              width={400}
              height={400}
              className="hidden md:flex absolute top-[50%] left-[50%] scale-90 -translate-x-[150%] translate-y-[50%]"
          />
        </div>
      </ThemeProvider>
  );
}
