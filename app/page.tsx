import Menu from "@/components/Sections/Menu";
import Header from "@/components/ui/Header";
import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import VoltarAoTopo from "@/components/VoltarAoTopo";
import Sobre from "@/components/Sections/Sobre";
import Skills from "@/components/Sections/Skills";
import Trabalhos from "@/components/Sections/Trabalhos";

export default function Home() {
  return (
    <div className="font-grotesk bg-background">
      <Header />
      <main className="container mx-auto">
        <Menu />
        <Sobre />
        <Skills />
        <Trabalhos />
      </main>
      <BotaoWhatsapp />
      <VoltarAoTopo />
    </div>
  );
}
