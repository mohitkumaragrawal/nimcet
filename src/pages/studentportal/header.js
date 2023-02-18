import { Box, Typography } from "@mui/material";
import * as React from "react";

function createStats(name,fname,reg,result,session,branch,sem) {
  return {name,reg,fname,result,session,branch,sem};
}
const stats = [
  createStats('Piyush', 18, 24, 4.0,5,6,7,7),
];
export default function Headers()
{
return (
  <Box>
  <Typography variant="h5" component="h1"sx={{textAlign:"center",marginBottom:"50 px"}}>
  National Institute Of Technology ,Jamshedpur
</Typography>
<Typography variant="h6" component="h1"sx={{textAlign:"left",display:"inline-block",margin:"20px 600px 20px 200px"}}>
  Name: {stats.name} 
  
</Typography>
<Typography variant="h6" component="h1"sx={{textAlign:"left",display:"inline-block",margin:"20px 0px 20px 200px"}}>
Registration No: {stats.reg}
</Typography>
<Typography variant="h6" component="h1"sx={{textAlign:"left",margin:"10px 0px 20px 200px"}}>
Father's Name: {stats.fname}
</Typography>
<Typography variant="h6" component="h1"sx={{textAlign:"left",display:"inline-block",margin:"10px 0px 20px 200px"}}>
Branch: {stats.branch}
</Typography>
</Box>
)
}