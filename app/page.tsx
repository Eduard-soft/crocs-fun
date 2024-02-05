"use client"
import CrocsFiltersOption from "@/components/Home/CrocsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCrocsList } from "@/services";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {

  useEffect(() => {
    getCrocsList_();
  }, []);

  const [crocsList, setCrocsList] = useState<any>([])
  const getCrocsList_ = async() => {
    const result: any = await getCrocsList();
    setCrocsList(result?.crocsList)
  }
  return (
<div className="p-5 sm:px-10 md:px20">
  <Hero />
  <SearchInput />
  <CrocsFiltersOption />

</div>
  );
}
