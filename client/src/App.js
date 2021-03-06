import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import FirstPages from "./View/Pages/FirstPages";
import QuestionsBeforeRegister from "./View/Pages/QuestionsBeforeRegister";
import CompaniesListSelect from "./View/Pages/CompaniesListSelect";
import VoteDirectors from "./View/Pages/VoteDirectors";
import InfoDirector from "./View/Pages/InfoDirector";
import UploadInformation from "./View/Pages/UploadInformation";
import SignUp from "./View/Pages/SignUp";
import AfterRegistrationVoting from "./View/Pages/AfterRegistrationVoting";
import CompaniesList from "./View/Pages/CompaniesList";
import CompanyInfo from "./View/Pages/CompanyInfo";
import VotesList from "./View/Pages/VotesList";
import VoteAccept from "./View/Pages/VoteAccept";
import CardListItem from "./View/Components/CardListItem";
import ListQuestions from "./View/Components/body/ListQuestions";
import Body from "./View/Components/body/Body";
import Header from "./View/Components/Header";
import NavBarLists from "./View/Components/NavBarLists";
import MainButton from "./View/Components/MainButton";
import SignUpRequest from "./View/Pages/SignUpRequest";
import Login from './View/Pages/Login';
//NavBarAfterLogIn
//CompanyVotingStatus
function App() {


  return (
    <div>
      {/* <nav className="navBar">
        <ul>
          <li>
            <NavLink exact to="FirstPages_1">
              Page 1
            </NavLink>
          </li>
          
          <li>
            <NavLink exact to="CompaniesListSelect">
              Page 6
            </NavLink>
          </li>
          <li>
            <NavLink exact to="VoteDirectors">
              Page 31
            </NavLink>
          </li>
          <li>
            <NavLink exact to="InfoDirector">
              Page 15-19-32
            </NavLink>
          </li>
          <li>
            <NavLink exact to="UploadInformation">
              Page 33
            </NavLink>
          </li>
          <li>
            <NavLink exact to="SignUpRequest">
              Page 11
            </NavLink>
          </li>
          <li>
            <NavLink exact to="SignUp">
              signup
            </NavLink>
          </li>
          <li>
            <NavLink exact to="AfterRegistrationVoting">
              Page 17-27
            </NavLink>
          </li>
          <li>
            <NavLink exact to="CompaniesList">
              Page 18
            </NavLink>
          </li>
          <li>
            <NavLink exact to="CompanyInfo">
              Page 21-23-24
            </NavLink>
          </li>
          <li>
            <NavLink exact to="VotesHistory">
              Page 29
            </NavLink>
          </li>
          <li>
            <NavLink exact to="VoteBending">
              Page 28
            </NavLink>
          </li>
          <li>
            <NavLink exact to="OpenVotes">
              Page NO NUMBER OPEN VOTES LIST
            </NavLink>
          </li>
          <li>
            <NavLink exact to="VoteDirectorsAfterLogin">
              Page 31
            </NavLink>
          </li>
          <li>
            <NavLink exact to="InfoDirectorAfterLogin">
              Page 15-19-32
            </NavLink>
          </li>
          <li>
            <NavLink exact to="Login">
              Page login
            </NavLink>
          </li>
        </ul>
      </nav> */}
      <Switch>
        <Route path="/TestDashBoardIbraheem">
          <Header company="?????? ??????????????" perception="18.3" />
          <MainButton
            myClass="main-button"
            text="?????????? ????????????"
            tolink="InfoDirectorAfterLogin"
          />
        </Route>
        <Route path="/TestDashBoardMosaab">
          <Body />
          <NavBarLists />
        </Route>
        

        <Route path="/FirstPages_2">
          <FirstPages />
        </Route>

        <Route path="/FirstPages_3">
          <FirstPages />
        </Route>

        <Route path="/QuestionsBeforeRegister">
          <QuestionsBeforeRegister />
        </Route>

        <Route path="/VoteAccept">
          <VoteAccept />
          <FirstPages />
        </Route>

        <Route path="/CompaniesListSelect">
          <CompaniesListSelect />
        </Route>

        <Route path="/VoteDirectors/:questionID">
          <VoteDirectors />
        </Route>

        <Route path="/InfoDirector/:id">
          <InfoDirector />
        </Route>

        <Route path="/UploadInformation">
          <UploadInformation />
        </Route>

        <Route path="/SignUpRequest">
          <SignUpRequest />
        </Route>

        <Route path="/SignUp">
          <SignUp />
        </Route>

        <Route path="/AfterRegistrationVoting">
          <AfterRegistrationVoting />
        </Route>

        <Route path="/CompaniesList">
          <CompaniesList />
        </Route>

        <Route path="/CompanyInfo">
          <CompanyInfo />
        </Route>

        <Route path="/VotesHistory">
          <VotesList title="???????????????? ????????????" fetch="/user/user-voting-history"/>
        </Route>

        <Route path="/VoteBending">
          <VotesList title="???????????? ?????????????? ????????????" fetch="/proxy/waiting-questions-by-fund"/>
        </Route>

        <Route path="/OpenVotes">
          <VotesList title="???????????? ????????????" fetch="/proxy/open-questions-in-fund" />
        </Route>

        <Route path="/VoteDirectorsAfterLogin">
          <VoteDirectors />
        </Route>

        <Route path="/InfoDirectorAfterLogin">
          <InfoDirector />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/">

          <FirstPages />

        </Route>
      </Switch>
    </div>
  );
}

export default App;
