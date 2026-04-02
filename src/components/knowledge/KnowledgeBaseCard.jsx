import { MoreVertical } from "lucide-react";
const KnowledgeBaseCard = ({ title, description, createdOn }) => {
    return (<div className="border border-border rounded-lg bg-card p-4 flex flex-col justify-between hover:shadow-sm transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <button className="text-muted-foreground hover:text-foreground">
            <MoreVertical className="w-4 h-4"/>
          </button>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-border">
        <p className="text-xs text-muted-foreground">Created On: {createdOn}</p>
      </div>
    </div>);
};
export default KnowledgeBaseCard;
