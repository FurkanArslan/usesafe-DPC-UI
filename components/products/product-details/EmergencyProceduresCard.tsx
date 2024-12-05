"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EmergencyProceduresCardProps {
  emergencyProcedures: string[];
  itemVariants: any;
}

export function EmergencyProceduresCard({ 
  emergencyProcedures, 
  itemVariants 
}: EmergencyProceduresCardProps) {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <CardTitle>Emergency Procedures</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <motion.ul 
          variants={itemVariants}
          className="space-y-3 list-disc pl-6"
        >
          {emergencyProcedures.map((procedure, index) => (
            <li key={index} className="text-muted-foreground">
              {procedure}
            </li>
          ))}
        </motion.ul>
      </CardContent>
    </Card>
  );
} 