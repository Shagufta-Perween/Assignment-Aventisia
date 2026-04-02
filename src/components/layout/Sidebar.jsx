import { Bot, Brain, Library, Upload, Monitor, ListOrdered, Zap, Briefcase, PlayCircle, Shield, Database, Key, Users, Plug, X } from "lucide-react";

const sections = [
    {
        title: "MY PROJECTS",
        items: [
            { icon: <Bot className="w-4 h-4" />, label: "Agents" },
            { icon: <Brain className="w-4 h-4" />, label: "AI Models" },
            { icon: <Library className="w-4 h-4" />, label: "Library" },
        ],
    },
    {
        title: "ORCHESTRATOR",
        items: [
            { icon: <Upload className="w-4 h-4" />, label: "Published" },
            { icon: <Monitor className="w-4 h-4" />, label: "Machines" },
            { icon: <ListOrdered className="w-4 h-4" />, label: "Queues" },
            { icon: <Zap className="w-4 h-4" />, label: "Triggers" },
            { icon: <Briefcase className="w-4 h-4" />, label: "Jobs" },
            { icon: <PlayCircle className="w-4 h-4" />, label: "Executions" },
            { icon: <Shield className="w-4 h-4" />, label: "Vault" },
            { icon: <Database className="w-4 h-4" />, label: "Knowledge Base", active: true },
            { icon: <Key className="w-4 h-4" />, label: "Key Store" },
        ],
    },
    {
        title: "ADMIN",
        items: [
            { icon: <Users className="w-4 h-4" />, label: "Tenant" },
            { icon: <Plug className="w-4 h-4" />, label: "Integrations" },
        ],
    },
];

const Sidebar = ({ open, onClose }) => {
    return (
        <>
            {/* Backdrop — only on mobile/tablet when sidebar is open */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar panel */}
            <aside
                className={[
                    // Positioning & sizing
                    "fixed top-0 left-0 z-50 h-full w-64",
                    // Desktop: static, always visible
                    "lg:static lg:z-auto lg:h-auto lg:w-56 lg:flex lg:flex-shrink-0",
                    // Mobile/tablet: slide in/out
                    "flex flex-col border-r border-border bg-card transition-transform duration-300",
                    open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
                ].join(" ")}
            >
                {/* Close button — mobile/tablet only */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border lg:hidden">
                    <span className="font-semibold text-sm text-foreground">Menu</span>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground" aria-label="Close menu">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Nav sections */}
                <nav className="flex-1 overflow-y-auto py-1 px-2">
                    {sections.map((section) => (
                        <div key={section.title} className="px-3 py-2">
                            <p className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mb-1">
                                {section.title}
                            </p>
                            <ul className="space-y-0.5">
                                {section.items.map((item) => (
                                    <li
                                        key={item.label}
                                        onClick={onClose}
                                        className={`relative flex items-center gap-2.5 px-3 py-2 text-sm cursor-pointer transition-colors ${item.active
                                            ? "bg-[#EEF2FF] text-[#4F46E5] font-semibold rounded-md"
                                            : "text-foreground hover:bg-muted rounded-md"
                                            }`}
                                    >
                                        {item.active && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[0.15rem] h-5 bg-[#1E1B4B]" />
                                        )}
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
