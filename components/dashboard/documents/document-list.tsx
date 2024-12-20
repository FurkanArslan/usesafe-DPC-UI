"use client";

import { FileText, MoreHorizontal, Download, History, ExternalLink, AlertTriangle, CheckCircle, XCircle, Clock } from "lucide-react";
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
const documents = [
  {
    id: "DOC-001",
    name: "ISO 9001:2015 Certificate",
    type: "Quality Management",
    category: "ISO 9001",
    status: "approved",
    validUntil: "2025-03-15",
    uploadedAt: "2024-03-15T10:30:00",
    fileSize: "2.4 MB",
    issuer: "TSE",
  },
  {
    id: "DOC-002",
    name: "ISO 45001 Certificate",
    type: "Safety & Health",
    category: "ISO 45001",
    status: "expiring",
    validUntil: "2024-04-15",
    uploadedAt: "2023-04-15T15:45:00",
    fileSize: "1.8 MB",
    issuer: "TSE",
  },
  {
    id: "DOC-003",
    name: "TS EN 50342-1 Test Report",
    type: "Battery Standards",
    category: "TS EN 50342-1",
    status: "pending",
    validUntil: "2025-06-30",
    uploadedAt: "2024-03-14T09:15:00",
    fileSize: "3.2 MB",
    issuer: "TSE",
  },
  {
    id: "DOC-004",
    name: "ISO 14001 Certificate",
    type: "Quality Management",
    category: "ISO 14001",
    status: "rejected",
    validUntil: null,
    uploadedAt: "2024-03-13T11:20:00",
    fileSize: "1.5 MB",
    issuer: "TSE",
    rejectionReason: "Document signature verification failed",
  },
];

export function DocumentList() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4" />;
      case "rejected":
        return <XCircle className="h-4 w-4" />;
      case "expiring":
        return <AlertTriangle className="h-4 w-4" />;
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
      case "expiring":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Repository</CardTitle>
        <CardDescription>
          View and manage your company documents and certifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Valid Until</TableHead>
              <TableHead>Issuer</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {doc.id} · {doc.fileSize}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.category}</TableCell>
                <TableCell>
                  <Badge
                    variant={getStatusVariant(doc.status)}
                    className="flex w-fit items-center gap-1"
                  >
                    {getStatusIcon(doc.status)}
                    {doc.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {doc.validUntil ? new Date(doc.validUntil).toLocaleDateString() : "N/A"}
                </TableCell>
                <TableCell>{doc.issuer}</TableCell>
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
                        <Link href={`/dashboard/documents/${doc.id}`}>
                          <FileText className="h-4 w-4 mr-2" />
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <History className="h-4 w-4 mr-2" />
                        View History
                      </DropdownMenuItem>
                      {doc.status === "rejected" && (
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/documents/${doc.id}/reupload`}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Re-upload
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