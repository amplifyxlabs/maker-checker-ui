
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Upload, Download, Play } from "lucide-react";
import { Card } from "./ui/card";

export function MakerForm() {
  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-white shadow-sm animate-fade-in">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="userId">User ID</Label>
          <Input id="userId" placeholder="Enter user ID" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="appCode">App Code</Label>
          <Select defaultValue="SPL">
            <SelectTrigger>
              <SelectValue placeholder="Select app code" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="SPL">SPL</SelectItem>
              <SelectItem value="APP1">APP1</SelectItem>
              <SelectItem value="APP2">APP2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="matrix">Matrix</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select matrix" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="matrix1">Matrix 1</SelectItem>
              <SelectItem value="matrix2">Matrix 2</SelectItem>
              <SelectItem value="matrix3">Matrix 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comments">Maker Comments</Label>
          <Textarea
            id="comments"
            placeholder="Enter your comments"
            className="min-h-[100px]"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button className="flex-1">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
          <Button className="flex-1" variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button className="flex-1" variant="secondary">
            <Play className="w-4 h-4 mr-2" />
            Test
          </Button>
        </div>
      </div>
    </Card>
  );
}
