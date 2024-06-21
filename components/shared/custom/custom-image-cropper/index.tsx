import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import { useSafeState } from 'ahooks';

import { CustomButton } from '@components/shared/custom/custom-button';

import { RadioGroup, RadioGroupItem } from '@components/shared/shadcn-ui/radio';

import getCroppedImg from './cropImage';

interface ImageCropperProps {
    imageSrc: string;
    selectedImage: File;
    showAspectOption?: boolean;
    onCropComplete: (croppedImage: File | null) => void;
}
const ImageCropper: React.FC<ImageCropperProps> = ({ imageSrc, showAspectOption = false, onCropComplete, selectedImage }) => {
    const [ratio, setRatio] = React.useState('4/4');
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useSafeState<number>(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

    const onCropChange = (croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };
    const showCroppedImage = async () => {
        try {
            const croppedImageBlob = await getCroppedImg(selectedImage, croppedAreaPixels);
            onCropComplete(croppedImageBlob);
        } catch (e) {}
    };

    const onChangeRatio = (e: any) => {
        if (e) {
            setRatio(e);
        }
    };

    return (
        <div className="w-full">
            <div className="h-[404px] relative rounded-md mb-5">
                <Cropper
                    image={URL.createObjectURL(selectedImage) || imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={Number(ratio.split('/')[0]) / Number(ratio.split('/')[1])}
                    onCropChange={setCrop}
                    onCropComplete={onCropChange}
                    onZoomChange={setZoom}
                    classes={{
                        containerClassName: 'h-full rounded-md',
                    }}
                />
            </div>

            <div className="w-full">
                {showAspectOption && (
                    <div className="mb-6 text-left">
                        <p className="mb-1">Select Aspect Ratio</p>
                        <RadioGroup className="flex items-center justify-start gap-x-4" onValueChange={onChangeRatio} value={ratio}>
                            <div className="flex items-center justify-start gap-x-2">
                                <RadioGroupItem id="4/4" value={'4/4'} />
                                <label className="font-normal cursor-pointer text-text-primary" htmlFor="4/4">
                                    4:4
                                </label>
                            </div>
                            <div className="flex items-center justify-start gap-x-2">
                                <RadioGroupItem id="16/9" value={'16/9'} />
                                <label className="font-normal cursor-pointer text-text-primary" htmlFor="16/9">
                                    16:9
                                </label>
                            </div>
                            <div className="flex items-center justify-start gap-x-2">
                                <RadioGroupItem id="21/9" value={'21/9'} />
                                <label className="font-normal cursor-pointer text-text-primary" htmlFor="21/9">
                                    21:9
                                </label>
                            </div>
                        </RadioGroup>
                    </div>
                )}
                <div className="flex items-center px-1 bg-opacity-50 rounded-full bg-text-primary">
                    <input
                        type="range"
                        className="w-full h-3 bg-white rounded-md appearance-none focus:outline-none"
                        id="slider"
                        min={1}
                        max={10}
                        step={0.2}
                        value={zoom}
                        onChange={e => setZoom(Number(e.target.value))}
                    />
                    <span className="mx-1 text-white">{zoom}X</span>
                </div>

                <div className="flex items-center justify-end mt-6 space-x-3">
                    <CustomButton
                        className="px-6 py-3 text-white rounded-md"
                        onClick={() => {
                            showCroppedImage().then();
                        }}>
                        Save
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default ImageCropper;
