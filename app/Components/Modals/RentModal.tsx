'use client';
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import { useState, useMemo } from "react";
import Heading from "../Heading";
import { categories } from "../Navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import {  useForm } from "react-hook-form";
import CountryInput from "../inputs/CountryInput";
enum Steps {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}
const RentModal = () => {
  const rentModal = useRentModal();
  const [steps,setSteps] = useState(Steps.CATEGORY);
  const {register,handleSubmit,setValue,watch,formState:{errors},reset} = useForm<FieldValues>({
    defaultValues:{
        category:"",
        location:null,
        guestcount: 1,
        roomcount: 1,
        bathroomcount: 1,
        imageSrc: "",
        price: 1,
        title: "",
        description: "",
    }
  });

  const category = watch('category');
  const location = watch('location');

  const setCustomValues = (id:string, value:any) => {
    setValue(id,value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
    })
  }

  const onBack = () => {
    setSteps((value) => value - 1);
  }

  const onNext = () => {
    setSteps((value) => value + 1);
  }

  const actionLabel = useMemo(() => {
    if (steps === Steps.PRICE) {
        return "Create";
        }
        return "Next";
  },[steps]);

  const secondaryActionLabel = useMemo(() => {
    if(steps === Steps.CATEGORY){
       return undefined;
    }
    return "Back";
  },[steps])

  let bodyContent = (
    <div className="flex flex-col gap-8">
       <Heading title="Which of these best describes your rental?" subtitle="Pick a category" />
       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mah-h-[50vh] overflow-y-auto">
         {categories.map((item,index) => (
           <div key={index} className="col-span-1">
              <CategoryInput
                onClick={(category) => setCustomValues('category',category)}
                selected={category === item.label}
                label={item.label}
                icon={item.icon}
                description={item.description}
              />
           </div>
         ))}
       </div>
    </div>
  )
  if(steps === Steps.LOCATION){
    bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading title="Where is your rental located?" subtitle="Help Guests to find your place" />
            <CountryInput value={location} onChange={(value) => setCustomValues('location',value)}/>
        </div>
    )
  }
  return (
    <Modal 
      isOpen={rentModal.isOpen}
      title="Holiday Destination"
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel="Next"
      body={bodyContent}
      secondaryLabel={secondaryActionLabel}
      secondaryAction={steps === Steps.CATEGORY ? undefined : onBack}
    />
  )
}

export default RentModal