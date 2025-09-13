import { Term } from "@/types/term";
import dieselLocomotiveImg from "@/assets/diesel-locomotive.jpg";
import electricMotorImg from "@/assets/electric-motor.jpg";
import toyotaPriusImg from "@/assets/toyota-prius.jpg";
import gasTurbineImg from "@/assets/gas-turbine.jpg";

export const terms: Term[] = [
  // A
  {
    id: "alternator",
    name: "Alternator",
    letter: "A",
    category: "General",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "An electrical generator that converts mechanical energy into alternating current electrical energy.",
    keyFacts: [
      "Commonly used in automotive applications to charge batteries",
      "Produces AC current which is converted to DC for vehicle systems",
      "More efficient than DC generators for most applications"
    ],
    tags: ["electrical", "generator", "automotive", "AC current"]
  },
  {
    id: "accumulator",
    name: "Accumulator",
    letter: "A",
    category: "Hybrid Vehicle",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A device that stores energy in hydraulic or pneumatic systems for later use.",
    keyFacts: [
      "Stores energy during low demand periods",
      "Releases energy during peak demand",
      "Common in hybrid hydraulic systems"
    ],
    tags: ["energy storage", "hydraulic", "pneumatic", "efficiency"]
  },
  // B
  {
    id: "battery",
    name: "Battery",
    letter: "B",
    category: "Hybrid Vehicle",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "An electrochemical device that stores and releases electrical energy through chemical reactions.",
    keyFacts: [
      "Essential component in hybrid and electric vehicles",
      "Can be recharged thousands of times in modern designs",
      "Lithium-ion batteries are most common in modern vehicles"
    ],
    tags: ["energy storage", "electrochemical", "rechargeable", "lithium-ion"]
  },
  {
    id: "boiler",
    name: "Boiler",
    letter: "B",
    category: "Prime Mover",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A pressure vessel that heats water or other fluids to generate steam or hot water for power generation.",
    keyFacts: [
      "Core component of steam power systems",
      "Can operate on various fuels including coal, gas, and biomass",
      "Efficiency depends on design and operating conditions"
    ],
    tags: ["steam", "pressure vessel", "heating", "power generation"]
  },
  // C
  {
    id: "combustion-engine",
    name: "Combustion Engine",
    letter: "C",
    category: "Prime Mover",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "An engine that generates power through the combustion of fuel and air mixture.",
    keyFacts: [
      "Most common type of automotive engine",
      "Can run on gasoline, diesel, or alternative fuels",
      "Efficiency typically ranges from 25-40%"
    ],
    tags: ["internal combustion", "fuel", "automotive", "power"]
  },
  {
    id: "converter",
    name: "Converter",
    letter: "C",
    category: "Hybrid Vehicle",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A device that changes electrical energy from one form to another, such as AC to DC or voltage levels.",
    keyFacts: [
      "Essential for hybrid vehicle power management",
      "Can step voltage up or down as needed",
      "High efficiency designs minimize energy loss"
    ],
    tags: ["electrical conversion", "power management", "voltage", "efficiency"]
  },
  // D
  {
    id: "diesel-engine",
    name: "Diesel Engine",
    letter: "D",
    category: "Prime Mover",
    thumbnailImage: dieselLocomotiveImg,
    largeImage: dieselLocomotiveImg,
    shortDefinition: "A compression ignition engine that uses diesel fuel and relies on compression heat for ignition.",
    keyFacts: [
      "More fuel efficient than gasoline engines",
      "Higher torque output at lower RPMs",
      "Commonly used in heavy-duty applications"
    ],
    tags: ["compression ignition", "fuel efficient", "torque", "heavy duty"]
  },
  {
    id: "drivetrain",
    name: "Drivetrain",
    letter: "D",
    category: "General",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "The system that transmits power from the engine to the wheels of a vehicle.",
    keyFacts: [
      "Includes transmission, driveshaft, and differential",
      "Can be front-wheel, rear-wheel, or all-wheel drive",
      "Critical for vehicle performance and efficiency"
    ],
    tags: ["power transmission", "wheels", "transmission", "performance"]
  },
  // E
  {
    id: "electric-motor",
    name: "Electric Motor",
    letter: "E",
    category: "Prime Mover",
    thumbnailImage: electricMotorImg,
    largeImage: electricMotorImg,
    shortDefinition: "A device that converts electrical energy into mechanical rotational energy through electromagnetic fields.",
    keyFacts: [
      "Efficiency can exceed 95% in modern designs",
      "No direct emissions during operation",
      "Can operate at variable speeds with precise control"
    ],
    tags: ["electric", "motor", "efficiency", "clean", "industrial"]
  },
  {
    id: "energy-recovery",
    name: "Energy Recovery",
    letter: "E",
    category: "Hybrid Vehicle",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "The process of capturing and reusing energy that would otherwise be lost as waste heat or motion.",
    keyFacts: [
      "Regenerative braking is a common form in vehicles",
      "Can improve overall system efficiency by 10-30%",
      "Essential technology in hybrid and electric vehicles"
    ],
    tags: ["regenerative", "efficiency", "waste heat", "braking"]
  },
  // F
  {
    id: "fuel-cell",
    name: "Fuel Cell",
    letter: "F",
    category: "Prime Mover",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "An electrochemical device that converts hydrogen and oxygen into electricity, heat, and water.",
    keyFacts: [
      "Only emission is water vapor",
      "High efficiency compared to combustion engines",
      "Requires hydrogen fuel infrastructure"
    ],
    tags: ["hydrogen", "electrochemical", "zero emission", "high efficiency"]
  },
  {
    id: "flywheel",
    name: "Flywheel",
    letter: "F",
    category: "General",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A rotating mechanical device that stores rotational energy and smooths out power delivery.",
    keyFacts: [
      "Reduces engine vibration and power fluctuations",
      "Can store and release energy quickly",
      "Used in both traditional and hybrid powertrains"
    ],
    tags: ["rotational energy", "power smoothing", "vibration", "energy storage"]
  },
  // G
  {
    id: "gas-turbine",
    name: "Gas Turbine",
    letter: "G",
    category: "Prime Mover",
    thumbnailImage: gasTurbineImg,
    largeImage: gasTurbineImg,
    shortDefinition: "A combustion engine that uses a continuous flow of gas to spin turbine blades and generate power.",
    keyFacts: [
      "High power-to-weight ratio compared to other engines",
      "Can start quickly and reach full power in minutes",
      "Operating temperatures can exceed 1,500°C"
    ],
    tags: ["turbine", "aviation", "power generation", "high performance"]
  },
  {
    id: "generator",
    name: "Generator",
    letter: "G",
    category: "General",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A device that converts mechanical energy into electrical energy using electromagnetic induction.",
    keyFacts: [
      "Core component of power plants and hybrid systems",
      "Can produce AC or DC electricity",
      "Efficiency depends on design and load conditions"
    ],
    tags: ["electromagnetic induction", "power generation", "mechanical energy", "electricity"]
  },
  // H
  {
    id: "hybrid-system",
    name: "Hybrid System",
    letter: "H",
    category: "Hybrid Vehicle",
    thumbnailImage: toyotaPriusImg,
    largeImage: toyotaPriusImg,
    shortDefinition: "A propulsion system that combines two or more power sources to improve efficiency and performance.",
    keyFacts: [
      "Typically combines internal combustion engine with electric motor",
      "Can operate in multiple modes for optimal efficiency",
      "Reduces fuel consumption and emissions"
    ],
    tags: ["dual power", "efficiency", "fuel economy", "emissions reduction"]
  },
  {
    id: "hydraulic-motor",
    name: "Hydraulic Motor",
    letter: "H",
    category: "Prime Mover",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A mechanical actuator that converts hydraulic pressure and flow into rotational mechanical power.",
    keyFacts: [
      "High power-to-weight ratio",
      "Precise speed and torque control",
      "Common in construction and industrial equipment"
    ],
    tags: ["hydraulic", "mechanical power", "high torque", "industrial"]
  },
  // I
  {
    id: "inverter",
    name: "Inverter",
    letter: "I",
    category: "Hybrid Vehicle",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "An electronic device that converts DC electrical power to AC electrical power.",
    keyFacts: [
      "Essential for AC motor control in electric vehicles",
      "Can control motor speed and torque precisely",
      "High efficiency designs minimize power loss"
    ],
    tags: ["DC to AC", "motor control", "power electronics", "efficiency"]
  },
  {
    id: "ignition-system",
    name: "Ignition System",
    letter: "I",
    category: "Prime Mover",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A system that provides the spark or heat needed to ignite the fuel-air mixture in an engine.",
    keyFacts: [
      "Critical for gasoline engine operation",
      "Modern systems use electronic control for precise timing",
      "Affects engine performance, efficiency, and emissions"
    ],
    tags: ["spark", "combustion", "timing", "electronic control"]
  }
];

// Helper function to get terms by letter
export const getTermsByLetter = (letter: string): Term[] => {
  return terms.filter(term => term.letter === letter);
};

// Helper function to get all unique letters
export const getAllLetters = (): string[] => {
  const letters = [...new Set(terms.map(term => term.letter))];
  return letters.sort();
};

// Helper function to get next/previous term
export const getAdjacentTerm = (currentId: string, direction: 'next' | 'prev'): Term | null => {
  const currentIndex = terms.findIndex(term => term.id === currentId);
  if (currentIndex === -1) return null;
  
  if (direction === 'next') {
    return currentIndex < terms.length - 1 ? terms[currentIndex + 1] : null;
  } else {
    return currentIndex > 0 ? terms[currentIndex - 1] : null;
  }
};