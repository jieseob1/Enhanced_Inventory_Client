import React, { useState, useCallback } from 'react';
import DropZone from '../index';
import Text from '../../Text';
import LegacyStack from '../../LegacyStack';
import Thumbnail from '../../Thumbnail';
import Card from '../../Card';
import NoteMinor from '../../../icons/NoteMinor'

const MutilpleDropZone = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [openFileDialog, setOpenFileDialog] = useState<boolean>(false);

  const handleDropZoneDrop = useCallback(
    (dropFiles: File[], _acceptedFiles: File[], _rejectedFiles: File[]) =>
      setFiles((files) => [...files, ...dropFiles]),
    [],
  );
  const toggleOpenFileDialog = useCallback(
    () => setOpenFileDialog((openFileDialog) => !openFileDialog),
    [],
  );

  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  const uploadedFiles = files.length > 0 && (
    <LegacyStack vertical>
      {files.map((file, index) => (
        <LegacyStack alignment="center" key={index}>
          <Thumbnail
            size="large"
            alt={file.name}
            source={
              validImageTypes.indexOf(file.type) > -1
                ? window.URL.createObjectURL(file)
                : NoteMinor
            }
          />
          <div>
            {file.name}{' '}
            <Text variant="bodySm" as="p">
              {(file.size) / (1000 * 1000)} MB
            </Text>
          </div>
        </LegacyStack>
      ))}
    </LegacyStack>
  );

  return (
    <Card>
      <DropZone
        openFileDialog={openFileDialog}
        onDrop={handleDropZoneDrop}
        onFileDialogClose={toggleOpenFileDialog}
      />
      {uploadedFiles}
    </Card>
  );
};

export default MutilpleDropZone;