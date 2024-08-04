import {Page, LegacyCard, DataTable} from '@shopify/polaris';
import React from 'react';

export default function ShowProductPricing() {
  const rows = [
    ['Emerald Silk Gown',  '$122,500.00'],
    ['Mauve Cashmere Scarf',  '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
    ],
  ];

  return (
    <div className="text-[14px] rounded-xl w-fit">
        <DataTable
            columnContentTypes={[
                'text',
                'numeric',
                'numeric',
            ]}
            headings={[
                'Product',
                'Price',
                'SKU Number'
            ]}
            rows={rows}
            totals={['', '', '$155,830.00']}
            />
    </div>
  );
}