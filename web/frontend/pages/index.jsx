import { Icon } from "@shopify/polaris";

import { ArrowLeftIcon } from "@shopify/polaris-icons";
import Title from "@/components/Title";
import GeneralInfomation from "@/components/GeneralInfomation/GeneralInfomation";
import CustomPrices from "@/components/CustomPrices/CustomPrices";
import ApplyToProduct from "@/components/ApplyToProduct/ApplyToProduct";
import ShowProductPricing from "@/components/ShowProductPricingDetail";
import Button from "@/components/Button";

export default function HomePage() {
  // const { t } = useTranslation();
  return (
    <div className="flex gap-6 w-[966px] mx-auto">
      <div className="flex-1 gap-10">
        <div className="flex items-center justify-start gap-1">
          <p className="m-0 cursor-pointer p-1 rounded-lg hover:bg-gray-300">
            <Icon source={ArrowLeftIcon} />
          </p>
          <Title>New Pricing Rule</Title>
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <GeneralInfomation />
          <ApplyToProduct />
          <CustomPrices />
          <div className="w-fit ml-auto space-x-3 pb-4">
            <Button type="primary" onClick={() => {}}>
              Save
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <Title bg>Show Product Pricing Details</Title>
        <ShowProductPricing/>
      </div>
    </div>
  );
}
