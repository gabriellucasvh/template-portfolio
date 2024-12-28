import Inicio from "@/components/Sections/Inicio";
import Header from "@/components/ui/Header";
import { MobileHeader } from "@/components/ui/Header";
import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import VoltarAoTopo from "@/components/VoltarAoTopo";
import Sobre from "@/components/Sections/Sobre";
import Skills from "@/components/Sections/Skills";
import Trabalhos from "@/components/Sections/Trabalhos";
import Contato from "@/components/Sections/Contato";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="font-grotesk bg-background">
      <Header />
      <MobileHeader />
      <main className="container mx-auto">
        <Inicio />
        <Sobre />
        <Skills />
        <Trabalhos />
        <Contato />
        <Footer />
      </main>
      <BotaoWhatsapp />
      <VoltarAoTopo />
    </div>
  );
}
