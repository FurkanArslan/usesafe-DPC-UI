"use client";

import { Battery, MoreHorizontal, FileText, ExternalLink, CheckCircle, XCircle, Clock } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample data - In a real app, this would come from an API
const certifications = [
  {
    id: "DPC-001",
    productName: "AGM LEO Advanced Battery",
    model: "AGM-LEO-12V-65AH",
    serialNumber: "86901451725441",
    status: "approved",
    submittedAt: "2024-03-15T10:30:00",
    approvedAt: "2024-03-16T15:45:00",
    validUntil: "2025-03-15",
    certifications: ["CE", "ISO 9001", "TSE"],
    testReports: 3,
    documents: 5,
  },
  {
    id: "DPC-002",
    productName: "EFB MAX TIGRIS Battery",
    model: "EFB-TIGRIS-12V-145AH",
    serialNumber: "8690145155004",
    status: "pending",
    submittedAt: "2024-03-14T09:15:00",
    certifications: ["CE", "ISO 9001"],
    testReports: 2,
    documents: 4,
  },
  {
    id: "DPC-003",
    productName: "MAXIM A GORILLA Battery",
    model: "MAXIM-GORILLA-12V-105AH",
    serialNumber: "8690145165164",
    status: "rejected",
    submittedAt: "2024-03-13T14:20:00",
    rejectedAt: "2024-03-14T11:30:00",
    rejectionReason: "Missing required test reports",
    certifications: [],
    testReports: 1,
    documents: 3,
  },
];

export function CertificationList() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4" />;
      case "rejected":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "approved":
        return "success";
      case "rejected":
        return "destructive";
      default:
        return "warning";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>DPC Applications</CardTitle>
        <CardDescription>
          View and manage your Digital Product Certification applications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Valid Until</TableHead>
              <TableHead>Documents</TableHead>
              <TableHead>Certifications</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {certifications.map((cert) => (
              <TableRow key={cert.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Battery className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{cert.productName}</p>
                      <p className="text-sm text-muted-foreground">
                        {cert.model} · {cert.serialNumber}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={getStatusVariant(cert.status)}
                    className="flex w-fit items-center gap-1"
                  >
                    {getStatusIcon(cert.status)}
                    {cert.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(cert.submittedAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {cert.validUntil
                    ? new Date(cert.validUntil).toLocaleDateString()
                    : "N/A"}
                </TableCell>
                <TableCell>
                  <span className="text-sm text-muted-foreground">
                    {cert.testReports} Reports · {cert.documents} Documents
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {cert.certifications.map((c, index) => (
                      <Badge key={index} variant="outline">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/certifications/${cert.id}`}>
                          <Battery className="h-4 w-4 mr-2" />
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/certifications/${cert.id}/documents`}>
                          <FileText className="h-4 w-4 mr-2" />
                          View Documents
                        </Link>
                      </DropdownMenuItem>
                      {cert.status === "approved" && (
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/certifications/${cert.id}/verify`}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Verify DPC
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {cert.status === "rejected" && (
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/certifications/${cert.id}/resubmit`}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Resubmit
                          </Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}