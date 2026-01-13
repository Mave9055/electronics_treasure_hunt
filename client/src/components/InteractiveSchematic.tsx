import React, { useState } from 'react';

interface SchematicComponent {
  id: string;
  name: string;
  type: 'resistor' | 'capacitor' | 'led' | 'ic' | 'wire';
  x: number;
  y: number;
  rotation?: number;
  description?: string;
}

interface InteractiveSchematiProps {
  components?: SchematicComponent[];
  title?: string;
  onComponentClick?: (component: SchematicComponent) => void;
}

export const InteractiveSchematic: React.FC<InteractiveSchematiProps> = ({
  components = [
    { id: '1', name: 'R1', type: 'resistor', x: 50, y: 100, description: '10kΩ Resistor' },
    { id: '2', name: 'C1', type: 'capacitor', x: 150, y: 100, description: '100µF Capacitor' },
    { id: '3', name: 'LED1', type: 'led', x: 250, y: 100, description: 'Red LED' },
    { id: '4', name: 'IC1', type: 'ic', x: 150, y: 200, description: 'NE555 Timer' },
  ],
  title = 'Interactive Circuit Schematic',
  onComponentClick,
}) => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  const handleComponentClick = (component: SchematicComponent) => {
    setSelectedComponent(component.id);
    onComponentClick?.(component);
  };

  const renderComponent = (comp: SchematicComponent) => {
    const isSelected = selectedComponent === comp.id;
    const isHovered = hoveredComponent === comp.id;

    switch (comp.type) {
      case 'resistor':
        return (
          <g key={comp.id}>
            {/* Resistor zigzag */}
            <path
              d={`M ${comp.x - 20} ${comp.y} L ${comp.x - 15} ${comp.y - 5} L ${comp.x - 10} ${comp.y + 5} L ${comp.x - 5} ${comp.y - 5} L ${comp.x} ${comp.y + 5} L ${comp.x + 5} ${comp.y - 5} L ${comp.x + 10} ${comp.y + 5} L ${comp.x + 15} ${comp.y - 5} L ${comp.x + 20} ${comp.y}`}
              stroke={isSelected || isHovered ? '#ff6b6b' : '#d4a574'}
              strokeWidth={isSelected ? 3 : 2}
              fill="none"
              className={`cursor-pointer transition-all ${isSelected || isHovered ? 'drop-shadow-lg' : ''}`}
              onClick={() => handleComponentClick(comp)}
              onMouseEnter={() => setHoveredComponent(comp.id)}
              onMouseLeave={() => setHoveredComponent(null)}
            />
            {/* Label */}
            <text
              x={comp.x}
              y={comp.y - 15}
              textAnchor="middle"
              className="text-xs font-bold fill-current"
              fill={isSelected || isHovered ? '#ff6b6b' : '#d4a574'}
            >
              {comp.name}
            </text>
          </g>
        );

      case 'capacitor':
        return (
          <g key={comp.id}>
            {/* Capacitor plates */}
            <line
              x1={comp.x - 20}
              y1={comp.y}
              x2={comp.x - 5}
              y2={comp.y}
              stroke={isSelected || isHovered ? '#ff6b6b' : '#87ceeb'}
              strokeWidth={isSelected ? 3 : 2}
              className={`cursor-pointer transition-all ${isSelected || isHovered ? 'drop-shadow-lg' : ''}`}
              onClick={() => handleComponentClick(comp)}
              onMouseEnter={() => setHoveredComponent(comp.id)}
              onMouseLeave={() => setHoveredComponent(null)}
            />
            <line
              x1={comp.x - 3}
              y1={comp.y - 8}
              x2={comp.x - 3}
              y2={comp.y + 8}
              stroke={isSelected || isHovered ? '#ff6b6b' : '#87ceeb'}
              strokeWidth={isSelected ? 3 : 2}
            />
            <line
              x1={comp.x + 3}
              y1={comp.y - 8}
              x2={comp.x + 3}
              y2={comp.y + 8}
              stroke={isSelected || isHovered ? '#ff6b6b' : '#87ceeb'}
              strokeWidth={isSelected ? 3 : 2}
            />
            <line
              x1={comp.x + 5}
              y1={comp.y}
              x2={comp.x + 20}
              y2={comp.y}
              stroke={isSelected || isHovered ? '#ff6b6b' : '#87ceeb'}
              strokeWidth={isSelected ? 3 : 2}
            />
            {/* Label */}
            <text
              x={comp.x}
              y={comp.y - 15}
              textAnchor="middle"
              className="text-xs font-bold fill-current"
              fill={isSelected || isHovered ? '#ff6b6b' : '#87ceeb'}
            >
              {comp.name}
            </text>
          </g>
        );

      case 'led':
        return (
          <g key={comp.id}>
            {/* LED triangle */}
            <polygon
              points={`${comp.x},${comp.y - 10} ${comp.x + 10},${comp.y + 10} ${comp.x - 10},${comp.y + 10}`}
              fill={isSelected || isHovered ? '#ff6b6b' : '#ff0000'}
              stroke={isSelected || isHovered ? '#ff6b6b' : '#ff0000'}
              strokeWidth={isSelected ? 3 : 2}
              className={`cursor-pointer transition-all ${isSelected || isHovered ? 'drop-shadow-lg' : ''}`}
              onClick={() => handleComponentClick(comp)}
              onMouseEnter={() => setHoveredComponent(comp.id)}
              onMouseLeave={() => setHoveredComponent(null)}
            />
            {/* LED bar */}
            <line
              x1={comp.x - 10}
              y1={comp.y + 10}
              x2={comp.x + 10}
              y2={comp.y + 10}
              stroke={isSelected || isHovered ? '#ff6b6b' : '#ff0000'}
              strokeWidth={isSelected ? 3 : 2}
            />
            {/* Label */}
            <text
              x={comp.x}
              y={comp.y - 20}
              textAnchor="middle"
              className="text-xs font-bold fill-current"
              fill={isSelected || isHovered ? '#ff6b6b' : '#ff0000'}
            >
              {comp.name}
            </text>
          </g>
        );

      case 'ic':
        return (
          <g key={comp.id}>
            {/* IC chip rectangle */}
            <rect
              x={comp.x - 20}
              y={comp.y - 15}
              width={40}
              height={30}
              fill={isSelected || isHovered ? '#333' : '#1a1a1a'}
              stroke={isSelected || isHovered ? '#ff6b6b' : '#666'}
              strokeWidth={isSelected ? 3 : 2}
              className={`cursor-pointer transition-all ${isSelected || isHovered ? 'drop-shadow-lg' : ''}`}
              onClick={() => handleComponentClick(comp)}
              onMouseEnter={() => setHoveredComponent(comp.id)}
              onMouseLeave={() => setHoveredComponent(null)}
            />
            {/* Notch */}
            <circle
              cx={comp.x}
              cy={comp.y - 15}
              r={3}
              fill={isSelected || isHovered ? '#ff6b6b' : '#666'}
            />
            {/* Label */}
            <text
              x={comp.x}
              y={comp.y + 2}
              textAnchor="middle"
              className="text-xs font-bold fill-current"
              fill={isSelected || isHovered ? '#ff6b6b' : '#666'}
            >
              {comp.name}
            </text>
          </g>
        );

      case 'wire':
      default:
        return (
          <line
            key={comp.id}
            x1={comp.x - 20}
            y1={comp.y}
            x2={comp.x + 20}
            y2={comp.y}
            stroke={isSelected || isHovered ? '#ff6b6b' : '#00ff00'}
            strokeWidth={isSelected ? 3 : 2}
            className={`cursor-pointer transition-all ${isSelected || isHovered ? 'drop-shadow-lg' : ''}`}
            onClick={() => handleComponentClick(comp)}
            onMouseEnter={() => setHoveredComponent(comp.id)}
            onMouseLeave={() => setHoveredComponent(null)}
          />
        );
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{title}</h3>

      <div className="design-grid rounded-lg overflow-hidden">
        <svg
          width="100%"
          height="400"
          viewBox="0 0 400 400"
          className="bg-gray-950"
        >
          {/* Grid background */}
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(0, 255, 0, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#grid)" />

          {/* Render components */}
          {components.map((comp) => renderComponent(comp))}
        </svg>
      </div>

      {/* Component Info */}
      {selectedComponent && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-gray-700">
          {components
            .filter((c) => c.id === selectedComponent)
            .map((comp) => (
              <div key={comp.id}>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {comp.name} - {comp.type.toUpperCase()}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {comp.description || 'No description available'}
                </p>
              </div>
            ))}
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-yellow-600"></div>
          <span className="text-gray-700 dark:text-gray-300">Resistor</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-blue-400"></div>
          <span className="text-gray-700 dark:text-gray-300">Capacitor</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-red-500"></div>
          <span className="text-gray-700 dark:text-gray-300">LED</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-green-400"></div>
          <span className="text-gray-700 dark:text-gray-300">Wire</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSchematic;
