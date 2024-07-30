import { useQuery } from "react-query";
import axios from "axios";

// Provinsi
const fetchDataProvinsi = async () => {
  const { data } = await axios.get(
    "http://apikab.jcamp.pt/public/api/v1/reference/provinces"
  );
  return data;
};

const useFetchDataProvinsi = () => {
  return useQuery("provinsi", fetchDataProvinsi);
};

// Kabupaten
const fetchDataKabupaten = async (prov_id) => {
  const { data } = await axios.get(
    `http://apikab.jcamp.pt/public/api/v1/reference/regencies_of/${prov_id}`
  );
  return data;
};

const useFetchDataKabupaten = (prov_id) => {
  return useQuery("kabupaten", () => fetchDataKabupaten(prov_id), {
    enabled: prov_id !== 0,
  });
};

// Kecamatan
const fetchDataKecamatan = async (kabupaten_id) => {
  const { data } = await axios.get(
    `http://apikab.jcamp.pt/public/api/v1/reference/districts_of/${kabupaten_id}`
  );
  return data;
};

const useFetchDataKecamatan = (kabupaten_id) => {
  return useQuery("kecamatan", () => fetchDataKecamatan(kabupaten_id), {
    enabled: kabupaten_id !== 0,
  });
};

//Desa
const fetchDataDesa = async (kecamatan_id) => {
  const { data } = await axios.get(
    `http://apikab.jcamp.pt/public/api/v1/reference/villages_of/${kecamatan_id}`
  );
  return data;
};

const useFetchDataDesa = (kecamatan_id) => {
  return useQuery("desa", () => fetchDataDesa(kecamatan_id), {
    enabled: kecamatan_id !== 0,
  });
};

export {
  useFetchDataProvinsi,
  useFetchDataKabupaten,
  useFetchDataKecamatan,
  useFetchDataDesa,
};
