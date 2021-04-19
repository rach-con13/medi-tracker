import React from 'react'
import { Accent, Subtitle, Typography } from '../../Styles/Elements/Typography/Typography'
import { Container, Grid } from '../../Styles/Layout/Container/container'
import { AccountHeader, AccountIcon, AccountProfile, CardItem, MedicineCard } from './style'

export default function Account(props) {
    

    return (
        <Container size='lg' mg_top={20}>
            <AccountHeader>
               <AccountProfile>
                   <AccountIcon />
                   <Subtitle color='#898366'>Rachael Concessio</Subtitle>
               </AccountProfile>
            </AccountHeader>
            <Grid size='max' mg_top={10}  container>
                <Grid item  span={3} >
                   <Subtitle color='#898366' align='left'>My Medicine</Subtitle>
                    <MedicineCard>
                        <CardItem>
                          <Typography fontSize='16px' fontWeight='bold'>Trileptal</Typography>
                          <Accent pdHorizon={2}>200mg</Accent>
                        </CardItem>
                        <CardItem>
                          <Typography fontSize='16px' fontWeight='bold'>Trileptal</Typography>
                          <Accent pdHorizon={2}>200mg</Accent>
                        </CardItem>
                        <CardItem>
                          <Typography fontSize='16px' fontWeight='bold'>Trileptal</Typography>
                          <Accent pdHorizon={2}>200mg</Accent>
                        </CardItem>
                    </MedicineCard>
                </Grid>
                <Grid item span={9}  >
                   
                </Grid>
            </Grid>
        </Container>
    )
}
