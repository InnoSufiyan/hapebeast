import React from 'react'
import styled from 'styled-components'
import Section1New from '../Section1New'
import Section2New from '../Section2New'
import Section3New from '../Section3New'
import Section4New from '../Section4New'
import Section5New from '../Section5New'
import Section1 from '../Section1'
import Section2 from '../Section2'
import Section3 from '../Section3'
import Section4 from '../Section4'
import Section5 from '../Section5'
import Section6 from '../Section6'
import Section7 from '../Section7'
import Section8 from '../Section8'
import Section9 from '../Section9'
import Section10 from '../Section10'
import Section11 from '../Section11'
import AnimatedRound from '../AnimatedRound'
import Section12 from '../Section12'
import Section13 from '../Section13'
import RoadMap from '../RoadMap'

function Home() {
    return (
        <Container>
            <Section1New
                title="THE METAVERSITY"
                description="9876 Student Monkeys that attend
                Metaverse University on the Blockchain."
                paragraph=""
                backgroundImg='1.webp'
                color1="#0e336a"
                color2="#050f1b"
                color3="#020204"
                imagey={false}
            />
            <Section2New
                title="THE METAVERSITY"
                description="9876 Student Monkeys that attend
                Metaverse University on the Blockchain."
                paragraph=""
                backgroundImg='1.webp'
                color1="#0e336a"
                color2="#937a31"
                imagey={false}
            />
            <Section3New
                title="About NFT Extreme"
                description="An Interactive way to earn rewards with NFT, upgrading the house for reward bonuses and buying additional updates."
                paragraph=""
                backgroundImg='1.webp'
                color1="#0e336a"
                color2="#937a31"
                imagey={false}
            />
            <Section4New
                title="THE METAVERSITY"
                description="9876 Student Monkeys that attend
                Metaverse University on the Blockchain."
                paragraph=""
                backgroundImg='1.webp'
                color1="#0e336a"
                color2="#937a31"
                imagey={false}
                textColor='#C69320'
            />
            <Section5New
                title="Explore Now"
                description="Discover, Earn and Collect Rewards with NFTs."
                paragraph=""
                backgroundImg='1.webp'
                color1="#0e336a"
                color2="#937a31"
                imagey={false}
            />
            <Section1
                title="THE METAVERSITY"
                description="9876 Student Monkeys that attend
                Metaverse University on the Blockchain."
                paragraph=""
                backgroundImg='1.webp'
                color="#131313"
                imagey={true}
            />
            <Section7
                description="Welcome to the University of the Future."
                paragraph="The Metaversity."
                paragraph2=""
                backgroundImg='accessories.jpg'
                color="#131313"
                imagey={false}
                textColor='#C69320'
            />
            <Section2
                description="What is the Metaversity?"
                paragraph="A community of side-hustlers who want to make it big (and make a lot of money)."
                paragraph2="People who want to escape the typical 9-5. "
                paragraph3="Those who are eager to learn more about side hustles & the Metaverse."
                backgroundImg='model-y.jpg'
                color="#C69320"
                imagey={false}
                textColor='#131313'
            />
            <Section13
                description="1 in 3"
                paragraph="Americans have a side hustle."
                description2="61,000,000"
                paragraph2="Americans want to start a side hustle."
                description3="95%"
                paragraph3="Of side hustlers want to become a part of a side hustle community."
                backgroundImg='accessories.jpg'
                color="#131313"
                imagey={false}
                textColor='#C69320'
            />
            <Section13
                description="THE HUSTLES"
                paragraph="Just a few of the side-hustles we teach in our community (and more to come based on a monthly voting system)"
                backgroundImg='accessories.jpg'
                color="#FFFFFF"
                imagey={false}
                textColor='#131313'
            />
            <Section7
                description="OUR CONCEPT"
                paragraph=""
                paragraph2=""
                backgroundImg='accessories.jpg'
                color="#131313"
                imagey={false}
                textColor='#C69320'
            />
            <Section3
                backgroundImg='5.PNG'
                color="#131313"
                imagey={true}
                textColor = '#C69320'
            />
            <Section6
                color="#C69320"
                imagey={false}
                textColor='#131313'
            />
            <Section4
                description="Utility"
                paragraph="Web3 site with access to informational content (only NFT holders can login and view content)"
                paragraph2="Access to private seminars and discord groups with side hustler community"
                paragraph3="Mentorship perks"
                paragraph4="Funding towards various educational non-profits"
                paragraph5="Live-Events"
                paragraph6="Training on various topics"
                paragraph7="Networking with influencers and CEOs"
                backgroundImg='model-x.jpg'
                color="#131313"
                imagey={false}
                textColor='#C69320'
            />
            <Section5
                backgroundImg='2.webp'
                color="#131313"
                imagey={true}
            />
            <Section12
                color="#FFFFFF"
                imagey={false}
                textColor='#131313'
            />
            <Section8
                backgroundImg='4.webp'
                color="#131313"
                imagey={true}
            />
            <Section7
                description="With Defi, we are building the finance system of tomorrow. It’s more efficient, more powerful, more rewarding, and levels the playing field for everyone."
                paragraph="NFT’s are the future, and we’re here to educate the masses about it."
                paragraph2='“The work you do while you procrastinate is probably the work you should be doing for the rest of your life”'
                backgroundImg='accessories.jpg'
                color="#131313"
                imagey={false}
                textColor='#C69320'
            />
            <Section9
                color="#131313"
                imagey={false}
                textColor='#C69320'
            />
            <Section10
                color="#FFFFFF"
                imagey={false}
                textColor='#131313'
            />
            <Section11
                color="#131313"
                imagey={false}
                textColor='#C69320'
            />
            <AnimatedRound
                color="#131313"
                imagey="bg_2 copy.jpg"
                textColor='#C69320'
            />
            <RoadMap
                backgroundImg='bg.png'
                color="#131313"
                imagey={true}
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
    overflow-x: hidden;
`