import Image from "next/image";

export default function Header() {
  return (
    <header className={`leagueSpartan flex items-center justify-between pt-10 px-16 relative z-20 ml-10 mr-10`}>
      <div className="flex items-center">
        <Image src="/Logo.png" alt="Nexstar Logo" width={160} height={48} priority className="h-12 w-auto" />
      </div>
      <nav className="flex gap-17 items-center">
        <a href="#about" className="text-white no-underline font-medium">About Us</a>
        <a href="#services" className="text-white no-underline font-medium">Services</a>
        <a href="#bosz" className="text-white no-underline font-medium">BOSZ</a>
        <a href="#gozen" className="text-white no-underline font-medium">GoZen</a>
        <a href="#blogs" className="text-white no-underline font-medium">Blogs</a>
      </nav>
      <a href="#contact" className="bg-[#5B6FFF] text-white py-3 px-8 rounded-3xl font-semibold no-underline text-lg">Contact Us</a>
    </header>
  );
}
