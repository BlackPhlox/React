import React, { Component } from 'react';
import './Home.css';
import {ArticleRight , ArticleLeft} from '../components/Components';

const Courses = (
    <ul>
      <li>Data Science</li>
      <li>Global Business Infomatics</li>
      <li>Software Development</li>
      <li>Digital Innovation and Management</li>
    </ul>
);

const Image = (url) => (
    <img src={url} alt=""/>
);

class Home extends Component{
    render() {
        return(
        <div>
            <ArticleRight 
            header="What is ITU?" 
            
            after2={Image("https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Itu.jpg/1024px-Itu.jpg")}
            
            body="The IT University of Copenhagen was established in Copenhagen, Denmark in 1999. At that time, it was - in Danish - called IT-højskolen. In 2003, when a new Danish University Law was passed, the IT University was officially appointed a University, the twelfth and smallest university in Denmark, and therefore changed its name to the IT University of Copenhagen - IT-Universitetet i København in Danish. In 2004, the university moved to its own new building in Ørestad, right next to the Faculty of Humanities of the University of Copenhagen and the newly established headquarters of the Danish Broadcasting Corporation (DR). The new building was designed by Danish architect Henning Larsen."/>
            
            <ArticleLeft 
            
            header="Life at ITU" 
            
            before={Image("https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?w=940&h=650&auto=compress&cs=tinysrgb")} 
            
            body="Graphical user interface mass market termsheet user experience iteration. Conversion low hanging fruit pivot agile development holy grail success early adopters network effects user experience equity. Funding customer analytics. Business-to-business responsive web design handshake long tail return on investment monetization accelerator validation termsheet. Ecosystem startup network effects launch party. Freemium user experience return on investment branding. Startup partner network research &amp; development customer backing early adopters rockstar scrum project accelerator responsive web design investor." />
            
            <ArticleRight 
            header="What do they offer?" 
            
            after2={Image("https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?w=940&h=650&auto=compress&cs=tinysrgb")}
            
            body="The university originally only accepted students with a Bachelor's degree to its offered MSc programmes, but started its first Bachelor of Science programme in Software Development. As of 2010 the IT University offers 3 Bachelor programmes (one of which is internationally oriented and taught in English), 4 MSc study programmes (two of which are internationally oriented and are taught in English)." 
            after={Courses} />
            
            <ArticleLeft 
            header="IT? We support everyone!" 
            
            before={Image("https://images.pexels.com/photos/76752/paper-note-ipad-76752.jpeg?w=940&h=650&auto=compress&cs=tinysrgb")} 
            
            body="It's my term for my time of the month. Oh. What time of the month? The weekend? It's like they're pally-wally with us when there's a problem with their printer, but once it's fixed... They just toss us away like yesterday's jam. Hello, IT. Have you tried turning it off and on again? Nicer ambulances, faster response times and better looking drivers mean they're not just the Emergency Services, they're your Emergency Services. Hello? I've had a bit of a tumble. Might want to play a bit hard to get. Oh really? Then why don't you come down and make me then. First scene in Carrie! Oh. Okay I mean, they have no respect for us up there! No respect whatsoever! We're all just drudgeons to them!" />
            
            <ArticleRight 
            header="Book upon books upon books..." 
            
            after2={Image("https://images.pexels.com/photos/185764/pexels-photo-185764.jpeg?w=940&h=650&auto=compress&cs=tinysrgb")}
            
            body="Every year, I took a holiday. I went to Florence, this cafe on the banks of the Arno. Every fine evening, I would sit there and order a Fernet Branca. I had this fantasy, that I would look across the tables and I would see you there with a wife maybe a couple of kids. You wouldn't say anything to me, nor me to you. But we would both know that you've made it, that you were happy. I never wanted you to come back to Gotham. I always knew there was nothing here for you except pain and tragedy and I wanted something more for you than that. I still do. There is a prison in a more ancient part of the world. A pit where men are thrown to suffer and die. But sometimes a man rises from the darkness. Sometimes, the pit sends something back." />
            
            <div className="spacer01" />
    </div>
   )}
}

export default Home;