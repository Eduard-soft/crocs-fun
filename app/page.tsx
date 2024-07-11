"use client"
import CrocsFiltersOption from "@/components/Home/CrocsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCrocsList } from "@/services";
import { useEffect, useState } from "react";
import Image from "next/image";
import CrocsList from "@/components/Home/CrocsList";

export default function Home() {


  const [crocsList, setCrocsList] = useState<any>([])
  const [crocsOrgList, setCrocsOrgList] = useState<any>([])

  useEffect(() => {
    getCrocsList_();
  }, []);

  const getCrocsList_ = async() => {
    const result: any = await getCrocsList();
    setCrocsList(result?.crocsLists);
    setCrocsOrgList(result?.crocsLists);
  }

  const filterModelList = (model: string) => {
    const filterList = crocsOrgList.filter((item: any) =>
    item.model == model);

    setCrocsList(filterList);
  }

  const filterPriceList = (model: string) => {
    const filterList = crocsOrgList.filter((item: any) =>
    item.price == model);

    setCrocsList(filterList);
  }

  const filterSizeList = (model: string) => {
    const filterList = crocsOrgList.filter((item: any) =>
    item.size == model);

    setCrocsList(filterList);
  }

  return (
<div className="p-5 sm:px-10 md:px-20">
  <Hero />
  <SearchInput />
  <CrocsFiltersOption crocsList={crocsOrgList}
  setModel={(value:string)=>filterModelList(value)}
  setPrise={(value:string)=>filterPriceList(value)}
  setSize={(value:string)=>filterSizeList(value)}
  />
  <CrocsList crocsList = {crocsList} />
</div>
  );
}
