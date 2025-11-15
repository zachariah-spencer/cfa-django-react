export default function HeroSection() {
  return (
    <>
      <div className="flex flex-wrap min-h-24 items-center justify-center w-full bg-slate-300">
        <div>
          <h2 className="text-slate-200 text-2xl italic absolute left-[45%] -translate-x-1/2 -translate-y-12">Documenting the</h2>
          <h2 className="text-slate-200 text-2xl italic absolute left-[55%] -translate-x-1/2 -translate-y-4">beautifully unexpected...</h2>
        </div>

        <img className="max-w-1/2 h-auto basis-auto grow shrink" src="./camping-3.jpg" alt="A man climbing a mountain."></img>
        
        <img className="max-w-1/2 h-auto basis-auto grow shrink" src="./camping-2.jpg" alt="Some hiking gear sitting on a stone near a creek bed."></img>
      </div>

      
    </>
  );
}