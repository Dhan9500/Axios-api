import { useState } from "react";
import { countryList } from "../utils/helper";
import axios from "axios";

export default function Form() {
//   const countryList = countryList1;

  const baseUrl =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  const baseFlag = "https://flagsapi.com";

  //   const toFlag = "https://flagsapi.com/AM/flat/64.png";

  const [froms, setFrom] = useState("AF");
  const [tos, setTo] = useState("AF");

  const handleFromSelect = (event) => {
    console.log(event.target.value);
    setFrom(event.target.value);
    setFromFlagState(`https://flagsapi.com/${event.target.value.slice(0,2)}/flat/64.png`);
  };
  const handleToSelect = (event) => {
    console.log(event.target.value);
    setTo(event.target.value);
    setToFlagState(`https://flagsapi.com/${event.target.value.slice(0,2)}/flat/64.png`);
  };
  const [fromFlag, setFromFlagState] = useState(
    `https://flagsapi.com/${froms}/flat/64.png`
  );
  const [toFlag, setToFlagState] = useState(
    `https://flagsapi.com/${tos}/flat/64.png`
  );
  console.log(fromFlag);
  console.log(toFlag);
  console.log(froms);
  console.log(tos);


  const [amount, setAmount] = useState(100);
  //   console.log(amount);
  const [result,setResult]=useState(0);
  

  const changeRate=(event)=>{
    event.preventDefault();
    axios.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${froms}&to=${tos}`).then((response)=>{
        setResult(response.data.rates[`${tos}`]);
        // console.log(result.rates[0]);
    })
  }
  console.log(result);

  return (
    <div className="form bg-zinc-400 w-full h-full">
      <div className="amount flex justify-center">
        <h1 className="mt-3 text-2xl font-semibold p-2">Amount</h1>
      </div>
      <div>
        <form action="" onSubmit={changeRate}>
          <div className="flex justify-center">
            <input
              onChange={(e) => setAmount(e.target.value)}
              className="h-10 w-96 rounded-lg p-2"
              type="number"
              defaultValue={amount}
              placeholder="Amount"
            />
          </div>
          <div className="flex justify-between mt-2 ">
            <div className="from ml-2">
              <h1 className="text-xl font-semibold">From</h1>
              <div className="flex justify-center items-center gap-2">
                <div className="w-10 rounded-md overflow-hidden">
                  <img className="object-cover" src={fromFlag} alt="" />
                </div>
                <div className="">
                  <select onChange={handleFromSelect} name="" id="">
                    {countryList.map((item, index) => (
                      <option key={item.id} value={item.currency}>
                        {item.currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="to mr-2">
              <h1 className="text-xl font-semibold">To</h1>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <select onChange={handleToSelect} name="" id="">
                    {countryList.map((item, index) => (
                      <option key={item.id} value={item.currency}>
                        {item.currency}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-10 rounded-md overflow-hidden">
                  <img className="object-cover" src={toFlag} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <h1 className="mt-5 text-base font-medium">The Exchage rate is: {result}</h1>
          </div>
          <div className="flex justify-center items-center mt-3">
            <input
              className="bg-sky-400 px-4 py-2 rounded-md"
              type="Submit"
              value="Convert"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
