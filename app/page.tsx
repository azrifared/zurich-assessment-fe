"use client";

import { useEffect } from "react";
import Box from '@mui/material/Box';
import { styled } from "@mui/material";
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { asyncUser, getUserValue, getUserStatus } from "@/lib/features/users/userSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserValue);
  const status = useAppSelector(getUserStatus);

  useEffect(() => {
    dispatch(asyncUser(1))
  }, [])

  if (status === 'loading' || !user) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={status === 'loading'}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Container margin={2}>
      {user.data.map((value) => (
        <Card key={value.id}>
            <CardInnerBox>
              <FlexBox>
                <Box>
                  <UserAvatar
                    alt={value.first_name}
                    src={value.avatar}
                  />
                </Box>
                <Box marginLeft={2}>
                  <Typography>{value.first_name} {value.last_name}</Typography>
                </Box>
              </FlexBox>
            </CardInnerBox>
        </Card>
      ))}
      </Container>
  )
}

const Container = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}))

const Card = styled(Paper)(() => ({
  margin: '10px',
  height: '100px',
  width: '300px',
  borderLeft: '5px solid red',
  position: 'relative'
}))

const CardInnerBox = styled(Box)(() => ({
  position: 'absolute',
  top: '20%',
  left: '5%'
}))

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const UserAvatar = styled(Avatar)(() => ({
  height: '60px',
  width: '60px'
}))



