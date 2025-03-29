import { Outlet } from "react-router";

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625838144804-300f3907c110?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function AuthLayout() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      {/* Slideshow com overlay */}
      <div className="relative h-full overflow-hidden">
        {/* Imagem de fundo */}
        <img
          src={images[current]}
          alt="Slide"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        />

        {/* Overlay escuro + conteúdo */}
        <div className="relative z-10 h-full border-r border-gray-100 bg-black/70 p-10 text-muted-foreground flex flex-col justify-between">
          <div className="flex items-center gap-3 text-lg font-medium text-white">
            Logotipo
            <span className="font-semibold">Mentoria.dev</span>
          </div>

          <footer className="text-sm text-white">

            {/* Bolinhas (indicators) */}
            <div className="flex justify-center gap-2 ">
                {images.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? "bg-white" : "bg-white/40"
                    }`}
                />
                ))}
            </div>

            Plataforma Mentoria Devs &copy; - {new Date().getFullYear()}
          </footer>
        </div>


      </div>

      <div className="flex flex-col justify-center items-center">
              <Outlet />
      </div>
 
    </div>
  );
}
