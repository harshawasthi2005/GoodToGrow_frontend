import Carousel from "@/components/Carousel";
import Course from "@/pages/Course";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";
import { useRouter } from "next/router";
import React, { useState ,  useEffect} from 'react';


export default function Index() {
  const router=useRouter();
  const LoggedIn=router.query.myBooleanParam === 'true';

  return (
    <>
      <div>
      {LoggedIn && <Notification/>}
      </div>
      <Carousel />
      <Course LoggedIn={LoggedIn}/>
      <Footer />
    </>
  );
}
