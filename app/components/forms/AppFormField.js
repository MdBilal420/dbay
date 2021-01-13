import { useFormikContext } from 'formik';
import React from 'react';
import AppTextInput from '../AppTextInput'
import ErrorText from './ErrorText'



function AppFormField({ name, width, ...otherProps }) {

    const { handleChange, setFieldTouched, errors, touched } = useFormikContext()

    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps}
            />

            <ErrorText error={errors[name]} visible={touched[name]} />

        </>
    );
}

export default AppFormField;