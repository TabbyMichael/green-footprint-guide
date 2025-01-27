import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type OffsetProgram = {
  id: string;
  name: string;
  description: string;
  participants: number;
  impact: number;
  status: "active" | "pending" | "completed";
  startDate: string;
  endDate: string;
};

const mockPrograms: OffsetProgram[] = [
  {
    id: "1",
    name: "Tree Planting Initiative",
    description: "Community-based tree planting program in urban areas",
    participants: 234,
    impact: 567.8,
    status: "active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
  },
  {
    id: "2",
    name: "Solar Panel Project",
    description: "Residential solar panel installation program",
    participants: 189,
    impact: 432.1,
    status: "active",
    startDate: "2024-02-01",
    endDate: "2024-12-31",
  },
  {
    id: "3",
    name: "Wind Energy Support",
    description: "Investment in community wind energy projects",
    participants: 156,
    impact: 389.5,
    status: "pending",
    startDate: "2024-03-01",
    endDate: "2024-12-31",
  },
];

export const OffsetProgramsManagement = () => {
  const [programs, setPrograms] = useState<OffsetProgram[]>(mockPrograms);
  const [showAddProgramDialog, setShowAddProgramDialog] = useState(false);
  const [newProgram, setNewProgram] = useState<{
    name: string;
    description: string;
    impact: number;
    status: "active" | "pending" | "completed";
    startDate: string;
    endDate: string;
  }>({    name: "",
    description: "",
    impact: 0,
    status: "active",
    startDate: "",
    endDate: ""
  });

  const handleAddProgram = () => {
    const program: OffsetProgram = {
      id: (programs.length + 1).toString(),
      name: newProgram.name,
      description: newProgram.description,
      participants: 0,
      impact: newProgram.impact,
      status: newProgram.status,
      startDate: newProgram.startDate,
      endDate: newProgram.endDate
    };

    setPrograms([...programs, program]);
    setShowAddProgramDialog(false);
    setNewProgram({
      name: "",
      description: "",
      impact: 0,
      status: "active",
      startDate: "",
      endDate: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Offset Programs Management</h2>
        <Button onClick={() => setShowAddProgramDialog(true)}>Add New Program</Button>
      </div>

      <Dialog open={showAddProgramDialog} onOpenChange={setShowAddProgramDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Offset Program</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Program Name</Label>
              <Input
                id="name"
                value={newProgram.name}
                onChange={(e) => setNewProgram({ ...newProgram, name: e.target.value })}
                placeholder="Enter program name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={newProgram.description}
                onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
                placeholder="Enter program description"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="impact">Expected Impact (tons CO2)</Label>
              <Input
                id="impact"
                type="number"
                value={newProgram.impact}
                onChange={(e) => setNewProgram({ ...newProgram, impact: parseFloat(e.target.value) || 0 })}
                placeholder="Enter expected impact"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={newProgram.status}
                onValueChange={(value: "active" | "pending" | "completed") =>
                  setNewProgram({ ...newProgram, status: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select program status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={newProgram.startDate}
                onChange={(e) => setNewProgram({ ...newProgram, startDate: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={newProgram.endDate}
                onChange={(e) => setNewProgram({ ...newProgram, endDate: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddProgramDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleAddProgram}
              disabled={!newProgram.name || !newProgram.description || !newProgram.startDate || !newProgram.endDate}
            >
              Add Program
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 gap-6">
        {programs.map((program) => (
          <Card key={program.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  program.status === "active"
                    ? "bg-green-100 text-green-800"
                    : program.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Participants</p>
                  <p className="text-lg font-semibold">{program.participants}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Impact (tons CO2)</p>
                  <p className="text-lg font-semibold">{program.impact}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p className="text-lg font-semibold">{program.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">End Date</p>
                  <p className="text-lg font-semibold">{program.endDate}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline">Edit</Button>
                <Button variant="outline" className="text-red-600 hover:text-red-700">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};