import { Vehicle } from "@/types/vehicle";
import dieselLocomotiveImg from "@/assets/diesel-locomotive.jpg";
import electricMotorImg from "@/assets/electric-motor.jpg";
import toyotaPriusImg from "@/assets/toyota-prius.jpg";
import gasTurbineImg from "@/assets/gas-turbine.jpg";

export const vehicles: Vehicle[] = [
  {
    id: "diesel-locomotive",
    name: "Diesel Locomotive",
    category: "Prime Mover",
    thumbnailImage: dieselLocomotiveImg,
    largeImage: dieselLocomotiveImg,
    shortDefinition: "A railway locomotive powered by a diesel engine that drives electric generators to power traction motors.",
    keyFacts: [
      "Can pull trains weighing over 10,000 tons",
      "More fuel efficient than steam locomotives",
      "Typical power output ranges from 1,000 to 6,000 horsepower"
    ],
    tags: ["railway", "transportation", "diesel", "freight", "passenger"]
  },
  {
    id: "electric-motor",
    name: "Electric Motor",
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
    id: "gas-turbine",
    name: "Gas Turbine Engine",
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
    id: "steam-engine",
    name: "Steam Engine",
    category: "Prime Mover",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A heat engine that uses steam pressure to move pistons and generate mechanical work.",
    keyFacts: [
      "Powered the Industrial Revolution of the 18th-19th centuries",
      "Can burn various fuels including coal, wood, and oil",
      "Requires water and heat source to operate"
    ],
    tags: ["historical", "steam", "industrial revolution", "versatile fuel"]
  },
  {
    id: "toyota-prius",
    name: "Toyota Prius",
    category: "Hybrid Vehicle",
    thumbnailImage: toyotaPriusImg,
    largeImage: toyotaPriusImg,
    shortDefinition: "A parallel hybrid electric vehicle that combines a gasoline engine with electric motors for improved fuel efficiency.",
    keyFacts: [
      "First mass-produced hybrid car (1997)",
      "Achieves over 50 MPG in city driving",
      "Uses regenerative braking to charge the battery"
    ],
    tags: ["hybrid", "fuel efficient", "regenerative braking", "mass production"]
  },
  {
    id: "hybrid-bus",
    name: "Hybrid Electric Bus",
    category: "Hybrid Vehicle",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A public transit bus that combines diesel or gasoline engines with electric motors to reduce emissions and fuel consumption.",
    keyFacts: [
      "Can reduce fuel consumption by 25-40%",
      "Quieter operation than conventional diesel buses",
      "Electric motor assists during acceleration and hill climbing"
    ],
    tags: ["public transport", "emissions reduction", "quiet operation", "urban"]
  },
  {
    id: "hybrid-locomotive",
    name: "Hybrid Locomotive",
    category: "Hybrid Vehicle",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A railway locomotive that combines traditional diesel engines with battery storage and electric traction systems.",
    keyFacts: [
      "Can reduce fuel consumption by up to 15%",
      "Batteries store energy from regenerative braking",
      "Can operate in zero-emission mode for short distances"
    ],
    tags: ["railway", "battery storage", "regenerative braking", "fuel savings"]
  },
  {
    id: "parallel-hybrid",
    name: "Parallel Hybrid System",
    category: "Hybrid Vehicle",
    thumbnailImage: "/api/placeholder/300/200",
    largeImage: "/api/placeholder/800/500",
    shortDefinition: "A hybrid propulsion system where both electric motor and combustion engine can directly drive the wheels.",
    keyFacts: [
      "Both power sources can work together or independently",
      "More mechanically complex than series hybrids",
      "Provides better fuel economy at highway speeds"
    ],
    tags: ["parallel hybrid", "dual power", "highway efficiency", "mechanical"]
  }
];