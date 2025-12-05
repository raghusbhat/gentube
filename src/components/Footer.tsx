import { SectionContainer } from "@/components/SectionContainer";

export function Footer() {
  return (
    <footer className="border-t border-border bg-sidebar">
      <SectionContainer className="py-6">
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Features
            </a>
            <span className="hidden text-border md:inline">|</span>
            <a href="#" className="transition-colors hover:text-primary">
              Pricing
            </a>
            <span className="hidden text-border md:inline">|</span>
            <a href="#" className="transition-colors hover:text-primary">
              About
            </a>
            <span className="hidden text-border md:inline">|</span>
            <a href="#" className="transition-colors hover:text-primary">
              Contact
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; 2024 GenTube. All rights reserved.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
