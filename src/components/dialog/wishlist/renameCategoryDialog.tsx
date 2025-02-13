// RenameDialog.tsx
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface RenameDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (newName: string) => void;
}

const RenameDialog = ({ isOpen, onOpenChange, onSubmit }: RenameDialogProps) => {
  const [newName, setNewName] = useState('');

  const handleSubmit = () => {
    onSubmit(newName);
    setNewName('');
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rename Category</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Enter new category name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RenameDialog;