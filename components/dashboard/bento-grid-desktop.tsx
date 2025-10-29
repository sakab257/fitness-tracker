export default function BentoGridDesktop() {
  return (
    <div className="grid grid-cols-5 grid-rows-8 gap-4 w-full h-full">
      <div className="row-span-6 bg-red-400">1</div>
      <div className="col-span-2 row-span-4 bg-green-400">2</div>
      <div className="col-span-2 row-span-2 col-start-2 row-start-5 bg-yellow-400">3</div>
      <div className="col-span-4 row-span-2 col-start-1 row-start-7 bg-blue-400">4</div>
      <div className="col-span-2 row-span-2 col-start-4 row-start-1 bg-purple-400">5</div>
      <div className="col-span-2 row-span-4 col-start-4 row-start-3 bg-orange-400">6</div>
      <div className="row-span-2 col-start-5 row-start-7 bg-pink-400">7</div>
    </div>
  )
}
