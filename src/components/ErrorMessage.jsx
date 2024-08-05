import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FiltersContext } from "../store/filters-options-context";
import { useContext } from "react";

export default function NoData({ text, redirect }) { 
  const { resetParams } = useContext(FiltersContext); 

  return (
    <>
      <Alert severity="warning">
      {text}
      </Alert>
      {redirect && <Link to="/" onClick={()=> resetParams()} className="back-link"><ArrowBackIcon/> Back to Homepage</Link>}
    </>
  )
}