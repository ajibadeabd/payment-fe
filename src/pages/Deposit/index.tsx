import React, { useEffect, useState } from "react";
import { Sidebar1, Table as DepositTable } from "components";
import { Button, Img, Input, Line, List, Slider, Text } from "components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getDeposit, makeDeposit } from "store/account.store/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const DepositPage = () => {
  const [depossits] = useState([
    { id: 1, name: "John Doe", amount: 1000, date: "2023-08-15" },
    { id: 2, name: "Jane Smith", amount: 1500, date: "2023-08-16" },
    { id: 3, name: "Alice Johnson", amount: 800, date: "2023-08-17" },
    // Add more deposit entries here
  ]);
  const { depositLink } = useSelector((state: any) => state.account);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // Added state for loading

  const [groupeightvalue, setGroupeightvalue] = React.useState<string>("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const { deposits } = useSelector((state: any) => state.account);

  console.log(deposits);

  const [searchParams] = useSearchParams();
  let reference = searchParams.get("reference");
  let trxref = searchParams.get("trxref");
  let state = searchParams.get("state");

  const openResizableWindow = (url, width, height) => {
    // childRef.current = window.open(
    //   url(),
    //   "GoogleOauth2",
    //   "width=550,height=170,left=150,top=200,toolbar=1,status=1,"
    // );

    const options = `width=${width},height=${height},toolbar=1,status=1,resizable=yes`;
    window.open(url, "PaystackLink", options);
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log(data);

    const response = await dispatch(
      makeDeposit({
        ...data,
        amount: +data.amount,
        // state: "any state you wana put just to keep tract of the payment page",
        state: "jbngucfgruiglulojghlkjlh",
      }) as any
    );
    if (response?.payload?.success) {
      const link = response.payload.data.checkout_url;
      console.log(link);

      // Open a new window with the provided link
      if (link) {
        openResizableWindow(link, 800, 600);
      }

      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    // self.close();
    if (state === "jbngucfgruiglulojghlkjlh" && reference && trxref) {
      // eslint-disable-next-line no-restricted-globals
      opener.postMessage({
        data: { trxref, reference },
        key: "paystack:link",
      });
      alert("Your deposit is processing");

      // eslint-disable-next-line no-restricted-globals
      self.close();
    } else {
      // eslint-disable-next-line no-restricted-globals
      self.close();
    }
    console.log(reference, trxref);
  }, [trxref, reference]);

  useEffect(() => {
    const handleMessage = (event: any) => {
      const data = event.data;
      console.log(data);

      if (event.data.key === "paystack:link") {
        const data = event.data.data;
        console.log(event.data);
        // if (data.state === params.state) {
        //   // dispatch(connectChannels(data) as any);
        // }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    dispatch(getDeposit({}) as any);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 w-full flex  ">
      <div className="   bg-green-100">
        {/* <div className="hidden lg:visible"> */}
        <Sidebar1 />
      </div>
      <div className="flex w-[100%] bg-gray-200  flex-col items-center">
        <div className="p-6  mt-16 w-[40%] flex flex-col max-h-[30%] bg-red-100 rounded-lg   shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Deposit Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <label className="block mb-2" htmlFor="currency">
              Select Currency:
            </label>
            <select
              className="border rounded p-2 w-full mb-4"
              id="currency"
              name="currency"
              {...register("currency", { required: true })}
            >
              <option value="NGN">NGN</option>
              {/* Add more currency options as needed */}
            </select>
            {errors.currency && (
              <p className="text-red-500">Currency is required</p>
            )}

            <label className="block mb-2" htmlFor="amount">
              Amount to Deposit:
            </label>
            <input
              className="border rounded p-2 w-full mb-4"
              type="number"
              id="amount"
              name="amount"
              step="0.01"
              {...register("amount", { required: true, min: 100.0 })}
            />
            {errors.amount && (
              <p className="text-red-500">
                Amount is required and must be greater than 0
              </p>
            )}

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              type="submit"
            >
              Deposit
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-6   justify-start w-full">
          <div className="flex flex-col gap-[27px] items-start justify-start w-full">
            <Text
              className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
              size="txtInterSemiBold22"
            >
              Recent Transactions
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[38%] md:w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-[35%] sm:w-full">
                  <Text
                    className="text-base text-blue-A700"
                    size="txtInterMedium16BlueA700"
                  >
                    All Transactions
                  </Text>
                  <Line className="bg-blue-A700 h-[3px] rounded-tl-[10px] rounded-tr-[10px] w-full" />
                </div>
                <Text
                  className="sm:ml-[0] ml-[71px] text-base text-bluegray-400"
                  size="txtInterMedium16Bluegray400"
                >
                  Income
                </Text>
                <Text
                  className="sm:ml-[0] ml-[82px] text-base text-bluegray-400"
                  size="txtInterMedium16Bluegray400"
                >
                  Expense
                </Text>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
            </div>
          </div>

          <DepositTable
            title={["S/N", "Amount", "Description", "status", "Date"]}
            deposits={deposits}
          />

          <div className="flex flex-row items-center justify-end w-[30%] md:w-full">
            <div className="flex flex-row items-center justify-evenly w-[28%]">
              <Img
                className="cursor-pointer h-6 w-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
                onClick={() => sliderRef.current?.slidePrev?.()}
              />
              <Text
                className="text-[15px] text-indigo-600"
                size="txtInterMedium15"
              >
                Previous
              </Text>
            </div>
            <Button className="bg-indigo-600 cursor-pointer font-medium h-10 leading-[normal] ml-3 py-[11px] rounded-[10px] text-[15px] text-center text-white-A700 w-10">
              1
            </Button>
            <Text
              className="ml-[11px] text-[15px] text-indigo-600"
              size="txtInterMedium15"
            >
              2
            </Text>
            <Text
              className="ml-[27px] text-[15px] text-indigo-600"
              size="txtInterMedium15"
            >
              3
            </Text>
            <Text
              className="ml-[27px] text-[15px] text-indigo-600"
              size="txtInterMedium15"
            >
              4
            </Text>
            <div className="flex flex-row items-center justify-evenly ml-7 w-[19%]">
              <Text
                className="text-[15px] text-indigo-600"
                size="txtInterMedium15"
              >
                Next
              </Text>
              <Img
                className="cursor-pointer h-6 w-6"
                src="images/img_arrowright.svg"
                alt="arrowright"
                onClick={() => sliderRef.current?.slideNext?.()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
