import Form from "./Currency_Converter/Form";
import Head from "./Currency_Converter/Head";

export default function Converter() {
  return (
    <div className="container mx-auto w-1/3 h-[20rem] mt-10 border-red-600">
        <Head/>
        <Form/>
    </div>
  );
}
