import { FileUploader } from 'react-drag-drop-files'
import { useState, useEffect } from 'react'
export const fileTypes = ['PNG', 'JPG']
const Drag = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    return (
        <div className='flex justify-center items-center flex-col h-full'>
            <h1 className='text-3xl mb-3'>Selecione un imagen <b className='text-purple-500'>PNG</b> o <b className='text-purple-500'>JPG</b></h1>
            <FileUploader handleChange={handleChange} name='file' multiple={false} label={'Cargue o suelte un archivo aquí'} types={fileTypes} />
        </div>
    )
}

export default Drag