import React, { useEffect } from "react";
import { FormLayout, Select, TextField } from "@shopify/polaris";

const options = [
  { label: "Enable", value: "enable" },
  { label: "Disable", value: "disable" },
];

const GeneralInfomation = () => {

  return (
    <div className={`bg-white p-4 rounded-xl`}>
      <p className="text-[15px] font-bold text-[#303030] mb-4">
        Genaral Infomation
      </p>
      <div className="flex flex-col justify-center gap-2 text-[13px]">
        <TextField
        //   value={generalInfo.name}
        //   onChange={(value) => onChange("name", value)}
          type="text"
          label="Name"
          autoComplete="off"
        //   error={generalInfo.info.errorName}
        />
        <TextField
        //   value={generalInfox.priority}
        //   onChange={(value) => onChange("priority", value)}
          type="text"
          label="Priority"
          autoComplete="off"
        //   error={generalInfo.info.errorPriority}
          helpText={
            <span className="">
              Please enter an integer from 0 to 99. 0 is the highest priority
            </span>
          }
        />
        <Select
          label="Status"
          options={options}
        //   onChange={(value) => onChange("status", value)}
        //   value={generalInfo.status}
        />
      </div>
    </div>
  );
};

export default GeneralInfomation;
