import React, { useState } from "react";
import { useRouter } from "next/router"
import BottomButton from "../src/components/BottomButton";
import RadioGroup from "../components/RadioGroup";
import Radio from "../components/Radio"


export default function accessoryChoice() {
  const router = useRouter();
  const [selectedAccessory, setSelectedAccessory] = useState('')

  const goNextPage = () => {
    localStorage.setItem('selected_accessory', selectedAccessory)
    router.push('/complete')
  }


  console.log(selectedAccessory)
  
  //const onChangeHandler = (e) => {
  //  setSelectedAccessory(e.target.value)
  //}

  

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
         모니터와 키보드 중 원하는 악세서리를 선택해주세요.
        </h3>
    </div>
    <RadioGroup name="accessory" onChange={(state) => setSelectedAccessory(state)}>
      <Radio id="monitor" name="accessory" value="monitor" label="monitor"/>
      <Radio id="keyboard" name="accessory" value="keyboard" label="keyboard"/>
    </RadioGroup>
    <BottomButton onClick={goNextPage}>
      최종화면으로 넘어가기
      </BottomButton>
      </div>
     
  );
}

