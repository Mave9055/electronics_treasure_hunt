import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";

interface ErrorCode {
  id: string;
  code: string;
  title: string;
  description: string;
  cause: string[];
  solution: string[];
  example: string;
}

export default function ErrorCodeReference() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const errorCodes: ErrorCode[] = [
    {
      id: "error-1",
      code: "error: 'Serial' was not declared in this scope",
      title: "Serial Library Not Included",
      description: "The Serial library hasn't been included in your code.",
      cause: [
        "Missing #include <HardwareSerial.h> at the top",
        "Using Serial without initializing it",
        "Board doesn't support Serial communication"
      ],
      solution: [
        "Add #include <HardwareSerial.h> at the very top of your code",
        "Or just use Serial.begin(9600) - it auto-includes the library",
        "Make sure you're using an Arduino with Serial support (Uno, Nano, Mega)"
      ],
      example: `#include <HardwareSerial.h>

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Hello!");
  delay(1000);
}`
    },
    {
      id: "error-2",
      code: "error: 'pinMode' was not declared in this scope",
      title: "Arduino Core Functions Not Available",
      description: "You're trying to use Arduino functions but the environment isn't set up correctly.",
      cause: [
        "Wrong board selected in Tools > Board",
        "Board definitions not installed",
        "Corrupted Arduino installation"
      ],
      solution: [
        "Go to Tools > Board and select your Arduino model (Arduino Uno, Nano, etc.)",
        "Go to Tools > Port and select the correct COM port",
        "Try Tools > Boards Manager and reinstall Arduino AVR Boards",
        "Restart the Arduino IDE"
      ],
      example: `void setup() {
  pinMode(13, OUTPUT);  // Set pin 13 as output
}

void loop() {
  digitalWrite(13, HIGH);  // Turn on LED
  delay(1000);
  digitalWrite(13, LOW);   // Turn off LED
  delay(1000);
}`
    },
    {
      id: "error-3",
      code: "error: expected ';' before 'void'",
      title: "Missing Semicolon",
      description: "You forgot a semicolon at the end of a statement.",
      cause: [
        "Missing semicolon after a variable declaration",
        "Missing semicolon after a function call",
        "Syntax error in previous line"
      ],
      solution: [
        "Look at the line number shown in the error",
        "Check that line and the line before it for missing semicolons",
        "Every statement in C++ must end with a semicolon (;)",
        "Use Ctrl+T (or Cmd+T on Mac) to auto-format your code"
      ],
      example: `void setup() {
  Serial.begin(9600);  // <-- Semicolon required
  pinMode(13, OUTPUT);  // <-- Semicolon required
}

void loop() {
  Serial.println("Hello");  // <-- Semicolon required
}`
    },
    {
      id: "error-4",
      code: "error: expected ')' before ';'",
      title: "Mismatched Parentheses or Brackets",
      description: "You have unmatched parentheses, brackets, or braces.",
      cause: [
        "Missing closing parenthesis in function call",
        "Missing closing brace in loop or condition",
        "Extra parenthesis somewhere"
      ],
      solution: [
        "Count your opening and closing parentheses: ( )",
        "Count your opening and closing braces: { }",
        "Count your opening and closing brackets: [ ]",
        "Use Ctrl+T to auto-format and highlight matching pairs"
      ],
      example: `void setup() {
  Serial.begin(9600);
}

void loop() {
  if (digitalRead(2) == HIGH) {  // Opening (
    digitalWrite(13, HIGH);
  }  // Closing brace
}  // Closing brace for loop`
    },
    {
      id: "error-5",
      code: "avrdude: stk500_recv(): programmer is not responding",
      title: "Arduino Not Communicating",
      description: "The computer can't talk to your Arduino board.",
      cause: [
        "USB cable is loose or broken",
        "Wrong COM port selected",
        "USB driver not installed",
        "Board is broken or not powered",
        "Another program is using the COM port"
      ],
      solution: [
        "Try a different USB cable (data cable, not just charging)",
        "Try a different USB port on your computer",
        "Go to Tools > Port and select the correct COM port",
        "Install the CH340 or CP2102 driver if using a clone Arduino",
        "Close any other serial monitor programs",
        "Press the RESET button on the Arduino while uploading",
        "Try Tools > Boards Manager and reinstall the board definitions"
      ],
      example: "No code needed - this is a hardware/connection issue"
    },
    {
      id: "error-6",
      code: "error: 'analogRead' was not declared",
      title: "Function Not Available on This Board",
      description: "The board you selected doesn't support this function.",
      cause: [
        "Wrong board selected (e.g., Arduino Micro doesn't have A0-A5)",
        "Using analog pins on a digital-only board",
        "Typo in function name"
      ],
      solution: [
        "Check Tools > Board - make sure it's correct",
        "Verify your board has analog inputs (A0, A1, etc.)",
        "Check the Arduino documentation for your specific board",
        "Double-check the function name spelling"
      ],
      example: `void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);  // Read analog pin A0
  Serial.println(sensorValue);
  delay(100);
}`
    },
    {
      id: "error-7",
      code: "warning: unused variable 'x'",
      title: "Variable Declared But Never Used",
      description: "You created a variable but never used it in your code.",
      cause: [
        "Typo in variable name when using it",
        "Forgot to remove old code",
        "Planned to use it but didn't finish"
      ],
      solution: [
        "Delete the unused variable if you don't need it",
        "Check if you misspelled the variable name elsewhere",
        "This is just a warning - your code will still upload",
        "It's good practice to remove unused variables"
      ],
      example: `void setup() {
  int unusedVar = 5;  // This variable is never used
  Serial.begin(9600);
}

void loop() {
  // This warning won't stop your upload, but clean it up
}`
    },
    {
      id: "error-8",
      code: "error: 'Wire' was not declared in this scope",
      title: "I2C Library Not Included",
      description: "You're trying to use I2C (Wire library) but haven't included it.",
      cause: [
        "Missing #include <Wire.h>",
        "Board doesn't support I2C",
        "Library not installed"
      ],
      solution: [
        "Add #include <Wire.h> at the top of your code",
        "Make sure your board supports I2C (most Arduinos do)",
        "Go to Sketch > Include Library > Wire to auto-add it"
      ],
      example: `#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
}

void loop() {
  Wire.beginTransmission(0x68);
  Wire.write(0);
  Wire.endTransmission();
}`
    }
  ];

  const filteredErrors = errorCodes.filter(
    (error) =>
      error.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      error.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      error.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                ⚠️
              </div>
              <h1 className="text-xl font-bold text-white">Error Code Reference</h1>
            </a>
          </Link>
          <div className="text-sm text-slate-400">Arduino Error Solutions</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Arduino <span className="text-orange-400">Error Code</span> Reference
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Got an error message? Find the solution here. Search by error code or description.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search error codes, titles, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 text-white rounded-lg pl-12 pr-4 py-4 border border-slate-600 focus:border-orange-500 focus:outline-none transition-colors"
            />
          </div>
          <p className="text-sm text-slate-400 mt-2">
            Found {filteredErrors.length} error{filteredErrors.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Error Code List */}
        <div className="space-y-4 mb-16">
          {filteredErrors.length > 0 ? (
            filteredErrors.map((error) => (
              <div
                key={error.id}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === error.id ? null : error.id)
                  }
                  className="w-full p-6 flex items-start justify-between hover:bg-slate-700/50 transition-colors text-left"
                >
                  <div className="flex-1">
                    <p className="font-mono text-sm text-orange-400 mb-2">
                      {error.code}
                    </p>
                    <h3 className="text-lg font-bold text-white">{error.title}</h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {error.description}
                    </p>
                  </div>
                  {expandedId === error.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedId === error.id && (
                  <div className="px-6 pb-6 border-t border-slate-600 space-y-4">
                    <div>
                      <h4 className="font-bold text-white mb-2">🔍 Common Causes:</h4>
                      <ul className="space-y-1">
                        {error.cause.map((cause, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex gap-2">
                            <span className="text-orange-400">•</span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white mb-2">✅ Solutions:</h4>
                      <ol className="space-y-1">
                        {error.solution.map((solution, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex gap-2">
                            <span className="text-green-400">{idx + 1}.</span>
                            {solution}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                      <h4 className="font-bold text-white mb-2">💻 Example Code:</h4>
                      <pre className="text-xs text-slate-300 overflow-x-auto">
                        <code>{error.example}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">
                No errors found matching "{searchTerm}"
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Try searching for a different error code or description
              </p>
            </div>
          )}
        </div>

        {/* General Tips */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">💡 General Debugging Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-blue-300 font-bold mb-2">Read the Error Message</p>
              <p className="text-slate-300 text-sm">
                The error message tells you the line number and what went wrong. Start there.
              </p>
            </div>
            <div>
              <p className="text-blue-300 font-bold mb-2">Check the Line Number</p>
              <p className="text-slate-300 text-sm">
                Go to the line mentioned in the error and check that line plus the one before it.
              </p>
            </div>
            <div>
              <p className="text-blue-300 font-bold mb-2">Use Serial.println()</p>
              <p className="text-slate-300 text-sm">
                Print variable values to the Serial Monitor to debug your code.
              </p>
            </div>
            <div>
              <p className="text-blue-300 font-bold mb-2">Restart the IDE</p>
              <p className="text-slate-300 text-sm">
                Sometimes the Arduino IDE gets confused. Close and reopen it.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Still Stuck?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/troubleshooting">
              <a className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
                Troubleshooting Guide →
              </a>
            </Link>
            <Link href="/resources">
              <a className="px-8 py-3 border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 font-bold rounded-lg transition-colors">
                Resources & Tutorials
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
