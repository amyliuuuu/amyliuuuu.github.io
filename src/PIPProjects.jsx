import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import survey from './surveyBreakdown.pdf'
import analysis from './competitor.pdf';
import domestic from './domestic.jpg';
import international from './international.jpg';
import flow1 from './flow1.mov';
import flow2 from './flow2.mov'

function PIPProjects() {
    return (
        <Box sx={{ padding: '16px' }}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Prodigi (Product Innovation Program) Case Study Key Points
            </Typography>
            <Typography variant="h7" gutterBottom>
              Case Brief
            </Typography>
            <br></br>
            <Typography variant="body2" gutterBottom>
              International university students in Australia have always faced
              challenges with their student experience, with some reporting to 
              "have difficulty connected with student communities and feeling detached."
              Due to Covid-19, these challenges have been magnified, maing it harder for 
              students studying offshore to connect. 
              <br></br>
              As the University of UNW, how can we better support our international students
              and improve their student university experience? 
            </Typography>
            <hr/>
            <Typography variant="h7" gutterBottom>
              Problem Space - Market Research on What Affects International Students
            </Typography>
            <br></br>
              <Typography variant="body2" sx={{fontWeight: 'bold'}} gutterBottom>
                Social Factors
              </Typography>
              <Typography variant="body2" gutterBottom>
                <ul>
                  <li>Culture clash between international students and domestic students</li>
                  <li>Potential language barriers</li>
                  <li>Social divide / herd mentality - domestic students stick together and international students stick together</li>
                  <li>Unfamiliarity with australian slang/ colloquialism</li>
                  <li>Political differences</li>
                  <li>Different methods of engagement between cultures (e.g. offshore students only have access to online engagement)</li>
                </ul>
              </Typography>
              <Typography variant="body2" sx={{fontWeight: 'bold'}} gutterBottom>
                Technological Factors
              </Typography>
              <Typography variant="body2" gutterBottom>
                <ul>
                  <li>Lack of communication through online platforms and the difficulty to have access to these platforms</li>
                  <li>Disadvantaged individuals may not have access to required communication technologies</li>
                  <li>Most online platforms are catered mainly to domestic students (language, opportunities, information)</li>
                </ul>
              </Typography>
              <Typography variant="body2" sx={{fontWeight: 'bold'}} gutterBottom>
                Legal Factors
              </Typography>
              <Typography variant="body2" gutterBottom>
                <ul>
                  <li>Limitations preventing international students from receiving similar opportunities as domestic students (e.g. Student Visas, work experience etc.)</li>
                </ul>
              </Typography>
              <Typography variant="body2" sx={{fontWeight: 'bold'}} gutterBottom>
                Financial Factors
              </Typography>
              <Typography variant="body2" gutterBottom>
                <ul>
                  <li>Different fees for international students and domestic students (domestic students have access to HECS)</li>
                  <li>Financial difficulties. Large going out culture in Aus requires constant flow of cash → international students unless on scholarship may struggle with that</li>
                  <li>International students may be unaware of the true cost of living in Sydney</li>
                </ul>
              </Typography>
            <hr/>
            <Typography variant="h7" gutterBottom>
              Competitor Analysis
            </Typography>
            <Typography variant="body2" gutterBottom>
              We conducted competitor anaysis on different apps and websites currently available to international students that may have means to help them
              connect with other university students. A SWOT analysis was completed for each and can be viewed by downloading the following PDF. 
            </Typography>
            <a href={analysis} download="document.pdf">Download competitor analysis PDF</a>
            <br></br>
            <hr/>
            <Typography variant="h7" gutterBottom>
              Surveys
            </Typography>
            <Typography variant="body2" gutterBottom>The following PDF consists of the data we collected from our surveys sent to domestic and international university students thorough 
            Facebook forums and personal connections. The information was used to gain a personal insight into how students feel about their university's approach to bridging the inherent
            gap between international and domestic students and early feedback on our proposed solution of a social media app designed to help connect international students to domestic
            students.
            </Typography>
            <a href={survey} download="document.pdf">Download survey analysis PDF</a>
            <br></br>
            <hr/>
            <Typography variant="h7" gutterBottom>
              User Personas
            </Typography>
            <br></br>
            <img src={domestic} style={{ maxWidth: '60%', maxHeight: '100%' }} alt="domestic-persona" />
            <br></br>
            <img src={international} style={{ maxWidth: '60%', maxHeight: '100%' }} alt="international-persona" />
            <br></br>
            <hr/>
            <Typography variant="h7" gutterBottom>
              Problem Statement 
            </Typography>
            <br></br>
            <Typography variant="body2" gutterBottom>
              Onshore International students at UNSW need to connect with other 
              international and domestic students because they need to build 
              meaningful relationships to fulfill their university 
              experience in way that is not intimidating, forced, or uncomfortable.
            </Typography>
            <hr/>
            <Typography variant="h7" gutterBottom>
              How Might We Statement
            </Typography>
            <br></br>
            <Typography variant="body2" gutterBottom>
              Given that COVID-19 has magnified the challenges of social detachment
              faced by international students at UNW, how might we, as a non-profit 
              organisation, establish an opportunity for international students to immerse 
              themselves in the local social culture without social or cultural barriers so 
              that they can fulfill their expectations of the Australian university experience.
            </Typography>
            <hr/>
            <Typography variant="h7" gutterBottom>
              Solution Space - Creating the Figma Prototype
            </Typography>
            <br></br>
            <Typography variant="body2" gutterBottom>
              After extensive research on the problem, we have decided to prototype a study app that helps 
              international students to establish connections with other students (both international and
              domestic) to help them develop social skills and gain confidence. A pain that we identified was 
              how to get domestic students on the platform as they may already have friends. Here is where we 
              asked insight from our team industry mentor - Penny Talalak (Head of UX @ Z) and Luka Kasalovic (Campus Recruitment @ Quantium).
            </Typography>
            <Typography variant="body2" gutterBottom>
              From our discussion with our mentors we decided to include features that attract all students (including domestic) this includes features such as
                <ul>
                  <li>Linked to moodle for course information</li>
                  <li>Easily accessibly chat functions</li>
                  <li>Search filters for degrees, international/domestic, year, course etc</li>
                  <li>Study calls with no chat function and do not disturb</li>
                  <li>Spotify playlists for people to join</li>
                  <li>Pages dedicated to finding societies to centralise finding society events</li>
                </ul>
              Therefore, by centralising study resources, student societies, course information and chats onto an app we are able to 
              propose a solution to help connect all students onto one platform. See below for clips of some of our Figma flows demonstrating
              the app. 
              </Typography>
              <video src={flow1} width="300" height="300" controls="controls" autoplay="true" />
              <video src={flow2} width="300" height="300" controls="controls" autoplay="true" />
            <hr/>
          </Box>
        </Box>
    );
}

export default PIPProjects;