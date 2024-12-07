'use client'
import Image from "next/image";

export default function Home() {

  return
  <div className="bg-white text-black min-h-screen flex flex-col items-center justify-start p-4">
  <!-- Top Section -->
  <header className="w-full flex flex-col items-center">
    <div className="w-full max-w-4xl flex items-center justify-center mt-6">
      <!-- Input Field -->
      <input
          type="text"
          placeholder="Type here..."
          className="flex-1 text-3xl border-2 border-gray-300 rounded-l-md p-4 focus:outline-none"
          aria-label="Input field"
      />
        <!-- Sound Button -->
        <button
            className="text-3xl bg-blue-500 text-white px-4 py-2 rounded-r-md focus:outline-none hover:bg-blue-600 ml-1"
            aria-label="Play sound"
        >
          🔊
        </button>
        <!-- Save Button -->
        <button
            className="text-3xl bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-green-600 ml-2"
            aria-label="Save"
        >
          💾
        </button>
    </div>
  </header>

  <!-- Tag Bubbles Section -->
  <section className="w-full max-w-4xl mt-8">
    <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4">
      <!-- Example tag bubbles: Large text, high contrast, big padding -->
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Yes</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">No</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Thank you</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Please</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Hello</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Goodbye</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Help</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Pain</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Nurse</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Doctor</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Water</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Food</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Bathroom</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Hot</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Cold</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">More</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Less</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">Slow down</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">I don't understand</button>
      <button className="flex-shrink-0 text-2xl bg-gray-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">OK</button>
    </div>
  </section>
  </div>
}
