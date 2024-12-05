"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Box, 
  ArrowRight, 
  Factory, 
  QrCode, 
  History, 
  Link as LinkIcon, 
  CheckCircle, 
  Rocket,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { EnhancedCard } from "@/components/ui/enhanced-card";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const featureCards = [
    {
      icon: Factory,
      title: "For Manufacturers",
      description: "Register your company and certify your products with our digital certification system.",
      link: "/auth/register",
      buttonText: "Register Now",
      bgGradient: "from-blue-500 to-blue-700"
    },
    {
      icon: QrCode,
      title: "Product Traceability",
      description: "Track complete product journey from raw materials to retail with blockchain verification.",
      link: "/products",
      buttonText: "Explore Products",
      bgGradient: "from-green-500 to-green-700"
    },
    {
      icon: History,
      title: "Supply Chain History",
      description: "Access complete supply chain history and verify product authenticity instantly.",
      link: "/verify",
      buttonText: "Verify Now",
      bgGradient: "from-purple-500 to-purple-700"
    },
    {
      icon: LinkIcon,
      title: "Connected Data",
      description: "Link product data, certifications, and sustainability metrics in one place.",
      link: "/products",
      buttonText: "Learn More",
      bgGradient: "from-orange-500 to-orange-700"
    }
  ];

  const traceabilitySteps = [
    {
      icon: Box,
      title: "Raw Materials",
      description: "Track sourcing and origin of materials with verified sustainability credentials"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Monitor production processes and sustainability metrics in real-time"
    },
    {
      icon: ShieldCheck,
      title: "Certification",
      description: "Verify authenticity with blockchain-backed digital certification"
    }
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative py-20 bg-gradient-to-b from-primary/5 via-background to-background"
      >
        <div className="container px-6 md:px-8 mx-auto">
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <ShieldCheck 
                className="h-20 w-20 text-primary animate-pulse group-hover:rotate-12 transition-transform duration-300" 
              />
              <div className="absolute -top-2 -right-2 h-6 w-6 bg-green-500 rounded-full animate-ping"></div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Digital Product Certification & Traceability System
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground"
            >
              Track, verify, and ensure product authenticity through blockchain-powered certification and end-to-end supply chain traceability
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              <Link href="/auth/register">
                <Button size="lg" className="group">
                  Get Started
                  <Rocket className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Button>
              </Link>
              <Link href="/verify">
                <Button variant="outline" size="lg" className="group">
                  Verify Product
                  <CheckCircle className="ml-2 h-4 w-4 group-hover:text-green-500 transition-colors" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-20 bg-background"
      >
        <div className="container px-6 md:px-8 mx-auto">
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featureCards.map((card, index) => (
              <EnhancedCard
                key={card.title}
                gradient={`bg-gradient-to-br ${card.bgGradient}`}
              >
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col h-full text-white"
                >
                  <card.icon className="h-12 w-12 mb-4 opacity-80" />
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm opacity-80 mb-4 flex-grow">{card.description}</p>
                  <Link href={card.link} className="mt-auto">
                    <Button variant="secondary" className="w-full group">
                      {card.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </EnhancedCard>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Traceability Benefits Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-20 bg-muted/30"
      >
        <div className="container px-6 md:px-8 mx-auto">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">End-to-End Traceability</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track every step of your product's journey with complete transparency and verification
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {traceabilitySteps.map((step, index) => (
              <motion.div 
                key={step.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-background 
                  hover:shadow-lg transition-all duration-300 
                  group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 opacity-10">
                  <step.icon className="h-24 w-24 text-primary" />
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 
                  flex items-center justify-center mb-4 
                  group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-6 w-6 text-primary 
                    group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}