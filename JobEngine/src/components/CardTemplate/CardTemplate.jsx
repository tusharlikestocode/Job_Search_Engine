/* eslint-disable no-unused-vars */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Chip,Box,Button,AvatarGroup } from '@mui/material';
import './CardTemplate.css'


export default function CardTemplate() {


  return (
    <Box sx={{mt:2,display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
            <Card sx={{ mt:4,maxWidth: 345,boxShadow:3,borderRadius:5,height:'100%'}}>
            {/* Chip to display no. of days job was posted */}
            <CardContent>
                <Chip 
                label="⌛ Posted 10 days ago" 
                variant='outlined'  
                sx={{
                    borderColor:"lightgrey",
                    boxShadow:"0px 1px lightgrey",
                    borderRadius:3,
                    padding:0.1}}/>
            </CardContent>
            {/* Logo */}
            <CardContent>
            <Box sx={{
                display:'flex',
                alignItems:'center'}}>
            <Avatar 
                alt="Logo" 
                src={'https://logo.clearbit.com/dropbox.com'} 
                sx={{mr:1}}  
                />
                <Box>
            {/* Company Name */}
                    <Typography sx={{
                        color:"text.secondary",
                        fontSize:15}}>
                        Company Name
                    </Typography>
                {/* Job Role */}
                    <Typography sx={{
                        fontSize:20}}>
                        Job Role
                    </Typography>
                </Box>
            </Box>
            
            {/* Location */}
            <Typography sx={{
                ml:6,
                fontSize:14,
                fontWeight:650
                }}>
                        Location
            </Typography>

            {/* Estimated Salary  */}
            <Typography  sx={{mt:2}} >
                Estimated Salary: $ 10- 13 LPA✅
            </Typography>


            {/* Job Description */}
            <Typography 
                className="fadedtext" 
                sx={{mt:2,height:200}}
            >
                <b>  Job Description </b> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia mollitia possimus culpa rerum dolorem eos nulla nihil saepe facere. Exercitationem vero earum, at suscipit debitis perferendis ducimus? Dolores, earum asperiores.       
            </Typography>


            <Typography sx={{
                width:'100%',
                textAlign:'center',
                zIndex:999,
                mt:-0.5,
                color:"#4943da",
                
            }}
            onClick={()=>{
                console.log("Clicked");
            }}
            >
                View Job
            </Typography>




            {/* Minimum Experience */}
            <Typography sx={{
                marginBottom:1,
                marginTop:1,
                color:"text.secondary"
            }}>
                Minimun Experience:
                
                <Typography sx={{
                    color:"text.primary"
                }}>
                1 years
                </Typography>
                
            </Typography>

            {/* Easy Apply Button */}
            <Button 
            variant='contained' 
            sx={{
                width:'100%',
                backgroundColor:"#54efc3",
                mb:1,
                color:'black'}}>
                ⚡ Easy Apply              
            </Button>

            {/* Quick Referral Button  */}
            <Button 
                variant='contained' 
                sx={{
                    width:'100%',backgroundColor:"#4943da"}}>
               
               <AvatarGroup max={3} sx={{mr:1}}>
               <Avatar sizes='large' sx={{ width: 24, height: 24  }}/>
                <Avatar sizes='large' sx={{ width: 24, height: 24  }}/>
               </AvatarGroup>
                Unlock Referral asks
                </Button>
            </CardContent>
            </Card>
        </Box>
    
  );
}
