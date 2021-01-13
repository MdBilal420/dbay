import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorText from "./ErrorText";

function AppFormPicker({ items, name, numberOfColumns, placeholder, PickerItemComponent, width }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                onSelect={(item) => setFieldValue(name, item)}
                numberOfColumns={numberOfColumns}
                placeholder={placeholder}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorText error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;
