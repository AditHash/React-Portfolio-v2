import * as React from "react"
import { useNavigate } from "react-router-dom"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Home,
  Briefcase,
  Mail,
  Laptop,
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  Copy
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useTheme } from "@/components/theme-provider"
import INFO from "@/data/user"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
         <button 
            onClick={() => setOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
         >
            <span className="font-bold">⌘K</span>
         </button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => runCommand(() => navigate("/"))}>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/about"))}>
              <User className="mr-2 h-4 w-4" />
              <span>About</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/contact"))}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Socials">
             {INFO.socials.github && (
                <CommandItem onSelect={() => runCommand(() => window.open(INFO.socials.github, "_blank"))}>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </CommandItem>
             )}
             {INFO.socials.linkedin && (
                <CommandItem onSelect={() => runCommand(() => window.open(INFO.socials.linkedin, "_blank"))}>
                  <Linkedin className="mr-2 h-4 w-4" />
                  <span>LinkedIn</span>
                </CommandItem>
             )}
             {INFO.socials.twitter && (
                <CommandItem onSelect={() => runCommand(() => window.open(INFO.socials.twitter, "_blank"))}>
                  <Twitter className="mr-2 h-4 w-4" />
                  <span>Twitter</span>
                </CommandItem>
             )}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </CommandItem>
             <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Laptop className="mr-2 h-4 w-4" />
              <span>System</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Actions">
             <CommandItem onSelect={() => runCommand(() => {
                navigator.clipboard.writeText(INFO.main.email)
                alert("Email copied to clipboard!")
             })}>
              <Copy className="mr-2 h-4 w-4" />
              <span>Copy Email</span>
            </CommandItem>
          </CommandGroup>

        </CommandList>
      </CommandDialog>
    </>
  )
}
