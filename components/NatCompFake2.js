import axios from 'axios';

  const fetchdata= async ()=>{
  const res = await axios.get('../config/cat.json');
  const data = await res.json();
  console.log(data);
}
fetchdata();
