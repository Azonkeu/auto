import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Media from "../../src/components/Media";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";

interface Med {
  id: number;
  name: string;
  createdAt: string;
  type: string;
  url: string;
}

interface Obj {
  carMediaList?: Med[];
}

const Item: React.FC = () => {
  const [cars, setCars] = useState<Obj>();
  const { asPath } = useRouter();

  useEffect(() => {
    axios
      .get(`https://api-prod.autochek.africa/v1/inventory/${newstr}`)
      .then((response: AxiosResponse) => {
        setCars(response.data);
      });
  }, []);

  const vet = asPath.split("");
  vet.splice(0, 10);
  const ret = vet.join("");
  const str = "car_media?carId=" + ret;
  const arr = str.split("");
  arr.splice(16, 1);
  const newstr = arr.join("");
  const ind = ret.split("");
  ind.splice(0, 1);
  const id = ind.join("");

  return (
    <div>
      <Media carMediaList={cars?.carMediaList} id={id} />
      <Footer />
    </div>
  );
};

export default Item;
