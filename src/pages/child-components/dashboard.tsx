import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetTotalCash } from "../../apis/totalCash";

export function Dashboard() {
  const user = useSelector((state: any) => state.user);
  const [cashDetail, setCashDetail] = useState<any>(null);
  const getCashDetails = async () => {
    const response = await GetTotalCash(user.id);
    if (response) {
      setCashDetail(response);
    }
  };
  useEffect(() => {
    console.log(cashDetail);
    if (cashDetail == null) {
      getCashDetails();
    }
  }, [cashDetail]);
  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <h2 className="bg-white text-black rounded-3xl px-3 shadow w-fit h-fit">
          Dashboard
        </h2>
      </header>
      <main>
        <section>
          <div className="flex flex-col justify-center items-center bg-white text-black rounded px-3 py-3 shadow w-fit h-fit">
            <h4>Total Expense</h4>
            <p className="font-bold text-primary py-3">{cashDetail != null ? cashDetail._sum.amount : 0}</p>
          </div>
        </section>
      </main>
    </>
  );
}
