import { Button } from "./components/ui/button";

export default function Header() {
  return (
    <>
    <div className="flex min-h-24 items-center px-3 justify-between w-full bg-slate-600 text-primary-foreground">
      
      <div className="flex gap-3">
        <Button className="min-w-22">Home</Button>
        <Button className="min-w-22">About</Button>
        <Button className="min-w-22">Contact</Button>
      </div>

      <h1 className="scroll-m-20 absolute left-1/2 -translate-x-1/2 text-center text-4xl font-extrabold tracking-tight text-balance">
          Adventurer's Guide <span className="icon-[ic--baseline-hiking]" style={{width: "40px", height: "40px"}}></span>
      </h1>

      <div className="flex gap-3">
        <Button className="min-w-22">Sign-Up</Button>
        <Button className="min-w-22">Log-In</Button>
      </div>
    </div>
    
    </>
  );
}