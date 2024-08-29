import React, { useState } from 'react';
import { useController, UseFormReturn } from 'react-hook-form';
import { ImageUp, Paperclip } from 'lucide-react';
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from '@components/shared/shadcn-ui/file-upload';

interface CustomFileUploaderProps {
    name: string;
    maxFiles: number;
    hookForm: UseFormReturn<any>;
}

const FileSvgDraw = () => {
    return (
        <>
            <ImageUp size={50} strokeWidth={1} className="my-5" />
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
                &nbsp; or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
        </>
    );
};

const CustomFileUploader: React.FC<CustomFileUploaderProps> = ({ name, hookForm, maxFiles }) => {
    const [files, setFiles] = useState<File[] | null>(null);

    const {
        field: { onChange, value },
    } = useController({
        name,
        control: hookForm.control,
    });

    const handleFileChange = (newFiles: File[] | null) => {
        setFiles(newFiles);
        onChange(newFiles);
    };

    const dropZoneConfig = {
        maxFiles: maxFiles,
        maxSize: 1024 * 1024 * 4,
        multiple: true,
    };

    return (
        <FileUploader
            value={files || value}
            onValueChange={handleFileChange}
            dropzoneOptions={dropZoneConfig}
            className="relative bg-background rounded-lg p-2 border border-primary-2">
            <FileInput className="outline-dashed outline-1 outline-white">
                <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
                    <FileSvgDraw />
                    <div className="text-paragraph-xs text-neutral-7 ">Max file limit {maxFiles}</div>
                </div>
            </FileInput>
            <FileUploaderContent>
                {files &&
                    files.length > 0 &&
                    files.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                            <Paperclip className="h-4 w-4 stroke-current" />
                            <span>{file.name}</span>
                        </FileUploaderItem>
                    ))}
            </FileUploaderContent>
        </FileUploader>
    );
};

export default CustomFileUploader;
