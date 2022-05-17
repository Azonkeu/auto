import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Detail from "../src/components/Item";
import Footer from "../src/components/Footer";
import { useRouter } from "next/router";
import Header from "../src/components/Header";

interface Makesx {
  name?: string;
  imageUrl?: string;
}

interface Models {
  name?: string;
  wheelType?: string;
  series?: string;
  make?: Makesx;
  popular?: boolean;
}

interface Tyles {
  id: number;
  year?: number;
  state?: string;
  country?: string;
  transmission?: string;
  fuelType?: string;
  sellingCondition?: string;
  imageUrl?: string;
  insured?: boolean;
  marketplacePrice?: number;
  interiorColor?: string;
  exteriorColor?: string;
  websiteUrl?: string;
  model?: Models;
}

const Item: React.FC = () => {
  const [inf, setInfo] = useState<Tyles>();
  const { asPath } = useRouter();
  useEffect(() => {
    axios
      .get(`https://api-prod.autochek.africa/v1/inventory/car${asPath}`)
      .then((response: AxiosResponse) => {
        setInfo(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <Detail
        imageUrl={inf?.imageUrl}
        year={inf?.year}
        state={inf?.state}
        country={inf?.country}
        fuelType={inf?.fuelType}
        sellingCondition={inf?.sellingCondition}
        insured={inf?.insured}
        marketplacePrice={inf?.marketplacePrice}
        interiorColor={inf?.interiorColor}
        exteriorColor={inf?.exteriorColor}
        websiteUrl={inf?.websiteUrl}
        model={inf?.model}
        id={inf?.id}
      />
      <Footer />
    </div>
  );
};

export default Item;
