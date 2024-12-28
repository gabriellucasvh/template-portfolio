"use client";
import { ChevronUpIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

const VoltarAoTopo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // Mostra o botão ao rolar mais de 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null; // Não renderiza o botão se não estiver visível

  return (
    <div>
      <button
        className="fixed bottom-4 left-4 z-50 bg-white rounded-full shadow-lg border border-black/5"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUpIcon className="text-black w-14 h-14" />
      </button>
    </div>
  );
};

export default VoltarAoTopo;
