export default function DashboardContents() {
  return (
    <>
      <div id="content" className="p-4 sm:ml-64">
        <h1 className="text-xl">Data Karyawan</h1>
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className=" col-span-6 sm:col-span-3 bg-blue-200 flex flex-col items-center p-3 rounded-lg shadow-md">
            <div className="mb-1">Jumlah Karyawan</div>
            <div className="text-4xl">50</div>
          </div>
          <div className="col-span-6 sm:col-span-3 bg-blue-200 flex flex-col items-center p-3 rounded-lg shadow-md">
            <div className="mb-1">Jumlah Karyawan Aktif</div>
            <div className="text-4xl">50</div>
          </div>
          <div className="col-span-6 sm:col-span-3 bg-blue-200 flex flex-col items-center p-3 rounded-lg shadow-md">
            <div className="mb-1">Jumlah Karyawan Keluar</div>
            <div className="text-4xl">50</div>
          </div>
          <div className="col-span-6 sm:col-span-3 bg-blue-200 flex flex-col items-center p-3 rounded-lg shadow-md">
            <div className="mb-1">Jumlah Karyawan Pensiun</div>
            <div className="text-4xl">50</div>
          </div>
          <div className="col-span-6 sm:col-span-3 bg-blue-200 flex flex-col items-center p-3 rounded-lg shadow-md">
            <div className="mb-1">Jumlah Karyawan Pria</div>
            <div className="text-4xl">50</div>
          </div>
          <div className="col-span-6 sm:col-span-3 bg-blue-200 flex flex-col items-center p-3 rounded-lg shadow-md">
            <div className="mb-1">Jumlah Karyawan Wanita</div>
            <div className="text-4xl">50</div>
          </div>
          <div className="col-span-6 sm:col-span-3 bg-blue-200 flex flex-col items-center p-3 rounded-lg shadow-md">
            <div className="mb-1">Jumlah Departemen</div>
            <div className="text-4xl">50</div>
          </div>
          <div className="col-span-6 sm:col-span-3 bg-blue-200 flex flex-col items-center p-3 rounded-lg shadow-md">
            <div className="mb-1">Jumlah jabatan</div>
            <div className="text-4xl">50</div>
          </div>
        </div>
      </div>
    </>
  );
}
