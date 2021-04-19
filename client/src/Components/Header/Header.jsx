import React from 'react'
import { Button } from '../../Styles/Elements/Button/Button'
import { Subtitle, Title } from '../../Styles/Elements/Typography/Typography'
import { Container } from '../../Styles/Layout/Container/container'
import { HeaderNav, HeaderNavItem, HeaderSection } from './style'

export default function Header(props) {
    

    return (
        <HeaderSection>
            <Container style={{display:'flex',alignItems:'baseline',justifyContent:'space-between'}} size='lg'>
                <Title color='#A49F88'>Medi Tracker</Title>
                <HeaderNav>
                   <HeaderNavItem >Login</HeaderNavItem>
                   <HeaderNavItem >Sign Up</HeaderNavItem>
                
                </HeaderNav>
            </Container>
        </HeaderSection>
    )
}
