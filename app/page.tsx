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
  useEffect(() => {
    getCrocsList_();
  }, []);

  const getCrocsList_ = async() => {
    const result: any = await getCrocsList();
    setCrocsList(result?.crocsLists)
    console.log(result)
  }
  return (
<div className="p-5 sm:px-10 md:px20">
  <Hero />
  <SearchInput />
  <CrocsFiltersOption />
  <CrocsList crocsList = {crocsList} />
</div>
  );
}
