import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Chip,Box,Button,AvatarGroup } from '@mui/material';
import './CardTemplate.css'
import CircularProgress from '@mui/material/CircularProgress';


export default function RecipeReviewCard() {
 const [loading,setLoading]=React.useState(true)
    const [data,setData] =React.useState([])

  
    React.useEffect(()=>{
        
        const fetchdata = async ()=>{
            let headersList = {
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Accept": "",
                "Content-Type": "application/json"
               }
               
               let bodyContent = JSON.stringify({
                 "limit": 10,
                 "offset": 100
               });
               
               let response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON?Content-Type=application%2Fjson", { 
                 method: "POST",
                 body: bodyContent,
                 headers: headersList
               });
               
               let data = await response.json();
               console.log(data.jdList);
               setData(data.jdList)               
               setLoading(false)
        }
        fetchdata()
        
      
           
    },[])

    if(loading){
        return (
            <Box sx={{
                display:'flex',
                height:"100vh",
                justifyContent:'center',
                alignItems:"center"
            }}>
                <Typography>
            Load
        </Typography>
        <CircularProgress />

            </Box>
        )
    }


  return (
    <Box sx={{mt:2,display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>

      {
        data.map((d)=>(
            
            <Card key={d} sx={{ mt:4,maxWidth: 345,boxShadow:3,borderRadius:5,height:'100%'}}>
            <CardContent>
            <Chip label="⌛ Posted 10 days ago" variant='outlined'  sx={{borderColor:"lightgrey",boxShadow:"0px 1px lightgrey",borderRadius:3,padding:0.1}}/>
            </CardContent>
            <CardContent>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <Avatar alt="Remy Sharp" src={d.logoUrl} sx={{mr:1}}  />
            <Box>
            <Typography sx={{color:"text.secondary",fontSize:15}}>
                {d.companyName}
            </Typography>
            <Typography sx={{fontSize:20}}>
                {d.jobRole.toUpperCase()}
            </Typography>
            
            </Box>
            
         
            </Box>
             <Typography sx={{ml:6,fontSize:14,fontWeight:"650"}}>
                  { d.location.toUpperCase()}
            </Typography>
            <Typography  sx={{mt:2}} >
                Estimated Salary:  {d.minJdSalary
} -{d.maxJdSalary} {d.salaryCurrencyCode}✅
            </Typography>
            <Typography className="fadedtext" sx={{mt:2,height:200}}>
                
           
                <b>  Job Description </b> <br />
{d.
jobDetailsFromCompany}        
        
        
        
            </Typography>
            <Typography sx={{
                width:'100%',
                textAlign:'center',
                zIndex:999,
                mt:-0.5,
                color:"#4943da",
                
            }}
            
            onClick={()=>{
                console.log("CLCI");
            }}
            >
                View Job
            </Typography>
            <Typography sx={{
                marginBottom:1,
                marginTop:1,
                color:"text.secondary"
            }}>
                Minimun Experience:
                
                <Typography sx={{
                    color:"text.primary"
                }}>
                {d.minExp} years
                </Typography>
                
            </Typography>
            <Button variant='contained' sx={{width:'100%',backgroundColor:"#54efc3",mb:1}}>
                <Typography color={"black"}>
                ⚡ Easy Apply
                </Typography>
              
            </Button>
            <Button variant='contained' sx={{width:'100%',backgroundColor:"#4943da"}}>
               
               <AvatarGroup max={3} sx={{mr:1}}>
               <Avatar sizes='large' sx={{ width: 24, height: 24  }}/>
                <Avatar sizes='large' sx={{ width: 24, height: 24  }}/>
               </AvatarGroup>
                <Typography >
                Unlock Referral asks
        
                </Typography>
              
            </Button>
            </CardContent>
            
        
        
            </Card>
        ))
      }

            
       
    </Box>
    
  );
}
