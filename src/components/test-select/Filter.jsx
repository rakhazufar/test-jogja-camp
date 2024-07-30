import React from "react";

function Filter({ provinsiProps, kabupatenProps, kecamatanProps, desaProps }) {
  const { provinsi, ProvinsiSelected, setProvinsiSelected } = provinsiProps;
  const { kabupaten, KabupatenSelected, setKabupatenSelected } = kabupatenProps;
  const { kecamatan, KecamatanSelected, setKecamatanSelected } = kecamatanProps;
  const { desa, DesaSelected, setDesaSelected } = desaProps;

  return (
    <div className="w-[80%] bg-gray-200 p-4 rounded-xl">
      <p className="text-lg	font-bold">Filter</p>

      {/* Provinsi */}
      <div className="flex flex-col py-2 gap-2">
        <label className="text-sm font-semibold" id="provinsi">
          Provinsi
        </label>
        <select
          id="provinsi"
          className="h-12 px-2 w-[100%] rounded-xl border-[1px] custom-select"
          value={ProvinsiSelected}
          onChange={(event) => {
            setProvinsiSelected(event.target.value);
          }}
        >
          <option value={0}>Pilih</option>
          {provinsi &&
            provinsi.map((prov) => (
              <option value={prov.id}>{prov.name}</option>
            ))}
        </select>
      </div>

      {/* Kabupaten */}
      <div className="flex flex-col py-2 gap-2">
        <label className="text-sm font-semibold">Kabupaten</label>
        <select
          className="h-12 px-2 w-[100%] rounded-xl border-[1px] custom-select"
          value={KabupatenSelected}
          onChange={(event) => {
            setKabupatenSelected(event.target.value);
          }}
        >
          <option value={0}>Pilih</option>
          {kabupaten &&
            kabupaten.map((kab) => <option value={kab.id}>{kab.name}</option>)}
        </select>

        {/* Kabupaten */}
        <div className="flex flex-col py-2 gap-2">
          <label className="text-sm font-semibold">Kecamatan</label>
          <select
            className="h-12 px-2 w-[100%] rounded-xl border-[1px] custom-select"
            value={KecamatanSelected}
            onChange={(event) => {
              setKecamatanSelected(event.target.value);
            }}
          >
            <option value={0}>Pilih</option>
            {kecamatan &&
              kecamatan.map((kec) => (
                <option value={kec.id}>{kec.name}</option>
              ))}
          </select>
        </div>

        {/* Kabupaten */}
        <div className="flex flex-col py-2 gap-2">
          <label className="text-sm font-semibold">Desa</label>
          <select
            className="h-12 px-2 w-[100%] rounded-xl border-[1px] custom-select"
            value={DesaSelected}
            onChange={(event) => {
              setDesaSelected(event.target.value);
            }}
          >
            <option value={0}>Pilih</option>
            {desa && desa.map((d) => <option value={d.id}>{d.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
