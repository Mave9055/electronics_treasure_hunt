import { useState } from "react";
import { Trash2, Plus } from "lucide-react";

export default function BreadboardDesigner() {
  const [components, setComponents] = useState<Array<{ id: string; type: string; position: number }>>([]);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const componentTypes = [
    { id: "resistor", name: "Resistor", symbol: "🔶", color: "bg-amber-500" },
    { id: "led", name: "LED", symbol: "💡", color: "bg-yellow-500" },
    { id: "capacitor", name: "Capacitor", symbol: "⚪", color: "bg-blue-500" },
    { id: "wire", name: "Wire", symbol: "➖", color: "bg-red-500" },
    { id: "battery", name: "Battery", symbol: "🔋", color: "bg-green-500" }
  ];

  const addComponent = (type: string) => {
    const newComponent = {
      id: Date.now().toString(),
      type,
      position: components.length
    };
    setComponents([...components, newComponent]);
  };

  const removeComponent = (id: string) => {
    setComponents(components.filter(c => c.id !== id));
    setSelectedComponent(null);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
      <h3 className="text-2xl font-bold text-white mb-6">🔌 Breadboard Designer</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Component Palette */}
        <div>
          <p className="text-sm text-slate-400 mb-4 uppercase tracking-wider">Available Components</p>
          <div className="space-y-2">
            {componentTypes.map((comp) => (
              <button
                key={comp.id}
                onClick={() => addComponent(comp.id)}
                className="w-full flex items-center gap-3 p-3 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700 hover:border-orange-500"
              >
                <span className="text-2xl">{comp.symbol}</span>
                <div className="flex-1 text-left">
                  <p className="font-bold text-white text-sm">{comp.name}</p>
                </div>
                <Plus className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Breadboard Canvas */}
        <div className="lg:col-span-2">
          <p className="text-sm text-slate-400 mb-4 uppercase tracking-wider">Your Circuit</p>
          <div className="bg-slate-900 rounded-lg p-6 border-2 border-dashed border-slate-600 min-h-96">
            {components.length === 0 ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <p className="text-slate-400 text-lg mb-2">Click a component to add it</p>
                  <p className="text-slate-500 text-sm">Build your circuit by adding components</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {components.map((comp) => {
                  const compType = componentTypes.find(c => c.id === comp.type);
                  return (
                    <div
                      key={comp.id}
                      onClick={() => setSelectedComponent(comp.id)}
                      className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                        selectedComponent === comp.id
                          ? "bg-orange-500/20 border-2 border-orange-500"
                          : "bg-slate-800 border-2 border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      <span className="text-3xl">{compType?.symbol}</span>
                      <div className="flex-1">
                        <p className="font-bold text-white">{compType?.name}</p>
                        <p className="text-xs text-slate-400">ID: {comp.id}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeComponent(comp.id);
                        }}
                        className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Circuit Info */}
          {components.length > 0 && (
            <div className="mt-4 bg-green-900/20 rounded-lg p-4 border border-green-500/30">
              <p className="text-green-300 font-bold mb-2">✓ Circuit Summary:</p>
              <p className="text-sm text-green-200">
                {components.length} component{components.length !== 1 ? "s" : ""} added
              </p>
              <button
                onClick={() => {
                  setComponents([]);
                  setSelectedComponent(null);
                }}
                className="mt-3 w-full py-2 px-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-bold transition-colors"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-6 bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
        <p className="text-blue-300 font-bold mb-2">💡 How to Use:</p>
        <p className="text-sm text-blue-200">
          This tool helps you visualize circuit layouts. Add components, arrange them, and see how they connect. In real circuits, components are connected with wires on a breadboard.
        </p>
      </div>
    </div>
  );
}
