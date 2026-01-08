import { Download, Award } from "lucide-react";
import { useState } from "react";

interface Certificate {
  id: string;
  category: string;
  userName: string;
  completionDate: string;
  score: number;
  badgesEarned: number;
}

const categories = [
  { id: "fundamentals", name: "Fundamentals Master", description: "Mastered voltage, current, and resistance concepts" },
  { id: "circuits", name: "Circuit Designer", description: "Completed all circuit design and analysis quizzes" },
  { id: "components", name: "Component Expert", description: "Identified and understood all electronic components" },
  { id: "communication", name: "Communication Pro", description: "Mastered UART and I²C protocols" },
  { id: "power", name: "Power Specialist", description: "Expert in power supplies and battery management" },
  { id: "safety", name: "Safety Guardian", description: "Completed comprehensive electronics safety training" },
  { id: "soldering", name: "Soldering Craftsman", description: "Mastered soldering techniques and best practices" },
  { id: "arduino", name: "Arduino Developer", description: "Proficient in Arduino programming and applications" }
];

export default function CertificationGenerator() {
  const [userName, setUserName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [completedCertificates, setCompletedCertificates] = useState<Certificate[]>([
    {
      id: "cert-1",
      category: "fundamentals",
      userName: "John Doe",
      completionDate: "2025-01-06",
      score: 95,
      badgesEarned: 3
    }
  ]);

  const generateCertificate = () => {
    if (!userName || !selectedCategory) {
      alert("Please enter your name and select a category");
      return;
    }

    const category = categories.find(c => c.id === selectedCategory);
    if (!category) return;

    const newCert: Certificate = {
      id: `cert-${Date.now()}`,
      category: selectedCategory,
      userName,
      completionDate: new Date().toISOString().split('T')[0],
      score: 87 + Math.floor(Math.random() * 13),
      badgesEarned: 2 + Math.floor(Math.random() * 3)
    };

    setCompletedCertificates([...completedCertificates, newCert]);
    setUserName("");
    setSelectedCategory("");
  };

  const downloadCertificate = (cert: Certificate) => {
    const category = categories.find(c => c.id === cert.category);
    const certificateHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Certificate of Completion</title>
        <style>
          body {
            margin: 0;
            padding: 40px;
            font-family: 'Georgia', serif;
            background: white;
          }
          .certificate {
            border: 8px solid #ff9500;
            padding: 60px;
            text-align: center;
            background: linear-gradient(135deg, #fff9e6 0%, #ffe6cc 100%);
            max-width: 900px;
            margin: 0 auto;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }
          .header {
            font-size: 48px;
            font-weight: bold;
            color: #1a1a1a;
            margin-bottom: 20px;
          }
          .subtitle {
            font-size: 24px;
            color: #ff9500;
            margin-bottom: 40px;
            font-style: italic;
          }
          .content {
            margin: 40px 0;
          }
          .label {
            font-size: 16px;
            color: #666;
            margin-top: 30px;
          }
          .value {
            font-size: 32px;
            font-weight: bold;
            color: #1a1a1a;
            margin-top: 10px;
          }
          .category-name {
            font-size: 28px;
            color: #ff9500;
            font-weight: bold;
            margin: 20px 0;
          }
          .achievement {
            font-size: 18px;
            color: #333;
            margin: 20px 0;
            font-style: italic;
          }
          .date {
            font-size: 16px;
            color: #666;
            margin-top: 40px;
          }
          .footer {
            margin-top: 60px;
            border-top: 2px solid #ff9500;
            padding-top: 20px;
            font-size: 14px;
            color: #666;
          }
          .badge {
            display: inline-block;
            margin: 10px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="certificate">
          <div class="header">🎓 CERTIFICATE OF COMPLETION</div>
          <div class="subtitle">Electronics Treasure Hunt Masterclass</div>
          
          <div class="content">
            <div class="label">This certifies that</div>
            <div class="value">${cert.userName}</div>
            
            <div class="label">has successfully completed</div>
            <div class="category-name">${category?.name}</div>
            <div class="achievement">${category?.description}</div>
            
            <div class="label">Achievement Score</div>
            <div class="value">${cert.score}%</div>
            
            <div class="label">Badges Earned</div>
            <div class="value">🏆 ${cert.badgesEarned}</div>
            
            <div class="date">Completed on ${new Date(cert.completionDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</div>
          </div>
          
          <div class="footer">
            <p>This certificate recognizes the successful completion of comprehensive electronics training.</p>
            <p>Electronics Treasure Hunt © 2025</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([certificateHTML], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${cert.userName}-${category?.name}-Certificate.html`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="w-full space-y-8">
      {/* Certificate Generator */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-orange-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🎓 Generate Your Certificate</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            >
              <option value="">Choose a category...</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} - {cat.description}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={generateCertificate}
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Award className="w-5 h-5" />
            Generate Certificate
          </button>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-sm text-blue-800">
            💡 <strong>Tip:</strong> Complete all quizzes in a category to unlock your certificate. 
            Your certificate proves your mastery and can be shared with employers or colleagues!
          </p>
        </div>
      </div>

      {/* Completed Certificates */}
      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📜 Your Certificates ({completedCertificates.length})</h3>

        {completedCertificates.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-gray-600 text-lg">No certificates yet. Complete quizzes to earn your first certificate!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedCertificates.map(cert => {
              const category = categories.find(c => c.id === cert.category);
              return (
                <div key={cert.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-300 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{category?.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{category?.description}</p>
                    </div>
                    <div className="text-4xl">🎓</div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <p><strong>Name:</strong> {cert.userName}</p>
                    <p><strong>Completed:</strong> {new Date(cert.completionDate).toLocaleDateString()}</p>
                    <p><strong>Score:</strong> <span className="text-orange-600 font-bold">{cert.score}%</span></p>
                    <p><strong>Badges:</strong> 🏆 {cert.badgesEarned}</p>
                  </div>

                  <button
                    onClick={() => downloadCertificate(cert)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Certificate
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
