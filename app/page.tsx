import Menu from "@/components/Sections/Menu";
import Header from "@/components/ui/Header";
import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import VoltarAoTopo from "@/components/VoltarAoTopo";
import Sobre from "@/components/Sections/Sobre";

export default function Home() {
  return (
    <div className="font-grotesk bg-background">
      <Header />
      <main className="container mx-auto px-4">
        <Menu />
        <Sobre />
      </main>
      <BotaoWhatsapp />
      <VoltarAoTopo />
    </div>
  );
}
