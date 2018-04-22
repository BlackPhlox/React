import React, { Component } from 'react';
import './Links.css';
import {ArticleRight , ArticleLeft} from '../components/Components';

class Links extends Component{
    render() {
        return(
  <div>
    <ArticleRight
            linkHeader="StudyGuide" 
            link="https://studyguide.itu.dk" 
            body="Something something something studyguide.  Where you can get all relevant infomation about events and how you can  improve as your way of studying. Public employers and the unions have failed to agree in the new collective agreement (overenskomst) negotiations. As a result, the Agency for Modernisation (Ministry of Finance) has announced a lockout of public employees. If the lockout becomes a reality, it will become effective from April 10, 2018 at the earliest. The conflict will last until the two parties reach an agreement or if the government intervenes and ends the conflict by law."/>
            
    <ArticleLeft 
            linkHeader="Kursusbasen" 
            link="https://mit.itu.dk/" 
            body="The base of all operations...I mean courses, of course. Hmmm, I should take a course in how to be good at puns, but I guess Im getting off course. After the registration deadline, Student Affairs and Programmes allocate course seats, and approximately two weeks after the registration deadline, you can see the result of the seat allocation in My Study Activities. The number of courses that you give first priority indicates the number of courses you want to register for. This means that if you are registrering for two courses, you should give both courses first priority. Your choice of second priority course will only be taken into consideration, if you are not awarded a seat in the course / one of the courses that you have given first priority. During the period for changing registrations in the beginning of the semester, you cannot prioritize registrations." />
            
    </div>
    )}
}

export default Links;