import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function CheckBox(props) {
  const { name, label, options, ...rest } = props;
  return (
    <>
      <div>
        <label>{label}</label>
        <Field name={name} {...rest}>
            {
                ({field}) => {
                    // input - type, id, name,value
                    // label - for
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key} >
                                <input
                                type='checkbox'
                                id={option.value}
                                {...field}
                                value={option.value}
                                checked={field.value.includes(option.value)} />
                                <label htmlFor={option.value} >{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }
            }
        </Field>
        <ErrorMessage name={name} component ={TextError} />
    </div>
    </>
  );
}

export default CheckBox;
