import { SectionContainer } from "@/components/SectionContainer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-sidebar">
      <SectionContainer className="py-6">
        <div className="flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} GenTube. All rights reserved.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
