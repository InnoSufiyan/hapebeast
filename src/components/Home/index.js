import React from 'react'
import styled from 'styled-components'
import Section1 from '../Section1'
import Section2 from '../Section2'
import Section3 from '../Section3'
import Section4 from '../Section4'
import Section5 from '../Section5'
import Section6 from '../Section6'
import Section7 from '../Section7'
import Section8 from '../Section8'
import Section9 from '../Section9'

function Home() {
    return (
        <Container>
            <Section1
                title="HAPEBEAST"
                description="8K NEXT-GENERATION, HIGH FASHION HAPES"
                paragraph="Unique, fully 3D and built to unite the ape multiverse. Designed and styled by Digimental."
                backgroundImg='1.webp'
                leftBtnTxt='Custom Order'
                rightBtnTxt='Existing Inventory'
                color="#131313"
                imagey={true}
            />
            <Section2
                description="In the beginning was the word, and the word was -"
                paragraph="A starlit ceremony, two million years ago. Lightning strikes the monolith and the universe fractures. Apes spin off in 10k tribes, distinct but familiar. Every ape is unique. Every ape is beautiful. Every ape is loved, and every ape is family, whatever their differences, wherever they are now."
                paragraph2="Meanwhile, at the heart of the shattered multiverse, the PRIMAL HAPES wait for the whole family to return. They wait and they build out their style, they work the Hapewalk, and they plan for a bigger future."
                backgroundImg='model-y.jpg'
                leftBtnTxt='Custom Order'
                rightBtnTxt='Existing Inventory'
                color="#131313"
                imagey={false}
            />
            <Section3
                backgroundImg='5.PNG'
                leftBtnTxt='Custom Order'
                rightBtnTxt='Existing Inventory'
                color="#131313"
                imagey={true}
            />
            <Section4
                paragraph="HAPEBEAST is a new art and fashion playground from London-based studio Digimental. Built around an initial drop of 8,192 unique NFTs on the Ethereum blockchain, the project unites style, technology and community, and sets up HAPES as next-generation fashion leaders."
                paragraph2="You can find out more about the HAPEBEAST team below and see the lightest hints for our post-release plans. As we move closer to launch this site will evolve; like apes at the dawn of a new world we’re making something from nothing, noise from silence. In the beginning was the word. The word was, and is, HAPE."
                backgroundImg='model-x.jpg'
                leftBtnTxt='Custom Order'
                rightBtnTxt='Existing Inventory'
                color="#131313"
                imagey={false}
            />
            <Section5
                backgroundImg='2.webp'
                color="#131313"
                imagey={true}
            />
            <Section6
                color="#FFFFFF"
                imagey={false}
            />
            <Section7
                description="PROTECT YOURSELF AND THE COMMUNITY FROM SCAMMERS. REPORT FAKE COLLECTIONS."
                paragraph="DECEMBER 2021"
                paragraph2="RELEASE DATE:"
                backgroundImg='accessories.jpg'
                leftBtnTxt='Order Now'
                color="#E62E2D"
                imagey={false}
            />
            <Section8
                backgroundImg='4.webp'
                leftBtnTxt='Order Now'
                rightBtnTxt='Learn More'
                color="#131313"
                imagey={true}
            />
            <Section9
                color="#FFFFFF"
                imagey={false}
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
    overflow-x: hidden;
`