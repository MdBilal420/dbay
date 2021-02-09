import React from 'react';
import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';
import ErrorText from './ErrorText';


function AppFormImagePicker({ name }) {

    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name]

    const handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri]);
    }

    const handleRemove = uri => {
        setFieldValue(name, imageUris.filter((imageUri => imageUri !== uri)))
    }

    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorText error={errors[name]} visible={touched[name]} />
        </>
    );
}


export default AppFormImagePicker;