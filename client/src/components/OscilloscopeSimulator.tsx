import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface OscilloscopeSimulatorProps {
  waveformType?: 'sine' | 'square' | 'triangle' | 'sawtooth';
  frequency?: number;
  amplitude?: number;
  title?: string;
}

export const OscilloscopeSimulator: React.FC<OscilloscopeSimulatorProps> = ({
  waveformType = 'sine',
  frequency = 1,
  amplitude = 5,
  title = 'Oscilloscope Display',
}) => {
  const [waveform, setWaveform] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [selectedWaveform, setSelectedWaveform] = useState(waveformType);
  const [freq, setFreq] = useState(frequency);
  const [amp, setAmp] = useState(amplitude);

  // Generate waveform data
  useEffect(() => {
    const samples = 200;
    const newWaveform: number[] = [];
    const newLabels: string[] = [];

    for (let i = 0; i < samples; i++) {
      const x = (i / samples) * 4 * Math.PI * freq;
      let y = 0;

      switch (selectedWaveform) {
        case 'sine':
          y = amp * Math.sin(x);
          break;
        case 'square':
          y = amp * (Math.sin(x) > 0 ? 1 : -1);
          break;
        case 'triangle':
          y = amp * (Math.asin(Math.sin(x)) * (2 / Math.PI));
          break;
        case 'sawtooth':
          y = amp * (2 * ((x / (2 * Math.PI)) - Math.floor(x / (2 * Math.PI) + 0.5)));
          break;
        default:
          y = amp * Math.sin(x);
      }

      newWaveform.push(y);
      newLabels.push((i / samples * 4).toFixed(1));
    }

    setWaveform(newWaveform);
    setLabels(newLabels);
  }, [selectedWaveform, freq, amp]);

  const data = {
    labels,
    datasets: [
      {
        label: `${selectedWaveform.toUpperCase()} Wave (${freq}Hz, ${amp}V)`,
        data: waveform,
        borderColor: '#00ff00',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#00ff00',
          font: { family: "'Courier New', monospace", size: 12 } as any,
        },
      },
      title: {
        display: true,
        text: title,
        color: '#00ff00',
        font: { family: "'Courier New', monospace", size: 14, weight: 'bold' } as any,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 255, 0, 0.1)',
          drawBorder: true,
        },
        ticks: {
          color: '#00ff00',
          font: { family: "'Courier New', monospace", size: 10 } as any,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 255, 0, 0.1)',
          drawBorder: true,
        },
        ticks: {
          color: '#00ff00',
          font: { family: "'Courier New', monospace", size: 10 } as any,
        },
        min: -amp - 2,
        max: amp + 2,
      },
    },
  };

  return (
    <div className="oscilloscope-screen w-full">
      <div className="mb-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Waveform Type Selection */}
          <div>
            <label className="block text-sm font-mono text-green-400 mb-2">
              Waveform Type:
            </label>
            <select
              value={selectedWaveform}
              onChange={(e) => setSelectedWaveform(e.target.value as any)}
              className="w-full bg-gray-900 border border-green-500 text-green-400 px-3 py-2 rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="sine">Sine Wave</option>
              <option value="square">Square Wave</option>
              <option value="triangle">Triangle Wave</option>
              <option value="sawtooth">Sawtooth Wave</option>
            </select>
          </div>

          {/* Frequency Control */}
          <div>
            <label className="block text-sm font-mono text-green-400 mb-2">
              Frequency: {freq.toFixed(1)} Hz
            </label>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={freq}
              onChange={(e) => setFreq(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Amplitude Control */}
          <div>
            <label className="block text-sm font-mono text-green-400 mb-2">
              Amplitude: {amp.toFixed(1)} V
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={amp}
              onChange={(e) => setAmp(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Chart Display */}
      <div className="bg-gray-950 rounded border border-green-500 p-4">
        <Line data={data} options={options} height={300} />
      </div>

      {/* Display Info */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-green-400">
        <div className="bg-gray-900 p-2 rounded border border-green-500">
          <div className="text-green-300">Type</div>
          <div>{selectedWaveform.toUpperCase()}</div>
        </div>
        <div className="bg-gray-900 p-2 rounded border border-green-500">
          <div className="text-green-300">Frequency</div>
          <div>{freq.toFixed(2)} Hz</div>
        </div>
        <div className="bg-gray-900 p-2 rounded border border-green-500">
          <div className="text-green-300">Amplitude</div>
          <div>{amp.toFixed(2)} V</div>
        </div>
        <div className="bg-gray-900 p-2 rounded border border-green-500">
          <div className="text-green-300">Period</div>
          <div>{(1 / freq).toFixed(2)} s</div>
        </div>
      </div>
    </div>
  );
};

export default OscilloscopeSimulator;
