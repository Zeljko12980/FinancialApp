import React,{useState,SyntheticEvent,ChangeEvent} from 'react'

interface Props{

}

const Search:React.FC<Props> = (props: Props):JSX.Element => {
 const [search,setSearch]=useState<string>("");



 const onClick=(e:SyntheticEvent)=>
 {
    
    console.log(e.target.value);
 };

 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };


  return (
    <div>
    <input value={search} onChange={(e)=>handleChange(e)}></input>
    <button onClick={(e)=>onClick(e)}></button>
    </div>
  )
}

export default Search;
