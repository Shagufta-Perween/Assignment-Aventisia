import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CreateKnowledgeBaseModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      <div className="absolute inset-0 bg-foreground/30" onClick={onClose} />

      {/* Panel: full-width on mobile, fixed max-width on sm+ */}
      <div className="relative w-full sm:max-w-md bg-card border-l border-border h-full flex flex-col shadow-2xl animate-in slide-in-from-right sm:rounded-l-2xl">
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
          <div className="flex items-start justify-between mb-1">
            <h2 className="text-base sm:text-lg font-semibold text-foreground">Create New Knowledge Base</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground ml-2">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mb-6">
            Best for quick answers from documents, websites and text files.
          </p>

          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Name (Cannot be edited later)<span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Description
              </label>
              <textarea
                placeholder="Description"
                rows={3}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Vector Store<span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <select className="w-full h-9 px-3 pr-8 rounded-md border border-input bg-background text-sm text-foreground appearance-none focus:outline-none focus:ring-1 focus:ring-ring">
                  <option>Qdrant</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                LLM Embedding Model<span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <select className="w-full h-9 px-3 pr-8 rounded-md border border-input bg-background text-sm text-foreground appearance-none focus:outline-none focus:ring-1 focus:ring-ring">
                  <option>text-embedding-ada-002</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 flex justify-end">
          <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-md px-6">Create</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateKnowledgeBaseModal;
