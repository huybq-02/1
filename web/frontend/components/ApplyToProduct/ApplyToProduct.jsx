import ProductCollecitons from "@/feature/ProductCollecitons";
import ProductTags from "@/feature/ProductTags";
import SpecificProducts from "@/feature/SpecificProduct";
import { ChoiceList } from "@shopify/polaris";
import { useCallback, useEffect, useMemo, useState } from "react";

const ApplyToProduct = () => {
    const [selected, setSelected] = useState(['none']);
    const [textFieldValue, setTextFieldValue] = useState('');
  
    const handleChoiceListChange = useCallback(
      (value) => setSelected(value),
      [],
    );
  
    const handleTextFieldChange = useCallback(
      (value) => setTextFieldValue(value),
      [],
    );


  const renderChildren = useCallback(
    (isSelected) => {
      if (!isSelected) return null;

      switch (selected[0]) {
        case "All products":
          return null;
        case "Specific products":
            return <SpecificProducts />;
        case "Product collections":
            return <ProductCollecitons />;
        case "Product tags":  
            return <ProductTags />;
        default:
          return null;
      }
    },
    [selected]
  );

  return (
    <div
      className={`bg-white p-4 rounded-xl`}
    >
      <p className="text-[15px] font-bold text-[#303030] mb-4">
        Apply to product
      </p>
      <div className="flex flex-col justify-center gap-[6px] text-[13px]">
        <ChoiceList
          choices={[
            { label: "All products", value: "All products", renderChildren },
            {
              label: "Specific products",
              value: "Specific products",
              renderChildren,
            },
            {
              label: "Product collections",
              value: "Product collections",
              renderChildren,
            },
            {
              label: "Product tags",
              value: "Product tags",
              renderChildren,
            },
          ]}
          selected={selected}
          onChange={handleChoiceListChange}
        />
      </div>
    </div>
  );
};

export default ApplyToProduct;
