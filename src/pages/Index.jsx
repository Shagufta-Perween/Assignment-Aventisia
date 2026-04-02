import { useState } from "react";
import { Search, Plus, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import KnowledgeBaseCard from "@/components/knowledge/KnowledgeBaseCard";
import CreateKnowledgeBaseModal from "@/components/knowledge/CreateKnowledgeBaseModal";
import { Button } from "@/components/ui/button";

const cards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Test",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  createdOn: "14/07/2025",
}));

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 flex flex-col min-w-0">
          {/* Content Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 pt-4">
            <h1 className="text-lg font-semibold text-foreground">Knowledge Base</h1>
            <div className="flex items-center gap-3">
              {/* Search — hidden on mobile (handled in Header), visible sm+ */}
              <div className="relative hidden sm:block">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-8 pl-8 pr-3 w-40 md:w-52 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <Button size="sm" onClick={() => setModalOpen(true)}>
                <Plus className="w-4 h-4" />
                <span className="hidden xs:inline sm:inline">Create New</span>
              </Button>
            </div>
          </div>

          {/* Cards Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="flex-1 p-4 sm:p-6">
            <div className="border border-border rounded-xl p-4 sm:p-4 bg-card shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {cards.map((card) => (
                  <KnowledgeBaseCard
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    createdOn={card.createdOn}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Footer */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-border text-xs text-muted-foreground">
            <span className="font-bold text-foreground">6 rows</span>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline font-bold text-foreground">Rows per page</span>
                <select className="h-7 px-2 rounded border border-input bg-background text-xs text-foreground">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
              <span className="font-bold text-foreground">page 1 of 1</span>
              <div className="flex items-center gap-1">
                <button className="p-1 rounded hover:bg-muted border"><ChevronsLeft className="w-3.5 h-3.5" /></button>
                <button className="p-1 rounded hover:bg-muted border"><ChevronLeft className="w-3.5 h-3.5" /></button>
                <button className="p-1 rounded hover:bg-muted border"><ChevronRight className="w-3.5 h-3.5" /></button>
                <button className="p-1 rounded hover:bg-muted border"><ChevronsRight className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <CreateKnowledgeBaseModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Index;
