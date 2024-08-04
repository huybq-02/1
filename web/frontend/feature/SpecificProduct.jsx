import { Button, Icon, TextField } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { SearchIcon } from "@shopify/polaris-icons";
import React from "react";
import clsx from "clsx";

export default function SpecificProducts() {
 
  return (
    <>
      <div className="flex gap-2 my-1 items-center">
        {/* <ProductsCard /> */}
        <div className="flex-1" onClick={() => setIsOpen(true)}>
          <TextField
            prefix={<Icon source={SearchIcon} />}
            // value={searchProduct}
            // onChange={setSearchProduct} //same: onChange={value => setSearchProduct(value)}, short syntax
            label=""
            type="text"
            placeholder="Search product"
            autoComplete="off"
            // error={applyToProduct.info.errorMessage}
          />
        </div>
        <div className="h-full mb-auto">
          <Button>Browse</Button>
        </div>
      </div>
    </>
  );
}
