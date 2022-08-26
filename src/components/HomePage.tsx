import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { Container } from "./Container";
import GistDisplayToggle from "./GistDisplayToggle";
import GistGrid from "./GistGrid";
import GistTable from "./GistTable";
import { fetchGists } from "../state/actions/gistActions";

type Props={
  searchText ?: string,
}

const HomePage = (props : Props) => {
  const { searchText } = props;
  const [display , setDisplay] = useState("table");

  const toggleDisplay = () =>{
    setDisplay( display === "table" ? "grid" : "table" )
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGists(searchText));
 }, [searchText])

  return (
    <Container>
        <GistDisplayToggle 
            text={display === "table" ? "grid" : "table"}
            onClick={toggleDisplay} />
            {
                display === "table" ? <GistTable /> : <GistGrid />
            }
    </Container>
  )
}

export default HomePage