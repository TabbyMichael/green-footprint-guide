import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type User = {
  id: string;
  name: string;
  email: string;
  carbonFootprint: number;
  joinDate: string;
  status: "active" | "inactive";
};

const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    carbonFootprint: 12.5,
    joinDate: "2024-01-15",
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    carbonFootprint: 8.3,
    joinDate: "2024-01-16",
    status: "active",
  },
  // Add more mock users as needed
];

export const UserManagement = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);
  const [newUser, setNewUser] = useState<{
    name: string;
    email: string;
    status: "active" | "inactive";
  }>({    name: "",
    email: "",
    status: "active"
  });

  const handleAddUser = () => {
    const user: User = {
      id: (users.length + 1).toString(),
      name: newUser.name,
      email: newUser.email,
      carbonFootprint: 0,
      joinDate: new Date().toISOString().split("T")[0],
      status: newUser.status
    };

    setUsers([...users, user]);
    setShowAddUserDialog(false);
    setNewUser({ name: "", email: "", status: "active" });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Management</h2>
        <Button onClick={() => setShowAddUserDialog(true)}>Add User</Button>
      </div>

      <Dialog open={showAddUserDialog} onOpenChange={setShowAddUserDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                placeholder="Enter user name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                placeholder="Enter user email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={newUser.status}
                onValueChange={(value: "active" | "inactive") =>
                  setNewUser({ ...newUser, status: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select user status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddUserDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleAddUser}
              disabled={!newUser.name || !newUser.email}
            >
              Add User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Carbon Footprint (tons)</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.carbonFootprint}</TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};