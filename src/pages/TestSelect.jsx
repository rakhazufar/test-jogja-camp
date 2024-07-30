import React, { useState, useEffect } from "react";
import Filter from "../components/test-select/Filter";
import {
  useFetchDataProvinsi,
  useFetchDataKabupaten,
  useFetchDataKecamatan,
  useFetchDataDesa,
} from "../hooks/useFetchData";
import DisplayFilter from "../components/test-select/DisplayFilter";

function TestSelect() {
  const [ProvinsiSelected, setProvinsiSelected] = useState(0);
  const [KabupatenSelected, setKabupatenSelected] = useState(0);
  const [KecamatanSelected, setKecamatanSelected] = useState(0);
  const [DesaSelected, setDesaSelected] = useState(0);

  const { data: provinsi } = useFetchDataProvinsi();
  const { data: kabupaten, refetch: refetchKabupaten } =
    useFetchDataKabupaten(ProvinsiSelected);
  const { data: kecamatan, refetch: refetchKecamatan } =
    useFetchDataKecamatan(KabupatenSelected);
  const { data: desa, refetch: refetchDesa } =
    useFetchDataDesa(KecamatanSelected);

  useEffect(() => {
    if (ProvinsiSelected !== 0) {
      refetchKabupaten();
      setKabupatenSelected(0);
      setKecamatanSelected(0);
      setDesaSelected(0);
    }
  }, [ProvinsiSelected, refetchKabupaten]);

  useEffect(() => {
    if (KabupatenSelected !== 0) {
      refetchKecamatan();
      setKecamatanSelected(0);
      setDesaSelected(0);
    }
  }, [KabupatenSelected, refetchKecamatan]);

  useEffect(() => {
    if (KecamatanSelected !== 0) {
      refetchDesa();
      setDesaSelected(0);
    }
  }, [KecamatanSelected, refetchDesa]);

  return (
    <div className="flex justify-center w-screen">
      <div className="container mx-auto p-4">
        <div className="flex">
          <div className="lg:w-4/12 flex flex-col">
            <Filter
              provinsiProps={{
                provinsi,
                ProvinsiSelected,
                setProvinsiSelected,
              }}
              kabupatenProps={{
                kabupaten,
                KabupatenSelected,
                setKabupatenSelected,
              }}
              kecamatanProps={{
                kecamatan,
                KecamatanSelected,
                setKecamatanSelected,
              }}
              desaProps={{
                desa,
                DesaSelected,
                setDesaSelected,
              }}
            />
          </div>
          <div className="lg:w-8/12">
            <DisplayFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestSelect;
