import styles from "@/styles/Home.module.css";
import { useState , useEffect} from "react";
import Cards from "./Cards";



export default function Course(props) {
  var [show, setShow] = useState(false);
  let {LoggedIn}=props;
  const n=[1,2,3];
  var [firstArray,setFirstArray]=useState([]);
  var [secArray,setSecArray]=useState([]);
  useEffect(() => {
    async function fetchData() {
      try{
        let url='http://localhost:5000/api/notes/';
        let data = await fetch(url);
        let parseData = await data.json();
        setFirstArray(parseData.pdfs.slice(0,4));
        setSecArray(parseData.pdfs.slice(4));
      }catch(error){
        console.error(error);
      }
    }
    fetchData();    
  }, []);
  const handleClick = () => {
    setShow(!show);
  };
  
  return (
    <>
      <div className={styles.courseCon}>
        <p className={styles.coursetext}>Featured</p>
        <button className={styles.viewbtn} onClick={handleClick}>
          {`view ` + `${show ? "less" : "more"}`}
        </button>
      </div>
      <div style={{display: "flex", flexDirection: "row"}}>
      {firstArray.map((item)=>{
        return <Cards title={item.title} desc={item.desc} link={item.link} chapter={item.chapter} time={item.time} Bstyle={item.Bstyle} LoggedIn={LoggedIn}/>
      })
      }
      </div>
      {show && (
        <div style={{display: "flex", flexDirection: "row"}}>
        {secArray.map((item)=>{
          return <Cards title={item.title} desc={item.desc} link={item.link} chapter={item.chapter} time={item.time} Bstyle={item.Bstyle} LoggedIn={LoggedIn}/>
        })
        }
        </div>
      )}

      <div className={styles.courseCon}>
        <p className={styles.coursetext}>Programming</p>
        <button className={styles.viewbtn} onClick={handleClick}>
          {`view ` + `${show ? "less" : "more"}`}
        </button>
      </div>
      <div style={{display: "flex", flexDirection: "row"}}>
      {firstArray.map((item)=>{
        return <Cards title={item.title} desc={item.desc} link={item.link} chapter={item.chapter} time={item.time} Bstyle={item.Bstyle} LoggedIn={LoggedIn}/>
      })
      }
      </div>
      {show && (
        <div style={{display: "flex", flexDirection: "row"}}>
        {secArray.map((item)=>{
          return <Cards title={item.title} desc={item.desc} link={item.link} chapter={item.chapter} time={item.time} Bstyle={item.Bstyle} LoggedIn={LoggedIn}/>
        })
        }
        </div>
      )}
    </>
  );
}
