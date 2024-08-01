"use client";
import { Dispatch, SetStateAction, MutableRefObject } from "react";
import Image from "next/image";
import { useGlobalContext } from "./SearchPage";

const InputBox = ({
  value,
  setValue,
  type,
  controller
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type: string,
  controller: MutableRefObject<AbortController | undefined>
}) => {

  const { setIsLoading } = useGlobalContext()

  const clearText = () => {
    setValue("");
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    setValue(e.target.value);

    if(controller.current){
      controller.current.abort()
    }
    
    
  };
  return (
    <div className="input flex items-center gap-2 px-4 py-3.5 border-accent border-solid border-2 rounded-lg bg-transparent">
      <input
        id="anime-query"
        type="text"
        className="grow text-sm text-white font-medium bg-transparent outline-none font-main"
        placeholder={`Search ${type}... `}
        value={value}
        onChange={handleChange}
      />
      <div className={`relative w-4 h-4 cursor-pointer ${value === "" ? "hidden" : "block"}`} onClick={clearText}>
        <Image
          src={"/icons/clear_text_icon.svg"}
          alt="clear-icon"
          fill
          className="object-contain"
          priority={true}
          quality={100}
        />
      </div>
    </div>
  );
};

export default InputBox;