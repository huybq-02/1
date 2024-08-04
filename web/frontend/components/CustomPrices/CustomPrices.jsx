import { ChoiceList, RadioButton, TextField } from "@shopify/polaris";
import { useCallback, useEffect, useState } from "react";
import React from "react";

const CustomPrices = () => {
    const [selected, setSelected] = useState(['hidden']);
  
    const handleChange = useCallback((value) => setSelected(value), []);

  return (
    <div
      className={`bg-white p-4 rounded-xl shadow-md `}
    >
      <p className="text-[16px] font-bold text-[#303030] mb-3">Custom Prices</p>
      <div className="flex flex-col gap-2">
      <ChoiceList
        title="Company name"
        choices={[
            {label: 'Hidden', value: 'hidden'},
            {label: 'Optional', value: 'optional'},
            {label: 'Required', value: 'required'},
        ]}
        selected={selected}
        onChange={handleChange}
        />

        <TextField
        //   value={}
        //   onChange={onChange}
          type="number"
          label="Amount"
          autoComplete="off"
        //   error={customPrice.info.errorMessage}
        />
      </div>
    </div>
  );
};

export default CustomPrices;
