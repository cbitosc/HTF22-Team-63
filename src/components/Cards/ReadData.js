import { csv } from 'd3';
const csvUrl="https://1drv.ms/u/s!AjHcwjcTuerfgQ6ApbaJl18CJE6O";
export const getdata = async ()=>{
  const data = csv({csvUrl})
  console.log("Excel:",data)
}

export default function ReadData() {
  
  return (
    <>
      <div>
      
      </div>
    </>
  );
}
